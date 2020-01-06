import React, { Component } from 'react';
class Parag extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div >
                       <img class="lead__logo" src="https://www.docplanner.com/img/sygnet.png"
                srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x" alt="https://www.docplanner.com/img/sygnet.png"/>
            <h1 class="tit1"> Making the healthcare experience more human
            </h1>
<div className="parag1">
{this.props.tableau.map(el => <p>{el}</p>)}
</div>
       

        </div> );
    }
}
 
export default Parag;