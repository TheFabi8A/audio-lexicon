import { useContext, useRef, useState } from "react";
import { DictionaryContext } from "../../context/DictionaryProvider";
import styled from "styled-components";
import { PlayIcon } from "../icons";

const MainContainer = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: 11.25rem 1rem 1rem;
  color: ${({ theme }) => theme.textColor};
  transition: color 250ms ease-in-out;
`;

const CardError = styled.div`
  width: 100%;
  border: red solid 2px;
  border-radius: 0.5rem;
  background-color: #ff00001c;
  padding: 1rem 1rem 0.5rem;
  animation: shake 400ms ease-in-out;

  & h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    letter-spacing: 0.1rem;
  }

  & p {
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-0.5rem);
    }
    50% {
      transform: translateX(0.5rem);
    }
    75% {
      transform: translateX(-0.5rem);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;

  & h1 {
    align-items: center;
    font-size: clamp(40px, 8vw, 80px);
    text-transform: capitalize;
    line-height: normal;
    letter-spacing: 0.1rem;
  }

  & em {
    font-size: clamp(20px, 4vw, 40px);
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const FooterSection = styled.footer`
  & h3 {
    display: inline-block;
    margin-right: 0.5rem;
  }
`;

const HeaderArticle = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  & h2 {
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 2.5rem 0 2.5rem;
  }
`;

const MeaningsList = styled.ul`
  padding-top: 1rem;
  padding-inline-start: 40px;

  & li {
    padding-left: 12px;
    margin-bottom: 1rem;
  }

  & li::marker {
    color: ${({ theme }) => theme.primaryColor};
  }

  & li:last-child {
    margin-bottom: 0;
  }
`;

const FooterArticle = styled.footer`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h3 {
    margin-right: 1rem;
    display: inline-block;
  }
`;

const ThesaurusList = styled.ul`
  padding: 0;
  list-style: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const Divider = styled.hr`
  margin: 1rem 0;
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  transition: border 250ms ease-in-out;
  width: 100%;
`;

export default function Main() {
  const { dataWord, selectedFont } = useContext(DictionaryContext);

  let word = "";
  let phonetic = "";
  let audioUrl = "";

  if (dataWord && dataWord.length > 0) {
    word = dataWord[0].word;
    phonetic = dataWord[0].phonetic;
    const phonetics = dataWord[0].phonetics;
    for (let i = 0; i < phonetics.length; i++) {
      if (phonetics[i].audio !== "") {
        audioUrl = phonetics[i].audio;
        break;
      }
    }
  }

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleTextToSpeech = () => {
    setIsPlaying(true);
    if (isPlaying) {
      return;
    }

    if (audioUrl.length > 0) {
      audioRef.current.src = audioUrl;
      audioRef.current.play();
    } else {
      let utterance = new SpeechSynthesisUtterance(dataWord[0].word);
      utterance.onend = () => {
        setIsPlaying(false);
      };
      speechSynthesis.speak(utterance);
    }

    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
    });
  };

  return (
    <>
      {dataWord.length > 0 && (
        <MainContainer style={{ fontFamily: `var(${selectedFont})` }}>
          <audio ref={audioRef} />
          <section>
            <HeaderSection>
              <div>
                <h1>{word}</h1>
                <em
                  style={{
                    fontFamily: `${
                      selectedFont === "--font-family-lora"
                        ? `var(${selectedFont}-bold-italic)`
                        : ""
                    }`,
                  }}>
                  {phonetic}
                </em>
              </div>
              <PlayButton onClick={handleTextToSpeech}>
                <PlayIcon style={{ width: "100%", height: "100%" }} />
              </PlayButton>
            </HeaderSection>
            {dataWord[0].meanings.map((meaning, index) => (
              <>
                <article key={index}>
                  <HeaderArticle>
                    <h2
                      style={{
                        fontFamily: `${
                          selectedFont ? `var(${selectedFont}-bold)` : ""
                        }`,
                      }}>
                      {meaning.partOfSpeech}
                    </h2>
                    <Divider />
                  </HeaderArticle>
                  <h3>Meaning</h3>
                  <MeaningsList>
                    {meaning.definitions.map((definition, index) => (
                      <li key={index}>{definition.definition}</li>
                    ))}
                  </MeaningsList>
                  {meaning.synonyms.length > 0 ||
                  meaning.antonyms.length > 0 ? (
                    <FooterArticle>
                      {meaning.synonyms.length > 0 && (
                        <>
                          <div>
                            <h3>Synonyms</h3>
                            <ThesaurusList>
                              {meaning.synonyms.map((synonym, index) => (
                                <li key={index}>
                                  <a
                                    href={`https://en.wiktionary.org/wiki/${synonym}`}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {synonym}
                                  </a>
                                </li>
                              ))}
                            </ThesaurusList>
                          </div>
                        </>
                      )}
                      {meaning.antonyms.length > 0 && (
                        <>
                          <div>
                            <h3>Antonyms</h3>
                            <ThesaurusList>
                              {meaning.antonyms.map((antonym, index) => (
                                <li key={index}>
                                  <a
                                    href={`https://en.wiktionary.org/wiki/${antonym}`}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {antonym}
                                  </a>
                                </li>
                              ))}
                            </ThesaurusList>
                          </div>
                        </>
                      )}
                    </FooterArticle>
                  ) : null}
                </article>
              </>
            ))}
            <Divider />
            <FooterSection>
              <h3>Source :</h3>
              <a
                href={dataWord[0].sourceUrls}
                target="_blank"
                rel="noopener noreferrer">
                {dataWord[0].sourceUrls}
              </a>
            </FooterSection>
          </section>
        </MainContainer>
      )}
      {dataWord.message && (
        <MainContainer style={{ fontFamily: `var(${selectedFont})` }}>
          <CardError>
            <h1>{dataWord.title}</h1>
            <p>{dataWord.message}</p>
            <p>{dataWord.resolution}</p>
          </CardError>
        </MainContainer>
      )}
    </>
  );
}
