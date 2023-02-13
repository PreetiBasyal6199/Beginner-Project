const choises = ["Rock", "Paper", "Scissor"]
let ccount =0
let pcount = 0
let dcount = 0
let round = 1
const playGame = () =>{
        options = document.querySelectorAll(".options")
        options.forEach(element => {
            element.addEventListener("click", function(){
                var playerMove = this.textContent ;
                var computerMove = choises[Math.floor(Math.random() * 3)]
                compareResult(playerMove, computerMove)
                for(let i=0; i<options.length; i++){
                    console.log(options[i])
                    options[i].disabled = true
                }
                
                document.getElementById("next").style.display="block";
                // round ++ ;
                // document.getElementById("round").innerHTML=temp.substring(0,temp.length -1) +  round ;

                if (round==5){
                    document.getElementById("wintag").innerHTML="Game Over" ;
                    document.getElementById("round").innerHTML="Final" ;
                    // document.getElementById("restart").style.visibility= 'visible' ;
                    document.getElementById("next").style.display="None";
                    get_final_winner(pcount, ccount)
                    pcount=0
                    dcount=0
                    ccount=0
                    round=0
                }
                
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
            updateScore(pcount,ccount,dcount)
            document.getElementById("wintag").innerHTML="Computer win" ;
        }
        if (cMove=="Rock"){
            document.getElementById("pmove").innerHTML="Rock" ;
            document.getElementById("cmove").innerHTML="Rock" ;
            dcount ++ ;
            updateScore(pcount,ccount,dcount)
            // document.getElementById("dcount").innerHTML+=1 ;
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
            dcount ++ ;
            updateScore(pcount,ccount,dcount)
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
            dcount ++ ;
            updateScore(pcount,ccount,dcount)
            document.getElementById("wintag").innerHTML="Draw" ;
        }
    }
}

function updateScore(pcount, ccount){
            document.getElementById("pcount").innerHTML = pcount ;
            document.getElementById("ccount").innerHTML= ccount;
            document.getElementById("dcount").innerHTML= dcount;
}

function get_final_winner(pcount,ccount){
    if (pcount>ccount){
                document.getElementById("finale").innerHTML = "Congratulations you win..."
            }
            else if (pcount==ccount){
                document.getElementById("finale").innerHTML = "Opps There is a draw"
            }
            else{
                document.getElementById("finale").innerHTML = "Sorrry..... You lose"
        
            }
}
playGame()
restart_brn = document.getElementById("restart")
next_btn = document.getElementById("next")
next_btn.addEventListener("click",()=>{
    document.getElementById("next").style.display="None";
    round ++ ;
    var temp = document.getElementById("round").innerHTML
    document.getElementById("round").innerHTML=temp.substring(0,temp.length -1) +  round ;
    for(let i=0; i<options.length; i++){
        console.log(options[i])
        options[i].disabled = false
    }
})
restart_brn.addEventListener("click", ()=>{
    window.location.reload()
})