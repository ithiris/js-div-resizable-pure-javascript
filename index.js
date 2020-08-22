// Import stylesheets
import './style.css';

// Write Javascript code!
function makeItDivResizable(div){
var element = document.querySelector(div);
const resizers = document.querySelectorAll(div + ' .corner')
let currentResizer;
for(let resizer of resizers ){
resizer.addEventListener('mousedown',mouseDown);

  function mouseDown(e){
    currentResizer=e.target;
   let mouse_x =e.pageX;
   let mouse_y =e.pageY;
    window.addEventListener('mousemove',resize);
    window.addEventListener('mouseup',stopResize);

      function resize(e){
        const rectangle =element.getBoundingClientRect();
       if (currentResizer.classList.contains('resizer-bottom-right')) {
       element.style.width =rectangle.width -(mouse_x -e.pageX) +"px";
       element.style.height =rectangle.height -(mouse_y -e.pageY) +"px";
       }
        mouse_x =e.pageX;
       mouse_y =e.pageY;
      }
  function stopResize(e){
        e.preventDefault();
    
      }

  }


}
}

const result =makeItDivResizable('.resizable')
