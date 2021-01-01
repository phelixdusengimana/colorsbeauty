import  {BiWindowOpen} from "react-icons/bi";
import {FiCopy} from "react-icons/fi";
import Slide from 'react-reveal/Slide';

function ColorPlate(props) {

    return (
        <Slide bottom>
            <div className="card ml-3 border-0 shadow" style={{color: "#f5f6fa", width: "15rem", height: "12em", margin: "10px 0", padding: "10px", position: "relative", backgroundColor: props.code,display:"inline-block"}}>
                <div className="card-body">
                   <small className="card-subtitle mb-2"><i>Color code </i></small>
                    <h5 className="card-title">{props.code}</h5>
                    <div className="bottomed" style={{position:"absolute",bottom:"10px"}}>
                    <button className="card-link"><FiCopy/></button>
                    <button className="card-link"><BiWindowOpen/></button>
                    </div>
                </div>
            </div>
            </Slide>
    );
}

export default ColorPlate;