import React from 'react';
import CommentBox from '../components/comment-box';

const PicturePage = () => (
  <div>
    <div className="cell">
      <article className="article article--picture">
        <div className="article--picture-author">
          Picture by <strong>@morganmccircuit</strong>
        </div>

        <div className="article--picture-img">
          <img alt="" src="assets/images/picture.jpg" />
        </div>
      </article>
    </div>

    <CommentBox apiUrl="api/pictures/comments.json" />
  </div>
)

export default PicturePage