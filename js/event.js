console.log('This is separate event java script ');

// add onclick function

function makeRed(){
    document.body.style.backgroundColor= 'red';
}

// option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
 document.body.style.backgroundColor='blue'
}
// option- 4
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple(){
 document.body.style.backgroundColor = 'purple'
}

// option- 5
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click',makePink)

function makePink(){
  document.body.style.backgroundColor= 'pink'
}

// option-6
const makeGreenButton = document.getElementById('make-green');
        makeGreenButton.addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor = 'green'
        })

// option 7 And this is final method we can use regular

document.getElementById('make-orange').addEventListener('click',function(){
    document.body.style.backgroundColor = 'orange'
})