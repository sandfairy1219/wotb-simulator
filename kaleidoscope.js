const e = require("express");

let times = document.getElementById('times');
let howmuch = 0;
const container = document.getElementById('log-container');
let tanks = [];
let boxes = [];
const finaltanks = document.getElementById('tanks');

const blackbox = document.querySelector('.blackbox');
const mysterybox = document.querySelector('.mysterybox');
const cta = document.querySelector('.cta');

function addBox(box) {
    boxes.push(box);
    updateFinalBoxes();
}

function updateFinalBoxes() { 
    finalboxes.innerText = '획득한 상자: ' + boxes.join(', ');
}


function updateFinalTanks() {
    finaltanks.innerText = '획득한 탱크: ' + tanks.join(', ');
}

// 탱크를 추가하는 함수
function addTank(tank) {
    tanks.push(tank);
    updateFinalTanks();
}

function kaleido1() {
    const items = [];

    const randomtank = Math.floor(Math.random() * 100);
    if (randomtank < 0.12){
        items.push('Type 62');
        addTank('Type 62');
        console.log('Type 62');
    }else if(randomtank < 0.24){
        items.push('M6A2E1');
        addTank('M6A2E1');
        console.log('M6A2E1');
    }else if(randomtank < 0.36){
        items.push('CS-52 LIS');
        addTank('CS-52 LIS');
        console.log('CS-52 LIS');
    }else if(randomtank < 0.48){
        items.push('Steyr WT')
        addTank('Steyr WT');
        console.log('Steyr WT');
    }else if(randomtank < 0.6){
        items.push('Kunze Panzer');
        addTank('Kunze Panzer');
        console.log('Kunze Panzer');
    }else if(randomtank < 0.72){
        items.push('Smasher')
        addTank('Smasher');
        console.log('Smasher');
    }else if(randomtank < 0.84){
        items.push('Annihilator')
        addTank('Annihilator');
        console.log('Annihilator');
    }else if(randomtank < 0.96){
        items.push('T28 HTC')
        addTank('T28 HTC');
        console.log('T28 HTC');
    }

    const randombox = Math.floor(Math.random() * 100);
    if (randombox < 0.20){
        items.push('만화경 상자 IV')
        addBox('만화경 상자 IV');
    }else if(randombox  <0.20 + 1){
        items.push('만화경상자 III')
        addBox('만화경 상자 III');
    }else if(randombox < 0.20 + 1 + 14.8){
        items.push('만화경 상자 II')
        addBox('만화경 상자 II');
    }else if(randombox < 0.20 + 1 + 14.8 + 4){
        items.push('만화경 상자 I')
        addBox('만화경 상자 I');
    }else if(randombox < 0.20 + 1 + 14.8 + 4 + 1){
        items.push('특급 아바타 상자')
        addBox('특급 아바타 상자');
    }
    
    const randomfxp = Math.floor(Math.random() * 100);
    if (randomfxp < 45){
        items.push('자유경험치 250개');
    }else if(randomfxp < 45 + 4.5){
        items.push('자유경험치 500개');
    }else if(randomfxp < 45 + 4.5 + 0.5){
        items.push('자유경험치 750개');
    }

    const randomcredit = Math.floor(Math.random() * 100);
    if (randomcredit < 90){
        items.push('크레딧 150,000개');
    }else if(randomcredit < 90 + 9){
        items.push('크레딧 200,000개');
    }else if(randomcredit < 90 + 9 + 1){
        items.push('크레딧 250,000개');
    }
    
    const randomtankcertificate = Math.floor(Math.random() * 100);
    if (randomtankcertificate < 22.5){
        items.push('전차 연구 증서 1개 (일반)');
    }else if(randomtankcertificate < 22.5 + 22.5){
        items.push('전차 구매 증서 1개 (일반)');
    }else if(randomtankcertificate < 22.5 + 22.5 + 2.25){
        items.push('전차 연구 증서 1개 (희귀)');
    }else if(randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25){
        items.push('전차 구매 증서 1개 (희귀)');
    }else if(randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25 + 0.25){
        items.push('전차 연구 증서 1개 (영웅)');
    }else if(randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25 + 0.25 + 0.25){
        items.push('전차 구매 증서 1개 (영웅)');
    }

    const random3x = Math.floor(Math.random() * 100);
    if (random3x < 90){
        items.push('경험치 3배 1개');
    }else if(random3x < 90 + 9){
        items.push('경험치 3배 2개');
    }else if(random3x < 90 + 9 + 1){
        items.push('경험치 3배 3개');
    }

    const randomfxpcertificate = Math.floor(Math.random() * 100);
    if (randomfxpcertificate < 22.5){
        items.push('자유경험치 200증서 1개');
    }else if(randomfxpcertificate < 22.5 + 2.25){
        items.push('자유경험치 200증서 2개');
    }else if(randomfxpcertificate < 22.5 + 2.25 + 0.25){
        items.push('자유경험치 200증서 3개');
    }

    const randombooster = Math.floor(Math.random() * 100);
    if (randombooster < 18){
        items.push('크레딧 부스터 1개');
    }else if(randombooster < 18 + 1.8){
        items.push('크레딧 부스터 2개');
    }else if(randombooster < 18 + 1.8 + 0.2){
        items.push('크레딧 부스터 3개');
    }else if(randombooster < 18 + 1.8 + 0.2 + 18){
        items.push('경험치 부스터 1개');
    }else if(randombooster < 18 + 1.8 + 0.2 + 18 + 1.8){
        items.push('경험치 부스터 2개');
    }else if(randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2){
        items.push('경험치 부스터 3개');
    }else if(randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18){
        items.push('자유 경험치 부스터 1개');
    }else if(randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8){
        items.push('자유 경험치 부스터 2개');
    }else if(randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2){
        items.push('자유 경험치 부스터 3개');
    }else if(randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18){
        items.push('승무원 경험치 부스터 1개');
    }else if(randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8){
        items.push('승무원 경험치 부스터 2개');
    }else if(randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2){
        items.push('승무원 경험치 부스터 3개');
    }
}

const slider = document.getElementById('slider');
const slid = document.getElementById('slid');

slider.addEventListener('input', function() {
    const containerimg = document.getElementById('containerimg');
    if (slider.value == 1) {
        slid.innerText = '만화경 상자 I';
        containerimg.src = "img/kaleidoscope.jpg";
    }else if (slider.value == 2) {
        slid.innerText = '만화경 상자 II';
        containerimg.src = "img/kaleidoscope.jpg";
    }else if (slider.value == 3) {
        slid.innerText = '만화경 상자 III';
        containerimg.src = "img/kaleidoscope.jpg";
    }else if (slider.value == 4) {
        slid.innerText = '만화경 상자 IV';
        containerimg.src = "img/kaleidoscope.jpg";  
    }
});

let open = document.getElementById('open');
open.addEventListener('click', function() {
    if(slider.value == 1){
        const items = kaleido1();
        const resultElement = document.getElementById('result');
        if (items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)'))) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
    resultElement.innerText = `결과: ${items.join(', ')}`;
    }
    else if(slider.value == 2){
        alert('미완성')
    }else if(slider.value == 3){
        alert('미완성')
    }else if(slider.value == 4){
        alert('미완성')
    }
});









const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    opentimes = 0;
    gold = 0;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    finaltanks.innerText = '획득한 탱크: ';
    howmuch = 0;
    tanks = [];

});
