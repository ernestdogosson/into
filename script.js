document.querySelectorAll(".card").forEach((card) => {
  let isDragging = false;
  let startX, startY, initialX, initialY;

  card.addEventListener("mousedown", (e) => {
    isDragging = true;

    startX = e.clientX;
    startY = e.clientY;

    const rect = card.getBoundingClientRect();
    initialX = rect.left;
    initialY = rect.top;

    card.style.transform = "none";
    card.style.left = initialX + "px";
    card.style.top = initialY + "px";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    card.style.left = initialX + dx + "px";
    card.style.top = initialY + dy + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});
