function initPhoto() {
  const grid =
    document.getElementById("photo-grid");
  const modal =
    document.getElementById("photo-modal");
  const modalImage =
    document.getElementById("photo-modal-image");
  const modalTitle =
    document.getElementById("photo-modal-title");
  const modalCaption =
    document.getElementById("photo-modal-caption");

  /* 写真一覧を作る */
  photoData.forEach(photo => {
    const item =
      document.createElement("div");
    item.className = "photo-thumb";
    item.innerHTML = `
      <img
        src="${photo.image}"
        alt="${photo.title}"
      >
    `;

    /* サムネイルクリック */
    item.addEventListener("click", () => {
      modalImage.src =
        photo.image;
      modalTitle.textContent =
        photo.title;
      modalCaption.textContent =
        photo.caption;
      modal.classList.add("show");

    });
    grid.appendChild(item);
  });

  /* 暗い背景をクリックしても閉じる */
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
}