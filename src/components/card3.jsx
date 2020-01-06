import React, { Component } from 'react';
class card3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            
            <h1 class="tit1">Improve the lives of millions. Change yours forever
            </h1>
            <h4 >
                More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona,
                Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.
            </h4>
            <div className="images-pays1">
                         {this.props.cartes3.map(el => 

     <div>
     <img src={el.img} alt={el.img} className="image1"/>
     <h3 className="pays">{el.title}</h3>
     <h6 className="btn btn--small">{el.btn}</h6>
     </div>
    

     )}
     
     </div>

            
        </div> );
    }
}
 
export default card3;