import React, { Component } from 'react';

class GetPosts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const posts_url = "http://localhost:8888/rk_wordpress/wp-json/wp/v2/posts"     // link to posts json data
    fetch(posts_url)
      .then(response => response.json()) // Parse json data
      .then(response => {
        this.setState({
          posts: response
        })
      })
  }

  render() {
    const posts = this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <h3>Title: {post.title.rendered}</h3>
          {post.content.rendered}
        </div>
      )
    })
    return (
      <div className="GetPosts">
        {posts}
      </div>
    );
  }
}

export default GetPosts;
