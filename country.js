let times = document.getElementById('times');
let howmuch = 0;
const container = document.getElementById('log-container');
let tanks = [];
const finaltanks = document.getElementById('tanks');
const slider = document.getElementById('slider');
const slid = document.getElementById('slid');


function updateFinalTanks() {
    finaltanks.innerText = '획득한 탱크: ' + tanks.join(', ');
}
function addTank(tank) {
    tanks.push(tank);
    updateFinalTanks();
}

function ger(){
    const items = []

    const randomtank = Math.random() * 100;
    if(randomtank < 10){

    const tanks = [
        '(X) Kpz 50t',
        '(X) VK 90.01 (P)',
        '(IX) Erich Konzept I',
        '(IX) Kpz 70',
        '(VIII) Löwe',
        '(VIII) Panther 8,8',
        '(VIII) Panzer 58',
        '(VIII) HWK 30',
        '(VIII) JgTig. 8.8 cm',
        '(VIII) JgTig. 8.8 cm (2015)',
        '(VIII) Kanonenjagdpanzer 105',
        '(VIII) leKpz M 41 90 mm',
        '(VIII) Skorpion G',
        '(VIII) VK 168.01 (P)',
        '(VIII) M48A2 Räumpanzer',
        '(VIII) Kpz 07 RH',
        '(VIII) Kpz. Pr.68 (P)',
        '(VIII) Keiler',
        '(VIII) E 75 TS',
        '(VII) E 25',
        '(VII) Steyr WT',
    ]

    const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
    items.push(selectedTank);
    console.log(selectedTank);
    addTank(selectedTank);
    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;

    }else{
        const randomcamo = Math.random() * 100;
        if(randomcamo < 10){
            const camos = [
                '코뿔소 위장',
                'Digitized 위장',
                '독사 위장',
                '해충 방역 위장',
                '콜로서스 위장',
                '안전 은폐 위장',
                'Mutz 위장',
                '넘버 1 위장',
                '독수리 위장',
                '독침 위장',
                '강철 기병 위장',
                'Jager 위장',
                '뒤틀린 운명 위장',
                '쾨니히 위장',
                '대검 위장',
                'Spooky 위장',
            ]
            const selectedcamo = camo[Math.floor(Math.random() * camos.length)];
            items.push(selectedcamo);
            console.log(selectedcamo);
            howmuch++;
            times.innerText = `상자를 깐 횟수: ${howmuch}회`;
        
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

    






}






    return items;
}

function usa(){
    const items = []
    return items;
}

function ussr(){
    const items = []
    return items;
}

function uk(){
    const items = []
    return items;
}

function china(){
    const items = []
    return items;
}   

function france(){
    const items = []
    return items;
}

function europe(){
    const items = []
    return items;
}


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
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    finaltanks.innerText = '획득한 탱크: ';
    howmuch = 0;
});

let box = document.getElementById('box');
box.addEventListener('change', function() {
    if (box.value == '1' || box.value == '2') {
        window.location.href = '/blackbox';
    } else if (box.value == '3') {
        window.location.href = '/mysterybox';
    } else if (box.value == '4') {
        window.location.href = '/cta';
    } else if (box.value == '5') {
        window.location.href = '/mega';
    } else if (box.value == '6') {
        window.location.href = '/awc'
    } else if (box.value == '7') {
        window.location.href = '/massive';
    }
});


slider.addEventListener('input', function() {
    if (slider.value == 1) {
        slid.innerText = '독일 상자';
    }else if (slider.value == 2) {
        slid.innerText = '미국 상자';
    }else if (slider.value == 3) {
        slid.innerText = '소련 상자';
    }else if (slider.value == 4) {
        slid.innerText = '영국 상자';
    }else if (slider.value == 5) {
        slid.innerText = '중국 상자';   
    }else if (slider.value == 6) {
        slid.innerText = '프랑스 상자';
    }else if (slider.value == 7) {
        slid.innerText = '유럽 상자';
    }
});

const open = document.getElementById('open');
open.addEventListener('click', function() {
    if(slider.value == 1){
        const items = ger();
        const resultElement = document.getElementById('result');
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }
    else if(slider.value == 2){
        const items = usa();
        const resultElement = document.getElementById('result');
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }
    else if(slider.value == 3){
        const items = ussr();
        const resultElement = document.getElementById('result');
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }
    else if(slider.value == 4){
        const items = uk();
        const resultElement = document.getElementById('result');
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }
    else if(slider.value == 5){
        const items = china();
        const resultElement = document.getElementById('result');
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }
    else if(slider.value == 6){
        const items = france();
        const resultElement = document.getElementById('result');
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }
    else if(slider.value == 7){
        const items = europe();
        const resultElement = document.getElementById('result');
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }
});






