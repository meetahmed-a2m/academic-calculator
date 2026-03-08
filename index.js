// let percentageCalc=()=>
//     {     
// let totalMarks = document.getElementById("tm").value
// let obtMArks =document.getElementById("obt").value
// let result = (obtMArks/totalMarks) * 100;
// document.getElementById("rslt").value= result.toFixed(2);
// if(totalMarks=="" || obtMArks=="")
//     { 
//     document.getElementById("rslt").value= "Please enter value";
//     }}
//  let formRest=()=>
//     {
//       document.getElementById("re-set").reset();
//     }

let ZakatCalc=()=>
    {     
let TotalWealth = document.getElementById("tw").value
let ZakatPercent =  (TotalWealth / 100) * 0.025;
document.getElementById("rslt").value= ZakatPercent;
if(TotalWealth=="")
    { 
    document.getElementById("rslt").value= "Please enter some value";
    }}
 let formRest=()=>
    {
      document.getElementById("re-set").reset();
    }



let BMICalc = () => {
let weight = document.getElementById("w8").value;
let height = document.getElementById("h8").value;

if(weight=="" || height=="")
  {
document.getElementById("rslt2").value = "Please enter some value"; 
}

let BMIresult = weight / (height * height);
document.getElementById("rslt2").value = BMIresult.toFixed(2);

}
