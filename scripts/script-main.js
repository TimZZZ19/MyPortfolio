// Back to top on refreshing
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// *************************
// COMMENT SECTION SMOOTH SCROLL
// *************************
const navBar = document.querySelector(".nav-bar");
const footerNav = document.querySelector(".footer-navigation");

const smoothScroll = (sectionRect) => {
  window.scrollTo({
    left: sectionRect.left + window.scrollX,
    top: sectionRect.top + window.scrollY - 100,
    behavior: "smooth",
  });
};

const goToSection = (e) => {
  if (!e.target.classList.contains("section-tab")) return;
  e.preventDefault();

  const id = e.target.getAttribute("href");
  const section = document.querySelector(id);
  const sectionRect = section.getBoundingClientRect();

  smoothScroll(sectionRect);
};

navBar.addEventListener("click", (e) => goToSection(e));

footerNav.addEventListener("click", (e) => goToSection(e));

// COMMENT Scroll to hero on clicking the header brand
const headerBrand = document.querySelector(".header-brand");

headerBrand.addEventListener("click", () => {
  const section = document.getElementById("hero");
  const sectionRect = section.getBoundingClientRect();

  smoothScroll(sectionRect);
});

// *************************
// COMMENT SECTION INDICATOR
// *************************
let activeSectionTab;
const sections = document.querySelectorAll(".section");

const updateActiveTab = (tab) => {
  activeSectionTab = document.querySelector(".active-tab");
  activeSectionTab.classList.remove("active-tab");
  tab.classList.add("active-tab");
};

const options = {
  root: null,
  rootMargin: "-49% 0px",
  threshold: 0,
};

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute("id");
    const currentTab = document.getElementById(`${id}-tab`);

    updateActiveTab(currentTab);
  });
}, options);

sections.forEach((section) => {
  progressObserver.observe(section);
});

// *************************
// COMMENT SECTION REVEALING EFFECT
// *************************

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionRevealObserver = new IntersectionObserver(revealSection, {
  root: null,
  rootMargin: "0px 0px -30% 0px",
  threshold: 0,
});

sections.forEach(function (section) {
  sectionRevealObserver.observe(section);
  section.classList.add("section--hidden");
});

// *************************
// COMMENT COMPONENT REVEALING ON LOADING
// *************************

revealComponentOnLoading("header", "header--hidden");
revealComponentOnLoading("self-intro", "self-intro--hidden");
revealComponentOnLoading("skills", "skills--hidden");
revealComponentOnLoading("contact-logo", "contact-logo--hidden");

function revealComponentOnLoading(classString, hiddenClassString) {
  const component = document.querySelector(`.${classString}`);

  const revealComponent = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove(hiddenClassString);
      observer.unobserve(entry.target);
    });
  };

  const componentObserver = new IntersectionObserver(revealComponent, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  });

  componentObserver.observe(component);
}
