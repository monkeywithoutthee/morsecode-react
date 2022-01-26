const dataset = [
{char:"0",res: "-----"}
,{char:"1",res: ".----"}
,{char:"2",res: "..---"}
,{char:"3",res: "...--"}
,{char:"4",res: "....-"}
,{char:"5",res: "....."}
,{char:"6",res: "-...."}
,{char:"7",res: "--..."}
,{char:"8",res: "---.."}
,{char:"9",res: "----."}
,{char:"a",res: ".-"}
,{char:"b",res: "-..."}
,{char:"c",res: "-.-."}
,{char:"d",res: "-.."}
,{char:"e",res: "."}
,{char:"f",res: "..-."}
,{char:"g",res: "--."}
,{char:"h",res: "...."}
,{char:"i",res: ".."}
,{char:"j",res: ".---"}
,{char:"k",res: "-.-"}
,{char:"l",res: ".-.."}
,{char:"m",res: "--"}
,{char:"n",res: "-."}
,{char:"o",res: "---"}
,{char:"p",res: ".--."}
,{char:"q",res: "--.-"}
,{char:"r",res: ".-."}
,{char:"s",res: "..."}
,{char:"t",res: "-"}
,{char:"u",res: "..-"}
,{char:"v",res: "...-"}
,{char:"w",res: ".--"}
,{char:"x",res: "-..-"}
,{char:"y",res: "-.--"}
,{char:"z",res: "--.."}
,{char:".",res: ".-.-.-"}
,{char:",",res: "--..--"}
,{char:"?",res: "..--.."}
,{char:"!",res: "-.-.--"}
,{char:"-",res: "-....-"}
,{char:"/",res: "-..-."}
,{char:"@",res: ".--.-."}
,{char:"(",res: "-.--."}
,{char:")",res: "-.--.-"}
,{char:" ",res: "/"}
];
window.oMC = {toMorse:true};
//console.log('in it::',dataset);
window.returnNewValue = ((data)=>{
  var returnValue = '';
  //console.log('returnNewValue::',data);
  for (var i = 0; i < dataset.length; i++) {
    if (data.morse&&dataset[i].char===data.item){
      returnValue = dataset[i].res;
      break;
    };
    if (!data.morse&&dataset[i].res===data.item){
      //console.log(data.morse,' morse to text::',dataset[i].res,data.item)
      returnValue = dataset[i].char;
      break;
    };
  };
  return returnValue;
});
