import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts').then((response) => {
            setPosts(response.data);
        });
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>By: {post.author}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;
