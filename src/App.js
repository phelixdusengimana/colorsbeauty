import Loader from 'react-loader-spinner';
import "./styles/App.css";

function App() {
  return (
    <div className="App">

     <div className="loader-centered">
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
    </div>

    </div>
  );
}

export default App;
