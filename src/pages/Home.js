import Navbar from "../components/Navbar";
import ColorPlate from "../components/ColorPlate";
import Gradient from "../components/Gradients";
// import Shade from "../components/Shades";

// import CoName from "../img/ColorsBeauty.png";
import Slide from 'react-reveal/Slide';
import Footer from "../components/Footer";
function Home(){

   const colors = [
      {
         id: 1,
         code: "#fcba03",
         name: "",
         descriptions: ""
      },
      {
         id: 3,
         code: "#fc032d",
         name: "",
         descriptions: ""
      },
      {
         id: 4,
         code: "#31374a",
         name: "",
         descriptions: ""
      },
      {
         id: 5,
         code: "#03c8ff",
         name: "",
         descriptions: ""
      },
      {
         id: 7,
         code: "#5091a3",
         name: "",
         descriptions: ""
      },
      {
         id: 8,
         code: "#346beb",
         name: "",
         descriptions: ""
      },
   ];

   const gradients=[
      {
         id: 1,
         code: "linear-gradient(to right, #00b09b, #96c93d)",
         alternative: "-webkit-linear-gradient(to right, #00b09b, #96c93d);",
         name: "",
         descriptions: ""
      },
      {
         id: 2,
         code: "linear-gradient(to right, #cac531, #f3f9a7)",
         name: "",
         descriptions: ""
      },
      {
         id: 3,
         code: "linear-gradient(to right, #800080, #ffc0cb)",
         name: "",
         descriptions: ""
      },
      {
         id: 4,
         code: "linear-gradient(to right, #800080, #ffc0cb)",
         name: "",
         descriptions: ""
      },
      {
         id: 5,
         code: "linear-gradient(to right, #22c1c3, #fdbb2d)",
         name: "",
         descriptions: ""
      },
      {
         id: 6,
         code: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
         name: "",
         descriptions: ""
      },
   ]

   // const shades = [
   //    {
   //       codes : [
   //          {value: "#E35152", value:"#EB8484",value:"#F3B6B7",value:"#FBE9E9"}
   //       ],
   //       name: "hematite"
   //    }
   // ]
   const AllcolorsDiv = colors.map((color) =>
   <div className="col-md-4">
    <ColorPlate code={color.code} key={color.id}/>
    </div>
    );

    const AllGradientDiv = gradients.map((gradient)=>
      <div className="col-md-4">
      <Gradient code={gradient.code} key={gradient.id}/>
      </div>   
    );

   //  const AllColorShades = shades.map((shade)=>
   //   <div className="col-md-4">
   //     <Shade colors ={shade.codes} name={shade.name} ></Shade>
   //   </div>
   //  )

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
          <h1>Flat Colors</h1>

        <div className="row">
          {AllcolorsDiv}
         </div>
       
      </div>
    
       <div className="mt-5 container" id="gradients">
          <h1>Gradients</h1>
        <div className="row">
           {AllGradientDiv}
        </div>
       </div>

       <div className="mt-5 container" id="colorShades">
          {/* <h1>Colors Shades</h1> */}
        <div className="row">
           {/* {AllColorShades} */}
        </div>
       </div>
       </div>

       <div className="container">
          <h1>Latest Blogs</h1>
          <div className="latest-blog">

          </div>
       </div>

       <div className="container">
          <h1>Contact us</h1>
          <div className="contact-us">

          </div>
       </div>

     <Footer/>
     </div>
  );
}

export default Home;