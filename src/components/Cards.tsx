import React from "react";
import "../App.css";
import { Post } from "../redux/api";

interface CardProps {
  post: Post;
}

export default function Card({ post }: CardProps) {
  return (
    <div className="cardContainer">
      <img
        src="../src/image.png"
        className="cardImg"
        alt="card image about ..."
      />
      <h1 className="cardTitle">{post.title}</h1>
      <p className="cardDescription">{post.body}</p>
    </div>
  );
}
