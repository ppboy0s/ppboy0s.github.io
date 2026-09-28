async function loadComponent(id, file) {
  const element = document.getElementById(id);
  const response = await fetch(file);
  const html = await response.text();
  element.innerHTML = html;
}


async function loadComponents() {

    // リンク集を読み込む
    await loadComponent(
        "links-component",
        "components/links.html"
    );

    // 日記を読み込む
    await loadComponent(
        "diary-component",
        "components/diary.html"
    );

    // 写真を読み込む
    await loadComponent(
    "photo-component",
    "components/photo.html"
  );

    // HTMLを全部読み込んだ後に実行
    initWindows();
    initDiary();
    initPhoto();
}

loadComponents();