import { useState } from 'react';
import { RegisterContainer, RegisterForm } from '../styles/auth/Register';
import axiosInstance from '../config/axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    axiosInstance.post("/auth/register", { name, email, password })
    .then(res => {
      navigate("/login");
    })
    .catch(e => console.error(e))
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default RegisterPage;
