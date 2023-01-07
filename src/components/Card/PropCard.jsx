import React from "react";
import '../Card/styles.css'

const PropCard = ({ data }) => {
  return (
    <div className="blog-post" key={data.id}>
      <img className="cover-img" src={data.coverImage} alt="" />
      <h2 className="title">{data.title}</h2>
      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, veritatis?</p>
      <div className="card-details">
        <div className="lh-details">
          <img
            className="author-img"
            src={data.logoImage}
            alt=""
          />
          <p className="date">
            {data.details}
          </p>
        </div>
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Read post
        </a>
      </div>
    </div>
  );
};

export default PropCard;
