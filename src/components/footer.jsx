import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div className="footerStyle">
                    <p>We are leaders in 10 countries:
            <a href="//www.znanylekarz.pl">Poland</a>, <a href="//www.doktortakvimi.com" >Turkey</a>,
            <a href="//www.doctoralia.es">Spain</a>,
            <a href="//www.miodottore.it">Italy</a>,
            <a href="//www.znamylekar.cz">Czech Republic</a>,
            <a href="//www.doctoralia.com.mx">Mexico</a>,
            <a href="//www.doctoralia.co">Colombia</a>,
            <a href="http://www.doctoralia.com.br">Brazil</a>,
            <a href="http://www.doctoraliar.com">Argentina</a>
            and
            <a href="http://www.doctoralia.cl">Chile</a>
        </p>
        <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the
            conditions for storing or accessing cookies on your browser.</p>

        www.docplanner.com © 2019

        </div>);
    }
}
 
export default Footer;