import React, { useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { Context } from "../context";


export default function Auth() {
  const {
    username,
    setUsername,
    secret,
    setSecret } = useContext(Context);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios.put('https://api.chatengine.io/users/',
      { username, secret },
      { headers: { 'Private-key': "05483e86-094b-4cec-8117-33191c6c1f6c" } })
      .then((res) => router.push("/chats"));
  }

  return <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-title">
          Tea 🐸
        </div>
        <div className="input-container">
          <input
            placeholder="Username"
            className="text-input"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            className="text-input"
            value={secret}
            onChange={e => setSecret(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="submit-button"
        >
          Login / Sign Up
        </button>
      </form>
    </div>
  </div>;
}
