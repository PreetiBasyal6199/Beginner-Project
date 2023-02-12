const choises = ["Rock", "Paper", "Scissor"]
let ccount =0
let pcount = 0
const playGame = () =>{
    options = document.querySelectorAll(".options")
    options.forEach(element => {
        element.addEventListener("click", function(){
            var playerMove = this.textContent ;
            var computerMove = choises[Math.floor(Math.random() * 3)]
            compareResult(playerMove, computerMove)
        })
    });
}

function compareResult(pMove, cMove){
    if (pMove=="Rock"){
        if (cMove=="Paper"){
            document.getElementById("pmove").innerHTML="Rock" ;
            document.getElementById("cmove").innerHTML="Paper" ;
            // document.getElementById("ccount").innerHTML+=1 ;
            ccount ++;
            updateScore(pcount,ccount)
            document.getElementById("wintag").innerHTML="Computer win" ;
        }
        if (cMove=="Rock"){
            document.getElementById("pmove").innerHTML="Rock" ;
            document.getElementById("cmove").innerHTML="Rock" ;
            // document.getElementById("pcount").innerHTML+=1 ;
            document.getElementById("wintag").innerHTML="Draw" ;
        }

        if (cMove=="Scissor"){
            document.getElementById("pmove").innerHTML="Rock" ;
            document.getElementById("cmove").innerHTML="Scissor" ;
            // document.getElementById("pcount").innerHTML+=1 ;
            pcount ++
            updateScore(pcount,ccount)
            document.getElementById("wintag").innerHTML="You Win" ;
        }
    }

    else if (pMove=="Paper"){
        if (cMove=="Paper"){
            document.getElementById("pmove").innerHTML="Paper" ;
            document.getElementById("cmove").innerHTML="Paper" ;
            // document.getElementById("ccount").innerHTML+=1 ;
            document.getElementById("wintag").innerHTML="Draw" ;
        }
        if (cMove=="Rock"){
            document.getElementById("pmove").innerHTML="Paper" ;
            document.getElementById("cmove").innerHTML="Rock" ;
            // document.getElementById("pcount").innerHTML+=1 ;
            pcount ++;
            updateScore(pcount,ccount)
            document.getElementById("wintag").innerHTML="You Win" ;
        }

        if (cMove=="Scissor"){
            document.getElementById("pmove").innerHTML="Paper" ;
            document.getElementById("cmove").innerHTML="Scissor" ;
            // document.getElementById("ccount").innerHTML+=1 ;
            ccount ++;
            updateScore(pcount,ccount)
            document.getElementById("wintag").innerHTML="Computer Win" ;
        }
    }

    if (pMove=="Scissor"){
        if (cMove=="Paper"){
            document.getElementById("pmove").innerHTML="Scissor" ;
            document.getElementById("cmove").innerHTML="Paper" ;
            // document.getElementById("pcount").innerHTML+=1 ;
            pcount ++;
            updateScore(pcount,ccount)
            document.getElementById("wintag").innerHTML="You win" ;
        }
        if (cMove=="Rock"){
            document.getElementById("pmove").innerHTML="Scissor" ;
            document.getElementById("cmove").innerHTML="Rock" ;
            // document.getElementById("ccount").innerHTML+=1 ;
            ccount ++;
            updateScore(pcount,ccount)
            document.getElementById("wintag").innerHTML="Computer Win" ;
        }

        if (cMove=="Scissor"){
            document.getElementById("pmove").innerHTML="Scissor" ;
            document.getElementById("cmove").innerHTML="Scissor" ;
            // document.getElementById("pcount").innerHTML+=1 ;
            document.getElementById("wintag").innerHTML="Draw" ;
        }
    }
}

function updateScore(pcount, ccount){
            document.getElementById("pcount").innerHTML = pcount ;
            document.getElementById("ccount").innerHTML= ccount;


}
playGame()
// let i=0
// if (i<10){
//     playGame()
//     console.log("Inside1")
//     i++;
// }
// else if (i==10){
//     if (pcount>ccount){
//         document.getElementById("finale").innerHTML = "Congratulations you win..."
//     }
//     else if (pcount==ccount){
//         document.getElementById("finale").innerHTML = "Opps There is a draw"
//     }
//     else{
//         document.getElementById("finale").innerHTML = "Sorrry..... You lose"

//     }
// }
// else{
//     console.log("eee")
// }