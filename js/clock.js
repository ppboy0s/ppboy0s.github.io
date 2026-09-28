let clockTimer;

function initClock() {
  function updateClock() {

    // 毎回その時点の要素を取り直す
    const timeElement =
      document.getElementById("clock-time");

    const dateElement =
      document.getElementById("clock-date");

    if (!timeElement || !dateElement) {
      return;
    }

    const now = new Date();

    const hours =
      String(now.getHours()).padStart(2, "0");

    const minutes =
      String(now.getMinutes()).padStart(2, "0");

    const seconds =
      String(now.getSeconds()).padStart(2, "0");

    const year =
      now.getFullYear();

    const month =
      String(now.getMonth() + 1).padStart(2, "0");

    const day =
      String(now.getDate()).padStart(2, "0");

    timeElement.textContent =
      `${hours}:${minutes}:${seconds}`;

    dateElement.textContent =
      `${year}/${month}/${day}`;
  }


  // 二重起動防止
  if (clockTimer) {
    clearInterval(clockTimer);
  }

  // 最初に表示
  updateClock();

  // 1秒ごとに更新
  clockTimer = setInterval(
    updateClock,
    1000
  );
}