document.addEventListener("DOMContentLoaded", () => {
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const targetId = entry.target.id;
      const targetNavLink = document.querySelector(`a[href="#${targetId}"]`);

      if (entry.isIntersecting) {
        targetNavLink.classList.add("active");
      } else {
        targetNavLink.classList.remove("active");
      }
    });
  };

  const setupObserver = () => {
    const isMobile = window.innerWidth < 750;
    const threshold = isMobile ? [0.2] : [0.5];

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: threshold,
    });

    const sections = document.querySelectorAll("#about, #selected, #all");
    sections.forEach((section) => observer.observe(section));
  };

  setTimeout(setupObserver, 0);
});
