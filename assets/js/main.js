
/* javascript */

//the following return the number of portrait elements (div)
var matches = document.querySelectorAll("div");
var length = matches.length;
console.log(`%cThe total number of HTML elements used in the portrait is: ${length}`,"color:red; font-weight:bold; font-size:15px");

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
