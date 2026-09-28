function initCounter() {
  const counterElement =
    document.getElementById("visitor-count");

  fetch(
    "https://ppboy.goatcounter.com/counter//.json"
  )
    .then(response => {
      if (!response.ok) {
        throw new Error("カウンター取得失敗");
      }

      return response.json();
    })
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