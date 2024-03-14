// back-btnというidを持つHTML要素を取得し、定数に代入する
const bacBtn = document.getElementById("back-btn");

// 画面がスクロールされたときにイベント処理を実行する
window.addEventListener("scroll", () => {
    
    // 画面のスクロール量をpx（ピクセル）数で取得する
    const scrollvalue = document.scrollingElement.scrollTop;

    // 画面のスクロール量が300px以上であれば、「TOPに戻る」ボタンを表示する
    if (scrollvalue >= 300) {
        bacBtn.style.display = "inline";
    }
    else {
        bacBtn.style.display = "none";
    }
});