function initCounter() {
  const counterElement =
    document.getElementById("visitor-count");

  const path = "/";

  fetch(
    "https://ppboy.goatcounter.com/counter/" +
    encodeURIComponent(path) +
    ".json"
  )
    .then(response => {
      if (!response.ok) {
        throw new Error("取得失敗");
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
      console.error(error);

      counterElement.textContent =
        "000000";
    });
}