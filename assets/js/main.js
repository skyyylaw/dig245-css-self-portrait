
/* javascript */

//the following return the number of portrait elements (div)
let matches = document.querySelectorAll("div");
let length = matches.length;
console.log("The total number of HTML elements used in the portraint is: " + length);

//the following track the mouse and return coordinates (x and y) of the cursor
window.addEventListener('mousemove', function(e){
  document.getElementById('x-value').textContent = e.x;
  document.getElementById('y-value').textContent = e.y;
});




// var bauhaus = `
//
// Staaatliches Bauhaus (1919-1933)
//
//       ..-""T-..
//     ,'__   |   '.
//    /   N|  |     !
//   :     '  |      :
//   [      __|      ]
//   :      _I       :
//    !   ___I      /
//     '.  N]     ,'
//       "-"!..--"
//
// `;
//
// console.log(bauhaus);
