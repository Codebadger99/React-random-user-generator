import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [MaidenName, setMaidenName] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [Phone, setPhone] = useState("");
  const [Image, setImage] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        let dataUsers = data.users;
        let randnum = Math.floor(Math.random() * dataUsers.length);
        let randusers = dataUsers[randnum];
        setFirstname(randusers.firstName);
        setLastname(randusers.lastName);
        setMaidenName(randusers.maidenName);
        setAge(randusers.age);
        setGender(randusers.gender);
        setPhone(randusers.phone);
        setImage(randusers.image);
      });
  };

  const handleClick = () => {
    getUsers();
  };

  return (
    <div className="App">
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={Image}
            className="user-img"
            alt="user-img"
            style={{ backgroundImage: `url(${Image})` }}
          />
          <p className="user-title">
            {Firstname} {Lastname} {MaidenName}
          </p>
          <p className="user-age">Age: {Age}</p>
          <p className="user-gender">Gender: {Gender}</p>
          <p className="user-phone">Phone: {Phone}</p>
          <button className="btn" type="submit" onClick={handleClick}>
            New User
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
