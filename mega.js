let times = document.getElementById('times');
let howmuch = 0;
const finalgold = document.getElementById('finalgold');
let gold = 0;
const container = document.getElementById('log-container');
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


function megabox(){
    const items = []
    
    items.push('골드부적')

    const randomtank = Math.random() * 100;
    if(randomtank < 5){

    const tanks = [
        '(X) 121B',
        '(X) WZ-111 model 5A',
        '(X) Carro 45 t',
        '(X) T-22 medium',
        '(X) Object 907',
        '(X) Object 260',
        '(X) Strv K',
        '(X) AMX 30 B',
        '(X) Kpz 50 t',
        '(X)VK 90.01 (P)',
        '(X) Chieftain Mk. 6',
        '(X) Super Conqueror',
        '(X) FV217 Badger',
        '(X) Concept 1B',
        '(X) T95E6',
        '(X) M60',
        '(X) Obj.777 II',
        '(IX) WZ-114',
        '(IX) Char Futur 4',
        '(IX) AMX 30 1er prototype',
        '(IX) Kpz 70',
        '(IX) T 55A',
        '(IX) TL-7-120',
        '(IX) K-91',
        '(IX) Object 752',
        '(VIII) 112 Glacial',
        '(VIII) WZ-120-1G FT',
        '(VIII) Skoda T 56',
        '(VIII) Skoda T 27',
        '(VIII) Progetto M35 mod. 46',
        '(VIII) A.P AMX 30',
        '(VIII) Loraine 40 t',
        '(VIII) AMX CDC',
        '(VIII) Panzer 58 ',
        '(VIII) HWK 30',
        '(VIII) Jgtig 8.8cm',
        '(VIII) Jgtig 8.8cm(2015)',
        '(VIII) Löwe',
        '(VIII) Turtle Mk. 1',
        '(VIII) Defender Mk. 1',
        '(VIII) Chrysler K',
        '(VIII) TS-5',
        '(VIII) ASTRON REX',
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
        '(VIII) WZ-112-2',
        '(VIII) Bisonte C45',
        '(VIII) EMIL 1951',
        '(VIII) Lansen C',
        '(VIII) Tornvagn',
        '(VIII) B-C Bourrasque',
        '(VIII) AMX Defender',
        '(VIII) M4A1 Revalorisé',
        '(VIII) Somua SM',
        '(VIII) FCM 50 t',
        '(VIII) Cheiftain',
        '(VIII) Kanonenjagdpanzer 105',
        '(VIII) Skorpion G',
        '(VIII) lekpz M 41 90 mm',
        '(VIII) VK 168.01 (P)',
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
        '(VII) Annihilator',
        '(VII) Titan H-Nd',
        '(VII) T28 HTC',
        '(VII) IS-2 (1945)',
        '(VII) T-44-85',
        '(VI) Bretagne Panther',
        '(VI) AC IV Sentinel',
        '(VI) TOG II*',
        '(VI) Cromwell B',
        '(VI) Pz. IV Schmalturm',
        '(VI) Strv 74A2',
        '(VI) Churchill Mk. VI',
        '(VI) Loza M4-A2 Sherman',
        '(VI) T-34-85 Victory',
        '(VI) Type 64',
        '(VI) Pudel',
        '(VI) Dicker Max',
        '(VI) Tiger 131',
        '(VI) Titan T24 57',
        '(VI) Object 244',
        '(VI) SU-100Y',
        '(V) Angry Connor',
        '(V) Excelsior',
        '(V) Matilda BP',
        '(V) Krupp-38(D)',
        '(V) Pz.V/IV',
        '(V) T-25',
        '(V) Chi-Nu Kai',
        '(V) Ram II',
        '(V) T14',
        '(V) Churchill III',
        '(V) Matilda IV',
        '(V) T-34 shielded',
        '(V) SU-85I',
        '(V) Scavenger',
        '(V) Nightmare',
        '(V) Spike',
        '(V) M4A2E4',
    ]
    const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
    items.push(selectedTank);
    console.log(selectedTank);
    addTank(selectedTank);
    


    }

    

    const randombooster = Math.random() * 100;
    if(randombooster < 17.65){
        items.push('경험치 부스터 10개(희귀)')
    }else if(randombooster < 35.3){
        items.push('자유 경험치 부스터 10개(희귀)')
    }else if(randombooster < 52.95){
        items.push('크레딧 부스터 10개(희귀)')
    }else if(randombooster < 70.6){
        items.push('승무원 경험치 부스터 10개(희귀)')
    }else if(randombooster < 70.6 + 5.88){
        items.push('경험치 부스터 10개(에픽)')
    }else if(randombooster < 70.6 + 5.88 + 5.88){
        items.push('자유 경험치 부스터 10개(에픽)')
    }else if(randombooster < 70.6 + 5.88 + 5.88 + 5.88){
        items.push('크레딧 부스터 10개(에픽)')
    }else if(randombooster < 70.6 + 5.88 + 5.88 + 5.88 + 5.88){
        items.push('승무원 경험치 부스터 10개(에픽)')
    }else{
        items.push('골드부스터 5개')
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

    const randomlockkey = Math.random() * 100;
    if(randomlockkey < 5){
        items.push('자물쇠 상자 열쇠 1개')
    }

    
    const decorationChance = Math.random() * 100;
    if(decorationChance < 1.54){
        items.push('테슬라 건');
    }else if(decorationChance < 1.54 + 1.54){
        items.push('테서랙트');
    }else if(decorationChance < 1.54 + 1.54 + 0.77){
        items.push('격통의 창');
    }else if(decorationChance < 1.54 + 1.54 + 0.77 + 0.77){
        items.push('이모티콘 조명');
    }else if(decorationChance < 1.54 + 1.54 + 0.77 + 0.77 + 0.77){
        items.push('깜짝 상자');
    }else if(decorationChance < 1.54 + 1.54 + 0.77 + 0.77 + 0.77 + 0.77){
        items.push('금항아리');
    }else if(decorationChance < 1.54 + 1.54 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77){
        items.push('영혼 인도자');
    }else if(decorationChance < 1.54 + 1.54 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77){
        items.push('월리 버드');
    }else if(decorationChance < 1.54 + 1.54 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77){
        items.push('냉각포');
    }else if(decorationChance < 1.54 + 1.54 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77){
        items.push('눈사람 탱키');
    }else if(decorationChance < 1.54 + 1.54 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77 + 0.77){
        items.push('반려로봇');
    }
    
    const ctaChance = Math.random() * 100;
    if(ctaChance < 6.35){
        items.push('모두 모아보세요 상자 1개');
    }

    const blackboxChance = Math.random() * 100;
    if(blackboxChance < 6.35){
        items.push('블랙상자 1개');
    }

    const mysteryboxChance = Math.random() * 100;
    if(mysteryboxChance < 6.35){
        items.push('미스터리 상자 1개');
    }

    const grandsurpriseChance = Math.random() * 100;
    if(grandsurpriseChance < 0.95){
        items.push('대형 깜짝 상자 1개');
    }

        const randomgold = Math.random() * 100;
    if(randomgold < 39.68){
        items.push('골드 250개');
        gold += 250;
    }else if(randomgold < 39.68 + 26.45){
        items.push('골드 300개');
        gold += 300;
    }else if(randomgold < 39.68 + 26.45 + 19.84){
        items.push('골드 350개');
        gold += 350;
    }else if(randomgold < 39.68 + 26.45 + 19.84 + 8.27){
        items.push('골드 500개');
        gold += 500;
    }else if(randomgold < 39.68 + 26.45 + 19.84 + 8.27 + 2.31){
        items.push('골드 750개');
        gold += 750;
    }else if(randomgold < 39.68 + 26.45 + 19.84 + 8.27 + 2.31 + 1.65){
        items.push('골드 1000개');
        gold += 1000;
    }else if(randomgold < 39.68 + 26.45 + 19.84 + 8.27 + 2.31 + 1.65 + 1.16){
        items.push('골드 1500개');
        gold += 1500;
    }else if(randomgold < 39.68 + 26.45 + 19.84 + 8.27 + 2.31 + 1.65 + 1.16 + 0.33){
        items.push('골드 3000개');
        gold += 3000;
    }else if(randomgold < 39.68 + 26.45 + 19.84 + 8.27 + 2.31 + 1.65 + 1.16 + 0.33 + 0.17){
        items.push('골드 5000개');
        gold += 5000;
    }else if(randomgold < 39.68 + 26.45 + 19.84 + 8.27 + 2.31 + 1.65 + 1.16 + 0.33 + 0.17 + 0.10){
        items.push('골드 10000개');
        gold += 10000;
    }else if(randomgold < 39.68 + 26.45 + 19.84 + 8.27 + 2.31 + 1.65 + 1.16 + 0.33 + 0.17 + 0.10 + 0.02){
        items.push('골드 20000개');
        gold += 20000;
    }else if(randomgold < 39.68 + 26.45 + 19.84 + 8.27 + 2.31 + 1.65 + 1.16 + 0.33 + 0.17 + 0.10 + 0.02 + 0.01){
        items.push('골드 50000개');
        gold += 50000;
    }else if(randomgold < 39.68 + 26.45 + 19.84 + 8.27 + 2.31 + 1.65 + 1.16 + 0.33 + 0.17 + 0.10 + 0.02 + 0.01 + 0.01){
        items.push('골드 100000개');
        gold += 100000;
    }


    const randomfxp = Math.random() * 100;
    if(randomfxp < 9.75){
        items.push('자유경험치 200개');
    }else if(randomfxp < 9.75 + 9.75){
        items.push('자유경험치 500개');
    }else if(randomfxp < 9.75 + 9.75 + 9.75){
        items.push('자유경험치 1000개');
    }else if(randomfxp < 9.75 + 9.75 + 9.75 + 7.31){
        items.push('자유경험치 2000개');
    }else if(randomfxp < 9.75 + 9.75 + 9.75 + 7.31 + 4.87){
        items.push('자유경험치 5000개');
    }else if(randomfxp < 9.75 + 9.75 + 9.75 + 7.31 + 4.87 + 3.90){
        items.push('자유경험치 10000개');
    }else if(randomfxp < 9.75 + 9.75 + 9.75 + 7.31 + 4.87 + 3.90 + 2.44){
        items.push('자유경험치 15000개');
    }else if(randomfxp < 9.75 + 9.75 + 9.75 + 7.31 + 4.87 + 3.90 + 2.44 + 1.46){
        items.push('자유경험치 20000개');
    }else if(randomfxp < 9.75 + 9.75 + 9.75 + 7.31 + 4.87 + 3.90 + 2.44 + 1.46 + 0.49){
        items.push('자유경험치 50000개');
    }else if(randomfxp < 9.75 + 9.75 + 9.75 + 7.31 + 4.87 + 3.90 + 2.44 + 1.46 + 0.49 + 0.24){
        items.push('자유경험치 100000개');
    }else if(randomfxp < 9.75 + 9.75 + 9.75 + 7.31 + 4.87 + 3.90 + 2.44 + 1.46 + 0.49 + 0.24 + 0.03){
        items.push('자유경험치 250000개');
    }else if(randomfxp < 9.75 + 9.75 + 9.75 + 7.31 + 4.87 + 3.90 + 2.44 + 1.46 + 0.49 + 0.24 + 0.03 + 0.01){
        items.push('자유경험치 500000개');
    }else if(randomfxp < 9.75 + 9.75 + 9.75 + 7.31 + 4.87 + 3.90 + 2.44 + 1.46 + 0.49 + 0.24 + 0.03 + 0.01 + 0.005){
        items.push('자유경험치 1000000개');
    }

    
    

    // autoslider 체크박스를 가져옵니다.
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
    
    if(howmuch % 10 == 0){
        gold += 1000;
    }


    return items;
}



let open = document.getElementById('open')
open.addEventListener('click', function() {
    const items = megabox();
    const resultElement = document.getElementById('result');
    if (items.includes('(X)', '(IX)' , '(VIII)', '(VII)', '(VI)', '(V)')) {
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