
import React from 'react';
import './App.css';

const AWS = require('aws-sdk')

// Configure client for use with Spaces
const spacesEndpoint = new AWS.Endpoint('fra1.digitaloceanspaces.com');
const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: '4TOXS2GRTE67RW2BB73Y',
    secretAccessKey: 'DhQc2CHaxeE80C7VqOgghMa3a6fuk2fJHNZ8/0JuywA'
});

var params = {
  Bucket: "chumakovz-test-1", 
  Key: "calculator.zip"
 };

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { 
       client: ""
    };
    this.test = this.test.bind(this);
  }
  
  test = () => 
  {
    console.log("test")
    s3.getObject(params, function(err: any, data: any) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
  }

  render () 
  {
    return (
    <div className="App">
      <button onClick={this.test}>test</button>
    </div>
  );
  }
  
}