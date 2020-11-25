import React from 'react';
import axios from 'axios';

class Users extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
    console.log(res);
    this.setState({
      users: res.data, 
    });
  });
  }

  render() {
    const { users = [] } = this.state;
    return (
      <div className="App">
        <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Todos</a>
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
                <th>ID</th>
                <th align="right">Name</th>
                <th align="right">Username</th>
                <th align="right">Email</th>
                <th align="right" colSpan="5">Address</th>
                <th align="right">Phone</th>
                <th align="right">Website</th>
                <th align="right" colSpan="3">Company</th>
            </tr>
            </thead>
            <tbody>
            {users.map(todo => 
                <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.username}</td>
                <td>{todo.email}</td>
                <td>{todo.address.street}</td>
                <td>{todo.address.suite}</td>
                <td>{todo.address.city}</td>
                <td>{todo.address.zipcode}</td>
                <td>{todo.address.geo.lat}</td>
                <td>{todo.address.geo.lng}</td>
                <td>{todo.phone}</td>
                <td>{todo.website}</td>
                <td>{todo.company.name}</td>
                <td>{todo.company.catchPhrase}</td>
                <td>{todo.company.bs}</td>
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

export default Users;