import React from 'react';
import CommentBox from '../components/comment-box';

const VideoPage = () => (
  <div>
    <div className="cell">
      <article className="article article--video">

        <div className="article--picture-author">
          Video by <strong>@morganmccircuit</strong>
        </div>

        <div className="article--video-img">
          <img alt="" src="assets/images/video.jpg" />
        </div>

      </article>
    </div>

    <CommentBox apiUrl="api/videos/comments.json" />
  </div>
)

export default VideoPage