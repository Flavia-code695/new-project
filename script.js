function filterPizza(type) {
  const pizzas = document.querySelectorAll(".menu-container .pizza");
  pizzas.forEach((pizza) => {
    if (type === "all" || pizza.dataset.type === type) {
      pizza.style.display = "block";
    } else {
      pizza.style.display = "none";
    }
  });
}

const form = document.getElementById("orderForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Porosia u mor me sukses! 🍕");
  form.reset();
<<<<<<< HEAD
=======
});

document.getElementById("feedback-btn").addEventListener("click", function () {
  alert("Thanks for your feedback!"); // mund ta zëvendësosh me një modal form
>>>>>>> feedback-button
});
