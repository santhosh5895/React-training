import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/newsList'
import JSON from './db.json';

class App extends Component{
    constructor(probs){
        super(probs);
        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keyword){
        console.log(keyword);
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1;
        });
        
        this.setState({filtered});
    }

    render(){
        return(
            <div>
                <Header filterNews={(keyword)=>this.filterNews(keyword)}/>
                <NewsList news={this.state.filtered}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"))
