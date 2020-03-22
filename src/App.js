import React, { useEffect, useState } from "react";
import { channels } from "./shared/constants";
import logo from "./logo.svg";
import "./App.css";

const { ipcRenderer } = window;

function App() {
  const [appName, setAppName] = useState("");
  const [appVersion, setAppVersion] = useState("");

  useEffect(() => {
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      setAppName(appName);
      setAppVersion(appVersion);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {appName} - {appVersion}
        </p>
      </header>
    </div>
  );
}

export default App;
