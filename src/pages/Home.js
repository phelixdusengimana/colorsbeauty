import Navbar from "../components/Navbar";
import ColorPlate from "../components/ColorPlate";
import Gradient from "../components/Gradients";
// import CoName from "../img/ColorsBeauty.png";
import Slide from 'react-reveal/Slide';
import Footer from "../components/Footer";
function Home(){
   const colors = [
      {
         code: "#fcba03",
         name: "",
         descriptions: ""
      },
      {
         code: "#fcba03",
         name: "",
         descriptions: ""
      },
      {
         code: "#fc032d",
         name: "",
         descriptions: ""
      },
      {
         code: "#31374a",
         name: "",
         descriptions: ""
      },
      {
         code: "#03c8ff",
         name: "",
         descriptions: ""
      },
      {
         code: "#31374a",
         name: "",
         descriptions: ""
      },
      {
         code: "#5091a3",
         name: "",
         descriptions: ""
      },
      {
         code: "#346beb",
         name: "",
         descriptions: ""
      },
   ];

   const gradients=[
      {
         code: "linear-gradient(to right, #00b09b, #96c93d)",
         alternative: "-webkit-linear-gradient(to right, #00b09b, #96c93d);",
         name: "",
         descriptions: ""
      },
      {
         code: "linear-gradient(to right, #cac531, #f3f9a7)",
         name: "",
         descriptions: ""
      },
      {
         code: "linear-gradient(to right, #800080, #ffc0cb)",
         name: "",
         descriptions: ""
      },
      {
         code: "linear-gradient(to right, #800080, #ffc0cb)",
         name: "",
         descriptions: ""
      },
      {
         code: "linear-gradient(to right, #22c1c3, #fdbb2d)",
         name: "",
         descriptions: ""
      },
      {
         code: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
         name: "",
         descriptions: ""
      },
   ]

   const shades = [
      
   ]
   const AllcolorsDiv = colors.map((color) =>
   <div className="col-md-4">
    <ColorPlate code={color.code}/>
    </div>
    );

    const AllGradientDiv = gradients.map((gradient)=>
      <div className="col-md-4">
      <Gradient code={gradient.code}/>
      </div>   
    );

  return(
     <div className="Home-container">
        <Navbar/>

        <div className="home-bg">
           <div className="Slogan">
                {/* <img src={CoName} alt="Company name"/> */}
                <p>Color is the aspect of things that is caused by differing qualities of light being reflected or emitted by them. To see color, you have to have light. 
                   When light shines on an object some colors bounce off the object and others are absorbed by it.</p>
               <button className="Button mt-4 py-2 px-5 border-0">Get Started </button>
           </div>   
        </div>
        <div className="bg">
        <div className="mt-5 container" id="flatColors">
        <Slide bottom>
          <h1>Flat Colors</h1>
        </Slide>

        <div className="row">
          {AllcolorsDiv}
         </div>
       
      </div>
    
       <div className="mt-5 container" id="gradients">
       <Slide bottom>
          <h1>Gradients</h1>
        </Slide>
        <div className="row">
           {AllGradientDiv}
        </div>
       </div>

       <div className="mt-5 container" id="colorShades">
       <Slide bottom>
          <h1>Colors Shades</h1>
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
       </div>
       <div className="container">

       
       </div>
     <Footer/>
     </div>
  );
}

export default Home;