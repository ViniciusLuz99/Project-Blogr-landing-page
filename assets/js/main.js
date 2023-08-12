/**
 Toggles the navigation menu on mobile devices.
 */
const navToggler = () => {
  // Get the menu element
  let menuContainer = document.getElementById("mobile-menu");
  // Get the hamburger button element
  let hamburgerBtn = document.querySelector(".openbtn");
  // Get the X button element
  let XBtn = document.querySelector(".closebtn");

  // Check if the menu is currently closed
  if (menuContainer.style.maxWidth === "0px") {
    // Open the menu
    menuContainer.style.maxWidth = "500px";
    XBtn.style.display = "block";
    hamburgerBtn.style.display = "none";
  } else {
    // Close the menu
    menuContainer.style.maxWidth = "0px";
    XBtn.style.display = "none";
    hamburgerBtn.style.display = "block";
  }
};
