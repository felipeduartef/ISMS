// import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      Login
    </button>
  );
}

function LoginPage () {
  return (

    <div className= "LoginPage">
      <h1 className = "loginPage-title">Log in to ISMS</h1>
      <form>

        <input type = "text" name= "username"></input>
        <br></br>
        <input type= "password" name= "password"/>
        <br></br>
        <br></br>

        <MyButton />

      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage /> 
      </header>
    </div>
  );
}

export default App;
