import React from "react";

import "../Post/Post.css";
import userAvatart from "../../../../../assets/images/user.png";

// import LikeIcon from "../../../../../assets/icons/like.svg";
// import DisikeIcon from "../../../../../assets/icons/dislike.svg";
import LikeIcon from "../../../../../assets/icons/LikeIcon";
import DislikeIcon from "../../../../../assets/icons/DislikeIcon";

const Post = () => {
  return (
    <>
      <div className="post">
        <div className="post-header">
          <div className="post-header__user">
            <div className="post-header__user-info">
              <img
                src={userAvatart}
                alt="user-avatar"
                className="post-header__user-avatar"
              />
              <h3 className="post-header__user-name">Иванов Иван</h3>
            </div>
            <div className="post-header__date">
              <span>ВТ</span> 06.09.2022
            </div>
          </div>
        </div>
        <div className="post-content">
          <p className="post-content__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            aspernatur incidunt exercitationem saepe. Quasi voluptatem vero
            optio in fuga consequuntur, culpa ab non fugiat dicta. Tempora a
            cumque obcaecati est.
          </p>
        </div>
        <div className="post-footer">
          <div className="post-footer__buttons">
            <button className="post-footer-like__btn">
              <LikeIcon />
            </button>
            <button className="post-footer-dislike__btn">
              <DislikeIcon />
            </button>
          </div>
          <div className="post-footer__comments">Комментарии</div>
        </div>
      </div>
    </>
  );
};

export default Post;
