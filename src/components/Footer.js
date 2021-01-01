import CoName from "../img/ColorsBeauty.png";
import {FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";

function Footer(){
    return(
       <div className="container pt-5 px-4 pb-0">
          <footer className="pb-1">
            <div className="row">
               <div className="col-md-3">
                <img src={CoName}/>
               </div>
               <div className="col-md-3 mt-2">
                 <a href="/">About us</a><br/>
                 <a href="/">Contact us</a><br/>
                 <a href="/">Terms and privacy</a>
               </div>
               <div className="col-md-3 mt-2">
                 <a href="#flatColors">Flat Colors</a><br/>
                 <a href="/">Gradient</a><br/>
                 <a href="/">Color Picker</a>
               </div>
               <div className="col-md-3 mt-2">
                  <a target="__blank" href="https://www.facebook.com/phelix.dusengimana"><FaFacebook className="icons"/></a>
                  <a target="__blank" href="https://twitter.com/phelix__dusenge"><FaTwitter className="ml-2 icons"/></a>
                  <a target="__blank" href="https://www.instagram.com/phelix.dusengimana/"><FaInstagram className="ml-2 icons"/></a>
               </div>
            </div>
            <p className="text-center mt-4">Powered by: <i><a target="__blank" href="https://phelixdusengimana.netlify.app/">Felix Dusengimana</a></i></p>
          </footer>
       </div>
    );
}

export default Footer;