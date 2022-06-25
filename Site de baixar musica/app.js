function myFunction(event) {
    let menu = document.getElementById("menu");

    if (menu.style.display === "block") {
      menu.style.display = "none";
      event.preventDefault();
    }else{
      menu.style.display = "block";
    }
  }