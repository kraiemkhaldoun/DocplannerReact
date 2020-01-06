import React, { Component } from 'react';
class card2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="bgsection2">
            <div className="partie-gauche">
            <h1 class="tit1"> The world's
        biggest healthcare platform
    </h1>
    <h6>
        We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20
        countries.
    </h6>
    <img class="grand-logo" src="https://www.docplanner.com/img/logo.png" alt="card2image"/>
            </div>
            <div className="partie-droite">
             {this.props.cartes2.map(el => 
             
                  <div className={el.cadre}>
     <div className="cadre-blanc">
         
         <img src={el.img} alt={el.img}/>
     <h3 className="tit1">{el.title}</h3>
     <h6>{el.par}</h6>

         




             </div>

 
     
 </div>

     )}

</div>
        </div>  );
    }
}
 
export default card2;