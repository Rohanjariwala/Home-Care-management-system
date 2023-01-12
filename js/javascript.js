document.querySelectorAll("#nav_menu a").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});
function classToggle() {
  var menu = document.querySelector(".hidden_div");
  this.classList.toggle("active");
  menu.classList.toggle("show");
}
document.querySelector(".advance_btn").addEventListener("click", classToggle);
