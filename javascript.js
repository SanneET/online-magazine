function hideSidebar() {
    // Creating a variable named, that fetch the sidebar attribute from the HTML document
  
    const sidebar = document.querySelector(".sidebar");
    //Styling the sidebar from javascript and setting the display property to 'none'
    sidebar.style.display = "none";
  }
  
  /*Creating  the showSidebar functionality*/
  //Creating a javascript funtion named showSidebar
  
  function showSidebar() {
    // Creating a variable named, that fetch the sidebar attribute from the HTML document
    const sidebar = document.querySelector(".sidebar");
  
    //Styling the sidebar from javascript and setting the display property to 'flex'
    sidebar.style.display = "flex";
  }



  /* Make picture pops out induvelly*/
  document.addEventListener("DOMContentLoaded", function () {
    var threePictures = document.querySelectorAll(".threePicture");
  
    threePictures.forEach(function (picture) {
      picture.addEventListener("mouseover", function () {
        picture.style.transform = "scale(1.3)";
      });
  
      picture.addEventListener("mouseout", function () {
        picture.style.transform = "scale(1)";
      });
    });
  });
  