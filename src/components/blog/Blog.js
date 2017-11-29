import React, { Component } from 'react';
import GetPosts from './GetPosts';

class Blog extends Component {
    render() {
        return (
            <div>
                <h1>Blog Title</h1>
                < GetPosts />
            </div>
        )
    }
}

export default Blog;