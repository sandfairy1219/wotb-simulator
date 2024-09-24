const container = document.getElementById('log-container');
const times = document.getElementById('times');
const mc = document.getElementById('mc');
let mctimes = 0;
let opentimes = 0;
function mysteryBox() {
    const items = [];
    
    // 자유경험치 200증서 2개
    items.push('자유경험치 200증서 2개'); // 100% 확률
    
    // 나머지 아이템을 결정
    const itemChoices = [
        { name: '미스터리증서', chance: 5 },
        { name: '골드 100개', chance: 11.91 },
        { name: '골드 200개', chance: 7.44 },
        { name: '골드 500개', chance: 2.98 },
        { name: '골드 1500개', chance: 1 },
        { name: '골드 3000개', chance: 0.51 },
        { name: '골드 5000개', chance: 0.15 },
        { name: '골드 100000개', chance: 0.01 },
        { name: '자유경험치 2000개', chance: 17.88 },
        { name: '자유경험치 4000개', chance: 8.94 },
        { name: '자유경험치 7000개', chance: 3.58 },
        { name: '자유경험치 10000개', chance: 1.79 },
        { name: '자유경험치 30000개', chance: 0.61 },
        { name: '자유경험치 100000개', chance: 0.18 },
        { name: '자유경험치 500000개', chance: 0.04 },
        { name: '크레딧 50000개', chance: 7.01 },
        { name: '크레딧 75000개', chance: 3.5 },
        { name: '크레딧 100000개', chance: 2.31 },
        { name: '크레딧 200000개', chance: 1.40 },
        { name: '크레딧 500000개', chance: 0.70 },
        { name: '크레딧 1000000개', chance: 0.07 },
        { name: '번개잡이 아바타(전설)', chance: 0.30 },
        
        { name: '번개잡이 아바타(영웅)', chance: 2.7 },
        { name: '골드 부스터 1개', chance: 9.76 },
        { name: '골드 부스터 2개', chance: 4.88 },
        { name: '골드 부스터 3개', chance: 3.25 },
        { name: '골드 부스터 5개', chance: 1.41 },
        { name: '골드 부스터 10개', chance: 0.70 }
    ];

    // 모든 아이템의 누적 확률을 계산하여 랜덤 아이템 선택
    const totalChance = itemChoices.reduce((sum, item) => sum + item.chance, 0);
    const randomChance = Math.random() * totalChance;
    let cumulativeChance = 0;

    for (const item of itemChoices) {
        cumulativeChance += item.chance;
        if (randomChance <= cumulativeChance) {
            items.push(item.name);
            break;
        }
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

    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;

    if (items.includes('미스터리증서')) {
        mctimes++;
        mc.innerText = `미스터리증서 획득 횟수: ${mctimes}`;
    }

    return items;
}

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

let open = document.getElementById('open')
open.addEventListener('click', function() {
    const items = mysteryBox();
    const resultElement = document.getElementById('result');
    if (items.includes('미스터리증서')) {
        resultElement.style.color = 'red';
        resultElement.style.backgroundColor = 'aqua';
    } else {
        resultElement.style.color = 'black';
        resultElement.style.backgroundColor = 'white';
    }
    resultElement.innerText = `결과: ${items.join(', ')}`;
    
});

let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', function() {
    container.innerHTML = '';
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    opentimes = 0;
    mctimes = 0;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    mc.innerText = `미스터리증서 획득 횟수: ${mctimes}`
    ;
});
