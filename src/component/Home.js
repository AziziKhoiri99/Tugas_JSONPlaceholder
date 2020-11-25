import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (
            <div>
                <h4>Resources</h4>
                <h5>JSONPlaceholder comes with a set of 6 common resources:</h5>
                    <p>
                    <a href="/Posts">
                        /posts
                    </a>
                    100 posts
                    </p>
                    <p>
                    <a href="#">
                        /comments
                    </a>
                    500 comments
                    </p>                    
                    <p>
                    <a href="#">
                        /albums
                    </a>
                    100 albums
                    </p>                    
                    <p>
                    <a href="#">
                        /photos
                    </a>
                    5000 photos
                    </p>                    
                    <p>
                    <a href="#">
                        /todos
                    </a>
                    200 todos
                    </p>                    
                    <p>
                    <a href="#">
                        /users
                    </a>
                    10 users
                    </p>
                    <h5>Note: resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.</h5>
            </div>
        )
    }
}

export default Home;