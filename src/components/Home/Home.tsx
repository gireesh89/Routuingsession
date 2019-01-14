import React,{Component} from 'react'

class Home extends Component{
    render(){        
        return(
            <div>
                <h2>Home Component</h2>
                <div className="content">Welcome to React.React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</div>
            </div>
        );
    }
}

export default Home;