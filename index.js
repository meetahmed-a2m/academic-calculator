

let percentageCalc=()=>
    {     
let totalMarks = document.getElementById("tm").value
let obtMArks =document.getElementById("obt").value
let result = (obtMArks/totalMarks) * 100;
document.getElementById("rslt").value= result.toFixed(2);
if(totalMarks=="" || obtMArks=="")
    { 
    document.getElementById("rslt").value= "Please enter value";
    }}
 let formRest=()=>
    {
      document.getElementById("re-set").reset();
    }