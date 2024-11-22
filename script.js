function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });
}

function showMenu() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (section.id === "main-menu") {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });
}

function openLink(url) {
  window.open(url, "_blank");
}
