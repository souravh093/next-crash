import React from "react";
import fetchPost from "../lib/postApi";
import Link from "next/link";

const Post = async () => {
  const data = await fetchPost();
  return (
    <div>
      <h1 className="text-2xl font-blod text-blue-500 py-5">
        This is my Post Data
      </h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
