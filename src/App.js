import React from "react";

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    PageWaits().then(() => this.setState({ loading: false }));
  }
  
  render() {
    const { loading } = this.state;
    
    if(loading) { 
      return null; 
    }
    
    return (
      <div>I'm the app</div>
    ); 

  }
}

function PageWaits() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}


export default App;