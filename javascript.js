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


  const countries = document.querySelectorAll('.country');


  /* Make picture pops out induvelly*/

  