import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Post({post}) {
  return (
    <Link to={`/posts/${post.id}`} className="post-link">
      <div className="post">
        <div className="post__content">
          {post.content}
        </div>
      </div>
    </Link>
  );
}

Post.propTypes = {};

export default Post;