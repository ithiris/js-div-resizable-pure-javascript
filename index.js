// Import stylesheets
import "./style.css";

// Write Javascript code!
function makeItDivResizable(div) {
  var element = document.querySelector(div);
  const resizers = document.querySelectorAll(div + " .corner");
  let currentResizer;
  let isResizing =false;
  for (let resizer of resizers) {
    resizer.addEventListener("mousedown", mouseDown);
    function mouseDown(e) {
      currentResizer = e.target;
      isResizing =true;
      let mouse_x = e.pageX;
      let mouse_y = e.pageY;
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResize);
      function resize(e) {
        const rectangle = element.getBoundingClientRect();
        if (currentResizer.classList.contains("resizer-bottom-right")) {
          element.style.width = rectangle.width - (mouse_x - e.pageX) + "px";
          element.style.height = rectangle.height - (mouse_y - e.pageY) + "px";
        }
       else if (currentResizer.classList.contains("resizer-bottom-left")) {
          element.style.width = rectangle.width - (mouse_x - e.pageX) + "px";
          element.style.height = rectangle.height - (mouse_y - e.pageY) + "px";
           element.style.left = rectangle.left - (mouse_y - e.pageY) + "px";
        }
        else if (currentResizer.classList.contains("resizer-top-right")) {
          element.style.width = rectangle.width - (mouse_x - e.pageX) + "px";
          element.style.height = rectangle.height - (mouse_y - e.pageY) + "px";
           element.style.top = rectangle.top - (mouse_y - e.pageY) + "px";
        }
        else{
           element.style.width = rectangle.width - (mouse_x - e.pageX) + "px";
          element.style.height = rectangle.height - (mouse_y - e.pageY) + "px";
           element.style.top = rectangle.top - (mouse_y - e.pageY) + "px"
           element.style.left = rectangle.left - (mouse_y - e.pageY) + "px";
        }
        mouse_x = e.pageX;
        mouse_y = e.pageY;
      }
      function stopResize() {
        window.removeEventListener("mousemove", resize);
         window.removeEventListener("mousemove", stopResize);
         isResizing =false;
       
      }
    }
  }
}

const result = makeItDivResizable(".resizable");
