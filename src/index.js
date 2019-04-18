import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import './index.css';



class App extends React.Component{

  state = {lat:null, errorMessage:''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat:position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
      
    );
  }


 
  

  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div><h1>Error:{this.state.errorMessage}</h1></div> 
    }
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay />
    }    
  return <div className='loader'> </div>
  }

}



ReactDOM.render(<App />, document.getElementById('root'));

