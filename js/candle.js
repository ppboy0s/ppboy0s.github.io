function initCandle() {
  const candle = document.getElementById("candle");
  const footer = document.querySelector(".footer");

  let isDark = false;

  candle.addEventListener("click", () => {
    isDark = !isDark;

    const color = isDark ? "#000000" : "#c0c0c0";

    document.body.style.backgroundColor = color;
    footer.style.backgroundColor = color;
  });
}