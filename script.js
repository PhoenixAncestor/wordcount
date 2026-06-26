const input = document.getElementById("input");
const info = document.getElementById("info");
const infoone = document.getElementById("infoone");
const aul = document.getElementById("autoupdatelabel");
const wordcount = document.getElementById("wordcount");
const submit = document.getElementById("count");
const check = document.getElementById("autoupdate");
const countPm = document.getElementById("countpunctuationmarks");
const close = document.getElementById("close");
let cpm = false;
submit.addEventListener("click", countword);
countPm.addEventListener("change", () => {
    cpm = countPm.checked;
});
function checktext() {
    if (check.checked) {
        countword();
    }
}
function countword() {
    let original = input.value;
    let final = 0;
    if (cpm) {
        let text = original.match(/[a-zA-Z0-9]+(?:['-][a-zA-Z0-9]+)*|[\u4e00-\u9fff]|-+|[^\sA-Za-z0-9_\u4e00-\u9fff-]/g) || [];
        final = text.length;
    } else {
        let text = original.match(/[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*|[\u4e00-\u9fff]/g) || [];
        final = text.length;
    }
    wordcount.textContent = "Total words: " + final;
}
aul.addEventListener("contextmenu", e => {
    e.preventDefault();
    info.classList.toggle("show");
});
close.addEventListener("click", () => {
    info.classList.remove("show");
});
info.addEventListener("click", e => {
    if (!infoone.contains(e.target)) {
        info.classList.remove("show");
    }
});
