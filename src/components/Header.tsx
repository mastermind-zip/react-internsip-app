import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/auth";
export default function Header() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  console.log(user?.username);
  return (
    <header className="header">
      <div className="wrapper">
        <Link to="/" className="headerTitle">
          Best Application
        </Link>
        {user ? (
          <button
            onClick={() => dispatch(logout())}
            className="signInBtn"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffff",
            }}
          >
            <p className="userName">{user?.username}</p>
            <span
              className="material-symbols-outlined"
              style={{ color: "#5c80bc" }}
            >
              logout
            </span>
          </button>
        ) : (
          <button onClick={() => navigateTo("/sign-in")} className="signInBtn">
            Sign in
          </button>
        )}
      </div>
    </header>
  );
}
