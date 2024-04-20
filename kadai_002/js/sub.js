// 初期表示処理
const init = () => {
  // カウントの初期表示
  count.textContent = data.startCount;
  // テキストの初期表示
  untypedField.textContent = data.startText;
};

// テキスト表示処理
const createText = () => {
  // 入力済みを空にする
  typed = "";
  typedField.textContent = typed;
  // 0 ~ textList.length-1 のランダムな数値を生成する
  let randomNum = Math.floor(Math.random() * data.textList.length);
  // textListの内容をテキストに表示
  untyped = data.textList[randomNum];
  untypedField.textContent = untyped;
};

// ランク判定処理
const rankCheck = () => {
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
const gameOver = (timer) => {
  // タイマー停止
  clearInterval(timer);
  // ランク判定処理
  rankCheck();
  // テキストをtimeupTextに更新
  typedField.textContent = "";
  untypedField.textContent = data.timeupText;
  // １０ミリ秒後
  setTimeout(() => {
    // rankTextをダイアログで表示
    const result = confirm(rankText);
  }, 10);

  // OKボタンがクリックされたらリロードする
  if(result == true){
    window.location.reload();
  }
};

// カウントダウン処理
const countdown = () => {
  // countから現在のカウントを取得
  let currentCount = count.textContent;

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
};