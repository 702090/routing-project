import { useState } from "react";
import './navbar.css'

export default function Login() {
  // const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState([]);
  const [city, setCity] = useState("");
  const [number, setNumber] = useState([]);

  const NameHandler = (e) => {
    setName(e.target.value);
  };

  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const CityHandler = (e) => {
    setCity(e.target.value);
  };

  const NumberdHandler = (e) => {
    setNumber(e.target.value);
  };

  const SubmitHandler = () => {
    sessionStorage.setItem('Name', name)
    sessionStorage.setItem('Password', password)
    sessionStorage.setItem('isLoggedIn', true)
    window.location.reload();

    // navigate("/");
  };


  return (
    <div className="App">
      <h1>Login Page</h1>
      <p>
        Username:
        <input type="text" value={name} onChange={NameHandler} />
      </p>
      <p>
        
        Password:
        <input type="number" value={password} onChange={PasswordHandler} />
      </p>
      <p>
       
        City:
        <input type="text" value={city} onChange={CityHandler} />
      </p>
      <p>
        
        Number:
        <input type="number" value={number} onChange={NumberdHandler} />
      </p>
      <p>
        <button type="submit" onClick={SubmitHandler}>
          
          Submit
        </button>
        </p>
        <p>

      </p>
    </div>
  );
}
