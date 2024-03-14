const btn = document.getElementById("btn");
let textView = document.getElementById("text");

btn.addEventListener("click", () => {
    textView.textContent = "ボタンをクリックしました";
});