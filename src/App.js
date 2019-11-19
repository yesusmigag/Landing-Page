
import React, {Component} from 'react';
import './App.css';

import LandingNav from './Landing/Landing';
import Header from './Landing/Header';
import Container from './Landing/Container';
import Colomn from './Landing/Colomn';


Container
class App  extends Component {

render (){



  return (

    
    <div className="App">    
     <LandingNav/>

       <Header /> 
       <div class="row text-center">
     <Colomn btn= "Find Out More!" cardtitle ="Card title" text ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." />
     <Colomn btn= "Find Out More!" cardtitle ="Card title" text ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." />

     <Colomn btn= "Find Out More!" cardtitle  ="Card title" text ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." />

     <Colomn btn= "Find Out More!" cardtitle ="Card title" text ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." />



     </div>
    </div>
     
  
  );

}
 
}

export default App;
