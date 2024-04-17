// dataの取得
import data from '../json/data.json' with {type: 'json'};

// 変数宣言
let untyped = '';
let typed = '';

// HTML要素の取得
const untypedField = document.getElementById('untyped');
const typedField = document.getElementById('typed');

// テキストを表示
export const createText = () => {
  // 入力済みを空にする
  typed = '';
  typedField.textContent = typed;
  // 0 ~ textList.length-1 のランダムな数値を生成する
  let randomNum = Math.floor(Math.random() * data.textList.length);
  // textListの内容をテキストに表示
  untyped = data.textList[randomNum];
  untypedField.textContent = untyped;
};

// キー入力の判定
export const keyPress = e => {
  // 未入力⇒入力済み　１文字移動
  typed += untyped.substring(0, 1);
  untyped = untyped.substring(1);
  typedField.textContent = typed;
  untypedField.textContent = untyped;

  // 未入力がなくなったらテキストを新しく
  if(untyped === ''){
    createText();
  }
};

// タイピングスキルのランクを判定
export const rankCheck = score => {};

// ゲームを終了
export const gameOver = id => {};

// カウントダウンタイマー
export const timer = () => {};