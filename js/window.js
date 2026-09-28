function initWindows() {
  document.querySelectorAll(".title-bar").forEach(titleBar => {

    // すでにボタンが付いていたら何もしない
    if (titleBar.querySelector(".title-buttons")) {
      return;
    }

    const buttons = document.createElement("div");

    buttons.className = "title-buttons";

    buttons.innerHTML = `
      <div class="title-button">―</div>
      <div class="title-button">□</div>
      <div class="title-button">×</div>
    `;

    titleBar.appendChild(buttons);
  });
}