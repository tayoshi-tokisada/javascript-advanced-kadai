// HTML要素の取得
const start = document.getElementById("start");
const typeCount =document.getElementById("typeCount");

// 初期表示
init();

// スタートボタン押下時の処理
start.addEventListener("click", () => {
  // カウントダウンを開始
  countdown();
  // テキストの表示
  createText();
  // スタートボタンを非表示
  start.style.display = "none";
  // タイプ数表示を表示
  typeCount.textContent = "0";
  typeCount.style.display = "block";
  // キー入力時のイベント処理を追加
  document.addEventListener("keypress", keyPress);
});
