    const input = document.getElementById("input");
    const info = document.getElementById("info");
    const infoone = document.getElementById("infoone");
    const aul = document.getElementById("autoupdatelabel");
    const wordcount = document.getElementById("wordcount");
    const submit = document.getElementById("count");
    const check = document.getElementById("autoupdate");
    const countPm = document.getElementById("countpunctuationmarks");
    let cpm = false;
    submit.addEventListener("click", countword);
    function countPM() {
      if(countPm.checked) {
        cpm = true;
      } else {
        cpm = false;
      }
    }
    function checktext() {
      if(check.checked) {
        countword();
      }
    }
    function countword() {
      let original = input.value;
      let final = 0;
      if(cpm == true) {
        let text = original.match(/[a-zA-Z0-9]+(?:['-][a-zA-Z0-9]+)*|[\u4e00-\u9fff]|-+|[^\sA-Za-z0-9_\u4e00-\u9fff-]/g) || [];
        final = text.length;
      } else {
        let text = original.match(/[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*|[\u4e00-\u9fff]/g) || [];
        final = text.length;
      }
      wordcount.innerHTML = "Total of words: " + final;
    }
    aul.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      (info.classList.contains("show")) ? hide() : show();
    });
    info.addEventListener("click", (e) => {
      if(!infoone.contains(e.target)) { hide(); }
    });
    function show() {
      info.classList.add("show");
    }
    function hide() {
      info.classList.remove("show");
    }
