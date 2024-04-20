// dataの取得
import data from "../json/data.json" with {type: "json"};

// 変数宣言
let untyped = "";
let typed = "";
let score = 0;
let rankText = "";

// HTML要素の取得
const untypedField = document.getElementById("untyped");
const typedField = document.getElementById("typed");
const wrap = document.getElementById("wrap");
const count = document.getElementById("count");
const typeCount = document.getElementById("typeCount");

// 初期表示処理
export const init = () => {
  // カウントの初期表示
  count.textContent = data.startCount;
  // テキストの初期表示
  untypedField.textContent = data.startText;
};

// テキスト表示処理
export const createText = () => {
  // 入力済みを空にする
  typed = "";
  typedField.textContent = typed;
  // 0 ~ textList.length-1 のランダムな数値を生成する
  let randomNum = Math.floor(Math.random() * data.textList.length);
  // textListの内容をテキストに表示
  untyped = data.textList[randomNum];
  untypedField.textContent = untyped;
};

// キー入力判定処理
export const keyPress = e => {
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
  // タイプ数表示更新
  typeCount.textContent = score;

  // 未入力がなくなったらテキストを新しく
  if(untyped === ""){
    createText();
  }
};

// ランク判定処理
export const rankCheck = () => {
  // rankTextを初期化
  rankText = "";
  // スコアに応じて異なるメッセージをrankTextに格納する
  if(score < 100){
    rankText = `${score}${data.cRankText}${100 - score}${data.rankText2}`;
  }
  else if(score < 200){
    rankText = `${score}${data.bRankText}${200 - score}${data.rankText2}`;
  }
  else if(score < 300){
    rankText = `${score}${data.aRankText}${300 - score}${data.rankText2}`;
  }
  else if(score >= 300){
    rankText = `${score}${data.sRankText}${100 - score}${data.rankText3}`;
  }
};

// ゲーム終了処理
export const gameOver = (timer) => {
  // タイマー停止
  clearInterval(timer);
  // ランク判定処理
  rankCheck();
  // rankTextをダイアログで表示
  const result = confirm(rankText);
  // OKボタンがクリックされたらリロードする
  if(result == true){
    window.location.reload();
  }
};

// カウントダウン処理
export const countdown = () => {
  // countから現在のカウントを取得
  let currentCount = count.textContent;

  // ゲーム終了時テキストをtimeupTextに更新
  setTimeout(() => {
    typedField.textContent = "";
    untypedField.textContent = data.timeupText;
  }, data.startCount * 1000);

  // ↑のタイマー終了時の処理が先に動くように遅延をかける
  setTimeout(() => {
    // タイマーをセット
    const timer = setInterval(() => {
      // カウントダウンする
      currentCount--;
      count.textContent = currentCount;

      // カウントが0になったらタイマーを停止する
      if(currentCount <= 0){
        // ゲーム終了処理
        gameOver(timer);
      }
    }, 1000);
  }, 50);
};