import React from "react";
import blogStyles from "./Blog.module.scss";

const Blog = ({ image, alt, title, paragraph, blogtext, link }) => {
  return (
    <div className={blogStyles.Blog}>
      <div className={blogStyles.ImageContainer}>
        <img src={image} alt={alt} />
      </div>
      <div className={blogStyles.InfoContainer}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <a href={link} target="_blank" rel="noreferrer">
          {blogtext}
        </a>
      </div>
    </div>
  );
};

export default Blog;
