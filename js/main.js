let one;
let two;
let three;
let four;
let five;
let ratingBtns = document.querySelectorAll(".nmbr-box");

ratingBtns.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
})

function handleRatingBtnClick(event){
    ratingBtns.forEach( btn => {
        btn.classList.remove('active');
    })
    event.target.classList.add('active');
    console.log("ratingbuttonclick");
}

function clickone() {
    one = document.getElementById("one").innerHTML;
    let message = document.getElementById("message");
    message.innerHTML = "You selected out " + one + " of 5";
}

function clicktwo() {
    two = document.getElementById("two").innerHTML;
    let message = document.getElementById("message");
    message.innerHTML = "You selected out " + two + " of 5";
}

function clickthree() {
    three = document.getElementById("three").innerHTML;
    let message = document.getElementById("message");
    message.innerHTML = "You selected out " + three + " of 5";
  
}

function clickfour() {
    four = document.getElementById("four").innerHTML;
    let message = document.getElementById("message");
    message.innerHTML = "You selected out " + four + " of 5";
    let fourClass = document.getElementById("four");
}

function clickfive() {
    five = document.getElementById("five").innerHTML;
    let message = document.getElementById("message");
    message.innerHTML = "You selected out " + five + " of 5";
}

function deleteClass() {
    var element = document.getElementById("wrap2");
    element.classList.remove("hide");
}

function addClass() {
    var element = document.getElementById("wrap");
    element.classList.add("hide");
  }