document.addEventListener("DOMContentLoaded", () => {
  const visibilityMap = {};

  const updateActive = () => {
    const entries = Object.entries(visibilityMap);
    const mostVisible = entries.sort(([, a], [, b]) => b - a)[0];

    entries.forEach(([id]) => {
      const link = document.querySelector(`a[href="#${id}"]`);
      if (!link) return;
      const isActive = mostVisible && mostVisible[0] === id && mostVisible[1] > 0;
      link.classList.toggle("active", isActive);
    });
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      visibilityMap[entry.target.id] = entry.intersectionRect.height;
    });
    updateActive();
  };

  const setupObserver = () => {
    const thresholds = Array.from({ length: 11 }, (_, i) => i / 10);

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: thresholds,
    });

    const sections = document.querySelectorAll("#about, #selected, #all");
    sections.forEach((section) => observer.observe(section));
  };

  setTimeout(setupObserver, 0);
});
