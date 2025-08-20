import React from "react";
import Card from "../components/cards";
import "../App.css";
import { useGetPostsQuery } from "../redux/api";

export default function Home() {
  const { data, error, isLoading } = useGetPostsQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return console.log(error);
  return (
    <>
      <div className="container">
        <main className="main">
          {data?.slice(0, 100).map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  );
}
