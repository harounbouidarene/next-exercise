function chekeseason(month){ 

     if(month==="june")
          return "summer";
      else if (month==="december")
          return "winter";

          else if (month==="april")
          return "spring";

          else{
               return "unknown";
          }
}

console.log(chekeseason("june"));
console.log(chekeseason("december"));
console.log(chekeseason("april"));
console.log(chekeseason("august"));
