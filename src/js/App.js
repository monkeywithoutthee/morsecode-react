import React from 'react';
import '../css/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };

    this.buttonClick = this.buttonClick.bind(this);
    this.inputTyped = this.inputTyped.bind(this);
  }
  componentDidMount() {
    //console.log('hello::',this)
  //  this.generateTaskArray();
  }

  render() {
    return (
      <div className="holder">
        <div className="outPut"></div>
        <div className="inPut"><textarea onChange={this.inputTyped}  className="textInput"></textarea></div>
        <div className="switchHolder"><button className="switchInput" onClick={this.buttonClick} >Text to Morse</button></div>
      </div>
    )
  }
  buttonClick() {
    //console.log(this,'<<buttonClick::');
    var elTar = document.querySelector('.switchInput');
    var scrossover = {output:document.querySelector('.outPut').innerHTML,input:document.querySelector('.textInput').value};
    document.querySelector('.textInput').value = scrossover.output;
    document.querySelector('.outPut').innerHTML = scrossover.input;
    if(window.oMC.toMorse){window.oMC.toMorse=false;elTar.innerHTML='morse to text';}else{window.oMC.toMorse=true;elTar.innerHTML='text to morse';};
  }

  inputTyped(evt) {
  //  console.log('inputTyped::',evt);
  //  this.setState({ input: evt.target.value });
    var inputValue = evt.target.value.split("");
    var sspace = " ";
    if (!window.oMC.toMorse){inputValue = evt.target.value.split(" ");sspace="";}

    var outputString = new Promise(function(resolve,reject){
      var output = '';
    //  console.log(window.oMC.toMorse,'<<inputValue::',inputValue);
      inputValue.forEach((item, i) => {
        output += sspace + window.returnNewValue({morse:window.oMC.toMorse,item:item});
      });
      resolve(output);
      reject(false);
    });
    outputString.then((data)=>{
      //console.log(inputValue,'<<<in INPUT change!!!event::', event.target.value,data);
      document.querySelector('.outPut').innerHTML = data;
    });
  };
};
