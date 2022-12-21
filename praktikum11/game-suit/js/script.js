document.querySelectorAll("#option a").forEach((a) => {
    // jika di click akan menjalankan sebuah fungsi computerchoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    // pilihan User
    let pilihanUser = element.target.innerText;

    // menangkap element hasil komputer dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // mengisi pilihan komputer dengan array
    let choices = ["Rock", "Papper", "Scissors"];

    // pilihan komputer secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer (DRAW)
    if(pilihanUser == pilihanKomputer){
        // alert("DRAW");
        setTimeout(() => alert("Draw"), 300);
    }

    // jika pilihan user menang (WIN)
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        setTimeout(() => alert("Hoki lu"), 300);
    } else if (pilihanUser == "Papper" && pilihanKomputer == "Rock"){
        setTimeout(() => alert("Hoki lu"), 300);
    }else if (pilihanUser == "Scissors" && pilihanKomputer == "Papper"){
        setTimeout(() => alert("Hoki lu"), 300);
    }

    // jika pilihan user kalah (Lose)
    if(pilihanUser == "Rock" && pilihanKomputer == "Papper"){
        setTimeout(() => alert("Masa sama bot kalah"), 300);
    } else if (pilihanUser == "Papper" && pilihanKomputer == "Scissors"){
        setTimeout(() => alert("Masa sama bot kalah"), 300);
    }else if (pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        setTimeout(() => alert("Masa sama bot kalah"), 300);
    }
}