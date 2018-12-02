import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            Title : "You are trying to search for :",
            Value : "Nothing"
        }
    }
    printType(event){
        this.setState({Value: event.target.value});
        this.props.filterNews(this.state.Value);
    }
    render(){
        return(
            <header>
                <div className="logo" onClick={()=>console.log("Logo clicked!")}>News</div>
                <input onChange={this.printType.bind(this)}/>
                <div>{this.state.Title}  {this.state.Value}</div>
            </header>
        )
    }
};
export default Header;