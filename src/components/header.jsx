import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div class="header1">
              <img className="doc-group" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
            alt="Docplanner Group"/>
 {this.props.list.map(el => <ul className="nav-menu">
     <li>{el.title}</li>
     </ul>)}

            </div>
        );
    }
}
 
export default Header;