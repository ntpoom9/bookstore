import React from "react";
import "../css/Book.css";

export default function BookComponent({ result }) {
  return (
    <div>
      <ul className="grid">
        {result.slice(0, 30).map((post) => {
          return (
            <li>
              {/* <figure className="grid__figure"> */}
              <div className="instagram-card">
                <div className="instagram-card-header">
                  {/* <img key={post.id} src={post.user.profile_image.small} /> */}
                  <a
                    class="instagram-card-user-name"
                    href={"/" + post.isbn}
                    target="_blank"
                  >
                    {post.title}
                  </a>
                </div>

                <div className="intagram-card-image">
                  <img
                    className="image_post"
                    // key={post.id}
                    src={post.thumbnailUrl}
                  />
                </div>

                <div className="instagram-card-content">
                  <b>authors : </b>
                  <span>{post.authors}</span>
                  <br />
                  <b>isbn : </b>
                  <a href={"/" + post.isbn} target="_blank">
                    {post.isbn}
                  </a>
                  <p className="content_des">
                    <b>page : </b>
                    <span>
                      {post.pageCount.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}{" "}
                      pages
                    </span>
                    <p className="book_description">
                      {post.shortDescription === null
                        ? post.longDescription
                        : post.shortDescription}
                    </p>
                  </p>
                </div>
              </div>
              {/* </figure> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
