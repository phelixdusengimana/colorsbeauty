import  {BiWindowOpen} from "react-icons/bi";
import {FiCopy} from "react-icons/fi";

function ColorPlate() {
    return (
            <div className="card" style={{color: "#f5f6fa", width: "18rem", height: "12em", margin: "10px 0", padding: "10px", position: "relative", backgroundColor: "#0061bd", cursor:"pointer"}}>
                <div className="card-body">
                   <small className="card-subtitle mb-2">Color name:  </small>
                    <h5 className="card-title">#346beb</h5>
                    <div className="bottomed" style={{position:"absolute",bottom:"10px"}}>
                    <button className="card-link"><FiCopy/></button>
                    <button className="card-link"><BiWindowOpen/></button>
                    </div>
                </div>
            </div>
    );
}

export default ColorPlate;