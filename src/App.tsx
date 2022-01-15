
import React from 'react';
import './App.css';

//var RNFetchBlob = require('rn-fetch-blob').default

// Configure client for use with Spaces

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { 
       client: ""
    };
    this.fillTable = this.fillTable.bind(this)
  }

  fillTable = () => // fills this.state.dictionary
  {
    /*const fetchDict = async () => //async function coz fetching data takes some time
    {
      let res = await fetch('https://chumakovz-test-1.fra1.digitaloceanspaces.com/test.png')
      const dict = await res.json()
      return dict
    }

    fetchDict() //fetchDict is still an async promise so i have to either resolve it or catch an error
      .then(dict => console.log(dict))
      .catch(err => console.log(err.message))
  */
    
  }

  render () 
  {
    return (
    <div className="App">
      <img/>
      <button onClick={this.fillTable}> Test </button>
    </div>
  );
  }
  
}