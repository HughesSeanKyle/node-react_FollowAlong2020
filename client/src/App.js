import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/auth/google" //1
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign in with Google
        </a>
      </header>
    </div>
  );
}

export default App;

 
/*
//1
Relative link (/auth/google). For example, If you are in https://localhost:5000 that link will be appended onto local host. 
Similarly, if heroku link is used the relative path will be appended to it. 
*/
