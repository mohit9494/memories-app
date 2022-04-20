import React from 'react';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';

import useStyles from './styles.js';


const Posts = () => {

    const posts = useSelector((state) => state.postReducer)
    const classes = useStyles();

    console.log(posts)

    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>

    );
}

export default Posts;