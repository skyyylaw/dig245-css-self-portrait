
/* javascript */

//the following return the number of portrait elements (div)
var matches = document.querySelectorAll("div");
var number = matches.length - 1; //minus one because theres a <div> tag used to group all portrait elements
console.log(`%cThe total number of HTML elements used in the portrait is: ${number}`,"color:red; font-weight:bold; font-size:15px");

//the following track the mouse and return coordinates (x and y) of the cursor
window.addEventListener('mousemove', function(e){
  document.getElementById('x-value').textContent = e.x;
  document.getElementById('y-value').textContent = e.y;
});




var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);
