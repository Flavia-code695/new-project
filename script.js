// script.js

// Kur faqja ngarkohet
window.addEventListener("DOMContentLoaded", (event) => {
  alert("Mirësevini në Pizza Palace!");
});
//alert tek orders
const form = document.getElementById("orderForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // ndalon rifreskimin e faqes

  alert("Porosia u mor me sukses! 🍕");

  form.reset(); // pastron fushat e formës
});
