import Navbar from "../components/Navbar";
import CoName from "../img/ColorsBeauty.png";
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
        
        
     </div>
  );
}

export default Home;