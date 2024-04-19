// sub.jsの取得
import { createText,
        keyPress,
        countdown,
        init
} from "./sub.js";

// HTML要素の取得
const start = document.getElementById("start");

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
  // キー入力時のイベント処理を追加
  document.addEventListener("keypress", keyPress);
});
