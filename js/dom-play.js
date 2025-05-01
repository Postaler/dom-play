const spans = document.querySelectorAll("#play span");

spans.forEach(span => {
  span.addEventListener("click", () => {
    const actor = span.dataset.actor;
    highlightLines(actor);
  });
});

function highlightLines(actor) {
  spans.forEach(span => {
    span.classList.toggle("highlighted", span.dataset.actor === actor);
  });
}
