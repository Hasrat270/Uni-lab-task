function showSection(sectionId) {
  // Pehle saaray sections ko hide karo
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Target section ko dikhao
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add("active");
  }
}
