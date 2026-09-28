function initCounter() {
  const counterElement =
    document.getElementById("visitor-count");

  fetch(
    "https://ppboy.goatcounter.com/counter/%2F.json"
  )
    .then(response => response.json())
    .then(data => {
      const count =
        String(data.count).replace(/,/g, "");

      counterElement.textContent =
        count.padStart(6, "0");
    })
    .catch(error => {
      console.error(
        "カウンター取得エラー:",
        error
      );

      counterElement.textContent =
        "ERROR";
    });
}