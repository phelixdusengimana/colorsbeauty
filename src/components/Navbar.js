import  CompName from "../img/ColorsBeauty.png";
import AccountPNG from '../img/account.png';

function Navabar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./"><img src={CompName} alt="Company name logo"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">Flat Colors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">Colors Shades</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">Gradients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">Blog</a>
                            </li>
                            <li className="nav-item ml-5">
                                <a className="nav-link" href="./">
                                    <img src={AccountPNG} alt="Loggedin user profile pic" className="Profile"/>
                                    <span className="username ml-1" href="/">Unonymous</span>
                                    </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navabar;