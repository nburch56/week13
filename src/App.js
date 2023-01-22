import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Request Info</a>
            </li>
          </ul>
        </div>
      </nav><br></br>
      <h3 className="p-solid">Log In</h3>
      <form>
        <div className="form-group">
          <input type="username" className="form-control" id="exampleUsername" aria-describedby="usernameHelp" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="examplePassword" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;