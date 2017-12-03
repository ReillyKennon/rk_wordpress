import React, { Component } from 'react';
import GetPosts from './GetPosts';

class Blog extends Component {
    //This component initializes an empty array when it is created. 
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    //After component mounts it makes a GET request to Wordpress SQL database to grab the blog posts
    componentDidMount() {
        const posts_url = "http://130.211.233.186/wp-json/wp/v2/posts" // link to wp json data
        fetch(posts_url)
          .then(response => response.json()) // Parse json data
          .then(response => {
            this.setState({
              posts: response
            })
          })
      }
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