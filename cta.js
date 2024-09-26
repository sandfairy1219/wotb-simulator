const container = document.getElementById('log-container');
let howmuch = 0
let times = document.getElementById('times');
let goldreturn = document.getElementById('goldreturn');
let gold = 0
let usedgold = 0
let usegold = document.getElementById('usegold');
let goldAmuletCount = 0;
const finalgold = document.getElementById('finalgold');

let tanks = [];

const finaltanks = document.getElementById('tanks');

function updateFinalTanks() {
    finaltanks.innerText = '획득한 탱크: ' + tanks.join(', ');
}

// 탱크를 추가하는 함수
function addTank(tank) {
    tanks.push(tank);
    updateFinalTanks();
}


function cta() {
    const items = [];
    
    // 부스터 유형 선택
    const boosterTypes = ['크레딧부스터', '경험치부스터', '자유경험치부스터', '승무원경험치부스터'];
    const selectedBoosterType = boosterTypes[Math.floor(Math.random() * boosterTypes.length)];
    
    // 보상 등급 결정
    const rewardTier = Math.random() * 100;
    
    if (rewardTier < 5) {
        const tanks = ['(X) 121B',
            '(X) WZ-111 5A',
            '(X) AMX 30 B',
            '(X) AMX M4 54',
            '(X) VK 90.01 (P)',
            '(X) Cheiftain Mk. 6',
            '(X) Super Conqueror',
            '(X) FV217 Badger',
            '(X) Concept 1B',
            '(X) T95E6',
            '(X) M60',
            '(X) Object 907',
            '(X) Object 260',
            '(X) T-22 medium',
            '(X) Object 268/4',
            '(IX) WZ-114',
            '(IX) AMX 30 1er prototype',
            '(IX) Kpz 70',
            '(IX) T 55A',
            '(IX) K-91',
            '(IX) Object 752',
            '(VIII) 112 Glacial',
            '(VIII) WZ-120-1G FT',
            '(VIII) WZ-122 TM',
            '(VIII) Skoda T 56',
            '(VIII) SKoda T 27',
            '(VIII) Progetto M35 mod. 46',
            '(VIII) Lorraine 40 t',
            '(VIII) AMX CDC',
            '(VIII) Panzer 58',
            '(VIII) JgTig. 8,8 cm',
            '(VIII) JgTig. 8,8 cm (2015)',
            '(VIII) Löwe',
            '(VIII) Turtle Mk. 1',
            '(VIII) Defender Mk. 1',
            '(VIII) Chrysler K ',
            '(VIII) TS-5',
            '(VIII) ASTRON REX ',
            '(VIII) T28 Defender',
            '(VIII) M6A2E1 EXP',
            '(VIII) T26E4',
            '(VIII) T34',
            '(VIII) T34 (1776)',
            '(VIII) T95E2',
            '(VIII) IS-6',
            '(VIII) KV-5',
            '(VIII) ISU-130',
            '(VIII) T-54 mod. 1',
            '(VIII) T-44-100',
            '(VIII) STG',
            '(VIII) LT-432',
            '(VIII) Object 274a',
            '(VIII) Type 59',
            '(VIII) WZ-111',
            '(VIII) T-34-3',
            '(VIII) 59-Patton',
            '(VIII) WZ-122-2',
            '(VIII) Bisonte C45',
            '(VIII) Emil 1951',
            '(VIII) Lansen C',
            '(VIII) B-C Bourrasque',
            '(VIII) AMX Defender',
            '(VIII) M4A1 Revalorisé',
            '(VIII) Somua SM',
            '(VIII) AMX CDA 105',
            '(VIII) FCM 50t',
            '(VIII) Cheiftain',
            '(VIII) Kanonenjagdpanzer 105',
            '(VIII) Skorpion G',
            '(VIII) leKpz M 41 90 mm',
            '(VIII) VK 168.01 (P)',
            '(VIII) M48A2 Räumpanzer',
            '(VIII) Keiler',
            '(VIII) E 75 TS',
            '(VIII) Type 57',
            '(VIII) Titan-54d',
            '(VIII) GSOR 1008',
            '(VIII) Caliban',
            '(VIII) Action X',
            '(VIII) Centurion Mk. 5/1 RAAC',
            '(VIII) Chimera',
            '(VIII) T26E5',
            '(VIII) T54E2',
            '(VIII) T77',
            '(VIII) M-IV-Y',
            '(VIII) IS-2Sh',
            '(VIII) IS-3 Defender',
            '(VIII) Object 252U',
            '(VIII) SU-130PM',
            '(VIII) T-2020',
            '(VII) Type 62',
            '(VII) M41D',
            '(VII) Skoda T 45',
            '(VII) E 25',
            '(VII) Helsing',
            '(VII) WZ Blaze',
            '(VII) FV201 (A45)',
            '(VII) M6A2E1',
            '(VII) T23E3',
            '(VII) ISU-122S',
            '(VII) SU-122-44',
            '(VII) CS-52 LIS',
            '(VII) AMX 13 57',
            '(VII) AT 15A',
            '(VII) Steyr WT',
            '(VII) VK 45.03',
            '(VII) Kunze Panzer',
            '(VII) Panther/M10',
            '(VII) Tankenstein',
            '(VII) Dracula',
            '(VII) Gravedigger',
            '(VII) Smasher',
            '(VII) M4/FL10',
            '(VII) Lycan',
            '(VII) Titan H-Nd',
            '(VII) T28 HTC',
            '(VII) Super Hellcat',
            '(VII) IS-2 (1945)',
            '(VI) Bretagne Panther',
            '(VI) AC IV Sentinel',
            '(VI) TOG II*',
            '(VI) Cromwell B',
            '(VI) Pz . IV S',
            '(VI) Strv 74A2',
            '(VI) Churchill Mk. VI',
            '(VI) Loza Sherman',
            '(VI) Type 64',
            '(VI) Pudel',
            '(VI) Dicker Max',
            '(VI) Tiger 131',
            '(VI) Object 244',
            '(VI) SU-100Y',
            '(V) Angry Connor',
            '(V) Excelsior',
            '(V) Matilda BP',
            '(V) Krupp-38(D)',
            '(V) Pz.V/IV',
            '(V) T-25',
            '(V) Chi-Nu-Kai',
            '(V) Ram II',
            '(V) T14',
            '(V) Churchill III',
            '(V) Matilda IV',
            '(V) T-34 shielded',
            '(V) SU-85I',
            '(V) Scavenger',
            '(V) Nightmare',
            '(V) M4A2E4',
        ]
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    } else {
        // 골드부적 추가
        items.push('골드부적');
        goldAmuletCount++;
        // 자유경험치 증서 결정
        const randomCertificate = Math.random() * 100;
        let certificate;
        if (randomCertificate < 7.89) {
            certificate = '자유경험치 28000 증서 1개'; // 7.89% 확률
        } else if (randomCertificate < 9.47) {
            certificate = '자유경험치 28000 증서 2개'; // 1.58% 확률
        } else if (randomCertificate < 10.00) {
            certificate = '자유경험치 28000 증서 3개'; // 0.53% 확률
        } else if (randomCertificate < 37.63) {
            certificate = '자유경험치 2300 증서 1개'; // 27.63% 확률
        } else if (randomCertificate < 43.16) {
            certificate = '자유경험치 2300 증서 2개'; // 5.53% 확률
        } else if (randomCertificate < 45.00) {
            certificate = '자유경험치 2300 증서 3개'; // 1.84% 확률
        } else if (randomCertificate < 84.47) {
            certificate = '자유경험치 200 증서 10개'; // 39.47% 확률
        } else if (randomCertificate < 92.36) {
            certificate = '자유경험치 200 증서 15개'; // 7.89% 확률
        } else if (randomCertificate < 95.00) {
            certificate = '자유경험치 200 증서 20개'; // 2.63% 확률
        }
        items.push(certificate);
        
        // 자유경험치 증서와 같은 등급의 부스터 결정
        let booster;
        if (certificate.includes('28000')) {
            booster = `${selectedBoosterType}(영웅) 5개`;
        } else if (certificate.includes('2300')) {
            booster = `${selectedBoosterType}(희귀) 5개`;
        } else if (certificate.includes('200')) {
            booster = `${selectedBoosterType}(일반) 5개`;
        }
        items.push(booster);
        
        // 경험치 N배 증서 100% 확률로 추가
        const randomBoosterType = Math.random() * 100;
        let experienceBooster;
        if (randomBoosterType < 24.82) {
            experienceBooster = '경험치 3배증서 1개';
        } else if (randomBoosterType < 24.82 + 17.74) {
            experienceBooster = '경험치 3배증서 2개';
        } else if (randomBoosterType < 24.82 + 17.74 + 10.64) {
            experienceBooster = '경험치 3배증서 3개';
        } else if (randomBoosterType < 24.82 + 17.74 + 10.64 + 18.62) {
            experienceBooster = '경험치 4배증서 1개';
        } else if (randomBoosterType < 24.82 + 17.74 + 10.64 + 18.62 + 12.41) {
            experienceBooster = '경험치 4배증서 2개';
        } else if (randomBoosterType < 24.82 + 17.74 + 10.64 + 18.62 + 12.41 + 6.20) {
            experienceBooster = '경험치 4배증서 3개';
        } else if (randomBoosterType < 24.82 + 17.74 + 10.64 + 18.62 + 12.41 + 6.20 + 5.32) {
            experienceBooster = '경험치 5배증서 1개';
        } else if (randomBoosterType < 24.82 + 17.74 + 10.64 + 18.62 + 12.41 + 6.20 + 5.32 + 3.54) {
            experienceBooster = '경험치 5배증서 2개';
        } else {
            experienceBooster = '경험치 5배증서 3개';
        }
        
        items.push(experienceBooster);
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
    usedgold += 500
    usegold.textContent = `사용한 골드량 : ${usedgold}`;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    finalgold.textContent = `총 사용 골드량 : ${usedgold - gold}`;
    if (goldAmuletCount >= 7) {
        gold += 1000;
        goldAmuletCount = 0; // 골드부적 카운트 초기화
        goldreturn.textContent = `리턴 골드량 : ${gold}`;
    }
    return items;
    
}



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
        window.location.href = '/awc.html';
    } else if (box.value == '7') {
        window.location.href = '/massive.html';
    } else if (box.value == '8') {
        window.location.href = '/country.html';
    } else if (box.value == '9') {
        window.location.href = '/tank.html';
    }
});

let open = document.getElementById('open')
open.addEventListener('click', function() {
    const items = cta();
    const resultElement = document.getElementById('result');
    if (items.includes('골드부적')) {
        resultElement.style.color = 'black';
        resultElement.style.backgroundColor = 'white';
    } else {
        resultElement.style.color = 'red';
        resultElement.style.backgroundColor = 'aqua';
    }
    resultElement.innerText = `결과: ${items.join(', ')}`;
    
});


let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', function() {
    container.innerHTML = '';
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    howmuch = 0
    usedgold = 0
    gold = 0
    goldreturn.textContent = `리턴 골드량 : ${gold}`;
    usegold.textContent = `사용한 골드량 : ${usedgold}`;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    finalgold.textContent = `총 사용 골드량 : ${usedgold - gold}`;
    tanks = [];
    updateFinalTanks()
    ;
});

