import React, { Component } from 'react';
import './App.css';
import  axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageurl : []
    }
  }
  componentWillMount(){
    this.getgifs();
  }
  getgifs(){
    var imgclone = [];
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC').then((response) => {
      response.data.data.map((obj,index) => {
        imgclone.push(obj.images.fixed_height.url);
        });
        this.setState({ imageurl : imgclone});
    });
  }
  render() {
    var gg = this.state.imageurl.map((obj) => {
      return(
        <div className="imagegrid">
        <img src={obj} ></img>
        </div>
      );
    });
    return (
      <div>
      <h1 className="header"> Giphy Trending</h1>
      <div className="App">
          {gg}
      </div>
      </div>
    );
  }
}


export default App;
