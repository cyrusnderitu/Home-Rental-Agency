import React from "react";
import '../Card/styles.css'

const PropCard = ({ data }) => {
  return (
    <div className="blog-post shadow-lg rounded-lg" key={data.id}>
      <img className="cover-img skeleton skeleton_img rounded-t-lg" src={`${data.coverImage} ? ${data?.coverImage}: 'https://www.shutterstock.com/image-vector/motion-designer-working-on-computer-260nw-2135985137.jpg'`} alt="cover-image" />
      <div className="post_content px-8">
        <h2 className="title skeleton_text font-bold font-inter text-xl mt-4 mb-2">{data.title}</h2>
        <p className="description skeleton_text skeleton_text_body mb-8">Lorem ipsum dolor sit amet consectetur?</p>
        <div className="card-details">
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <img
                className="author-img skeleton w-[30px] h-[30px] rounded-[50%]"
                src={data.logoImage}
                alt=""
              />
              <p className={`date ${data.date ? '': 'skeleton skeleton_text'}`}>
                {data.date}
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
      </div>
    </div>
  );
};

export default PropCard;
