import Navbar from "../components/Navbar";
import ColorPlate from "../components/ColorPlate";
import CoName from "../img/ColorsBeauty.png";
import Slide from 'react-reveal/Slide';

function Home(){
  return(
     <div className="Home-container">
        <Navbar/>

        <div className="home-bg">
           <div className="Slogan">
                <img src={CoName} alt="Company name"/>
                <p>Color is the aspect of things that is caused by differing qualities of light being reflected or emitted by them. To see color, you have to have light. 
                   When light shines on an object some colors bounce off the object and others are absorbed by it.</p>
               <button className="Button mt-4 py-2 px-5 border-0">Get Started </button>
           </div>   
        </div>
        
        <div className="mt-5 container" id="flatColors">
        <Slide bottom>
          <h1>Flat Colors</h1>
        </Slide>
        <ColorPlate code="#346beb"/>
        <ColorPlate code="#fcba03"/>
        <ColorPlate code="#fcba03"/>
        <ColorPlate code="#fc032d"/>
        <ColorPlate code="#31374a"/>
        <ColorPlate code="#03c8ff"/>
        <ColorPlate code="#31374a"/>
        <ColorPlate code="#5091a3"/>
        
        </div>
        
       <div className="mt-5 container">
       <h3>Gradients</h3>
        <ColorPlate code="#346beb"/>
        <ColorPlate code="#fcba03"/>
        <ColorPlate code="#fcba03"/>
        <ColorPlate code="#fc032d"/>
        <ColorPlate code="#31374a"/>
        <ColorPlate code="#03c8ff"/>
        <ColorPlate code="#31374a"/>
        <ColorPlate code="#5091a3"/>
       </div>
       
     </div>
  );
}

export default Home;