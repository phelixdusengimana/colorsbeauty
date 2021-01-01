import  {BiWindowOpen} from "react-icons/bi";
import {FiCopy} from "react-icons/fi";

function ColorPlate() {
    return (
            <div className="card" style={{width: "18rem", height: "12em", margin: "10px 0", padding: "10px", position: "relative"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                   
                    <div className="bottomed" style={{position:"absolute",bottom:"10px"}}>
                    <a href="javascript:void(0)" className="card-link"><FiCopy/></a>
                    <a href="javascript:void(0)" className="card-link"><BiWindowOpen/></a>
                    </div>
                </div>
            </div>
    );
}

export default ColorPlate;