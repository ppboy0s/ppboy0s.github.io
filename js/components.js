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

    // 時計を読み込む
    await loadComponent(
      "clock-component",
      "components/clock.html"
    );

    // カウンターを読み込む
    await loadComponent(
      "counter-component",
      "components/counter.html"
    );

    // キャンドルを読み込む
    await loadComponent(
      "candle-component",
      "components/candle.html"
    );

    // 月を読み込む
    await loadComponent(
      "moon-component",
      "components/moon.html"
    );
    
    // HTMLを全部読み込んだ後に実行
    initWindows();
    initDiary();
    initPhoto();
    initClock();
    initCounter();
    initCandle();
}

loadComponents();