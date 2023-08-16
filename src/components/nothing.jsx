import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    dob: "",
    location: "",
    schoolName: "",
    class: "",
  });

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    age,
    dob,
    location,
    schoolName,
    class: grade,
  } = user;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="firstName"
        type="text"
        value={firstName}
        placeholder="Firstname"
      />
      <input
        onChange={handleChange}
        name="lastName"
        value={lastName}
        type="text"
        placeholder="Lastname"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="email"
        name="email"
        value={email}
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="password"
        name="password"
        value={password}
      />
      <input
        onChange={handleChange}
        name="confirmPassword"
        value={confirmPassword}
        type="text"
        placeholder="Confirmpassword"
      />
      <input
        onChange={handleChange}
        name="age"
        value={age}
        type="text"
        placeholder="Age"
      />
      <input
        onChange={handleChange}
        name="dob"
        value={dob}
        type="text"
        placeholder="DateOfBirth"
      />
      <input
        onChange={handleChange}
        name="location"
        value={location}
        type="text"
        placeholder="Location"
      />
      <input
        onChange={handleChange}
        name="schoolName"
        value={schoolName}
        type="text"
        placeholder="Schoolname"
      />
      <input
        onChange={handleChange}
        name="grade"
        type="text"
        placeholder="Class"
        value={grade}
      />

      <button>click me</button>
    </form>
  );
};

export default App;
