// Enhance the native disclosure; the form still works without JavaScript.
const disclosure = document.querySelector(".support-contact");

if (disclosure && typeof disclosure.animate === "function") {
  const summary = disclosure.querySelector("summary");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let animation = null;
  let targetOpen = disclosure.open;

  function finishTransition() {
    disclosure.open = targetOpen;
    if (animation) {
      animation.onfinish = null;
      animation.cancel();
      animation = null;
    }
    disclosure.style.removeProperty("overflow");
  }

  summary.addEventListener("click", (event) => {
    if (reducedMotion.matches) {
      return; // Preserve the browser's immediate toggle.
    }

    event.preventDefault();
    const startHeight = disclosure.getBoundingClientRect().height;
    targetOpen = animation ? !targetOpen : !disclosure.open;

    // Start a reversal from the current height, even after rapid clicks.
    if (animation) {
      animation.onfinish = null;
      animation.cancel();
    }

    // Keep content rendered until a closing transition has finished.
    disclosure.open = true;
    const endHeight = targetOpen
      ? disclosure.getBoundingClientRect().height
      : summary.getBoundingClientRect().height;

    disclosure.style.overflow = "clip";
    animation = disclosure.animate(
      { height: [`${startHeight}px`, `${endHeight}px`] },
      { duration: 240, easing: "cubic-bezier(0.2, 0, 0, 1)" },
    );
    animation.onfinish = finishTransition;
  });

  reducedMotion.addEventListener("change", () => {
    if (animation && reducedMotion.matches) {
      finishTransition();
    }
  });
}
