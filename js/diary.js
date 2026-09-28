function initDiary() {

  const diaryDates = Object.keys(diaryData).sort();

  let currentDiaryIndex = diaryDates.length - 1;

  const diaryArea = document.getElementById("diary-area");
  const currentDate = document.getElementById("current-date");
  const prevButton = document.getElementById("prev-day");
  const nextButton = document.getElementById("next-day");

  function showDiary() {
    const date = diaryDates[currentDiaryIndex];

    currentDate.textContent = date;

    diaryArea.innerHTML = `
      <p class="diary-date">${date}</p>
    `;

    diaryData[date].forEach(post => {

      diaryArea.innerHTML += `
        <div class="diary-post">

          <div class="diary-post-time">
            ${post.time}
          </div>

          <p>
            ${post.text}
          </p>

        </div>
      `;

    });

    prevButton.disabled =
      currentDiaryIndex === 0;

    nextButton.disabled =
      currentDiaryIndex === diaryDates.length - 1;
  }


  prevButton.addEventListener("click", () => {

    if (currentDiaryIndex > 0) {
      currentDiaryIndex--;
      showDiary();
    }

  });


  nextButton.addEventListener("click", () => {

    if (currentDiaryIndex < diaryDates.length - 1) {
      currentDiaryIndex++;
      showDiary();
    }

  });


  showDiary();
}