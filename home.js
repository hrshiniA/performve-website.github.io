

// faded in text

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    var fadeText = document.getElementById("fade-in-text");
    if (isInViewport(fadeText)) {
        fadeText.classList.add("fade-in");
    }
}

// Event listener for scroll events
window.addEventListener("scroll", handleScroll);


// slideshow
// var myIndex = 0;
//     carousel();

//     function carousel() {
//       var i;
//       var x = document.getElementsByClassName("mySlides");
//       for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//       }
//       myIndex++;
//       if (myIndex > x.length) {
//         myIndex = 1;
//       }
//       x[myIndex - 1].style.display = "block";
//       setTimeout(carousel, 3000); 
//     }

//     function handleScroll() {
//       var fadeText = document.getElementById("fade-in-text");
//       if (isInViewport(fadeText)) {
//           fadeText.classList.add("fade-in");
//       }
//   }
  

  
  
  // slideshow
  var myIndex2 = 0;
      carousel2();
  
      function carousel2() {
        var i2;
        var x2 = document.getElementsByClassName("hkstp");
        for (i2 = 0; i2 < x2.length; i2++) {
          x2[i2].style.display = "none";
        }
        myIndex2++;
        if (myIndex2 > x2.length) {
          myIndex2 = 1;
        }
        x2[myIndex2 - 1].style.display = "block";
        setTimeout(carousel2, 5000); 
      }

// NAVIGATION BARm 

const menuBtn = document.getElementById('menu-btn-toggle');
const menuList = document.querySelector('ul');
let isClicked = false;

menuBtn.addEventListener('click', () => {
    if(!isClicked) {
         menuList.style.left = 0;
        isClicked = true;
    } else {
        menuList.style.left = '-100%';
        isClicked = false;
    }
}, false);





    