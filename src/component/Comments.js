import React from 'react';
import axios from 'axios';

class Comments extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
    console.log(res);
    this.setState({
      comments: res.data, 
    });
  });
  }

  render() {
    const { comments = [] } = this.state;
    return (
      <div className="App">
        <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Comments</a>
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
                <th>Post ID</th>
                <th align="right">Name</th>
                <th align="right">Email</th>
                <th align="right">Body</th>
            </tr>
            </thead>
            <tbody>
            {comments.map(todo => 
                <tr key={todo.postId}>
                <td>{todo.postId}</td>
                <td align="right">{todo.id}</td>
                <td align="right">{todo.name}</td>
                <td align="right">{todo.email}</td>
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

export default Comments;