let times = document.getElementById('times');
let howmuch = 0;
const container = document.getElementById('log-container');
let tanks = [];
let boxes = [];
const finaltanks = document.getElementById('tanks');
const finalboxes = document.getElementById('finalboxes');
const resultElement = document.getElementById('result');
resultElement.style.color = 'red';
resultElement.style.backgroundColor = 'aqua';
const usedgold = document.getElementById('usedgold');
let usedgoldd = 0;




function updateFinalTanks() {
    finaltanks.innerText = '획득한 탱크 : ' + tanks.join(', ');
}

function updateFinalBoxes() { 
    finalboxes.innerText = '획득한 상자: ' + boxes.join(', ');
}


function addTank(tank) {
    tanks.push(tank);
    updateFinalTanks();
}

function addBox(box) {
    boxes.push(box);
    updateFinalBoxes();
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

    const randombox = Math.floor(Math.random() * 100);
    if (randombox < 6.02) {
        items.push('메가 상자 2개');
        addBox('메가 상자 2개');
    }else if (randombox < 6.02 + 4.22) {
        items.push('메가 상자 3개');
        addBox('메가 상자 3개');
    }else if (randombox < 6.02 + 4.22 + 3.01) {
        items.push('메가 상자 5개');
        addBox('메가 상자 5개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05) {
        items.push('미스터리 상자 3개');
        addBox('미스터리 상자 3개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05 + 9.04) {
        items.push('미스터리 상자 5개');
        addBox('미스터리 상자 5개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05 + 9.04 + 4.22) {
        items.push('미스터리 상자 10개');
        addBox('미스터리 상자 10개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05 + 9.04 + 4.22 + 12.05) {
        items.push('모두 모아보세요 상자 3개');
        addBox('모두 모아보세요 상자 3개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05 + 9.04 + 4.22 + 12.05 + 9.04) {
        items.push('모두 모아보세요 상자 5개');
        addBox('모두 모아보세요 상자 5개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05 + 9.04 + 4.22 + 12.05 + 9.04 + 4.82) {
        items.push('모두 모아보세요 상자 7개');
        addBox('모두 모아보세요 상자 7개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05 + 9.04 + 4.22 + 12.05 + 9.04 + 4.82 + 12.05) {
        items.push('블랙 상자 I 2개');
        addBox('블랙 상자 I 2개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05 + 9.04 + 4.22 + 12.05 + 9.04 + 4.82 + 12.05 + 7.83) {
        items.push('블랙 상자 I 3개');
        addBox('블랙 상자 I 3개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05 + 9.04 + 4.22 + 12.05 + 9.04 + 4.82 + 12.05 + 7.83 + 6.02) {
        items.push('블랙 상자 I 5개');
        addBox('블랙 상자 I 5개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05 + 9.04 + 4.22 + 12.05 + 9.04 + 4.82 + 12.05 + 7.83 + 6.02 + 4.82) {
        items.push('끝내줘요 상자 1개');    
        addBox('끝내줘요 상자 1개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05 + 9.04 + 4.22 + 12.05 + 9.04 + 4.82 + 12.05 + 7.83 + 6.02 + 4.82 + 3.01) {
        items.push('끝내줘요 상자 2개');
        addBox('끝내줘요 상자 2개');
    }else if (randombox < 6.02 + 4.22 + 3.01 + 12.05 + 9.04 + 4.22 + 12.05 + 9.04 + 4.82 + 12.05 + 7.83 + 6.02 + 4.82 + 3.01 + 1.81) {
        items.push('끝내줘요 상자 3개');
        addBox('끝내줘요 상자 3개');
    }


    const randomItem = Math.floor(Math.random() * 100);
    if (randomItem < 7.69) {
        items.push('이모티콘 조명');
    } else if (randomItem < 7.69 * 2) {
        items.push('격통의 창');
    } else if (randomItem < 7.69 * 3) {
        items.push('테슬라 건');
    } else if (randomItem < 7.69 * 4) {
        items.push('냉각포');
    } else if (randomItem < 7.69 * 5) {
        items.push('테서랙트');
    } else if (randomItem < 7.69 * 6) {
        items.push('윌리 버드');
    } else if (randomItem < 7.69 * 7) {
        items.push('MG 08');
    } else if (randomItem < 7.69 * 8) {
        items.push('깜짝상자');
    } else if (randomItem < 7.69 * 9) {
        items.push('영혼 인도자');
    } else if (randomItem < 7.69 * 10) {
        items.push('밤의 날개');
    } else if (randomItem < 7.69 * 11) {
        items.push('블리츠 MP방위군');
    } else if (randomItem < 7.69 * 12) {
        items.push('D-2 Model 1926 AA Mount');
    } else if (randomItem < 7.69 * 13) {
        items.push('호박 초롱');
    } 

    const randommission = Math.floor(Math.random() * 100);
    if (randommission < 8.29) {
        items.push('끝내줘요! 상자 임무 (15승 - 상자 1개)');
    } else if (randommission < 8.29 * 2) {
        items.push('끝내줘요! 상자 임무 (25승 - 상자 2개)');
    } else if (randommission < 8.29 * 3) {
        items.push('끝내줘요! 상자 임무 (35승 - 상자 3개)');
    } else if (randommission < 8.29 * 4) {
        items.push('미스터리 상자 임무 (50승 - 상자 10개)');
    } else if (randommission < 8.29 * 5) {
        items.push('미스터리 상자 임무 (25승 - 상자 5개)');
    } else if (randommission < 8.29 * 6) {
        items.push('미스터리 상자 임무 (15승 - 상자 3개)');
    } else if (randommission < 8.29 * 7) {
        items.push('모두 모아보세요! 상자 임무 (10판 - 상자 1개)');
    } else if (randommission < 8.29 * 8) {
        items.push('모두 모아보세요! 상자 임무 (25판 - 상자 3개)');
    } else if (randommission < 8.29 * 9) {
        items.push('모두 모아보세요! 상자 임무 (50판 - 상자 5개)');
    } else if (randommission < 8.29 * 10) {
        items.push('메가 상자 임무 (15승 - 상자 1개)');
    } else if (randommission < 8.29 * 11) {
        items.push('메가 상자 임무 (25승 - 상자 3개)');
    } else if (randommission < 8.29 * 12) {
        items.push('메가 상자 임무 (50승 - 상자 5개)');
    } else if (randommission < 8.29 * 12 + 0.49) {
        items.push('대규모 배경 임무 (10승 - 대규모 프로필 배경) ' );
    }

    const randomxpcertificate = Math.floor(Math.random() * 100);
    if (randomxpcertificate < 21.21) {
        items.push('경험치 3배 증서 5개');
    }else if (randomxpcertificate < 21.21 + 15.15) {
        items.push('경험치 3배 증서 10개');
    }else if (randomxpcertificate < 21.21 + 15.15 + 9.09) {
        items.push('경험치 3배 증서 15개');
    }else if (randomxpcertificate < 21.21 + 15.15 + 9.09 + 18.18) {
        items.push('경험치 4배 증서 5개');
    }else if (randomxpcertificate < 21.21 + 15.15 + 9.09 + 18.18 + 12.12) {
        items.push('경험치 4배 증서 10개');
    }else if (randomxpcertificate < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06) {
        items.push('경험치 4배 증서 15개');
    }else if (randomxpcertificate < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06 + 9.09) {
        items.push('경험치 5배 증서 5개');
    }else if (randomxpcertificate < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06 + 9.09 + 6.06) {
        items.push('경험치 5배 증서 10개');
    }else if (randomxpcertificate < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03) {
        items.push('경험치 5배 증서 15개');
    }

    const randomgarage = Math.floor(Math.random() * 100);
    if (randomgarage < 3.12) {
        items.push('Chief 차고 설비');
    }else if (randomgarage < 3.12 + 3.12) {
        items.push('월면차 차고 설비');
    }else if (randomgarage < 3.12 + 3.12 + 3.12) {
        items.push('Bigfoot AWD Summer Edition 차고 설비');
    }else if (randomgarage < 3.12 + 3.12 + 3.12 + 3.12) {
        items.push('Bigfoot AWD Camo Edition 차고 설비');
    }else if (randomgarage < 3.12 + 3.12 + 3.12 + 3.12 + 3.12) {
        items.push('그랜드 다이아몬드 300D 차고 설비');
    }else if (randomgarage < 3.12 + 3.12 + 3.12 + 3.12 + 3.12 + 3.12) {
        items.push('모터사이클 차고 설비');
    }else if (randomgarage < 3.12 + 3.12 + 3.12 + 3.12 + 3.12 + 3.12 + 3.12) {
        items.push('사륜구동 차고 설비');
    }else if (randomgarage < 3.12 + 3.12 + 3.12 + 3.12 + 3.12 + 3.12 + 3.12 + 3.12) {
        items.push('Sky-High Precious 70 차고 설비');
    }


    const randomCamouflage = Math.floor(Math.random() * 100);
    if (randomCamouflage < 2.70) {
        items.push('Hugo 위장');
    } else if (randomCamouflage < 2.70 * 2) {
        items.push('Ayame 위장');
    } else if (randomCamouflage < 2.70 * 3) {
        items.push('Impulse 위장');
    } else if (randomCamouflage < 2.70 * 4) {
        items.push('Phantom 위장');
    } else if (randomCamouflage < 2.70 * 5) {
        items.push('Azimuth 위장');
    } else if (randomCamouflage < 2.70 * 6) {
        items.push('Stargazer 위장');
    } else if (randomCamouflage < 2.70 * 7) {
        items.push('Viking 위장');
    } else if (randomCamouflage < 2.70 * 8) {
        items.push('Morinoko-ju 위장');
    } else if (randomCamouflage < 2.70 * 9) {
        items.push('Zhulong 위장');
    } else if (randomCamouflage < 2.70 * 10) {
        items.push('Digitized 위장');
    } else if (randomCamouflage < 2.70 * 11) {
        items.push('Chronos 위장');
    } else if (randomCamouflage < 2.70 * 12) {
        items.push('Inventor 위장');
    } else if (randomCamouflage < 2.70 * 13) {
        items.push('Arachnid 위장');
    } else if (randomCamouflage < 2.70 * 14) {
        items.push('Beryl 위장');
    } else if (randomCamouflage < 2.70 * 15) {
        items.push('Ocellus 위장');
    } else if (randomCamouflage < 2.70 * 16) {
        items.push('Stalker 위장');
    } else if (randomCamouflage < 2.70 * 17) {
        items.push('Mjolnir 위장');
    } else if (randomCamouflage < 2.70 * 18) {
        items.push('Cannonball 위장');
    } else if (randomCamouflage < 2.70 * 19) {
        items.push('Principle 위장');
    } else if (randomCamouflage < 2.70 * 20) {
        items.push('Interception 위장');
    } else if (randomCamouflage < 2.70 * 21) {
        items.push('Stinging 위장');
    } else if (randomCamouflage < 2.70 * 22) {
        items.push('Gerandier 위장');
    } else if (randomCamouflage < 2.70 * 23) {
        items.push('Unbreakable 위장');
    } else if (randomCamouflage < 2.70 * 24) {
        items.push('Gongbi 위장');
    } else if (randomCamouflage < 2.70 * 25) {
        items.push('Blade 위장');
    } else if (randomCamouflage < 2.70 * 26) {
        items.push('Spooky 위장');
    } else if (randomCamouflage < 2.70 * 27) {
        items.push('Noir 위장');
    } else if (randomCamouflage < 2.70 * 28) {
        items.push('Shark 위장');
    } else if (randomCamouflage < 2.70 * 29) {
        items.push('Golem 위장');
    } else if (randomCamouflage < 2.70 * 30) {
        items.push('Scarface 위장');
    } else if (randomCamouflage < 2.70 * 31) {
        items.push('Glitch 위장');
    } else if (randomCamouflage < 2.70 * 32) {
        items.push('Seeker 위장');
    } else if (randomCamouflage < 2.70 * 33) {
        items.push('Konung 위장');
    } else if (randomCamouflage < 2.70 * 34) {
        items.push('Excalibur 위장');
    } else if (randomCamouflage < 2.70 * 35) {
        items.push('Stegosaurus 위장');
    } else if (randomCamouflage < 2.70 * 36) {
        items.push('Vigilant 위장');
    } else if (randomCamouflage < 2.70 * 37) {
        items.push('Rampant 위장');
    }


    const randomAvatar = Math.floor(Math.random() * 100);
    if (randomAvatar < 4.17) {
        items.push('당근 코 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 2) {
        items.push('잭 오 랜턴 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 3) {
        items.push('샌드웜 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 4) {
        items.push('베스트 프랜드 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 5) {
        items.push('바다괴물 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 6) {
        items.push('독장미 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 7) {
        items.push('영원한 삶 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 8) {
        items.push('행복한 나무 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 9) {
        items.push('청동 전사 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 10) {
        items.push('전기 충격 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 11) {
        items.push('달토끼 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 12) {
        items.push('무스 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 13) {
        items.push('접근금지 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 14) {
        items.push('아야메 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 15) {
        items.push('썬더버드 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 16) {
        items.push('흉포한 불도그 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 17) {
        items.push('완전입수 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 18) {
        items.push('꽥꽥이 납치 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 19) {
        items.push('셰프의 캠핑카 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 20) {
        items.push('야생 벌꿀 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 21) {
        items.push('해상 기동 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 22) {
        items.push('한 입 하실 분? 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 23) {
        items.push('신비로운 드래곤 애니메이션 아바타');
    } else if (randomAvatar < 4.17 * 24) {
        items.push('파이크오사우루스 애니메이션 아바타');
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
    
    howmuch += 1
    times.innerText = `상자를 깐 횟수: ${howmuch}`;







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
    } else if (box.value == '8') {
        window.location.href = '/country.html';
    } else if (box.value == '9') {
        window.location.href = '/tank.html';
    }
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    opentimes = 0;
    gold = 0;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    usedgold.innerText = `사용한 골드량: ${gold}`;
    finaltanks.innerText = '획득한 탱크: ';
    finalboxes.innerText = '획득한 상자: ';
    howmuch = 0;
    tanks = [];
    boxes = [];
});
