import React from 'react';
import './App.css';
import Header from './components/header'
import Parag from './components/parag'
import Card1 from './components/card1'
import Card2 from './components/card2'
import Card3 from './components/card3'
import Footer from './components/footer'


const liste= [{title:"About Us"},{title:"Career"},{title:"Departements"}]
const listDepartements=["Marketing","Customer Success","IT, Product, Design","Finance","HR"]
const tab= ["We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.","We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."]
const cards1=[{class:"gauche",title:"for doctors",par:"Find a doctor, book a visit and solve any health-related doubt",img:"https://www.docplanner.com/img/screen-marketplace@2x.png"},{class:"droite",title:"for patients",par:"Save time managing visits and cut no-shows by half",img:"https://www.docplanner.com/img/screen-saas@2x.png"}]
const cards2=[{cadre:"partie-droite1",title:"leader in 10 countries",par:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",img:"https://www.docplanner.com/img/flag.png"},{cadre:"partie-droite1",title:"1.5 million appointments",par:"booked last mounth",img:"https://www.docplanner.com/img/visits.png"},{cadre:"partie-droite2",title:"30 million unique patients",par:"visit us every mounth",img:"https://www.docplanner.com/img/patients.png"},{cadre:"partie-droite2",title:"2 million active doctors",par:"trust in our solutions",img:"https://www.docplanner.com/img/doctors.png"}]
const cards3=[{cadre:"images-pays1",img:"https://www.docplanner.com/images/warsaw.png",title:"Warsaw",btn:"SEE OPENING"},{cadre:"images-pays1",img:"https://www.docplanner.com/images/barcelona.png",title:"Barcelona",btn:"SEE OPENING"},{cadre:"images-pays1",img:"https://www.docplanner.com/images/istanbul.png",title:"Istanbul",btn:"SEE OPENING"},{cadre:"images-pays2",img:"https://www.docplanner.com/images/rome.png",title:"Rome",btn:"SEE OPENING"},{cadre:"images-pays2",img:"https://www.docplanner.com/images/mexico-city.png",title:"Mexico City",btn:"SEE OPENING"},{cadre:"images-pays2",img:"https://www.docplanner.com/images/curitiba.png",title:"Curitiba",btn:"SEE OPENING"}]
const App = () => {
  return ( 
  <div>
    <Header list ={liste}/>
    <Parag tableau ={tab} />
  <Card1 cartes1={cards1}/>
  
  <Card2 cartes2={cards2}/>
  <Card3 cartes3={cards3}/>
  <Footer/>
  
  </div> );
}
 
export default App;