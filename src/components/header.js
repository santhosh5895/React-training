import React, {Component} from 'react';

class Header extends Component {
    printType(event){
        console.log(event.target.value);
    }
    render(){
        return(
            <header>
                <h3 className="logo" onClick={()=>console.log("Logo clicked!")}>Header</h3>
                <input onChange={this.printType}/>
            </header>
        )
    }
};
export default Header;