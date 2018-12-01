import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            Title : "This is the title:",
            Value : "default"
        }
    }
    printType(event){
        this.setState({Value: event.target.value});
    }
    render(){
        return(
            <header>
                <h3 className="logo" onClick={()=>console.log("Logo clicked!")}>Header</h3>
                <input onChange={this.printType.bind(this)}/>
                <div>{this.state.Title}  {this.state.Value}</div>
            </header>
        )
    }
};
export default Header;