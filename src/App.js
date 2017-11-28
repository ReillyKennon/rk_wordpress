import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    // link to posts json data
    const posts_url = "http://localhost:8888/rk_wordpress/wp-json/wp/v2/posts"
    fetch(posts_url)
      .then(response => response.json()) // Parse json data
      .then(response => {
        this.setState({
          posts: response
        })
      })
  }

  // Need to know permalinks to all posts, selected post urls
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
      <div className="App">
        <h1>WordPress React</h1>
        {posts}
      </div>
    );
  }
}

export default App;
