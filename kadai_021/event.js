const addBtn = document.getElementById("btn");
let txtBox = document.getElementById("text")

addBtn.addEventListener("click" , () => {
    setTimeout(() => {
        txtBox.textContent="ボタンをクリックしました。";
    },2000);
});