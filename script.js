/*
Roman Numeral Converter
With a map of all the rules I can parse through the number and replace it with its roman numeral equivilant. 

*/

function convertToRoman(num) {
  if(num <= 0 || num >= 4000 || (num -Math.floor(num) != 0)) {

    document.getElementById("res").innerHTML ="Incorrect Input";
    return " ";

  }

  const basicComb = {
    0:"",1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII", 9:"IX",10:"X",20:"XX",30:"XXX",40:"XL",50:"L",60:"LX",70:"LXX",80:"LXXX",90:"XC",100:"C",200:"CC",300:"CCC",400:"CD",500:"D",600:"DC",700:"DCC",800:"DCCC",900:"CM",1000:"M",2000:"MM",3000:"MMM"
  }
  var times =1;
  var res = "";
  while(num >= 1){
    var curr = num %10;
    res = basicComb[curr*times] + res;
    num =Math.floor(num/10);
    times*=10;
    
  }
 return res;
}

function startConvert(){
  document.getElementById("res").innerHTML = convertToRoman(document.getElementById("numBox").value);
}

function clearText(){
  document.getElementById("numBox").value = "";
  document.getElementById("res").innerHTML= "";
}