let times = document.getElementById('times');
let howmuch = 0;
const finalgold = document.getElementById('finalgold');
let gold = 0;
const container = document.getElementById('log-container');
let tanks = [];
const finaltanks = document.getElementById('tanks');

const blackbox = document.querySelector('.blackbox');
const mysterybox = document.querySelector('.mysterybox');
const cta = document.querySelector('.cta');



function updateFinalTanks() {
    finaltanks.innerText = '획득한 탱크: ' + tanks.join(', ');
}

// 탱크를 추가하는 함수
function addTank(tank) {
    tanks.push(tank);
    updateFinalTanks();
}

function awc(){
    const items = []

    let blackboxcount = 0;
    let mysteryboxcount = 0;
    let ctacount = 0;

    items.push('끝내줘요! 부적');

    const randomtank = Math.random() * 100;
    if(randomtank < 10){
    
    const tanks = [
        '(X) Carro 45t',
        '(X) Strv K',
        '(X) T-22 medium',
        '(X) Object 907',
        '(X) Object 268/4',
        '(X) AMX M4 54',
        '(X) Kpz 50t',
        '(X) VK 90.01 (P)',
        '(X) Chieftain Mk. 6',
        '(X) Concept 1B',
        '(IX) Char Futur 4',
        '(IX) TL-7-120',
        '(IX) K-91',
        '(IX) Object 752',
        '(VIII) WZ-120-1 FT',
        '(VIII) WZ-122 TM',
        '(VIII) Skoda T 56',
        '(VIII) Progetto 46',
        '(VIII) Object 274a',
        '(VIII) Lansen C',
        '(VIII) B-C Bourrasque',
        '(VIII) AMX CDA 105',
        '(VIII) Skorpion G',
        '(VIII) M48A2 Räumpanzer',
        '(VIII) Keiler',
        '(VIII) Type 57',
        '(VIII) Titan-54d',
        '(VIII) GSOR 1008',
        '(VIII) Action X',
        '(VIII) Chimera',
        '(VIII) T77',
        '(VIII) M-IV-Y',
        '(VII) Helsing',
        '(VII) Dracula',
        '(VII) Smasher',
        '(VII) Annihilator',
    ]

    const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
    items.push(selectedTank);
    console.log(selectedTank);
    addTank(selectedTank);
    
    }



    const randompremium = Math.random() * 100;
    if(randompremium < 20.83){
        items.push('프리미엄 계정 7일');
    }else if(randompremium < 20.83 + 3.12){
        items.push('프리미엄 계정 14일');
    }else if(randompremium < 20.83 + 3.12 + 1.04){
        items.push('프리미엄 계정 30일');
    }


    const randomcrate = Math.random() * 100;
    if(randomcrate < 16.67){
        items.push('모두 모아보세요 상자');
    }else if(randomcrate < 16.67 + 16.67){
        items.push('블랙 상자 I');
        
    }else if(randomcrate < 16.67 + 16.67 + 16.67){
        items.push('미스터리 상자 ');
        
    }

    const randomkey = Math.random() * 100;
    if(randomkey < 7){
        items.push('자물쇠 상자 열쇠 1개');
    }





    const randomgold = Math.random() * 100;
    if(randomgold < 11.87){
        items.push('100골드');
        gold += 100;
    }else if(randomgold < 11.87 + 9.50){
        items.push('200골드');
        gold += 200;
    }else if(randomgold < 11.87 + 9.50 + 8.31){
        items.push('500골드');
        gold += 500;  
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12){
        items.push('750골드');
        gold += 750;    
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94){
        items.push('1000골드');
        gold += 1000;
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94 + 3.09){
        items.push('1500골드');
        gold += 1500;
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94 + 3.09 + 1.90){
        items.push('3000골드');
        gold += 3000;
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94 + 3.09 + 1.90 + 1.42){
        items.push('5000골드');
        gold += 5000;
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94 + 3.09 + 1.90 + 1.42 + 0.83){
        items.push('10000골드');
        gold += 10000;
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94 + 3.09 + 1.90 + 1.42 + 0.83 + 0.02){
        items.push('100000골드');
        gold += 100000;
    }

    const randomfreexp = Math.random() * 100;
    if(randomfreexp < 6.43){
        items.push('200 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43){
        items.push('500 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43){
        items.push('1000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83){
        items.push('2000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22){
        items.push('5000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57){
        items.push('10000 자유경험치');   
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61){
        items.push('15000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97){
        items.push('20000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97 + 0.32){
        items.push('50000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97 + 0.32 + 0.16){
        items.push('100000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97 + 0.32 + 0.16 + 0.02){
        items.push('250000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97 + 0.32 + 0.16 + 0.02 + 0.006){
        items.push('500000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97 + 0.32 + 0.16 + 0.02 + 0.006 + 0.003){
        items.push('1000000 자유경험치');
    }

    const randomxmboost = Math.random() * 100;
    if(randomxmboost < 21.21){
        items.push('경험치 3배 1개')
    }else if(randomxmboost < 21.21 + 15.15){
        items.push('경험치 3배 2개')
    }else if(randomxmboost < 21.21 + 15.15 + 9.09){
        items.push('경험치 3배 3개')
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18){
        items.push('경험치 4배 1개')
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18 + 12.12){
        items.push('경험치 4배 2개')
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06){
        items.push('경험치 4배 3개')
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06 + 9.09){
        items.push('경험치 5배 1개')
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06 + 9.09 + 6.06){
    items.push('경험치 5배 2개')
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03){
    items.push('경험치 5배 3개')
    }

    const randomfxpboost = Math.random() * 100;
    if(randomfxpboost < 60.61){
        items.push('자유경험치 200증서 3개')
    }else if(randomfxpboost < 60.61 + 30.30){
        items.push('자유경험치 2300증서 2개')
    }else if(randomfxpboost < 60.61 + 30.30 + 9.09){
        items.push('자유경험치 28000증서 1개')
    }

    const randombooster = Math.random() * 100;
    if(randombooster < 12.50){
        items.push('전투 경험치 부스터 15개(일반)')
    }else if(randombooster < 12.50 + 12.50){
        items.push('자유 경험치 부스터 15개(일반)')
    }else if(randombooster < 12.50 + 12.50 + 12.50){
        items.push('승무원 경험치 부스터 15개(일반))')
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50){
        items.push('크레딧 경험치 부스터 15개(일반)')
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33){
        items.push('전투 경험치 부스터 15개(희귀)')
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33){
        items.push('자유 경험치 부스터 15개(희귀)')
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33){
        items.push('승무원 경험치 부스터 15개(희귀)')
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33 + 8.33){
        items.push('크레딧 경험치 부스터 15개(희귀)')
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33 + 8.33 + 4.17){
        items.push('전투 경험치 부스터 15개(영웅)')
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33 + 8.33 + 4.17 + 4.17){
        items.push('자유 경험치 부스터 15개(영웅)')
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33 + 8.33 + 4.17 + 4.17 + 4.17){
        items.push('승무원 경험치 부스터 15개(영웅)')
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33 + 8.33 + 4.17 + 4.17 + 4.17 + 4.17){
        items.push('크레딧 경험치 부스터 15개(영웅)')
    }


    let autoslider = document.getElementById('autoslide');

    function addLogItem(items, container) {
    const el = document.createElement('div');
    el.textContent = items.join(', ');
    container.appendChild(el);
    
   
    if (autoslider && autoslider.checked) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
    }


    let container = document.getElementById('log-container');
    addLogItem(items, container);
    
    window.addEventListener('scroll', function() {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    finalgold.innerText = `획득한 골드: ${gold}개`;




return items;
}


let open = document.getElementById('open')
open.addEventListener('click', function() {
    const items = awc();
    const resultElement = document.getElementById('result');
    if (items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)'))) {
        resultElement.style.color = 'red';
        resultElement.style.backgroundColor = 'aqua';
    } else {
        resultElement.style.backgroundColor = 'white';
        resultElement.style.color = 'black';
    }
    resultElement.innerText = `결과: ${items.join(', ')}`;
    
});


let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', function() {
    container.innerHTML = '';
});



let log = document.getElementById('log');
log.addEventListener('click', function() {
    if (container.style.display === 'none') {
        container.style.display = 'block';
        deleteButton.style.display = 'block';
    }
    else {
        container.style.display = 'none';
        deleteButton.style.display = 'none';
    }
    
});



const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    opentimes = 0;
    gold = 0;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    finalgold.innerText = `총 골드량: ${gold}`;
    finaltanks.innerText = '획득한 탱크: ';
    howmuch = 0;
    tanks = [];

});



let box = document.getElementById('box');
box.addEventListener('change', function() {
    if (box.value == '1' || box.value == '2') {
        window.location.href = '/blackbox.html';
    } else if (box.value == '3') {
        window.location.href = '/mysterybox.html';
    } else if (box.value == '4') {
        window.location.href = '/cta.html';
    } else if (box.value == '5') {
        window.location.href = '/mega.html';
    } else if (box.value == '6') {
        window.location.href = '/awc.html'
    } else if (box.value == '7') {
        window.location.href = '/massive.html';
    } else if (box.value == '8') {
        window.location.href = '/country.html';
    }
});

