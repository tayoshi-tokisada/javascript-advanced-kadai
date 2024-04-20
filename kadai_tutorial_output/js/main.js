// 初期表示
init();

// キー入力判定処理
const keyPress = (e) => {
  // タイプミスの場合
  if(e.key !== untyped.substring(0, 1)){
    // wrapをミスタイプ仕様にする(100ms)
    wrap.classList.add("mistyped");
    setTimeout(() => {
      wrap.classList.remove("mistyped");
    }, 100);
    return;
  }

  // タイプ正解の場合
  // スコア＋１
  score++;
  // 未入力⇒入力済み　１文字移動
  typed += untyped.substring(0, 1);
  untyped = untyped.substring(1);
  typedField.textContent = typed;
  untypedField.textContent = untyped;

  // 未入力がなくなったらテキストを新しく
  if(untyped === ""){
    createText();
  }
};

// スタートボタン押下時の処理
start.addEventListener("click", () => {
  // カウントダウンを開始
  countdown();
  // テキストの表示
  createText();
  // スタートボタンを非表示
  start.style.display = "none";
  // キー入力時のイベント処理を追加
  document.addEventListener("keypress", keyPress);
});
