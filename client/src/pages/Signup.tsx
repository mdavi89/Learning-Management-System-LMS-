import { useState, type FormEvent, type ChangeEvent } from "react";
import "../styling/Signup.css";
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (e : ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement; 
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const { data } = await addUser({
        variables: { input: { ...formData } },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create an Account</h2>
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="signup-input"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="signup-input"
              placeholder="Choose a username"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="signup-input"
              placeholder="Create a password"
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
