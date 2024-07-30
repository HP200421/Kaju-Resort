const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});

function checkAvailability() {
  const arrival = document.getElementById("arrival").value.trim();
  const departure = document.getElementById("departure").value.trim();
  const guests = document.getElementById("guests").value.trim();

  // Check if all fields are filled
  if (!arrival || !departure || !guests) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  const adminWhatsAppNumber = "+91 91721 21327";
  const message = `New Booking Request:\n- Arrival Date: ${arrival}\n- Departure Date: ${departure}\n- Guests: ${guests}`;
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://api.whatsapp.com/send?phone=${adminWhatsAppNumber}&text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}

var flkty = new Flickity(".main-carousel", {
  cellAlign: "left",
  cover: true,
  wrapAround: true,
  pageDots: false,
  prevNextButtons: false,
  autoPlay: 4000,
  selectedAttraction: 0.01,
  friction: 0.15,
});
