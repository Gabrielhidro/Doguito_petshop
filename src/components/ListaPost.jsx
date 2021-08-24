import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { busca } from "../api/api";

export default function ListaPost({ url }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    busca(url, setPosts);
  }, []);


  return (
    <section className="posts container">
      {posts.map((post) => {
        return (
          <Link to={`/posts/${post.id}`} className={`cartao-post cartao-post--${post.categoria}`}>
            <article key={post.id}>
              <h3 className="cartao-post__titulo">
                {post.title}
                <p className="cartao-post__meta">{post.metadescription}</p>
              </h3>
            </article>
          </Link>
        );
      })}
    </section>
  );
}
