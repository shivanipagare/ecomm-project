// function reverseInPlace(str) {
//     var words = [];
//     words = str.match(/\S+/g);
//     var result = "";
//     for (var i = 0; i < words.length; i++) {
//        result += words[i].split('').reverse().join('') + " ";
//     }
//     return result
//   }
//   console.log(reverseInPlace("I am from bhopal"))

function fun(data){
   let result = Array.isArray(data)
   if(result === false)
      console.log('Object')
   if(result === true)
      console.log('array')
}
let d = {
   name: 'AA'
}

fun(d)