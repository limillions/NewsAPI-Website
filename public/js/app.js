let activeLink = document.querySelectorAll(".nav-link");

window.addEventListener("load", (e) => {
  activeLink.forEach((el) => {
    el.classList.remove("active");
    if (window.location.href.includes(el.innerHTML.toLowerCase())) {
      el.classList.add("active");
    }
  });
});

activeLink.forEach((el) => {
  el.addEventListener("click", (e) => {
    activeLink.forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
