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
const start = document.getElementById("start");
const typeCount =document.getElementById("typeCount");

// 定数dataを宣言
const data =
{
  "startCount":60,
  "startText":"スタートボタンで開始",
  "cRankText":"文字打てました!\nあなたのランクはCです。\nBランクまであと",
  "bRankText":"文字打てました!\nあなたのランクはBです。\nAランクまであと",
  "aRankText":"文字打てました!\nあなたのランクはAです。\nSランクまであと",
  "sRankText":"文字打てました!\nあなたのランクはSです。\nおめでとうございます！",
  "rankText2":"文字です。\n【OK】リトライ / 【キャンセル】終了",
  "rankText3":"\n【OK】リトライ / 【キャンセル】終了",
  "textList":[
    "Hello World",
    "This is my App",
    "How are you?",
    "Today is sunny",
    "I love JavaScript!",
    "Good morning",
    "I am Japanese",
    "Let it be",
    "Samurai",
    "Typing Game",
    "Information Technology",
    "I want to be a programmer",
    "What day is today?",
    "I want to build a web app",
    "Nice to meet you",
    "Chrome Firefox Edge Safari",
    "machine learning",
    "Brendan Eich",
    "John Resig",
    "React Vue Angular",
    "Netscape Communications",
    "undefined null NaN",
    "Thank you very much",
    "Google Apple Facebook Amazon",
    "ECMAScript",
    "console.log",
    "for while if switch",
    "var let const",
    "Windows Mac Linux iOS Android",
    "programming"
  ]
};