import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div>
      <h1>Create Account</h1>
      <form action="http://localhost:4000/users/create/" method="POST">
      <label for="fname">First name:</label>
      <input type="text" id="firstName" name="firstName"  />
      <label for="fname">Last name:</label>
      <input type="text" id="lastName" name="lastName"  />
      <label for="fname">bio:</label>
      <input type="text" id="bio" name="bio"  />
      <label for="fname">consoles</label>
      <input type="text" id="consoles" name="consoles"  />
      <input type="submit" value="Submit" />
      </form>
      <h1>Login</h1>
      <form action="http://localhost:3001">
      <label for="fname">First name:</label>
      <input type="text" id="name" name="name" value="ryan" />
      <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
