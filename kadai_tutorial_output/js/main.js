// sub.jsの取得
import { createText
        , keyPress
        , rankCheck
        , gameOver
        , timer 
} from './sub.js';

// 一番初めのテキストを表示
createText();

// キーボードのイベント処理
document.addEventListener('keypress', keyPress);