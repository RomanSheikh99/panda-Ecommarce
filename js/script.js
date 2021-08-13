// 1. check js file is connect or not 
console.log('ami connect hoisi');

// 2. change h2 tag color
let allH2Tag = document.getElementsByTagName('h2');

for(let h2 of allH2Tag){
    h2.style.color = '#008997'
}

// 3. Change backpack section background color
document.getElementById('backpack').style.backgroundColor = '#EB3C27';
document.getElementById('backpack').style.padding = '20px';

// 4. change card section bordar redius
let cards = document.getElementsByClassName('card');
for(let card of cards){
    card.style.borderRadius = '30px';
}

// 5. Add text by click button
function buyProduct1(){
    const textBody = document.getElementById('Card-Body-1');
    const text = document.createElement('p');
    text.innerText= 'Price of This Shoes is 1200tk';
    textBody.appendChild(text);
}

function buyProduct2(){
    const textBody = document.getElementById('Card-Body-2');
    const text = document.createElement('p');
    text.innerText= 'Price of This Shoes is 2000tk';
    textBody.appendChild(text);
}

function buyProduct3(){
    const textBody = document.getElementById('Card-Body-3');
    const text = document.createElement('p');
    text.innerText= 'Price of This Shoes is 1600tk';
    textBody.appendChild(text);
}

// 6. Remove Element By click 
let catogoris = document.getElementsByClassName('cat');
for(let cat of catogoris){
    cat.addEventListener('click',function(){
        cat.style.display = 'none';
    })
}

// 7. Submit Validetion
let submitText = document.getElementById('submit-text');
let submitBtn = document.getElementById('submit-btn');
submitText.addEventListener('keyup', function(event){
    if(event.target.value == 'email'){
        submitBtn.removeAttribute('disabled');
    }
    else{
        submitBtn.setAttribute('disabled', true);
    }
})

submitBtn.addEventListener('click', function(){
    let confurm = document.getElementById('submit-confurm');
    confurm.innerText = 'Your are Ok,,, Now Send Us The Mail';
})

// 8. Change image on mouse enter
// div 1
document.getElementById('myimg-1').addEventListener('mouseenter',function(event){
    event.target.src = 'images/bags/bag-2.png';
})
document.getElementById('myimg-1').addEventListener('mouseout',function(event){
    event.target.src = 'images/bags/bag-1.png';
})
// div 2
document.getElementById('myimg-2').addEventListener('mouseenter',function(event){
    event.target.src = 'images/bags/bag-3.png';
})
document.getElementById('myimg-2').addEventListener('mouseout',function(event){
    event.target.src = 'images/bags/bag-2.png';
})
// div 3
document.getElementById('myimg-3').addEventListener('mouseenter',function(event){
    event.target.src = 'images/bags/bag-1.png';
})
document.getElementById('myimg-3').addEventListener('mouseout',function(event){
    event.target.src = 'images/bags/bag-3.png';
})


// 9. change background color on dubble click.
document.getElementById('subscribe').addEventListener('dblclick',function(event){
    event.target.style.backgroundColor = '#6A0F8E';
    event.target.style.color = '#fff';
})