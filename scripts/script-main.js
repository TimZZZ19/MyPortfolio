// Nav-bar, section smooth scrolling
const navBar = document.querySelector(".nav-bar");
const footerNav = document.querySelector(".footer-navigation");

const smoothScroll = (e) => {
  if (!e.target.classList.contains("section-button")) return;
  e.preventDefault();

  const id = e.target.getAttribute("href");
  const section = document.querySelector(id);
  const sectionRect = section.getBoundingClientRect();

  window.scrollTo({
    left: sectionRect.left + window.scrollX,
    top: sectionRect.top + window.scrollY - 100,
    behavior: "smooth",
  });
};

navBar.addEventListener("click", (e) => smoothScroll(e));

footerNav.addEventListener("click", (e) => smoothScroll(e));
