import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { loginUser } from "../redux/auth";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const { user, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(username) as any).then((res: any) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigateTo("/");
      } else {
        alert("No user founded. Try another username");
      }
    });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="sign-in-form">
        <h1 style={{ textAlign: "center" }}>Hi there!</h1>
        <input
          name="username"
          type="text"
          className="user-name-input"
          placeholder="Fill out your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="btn-submit">
          {loading ? "Logging in" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
