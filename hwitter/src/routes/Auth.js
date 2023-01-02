import { authService } from "../fbase";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const handleOnSocialClick = async (e) => {
    const {
      target: { name },
    } = e;

    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={handleOnChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleOnChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
      <div>
        <button name="google" onClick={handleOnSocialClick}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
