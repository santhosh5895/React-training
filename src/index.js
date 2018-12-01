import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/newsList'
import JSON from './db.json';

class App extends Component{
    constructor(probs){
        super(probs);
        this.state={
            news:JSON
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"))
