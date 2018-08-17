import React, {Component} from 'react';

// import axios from 'axios';
import axios from '../../axios';
import Post from '../../components/Posts/Post';
import FullPost from '../../components/Posts/FullPost';
import NewPost from '../../components/Posts/NewPost';
import './Blog.css';

// const POSTS_PATH = 'https://jsonplaceholder.typicode.com/posts/';

class Blog extends Component {
  state = {
    posts         : [],
    selectedPostId: null,
    error         : false,
  };
  
  componentDidMount () {
    axios.get('posts/')
         .then(response => {
           const posts = response.data.slice(0, 4);
           const updatedPosts = posts.map(post => {
             return {...post, author: "Max"};
           });
           this.setState({posts: updatedPosts});
           //console.log(response.data);
         })
         .catch(error => {this.setState({error: true});})
    ;
  }
  
  selectPost = (id) => {
    this.setState({selectedPostId: id});
  };
  
  render () {
    let posts = <p style={{textAlign: 'center'}}>Error!!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post key={post.id}
                     title={post.title}
                     author={post.author}
                     clicked={() => this.selectPost(post.id)} />;
      });
    }
    return (
      
      <div>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
      ;
  }
}

export default Blog;
