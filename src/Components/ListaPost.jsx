import React, { useEffect, useState } from "react";
import { busca } from "../api/api";
import { Link } from "react-router-dom";

const ListaPost = ({url}) => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        busca(url, setPosts)    
    }, [])

    
    return(
        <section className="posts container">
            { 
            posts.map((post)=>{
              return(  <Link className={`cartao-post cartao-post--${post.categoria}`} to="">
                    <article key={post.id}>
                        <h3 className="cartao-post__titulo">
                            {post.title}
                        </h3>
                        <p className="cartao-post__meta"> {post.metadescription}</p>
                    </article>
                </Link>
            );
            })
            }
        </section>
    );
}

export default ListaPost;