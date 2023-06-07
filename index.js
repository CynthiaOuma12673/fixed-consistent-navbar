document.addEventListener("DOMContentLoaded", function() {
    // Load the navigation bar using AJAX
    var navbarContainer = document.getElementById("navbar-container");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "navbar.html", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        navbarContainer.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });