import React from 'react';
import axios from 'axios';

class Posts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
    console.log(res);
    this.setState({
      posts: res.data, 
    });
  });
  }

  render() {
    const { posts = [] } = this.state;
    return (
      <div className="App">
        <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Posts</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
          </ul>
        </div>
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab"><a href="/Posts">Posts</a></li>
            <li class="tab"><a href="/Comments">Comments</a></li>
            <li class="tab"><a href="/Albums">Albums</a></li>
            <li class="tab"><a href="/Photos">Photos</a></li>
            <li class="tab"><a href="/Todos">Todos</a></li>
            <li class="tab"><a href="/Users">Users</a></li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="/">Home</a></li> 
      </ul>
        <header className="App-header">
        <table border="1">
            <thead>
            <tr>
                <th>User ID</th>
                <th align="right">ID</th>
                <th align="right">Title</th>
                <th align="right">Body</th>
            </tr>
            </thead>
            <tbody>
            {posts.map(todo => 
                <tr key={todo.name}>
                <td>{todo.name}</td>
                <td align="right">{todo.userId}</td>
                <td align="right">{todo.title}</td>
                <td align="right">{todo.body}</td>
                </tr>
            )}
            </tbody>
        </table>
          <br/><br/><br/>
        </header>
      </div>
    );
  }
}

export default Posts;