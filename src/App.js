import React, { useEffect, useState } from 'react';
import { SignProduction, SignRecognition, SpeechProduction, SpeechRecognition, setKey } from 'sign-speak-react-sdk';

function App() {
  const [speechText, setSpeechText] = useState('');
  const [signText, setSignText] = useState('');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    let urls = window.location.href.split("/")
    setKey(urls[urls.length - 1])
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sign-Speak Communication App</h1>
      </header>
      <main>
        <section className="interaction-section">
          <div className="speech-to-sign">
            <h2>Speech to Sign</h2>
            <SpeechRecognition gotResult={(recognized) => setSignText(recognized)} />
            {signText.trim() != '' ? <SignProduction modelName={"MALE"} text={signText} /> : null}
            <div className="row-container">
              <input className="input" onInput={(e) => setInputText(e.target.value)}/>
              <button className="button" onClick={() => setSignText(inputText)}>Render</button>
            </div>
          </div>
          <div className="sign-to-speech">
            <h2>Sign to Speech</h2>
            <SignRecognition gotResult={(recognized) => setSpeechText(recognized)} />
            <SpeechProduction text={speechText} />
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <p>Sign-Speak Communication Interface</p>
      </footer>
    </div>
  );
}

export default App;
