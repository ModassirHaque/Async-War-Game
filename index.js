
const deck=document.getElementById("new-deck")
let deckId
fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle")
.then(response=>response.json())
.then(data=>{
    console.log(data)
    deckId=data.deck_id
})

// function handlecClick(){
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle")
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data)
//         deckId=data.deck_id
//     })
//     console.log(deckId)
// }
// deck.addEventListener("click",handlecClick)
let computerCount=0
let myCount=0
const dbldck=document.getElementById("double-deck")

dbldck.addEventListener("click",()=>{
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        document.getElementById("img1").innerHTML=`<img src=${data.cards[0].image}></img>`
        document.getElementById("img2").innerHTML=`<img src=${data.cards[1].image}></img>`
        document.getElementById("remaining").textContent="Remaining Card :"+data.remaining
        
        if(data.remaining===0){
            document.getElementById("double-deck").disabled=true;
                if(computerCount > myCount){
                    document.getElementById("remaining").textContent="COMPUTER Win"
                    console.log(computerCount)
                }else{
                    document.getElementById("remaining").textContent="YOU Win"
                    console.log(myCount)
                }  
        }
        const card1Obj={
            value:data.cards[0].value
       }
       const card2Obj={
           value:data.cards[1].value
       }
       determineCardWinner(card1Obj,card2Obj)
    })
    
})

function determineCardWinner(card1,card2){
    const valueOptions=["2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING","ACE"]
    const value1option=valueOptions.indexOf(card1.value)
    const value2option=valueOptions.indexOf(card2.value)
    console.log("value 1 :",value1option)
    console.log("value 2 :",value2option)
    
    if(value1option>value2option){
        document.getElementById("result").textContent="Computer Win"
        
        computerCount+=1
        document.getElementById("computerScore").textContent=`Computer Score ${computerCount}`
        return("card1 is Winner")
    }else if(value1option===value2option){
         document.getElementById("result").textContent="War"
        return("War")
    }
    else {
         document.getElementById("result").textContent="You Win"
         myCount+=1
         document.getElementById("myScore").textContent=`My Score ${myCount}`
        return("card2 is Winner")
    }
}


// function Run(){

//     console.log("Run after 2 second")
// }
// setTimeout(Run,2000)

// const people=[
//     {name:"Jack",hasPet:true, age:12},
//     {name:"Jill",hasPet:false, age:18},
//     {name:"Alice",hasPet:true, age:22},
//     {name:"Bob",hasPet:false, age:32}
// ]


// console.log(people.filter((item)=>{
//     return item.age>=18
// }))
// document.getElementById("new-deck").addEventListener("click",()=>{
//     console.log("clicked")
// })
// const voter=[
//     {name:"Joe",email:"joe@joe.com",voted:true},
//     {name:"Jane",email:"jane@jane.com",voted:true},
//     {name:"Bo",email:"bo@bo.com",voted:false},
//     {name:"Bane",email:"bane@bane.com",voted:false}
// ]
// const vote=voter.filter((item)=>{
//     return item.voted
// }).map((new_item)=>{
//      console.log(new_item.email)
// })
//  console.log(vote)
 
