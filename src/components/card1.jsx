import React, { Component } from 'react';
class Card1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    
            <div className="bg">

 

 {this.props.cartes1.map(el => 
 <div className={el.class}>
     <h6 className="text-marg">{el.title}</h6>
     <h3 className="text-marg">{el.par}</h3>
     <img src={el.img} alt={el.img}/>
 </div>

     )}

            </div>
   
                     );
    }
}
 
export default Card1;