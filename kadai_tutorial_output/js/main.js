// dataの取得
import data from './json/data.json' assert {type: 'json'};

// 変数宣言
let untyped;

// HTML要素の取得
const untypedField = document.getElementById('untyped')

// ランダムなテキストを表示
const createText = () => {
  // 0 ~ textLists.length-1 のランダムな数値を生成する
  let randomNum = Math.floor(Math.random() * textLists.length);
  // textListsの内容をテキストに表示
  untyped = data.textList[randomNum];
  untypedField.textContent = untyped;
};
createText();

// キー入力の判定
const keyPress = e => {};

// タイピングスキルのランクを判定
const rankCheck = score => {};

// ゲームを終了
const gameOver = id => {};

// カウントダウンタイマー
const timer = () => {};