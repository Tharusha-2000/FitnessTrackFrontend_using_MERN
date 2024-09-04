import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const blogLink = "https://wod.guru/blog/fitness-blogs/"; // Specify the link URL here

    return (
        <div>
            <h1>Welcome to the Blogs component!</h1>
            <p>This is a simple example of a React component.</p>
            <Link to={blogLink}>Go to Blog</Link>
        </div>
    );
};

export default Blogs;
