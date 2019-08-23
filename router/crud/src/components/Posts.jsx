import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import PostsList from './PostsList';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

function Posts(props) {
  const [posts] = useFetch(process.env.REACT_APP_POSTS_URL);

  return (
    <div className='posts'>
      <div className="posts-header">
        <Link to='/new' className='uk-button uk-button-primary'>Создать пост</Link>
      </div>
      {posts && <PostsList posts={posts}/>}
    </div>
  );
}

Posts.propTypes = {};

export default Posts;