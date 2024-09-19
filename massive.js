let times = document.getElementById('times');
let howmuch = 0;
const container = document.getElementById('log-container');
let tanks = [];
const finaltanks = document.getElementById('tanks');
const resultElement = document.getElementById('result');
resultElement.style.color = 'red';
resultElement.style.backgroundColor = 'aqua';
const usedgold = document.getElementById('usedgold');
let usedgoldd = 0;




function updateFinalTanks() {
    finaltanks.innerText = '획득한 탱크: ' + tanks.join(', ');
}

// 탱크를 추가하는 함수
function addTank(tank) {
    tanks.push(tank);
    updateFinalTanks();
}


function massive() {
    const items = [];

    items.push('대규모 부적');

    usedgoldd += 12500;
    usedgold.innerText = `사용한 골드: ${usedgoldd}`;


    const tanks = [
        '(X) 114 SP2',
        '(X) Carro 45t',
        '(X) Strv K',
        '(X) VK 90.01 (P)',
        '(X) XM66f',
        '(X) Object 777 II',
        '(X) Object 268/4',
        '(IX) WZ-114',
        '(IX) BZ-58-2',
        '(IX) Char Futur 4',
        '(IX) Cobra',
        '(IX) TL-7-120',
        '(IX) Object 752',
        '(VIII) WZ-120-1 FT',
        '(VIII) Skoda T 56',
        '(VIII) Skoda T 27',
        '(VIII) Progetto 46',
        '(VIII) HWK 30',
        '(VIII) Charlemagne',
        '(VIII) ASTRON REX',
        '(VIII) ShPTK-TVP 100',
        '(VIII) Bisonte C45',
        '(VIII) EMIL 1951',
        '(VIII) Tornvagn',
        '(VIII) B-C Bourrasque',
        '(VIII) Somua SM',
        '(VIII) Skorpion G',
        '(VIII) Kpz 07 RH',
        '(VIII) Ka-Ri',
        '(VIII) GSOR 1008',
        '(VIII) Caliban',
        '(VIII) Chimera',
        '(VIII) T54E2',
        '(VIII) T77',
        '(VIII) M-IV-Y',
        '(VIII) Obj.252U',
        '(VIII) SU-130PM',
    ]

    const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
    items.push(selectedTank);
    console.log(selectedTank);
    addTank(selectedTank);

    // const randommegabox = Math.floor(Math.random() * 100);
    // if (randommegabox < 6.02) {
    //     items.push('메가 상자');

    // }









    return items
}











let open = document.getElementById('open')
open.addEventListener('click', function() {
    const items = massive();
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
});