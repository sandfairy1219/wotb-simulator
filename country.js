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
    
    items.push('독일 전차 부적');

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
            const selectedcamo = camos[Math.floor(Math.random() * camos.length)];
            items.push(selectedcamo);
            console.log(selectedcamo);
            
        }
    }
    
    
    const randomxpcertificate = Math.random() * 100;
    if(randomxpcertificate < 60.61){
        items.push('자유 경험치 200 증서 3개');
    }else if(randomxpcertificate < 90.91){
        items.push('자유 경험치 2300 증서 2개');
    }else if(randomxpcertificate < 100){
        items.push('자유 경험치 28000 증서 1개');
    }


    const randombooster = Math.random() * 100;
    if(randombooster < 12.5){
        items.push('자유 경험치 부스터 15개 (일반)');
    }else if(randombooster < 25){
        items.push('전투 경험치 부스터 15개 (일반)');
    }else if(randombooster < 37.5){
        items.push('크레딧 부스터 15개 (일반)');
    }else if(randombooster < 50){
        items.push('승무원 경험치 부스터 15개 (일반)');
    }else if(randombooster < 50 + 8.33){
        items.push('자유 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 2){
        items.push('전투 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 3){
        items.push('크레딧 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4){
        items.push('승무원 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17){
        items.push('자유 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 2){
        items.push('전투 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 3){
        items.push('크레딧 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 4){
        items.push('승무원 경험치 부스터 15개 (영웅)');
    }


    const randomxp = Math.random() * 100;
    if(randomxp < 18.18){
        items.push('경험치 4배 증서 1개');
    }else if(randomxp < 18.18 + 12.12){
        items.push('경험치 4배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06){
        items.push('경험치 4배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09){
        items.push('경험치 5배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06){
        items.push('경험치 5배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03){
        items.push('경험치 5배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21){
        items.push('경험치 3배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15){
        items.push('경험치 3배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15 + 9.09){
        items.push('경험치 3배 증서 3개');
    }





    let autoslider = document.getElementById('autoslide');
    
    function addLogItem(items, container) {
        const el = document.createElement('div');

        const hasSpecialItem = items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') || item.includes('(VI)') || item.includes('(V)'));
    
    // 특별 아이템이 있으면 스타일 적용
    if (hasSpecialItem) {
        el.style.color = 'red';
        el.style.backgroundColor = 'aqua';
        el.style.padding = '10px';
        el.style.margin = '5px 0';
        el.style.borderRadius = 'var(--border-radius)';
    }
        el.textContent = items.join(', ');
        container.appendChild(el);
        
        
        if (autoslider && autoslider.checked) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    
    let container = document.getElementById('log-container');
    addLogItem(items, container);
    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    
    window.addEventListener('scroll', function() {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    return items;
}

function usa(){
    const items = []
    
    items.push('미국 전차 부적');

    const randomtank = Math.random() * 100;
    if(randomtank < 10){
        
        const tanks = [
            '(X) Concept 1B',
            '(X) XM66F',
            '(X) T95E6',
            '(X) M60',
            '(IX) TL-7-120',
            '(VIII) T26E5',
            '(VIII) Chrysler K',
            '(VIII) T26E4',
            '(VIII) T34',
            '(VIII) TS-5',
            '(VIII) ASTRON REX',
            '(VIII) T28 Defender',
            '(VIII) T34 (1776)',
            '(VIII) T95E2',
            '(VIII) T25 Pilot',
            '(VIII) T54E2',
            '(VIII) T77',
            '(VIII) M-IV-Y',
            '(VIII) TS-60',
            '(VII) T26E3 Eagle 7',
            '(VII) T23E3',
            '(VII) M6A2E1',
            '(VII) T28 HTC',
            '(VII) Super Hellcat',
            '(VI) Fury',
        ]
        
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    }else{
        const randomcamo = Math.random() * 100;
        if(randomcamo < 10){
            const camos = [
                'TomaHawk 위장',
                'H-Combat 위장',
                '아야메 위장',
                '아라크니드 위장',
                'D-Gunner 위장',
                'Dignity 위장',
                '스토커 위장',
                '피라냐 위장',
                'Rocketeer 위장',
                '보안관 위장',
                '포식자 위장',
                '용감무쌍 위장',
                'Cannonball 위장',
                '방위각 위장',
                '상어 위장',
                '들소 위장',
                '전사 위장',
                '썬더버드 위장',
            ]
            const selectedcamo = camos[Math.floor(Math.random() * camos.length)];
            items.push(selectedcamo);
            console.log(selectedcamo);
            
        }
    }
    
    
    const randomxpcertificate = Math.random() * 100;
    if(randomxpcertificate < 60.61){
        items.push('자유 경험치 200 증서 3개');
    }else if(randomxpcertificate < 90.91){
        items.push('자유 경험치 2300 증서 2개');
    }else if(randomxpcertificate < 100){
        items.push('자유 경험치 28000 증서 1개');
    }


    const randombooster = Math.random() * 100;
    if(randombooster < 12.5){
        items.push('자유 경험치 부스터 15개 (일반)');
    }else if(randombooster < 25){
        items.push('전투 경험치 부스터 15개 (일반)');
    }else if(randombooster < 37.5){
        items.push('크레딧 부스터 15개 (일반)');
    }else if(randombooster < 50){
        items.push('승무원 경험치 부스터 15개 (일반)');
    }else if(randombooster < 50 + 8.33){
        items.push('자유 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 2){
        items.push('전투 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 3){
        items.push('크레딧 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4){
        items.push('승무원 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17){
        items.push('자유 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 2){
        items.push('전투 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 3){
        items.push('크레딧 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 4){
        items.push('승무원 경험치 부스터 15개 (영웅)');
    }


    const randomxp = Math.random() * 100;
    if(randomxp < 18.18){
        items.push('경험치 4배 증서 1개');
    }else if(randomxp < 18.18 + 12.12){
        items.push('경험치 4배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06){
        items.push('경험치 4배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09){
        items.push('경험치 5배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06){
        items.push('경험치 5배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03){
        items.push('경험치 5배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21){
        items.push('경험치 3배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15){
        items.push('경험치 3배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15 + 9.09){
        items.push('경험치 3배 증서 3개');
    }





    let autoslider = document.getElementById('autoslide');
    
    function addLogItem(items, container) {
        const el = document.createElement('div');

        const hasSpecialItem = items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') || item.includes('(VI)') || item.includes('(V)'));
    
    // 특별 아이템이 있으면 스타일 적용
    if (hasSpecialItem) {
        el.style.color = 'red';
        el.style.backgroundColor = 'aqua';
        el.style.padding = '10px';
        el.style.margin = '5px 0';
        el.style.borderRadius = 'var(--border-radius)';
    }
        el.textContent = items.join(', ');
        container.appendChild(el);
        
        
        if (autoslider && autoslider.checked) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    
    let container = document.getElementById('log-container');
    addLogItem(items, container);
    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    
    window.addEventListener('scroll', function() {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    return items;
}

function ussr(){
    const items = []
    
    items.push('소련 전차 부적');

    const randomtank = Math.random() * 100;
    if(randomtank < 10){
        
        const tanks = [
            '(X) Obj. 907',
            '(X) Obj. 260',
            '(X) Obj. 777 II',
            '(X) T-22 Medium',
            '(X) Object 268/4',
            '(IX) K-91',
            '(IX) Object 752',
            '(IX) Object 452K',
            '(VIII) IS-6',
            '(VIII) KV-5',
            '(VIII) ISU-130',
            '(VIII) T-54 Mod. 1',
            '(VIII) T-44-100',
            '(VIII) STG',
            '(VIII) LT-432',
            '(VIII) Object 274a',
            '(VIII) IS-2Sh',
            '(VIII) Obj. 252U',
            '(VIII) SU-130PM',
            '(VIII) T-2020',
            '(VII) T-44-85',
        ]
        
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    }else{
        const randomcamo = Math.random() * 100;
        if(randomcamo < 10){
            const camos = [
                '지옥 위장',
                '천문학자 위장',
                '임펄스 위장',
                '크로노스 위장',
                '원래 위장',
                '무자비 위장',
                'Burn 위장',
                '스카페이스 위장',
                '언캐쳐블 위장',
                '파이크 위장',
                '냉철함 위장',
                '삼엄한 경계 위장',
            ]
            const selectedcamo = camos[Math.floor(Math.random() * camos.length)];
            items.push(selectedcamo);
            console.log(selectedcamo);
            
        }
    }
    
    
    const randomxpcertificate = Math.random() * 100;
    if(randomxpcertificate < 60.61){
        items.push('자유 경험치 200 증서 3개');
    }else if(randomxpcertificate < 90.91){
        items.push('자유 경험치 2300 증서 2개');
    }else if(randomxpcertificate < 100){
        items.push('자유 경험치 28000 증서 1개');
    }


    const randombooster = Math.random() * 100;
    if(randombooster < 12.5){
        items.push('자유 경험치 부스터 15개 (일반)');
    }else if(randombooster < 25){
        items.push('전투 경험치 부스터 15개 (일반)');
    }else if(randombooster < 37.5){
        items.push('크레딧 부스터 15개 (일반)');
    }else if(randombooster < 50){
        items.push('승무원 경험치 부스터 15개 (일반)');
    }else if(randombooster < 50 + 8.33){
        items.push('자유 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 2){
        items.push('전투 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 3){
        items.push('크레딧 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4){
        items.push('승무원 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17){
        items.push('자유 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 2){
        items.push('전투 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 3){
        items.push('크레딧 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 4){
        items.push('승무원 경험치 부스터 15개 (영웅)');
    }


    const randomxp = Math.random() * 100;
    if(randomxp < 18.18){
        items.push('경험치 4배 증서 1개');
    }else if(randomxp < 18.18 + 12.12){
        items.push('경험치 4배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06){
        items.push('경험치 4배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09){
        items.push('경험치 5배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06){
        items.push('경험치 5배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03){
        items.push('경험치 5배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21){
        items.push('경험치 3배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15){
        items.push('경험치 3배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15 + 9.09){
        items.push('경험치 3배 증서 3개');
    }





    let autoslider = document.getElementById('autoslide');
    
    function addLogItem(items, container) {
        const el = document.createElement('div');

        const hasSpecialItem = items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') || item.includes('(VI)') || item.includes('(V)'));
    
    // 특별 아이템이 있으면 스타일 적용
    if (hasSpecialItem) {
        el.style.color = 'red';
        el.style.backgroundColor = 'aqua';
        el.style.padding = '10px';
        el.style.margin = '5px 0';
        el.style.borderRadius = 'var(--border-radius)';
    }
        el.textContent = items.join(', ');
        container.appendChild(el);
        
        
        if (autoslider && autoslider.checked) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    
    let container = document.getElementById('log-container');
    addLogItem(items, container);
    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    
    window.addEventListener('scroll', function() {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    return items;
}

function uk(){
    const items = []
    
    items.push('영국 전차 부적');

    const randomtank = Math.random() * 100;
    if(randomtank < 10){
        
        const tanks = [
            '(X) Chieftain Mk. 6',
            '(X) Super Conqueror',
            '(X) FV217 Badger',
            '(VIII) Charlemange',
            '(VIII) Caernarvon Defender',
            '(VIII) Turtle Mk. I',
            '(VIII) Defender Mk. 1',
            '(VIII) Chieftain',
            '(VIII) GSOR 1008',
            '(VIII) Caliban',
            '(VIII) Action X',
            '(VIII) Centurion Mk. 5/1',
            '(VIII) Chimera',
            '(VII) FV201 (A45)',
            '(VII) AT 15A',
            '(VI) AC IV Sentinel',
            '(VI) TOG II*',
            '(VI) Cromwell B',
            '(VI) Churchill Mk. VI'
        ]
        
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    }else{
        const randomcamo = Math.random() * 100;
        if(randomcamo < 10){
            const camos = [
                '휴고 위장',
                'Esquire 위장',
                '베를린 위장',
                '굳은 의지 위장',
                'Excalibur 위장',
                'Rex 위장',
                '딩고 위장',
                '팬텀 위장',
                '발명가 위장',
                '헤르티지 위장',
                '배갑 위장',
                '모르포 위장',
                '호러 위장',
            ]
            const selectedcamo = camos[Math.floor(Math.random() * camos.length)];
            items.push(selectedcamo);
            console.log(selectedcamo);
            
        }
    }
    
    
    const randomxpcertificate = Math.random() * 100;
    if(randomxpcertificate < 60.61){
        items.push('자유 경험치 200 증서 3개');
    }else if(randomxpcertificate < 90.91){
        items.push('자유 경험치 2300 증서 2개');
    }else if(randomxpcertificate < 100){
        items.push('자유 경험치 28000 증서 1개');
    }


    const randombooster = Math.random() * 100;
    if(randombooster < 12.5){
        items.push('자유 경험치 부스터 15개 (일반)');
    }else if(randombooster < 25){
        items.push('전투 경험치 부스터 15개 (일반)');
    }else if(randombooster < 37.5){
        items.push('크레딧 부스터 15개 (일반)');
    }else if(randombooster < 50){
        items.push('승무원 경험치 부스터 15개 (일반)');
    }else if(randombooster < 50 + 8.33){
        items.push('자유 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 2){
        items.push('전투 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 3){
        items.push('크레딧 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4){
        items.push('승무원 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17){
        items.push('자유 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 2){
        items.push('전투 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 3){
        items.push('크레딧 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 4){
        items.push('승무원 경험치 부스터 15개 (영웅)');
    }


    const randomxp = Math.random() * 100;
    if(randomxp < 18.18){
        items.push('경험치 4배 증서 1개');
    }else if(randomxp < 18.18 + 12.12){
        items.push('경험치 4배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06){
        items.push('경험치 4배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09){
        items.push('경험치 5배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06){
        items.push('경험치 5배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03){
        items.push('경험치 5배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21){
        items.push('경험치 3배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15){
        items.push('경험치 3배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15 + 9.09){
        items.push('경험치 3배 증서 3개');
    }





    let autoslider = document.getElementById('autoslide');
    
    function addLogItem(items, container) {
        const el = document.createElement('div');

        const hasSpecialItem = items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') || item.includes('(VI)') || item.includes('(V)'));
    
    // 특별 아이템이 있으면 스타일 적용
    if (hasSpecialItem) {
        el.style.color = 'red';
        el.style.backgroundColor = 'aqua';
        el.style.padding = '10px';
        el.style.margin = '5px 0';
        el.style.borderRadius = 'var(--border-radius)';
    }
        el.textContent = items.join(', ');
        container.appendChild(el);
        
        
        if (autoslider && autoslider.checked) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    
    let container = document.getElementById('log-container');
    addLogItem(items, container);
    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    
    window.addEventListener('scroll', function() {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    return items;
}

function china(){
    const items = []
    
    items.push('중국 전차 부적');

    const randomtank = Math.random() * 100;
    if(randomtank < 10){
        
        const tanks = [
            '(X) 121B',
            '(X) WZ-111 5A',
            '(IX) WZ-114',
            '(VIII) WZ-111',
            '(VIII) WZ-120-1 FT',
            '(VIII) 112 Glacial',
            '(VIII) WZ-122 TM',
            '(VIII) Type 59',
            '(VIII) T-34-3',
            '(VIII) 59-Patton',
            '(VIII) WZ-112-2',
            '(VII) Type 62',
            '(VII) M41D',
            '(VII) WZ Blaze',
        ]
        
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    }else{
        const randomcamo = Math.random() * 100;
        if(randomcamo < 10){
            const camos = [
                '앵무새 위장',
                '무적 위장',
                'Gongbi 위장',
                '딩 위장',
                '비취 위장',
                '홍염룡 위장',
                'Celestial 위장',
                ''
            ]
            const selectedcamo = camos[Math.floor(Math.random() * camos.length)];
            items.push(selectedcamo);
            console.log(selectedcamo);
            
        }
    }
    
    
    const randomxpcertificate = Math.random() * 100;
    if(randomxpcertificate < 60.61){
        items.push('자유 경험치 200 증서 3개');
    }else if(randomxpcertificate < 90.91){
        items.push('자유 경험치 2300 증서 2개');
    }else if(randomxpcertificate < 100){
        items.push('자유 경험치 28000 증서 1개');
    }


    const randombooster = Math.random() * 100;
    if(randombooster < 12.5){
        items.push('자유 경험치 부스터 15개 (일반)');
    }else if(randombooster < 25){
        items.push('전투 경험치 부스터 15개 (일반)');
    }else if(randombooster < 37.5){
        items.push('크레딧 부스터 15개 (일반)');
    }else if(randombooster < 50){
        items.push('승무원 경험치 부스터 15개 (일반)');
    }else if(randombooster < 50 + 8.33){
        items.push('자유 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 2){
        items.push('전투 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 3){
        items.push('크레딧 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4){
        items.push('승무원 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17){
        items.push('자유 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 2){
        items.push('전투 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 3){
        items.push('크레딧 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 4){
        items.push('승무원 경험치 부스터 15개 (영웅)');
    }


    const randomxp = Math.random() * 100;
    if(randomxp < 18.18){
        items.push('경험치 4배 증서 1개');
    }else if(randomxp < 18.18 + 12.12){
        items.push('경험치 4배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06){
        items.push('경험치 4배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09){
        items.push('경험치 5배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06){
        items.push('경험치 5배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03){
        items.push('경험치 5배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21){
        items.push('경험치 3배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15){
        items.push('경험치 3배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15 + 9.09){
        items.push('경험치 3배 증서 3개');
    }





    let autoslider = document.getElementById('autoslide');
    
    function addLogItem(items, container) {
        const el = document.createElement('div');

        const hasSpecialItem = items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') || item.includes('(VI)') || item.includes('(V)'));
    
    // 특별 아이템이 있으면 스타일 적용
    if (hasSpecialItem) {
        el.style.color = 'red';
        el.style.backgroundColor = 'aqua';
        el.style.padding = '10px';
        el.style.margin = '5px 0';
        el.style.borderRadius = 'var(--border-radius)';
    }
        el.textContent = items.join(', ');
        container.appendChild(el);
        
        
        if (autoslider && autoslider.checked) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    
    let container = document.getElementById('log-container');
    addLogItem(items, container);
    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    
    window.addEventListener('scroll', function() {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    return items;
}   

function france(){
    const items = []
    
    items.push('프랑스 전차 부적');

    const randomtank = Math.random() * 100;
    if(randomtank < 10){
        
        const tanks = [
            '(X) AMX 30 B',
            '(X) AMX M4 mle. 54',
            '(IX) Char Futur 4',
            '(IX) AMX 30 1er prototype',
            '(VIII) AMX M4 mle. 49',
            '(VIII) FCM 50 t',
            '(VIII) AMX CDC',
            '(VIII) M4A1 Revalorisé',
            '(VIII) A.P. AMX 30',
            '(VIII) Lorraine 40 t',
            '(VIII) B-C Bourrasque',
            '(VIII) AMX Defender',
            '(VIII) Somua SM',
            '(VIII) AMX CDA 105',
            '(VII) AMX 13 57',
            '(VI) Bretagne Panther',
        ]
        
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    }else{
        const randomcamo = Math.random() * 100;
        if(randomcamo < 10){
            const camos = [
                '트위스터 위장',
                '대혼란 위장',
                '누아르 위장',
                'Win Peaks 위장',
                'Egalite 위장',
                '자유 위장',
                '척탄병 위장',
                '묠니르 위장',
                '불새 위장',
                '코르시카 위장',
            ]
            const selectedcamo = camos[Math.floor(Math.random() * camos.length)];
            items.push(selectedcamo);
            console.log(selectedcamo);
            
        }
    }
    
    
    const randomxpcertificate = Math.random() * 100;
    if(randomxpcertificate < 60.61){
        items.push('자유 경험치 200 증서 3개');
    }else if(randomxpcertificate < 90.91){
        items.push('자유 경험치 2300 증서 2개');
    }else if(randomxpcertificate < 100){
        items.push('자유 경험치 28000 증서 1개');
    }


    const randombooster = Math.random() * 100;
    if(randombooster < 12.5){
        items.push('자유 경험치 부스터 15개 (일반)');
    }else if(randombooster < 25){
        items.push('전투 경험치 부스터 15개 (일반)');
    }else if(randombooster < 37.5){
        items.push('크레딧 부스터 15개 (일반)');
    }else if(randombooster < 50){
        items.push('승무원 경험치 부스터 15개 (일반)');
    }else if(randombooster < 50 + 8.33){
        items.push('자유 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 2){
        items.push('전투 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 3){
        items.push('크레딧 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4){
        items.push('승무원 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17){
        items.push('자유 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 2){
        items.push('전투 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 3){
        items.push('크레딧 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 4){
        items.push('승무원 경험치 부스터 15개 (영웅)');
    }


    const randomxp = Math.random() * 100;
    if(randomxp < 18.18){
        items.push('경험치 4배 증서 1개');
    }else if(randomxp < 18.18 + 12.12){
        items.push('경험치 4배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06){
        items.push('경험치 4배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09){
        items.push('경험치 5배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06){
        items.push('경험치 5배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03){
        items.push('경험치 5배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21){
        items.push('경험치 3배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15){
        items.push('경험치 3배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15 + 9.09){
        items.push('경험치 3배 증서 3개');
    }





    let autoslider = document.getElementById('autoslide');
    
    function addLogItem(items, container) {
        const el = document.createElement('div');

        const hasSpecialItem = items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') || item.includes('(VI)') || item.includes('(V)'));
    
    // 특별 아이템이 있으면 스타일 적용
    if (hasSpecialItem) {
        el.style.color = 'red';
        el.style.backgroundColor = 'aqua';
        el.style.padding = '10px';
        el.style.margin = '5px 0';
        el.style.borderRadius = 'var(--border-radius)';
    }
        el.textContent = items.join(', ');
        container.appendChild(el);
        
        
        if (autoslider && autoslider.checked) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    
    let container = document.getElementById('log-container');
    addLogItem(items, container);
    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    
    window.addEventListener('scroll', function() {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    return items;
}

function europe(){
    const items = []

    items.push('유럽 전차 부적');

    const randomtank = Math.random() * 100;
    if(randomtank < 10){
        const tanks = [
            '(X) Carro 45t',
            '(X) Strv K',
            '(VIII) Emil 1951',
            '(VIII) Skoda T 56',
            '(VIII) Skoda T 27',
            '(VIII) Progetto 46',
            '(VIII) Bisonte C45',
            '(VIII) Lansen C',
            '(VIII) Tornvagn',
            '(VII) Skoda T 45',
            '(VII) CS-52 LIS',
            '(VII) Svear',
        ]   
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    }else{
        const randomcamo = Math.random() * 100;
        if(randomcamo < 10){
            const camos = [
                '골렘 위장',
                '바이킹 위장',
                '글리치 위장',
                '코눙 위장',
                '환생 위장',
                '스테고사우루스 위장',
                '맹위 위장',
                '무스 위장',
                '불굴 위장',
            ]
            const selectedcamo = camos[Math.floor(Math.random() * camos.length)];
            items.push(selectedcamo);
            console.log(selectedcamo);
            
        }
    }

    const bonus = Math.random() * 100;
    if(bonus < 1){
        items.push('Skvely 위장');
    }

    const randomxpcertificate = Math.random() * 100;
    if(randomxpcertificate < 60.61){
        items.push('자유 경험치 200 증서 3개');
    }else if(randomxpcertificate < 90.91){
        items.push('자유 경험치 2300 증서 2개');
    }else if(randomxpcertificate < 100){
        items.push('자유 경험치 28000 증서 1개');
    }


    const randombooster = Math.random() * 100;
    if(randombooster < 12.5){
        items.push('자유 경험치 부스터 15개 (일반)');
    }else if(randombooster < 25){
        items.push('전투 경험치 부스터 15개 (일반)');
    }else if(randombooster < 37.5){
        items.push('크레딧 부스터 15개 (일반)');
    }else if(randombooster < 50){
        items.push('승무원 경험치 부스터 15개 (일반)');
    }else if(randombooster < 50 + 8.33){
        items.push('자유 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 2){
        items.push('전투 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 3){
        items.push('크레딧 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4){
        items.push('승무원 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17){
        items.push('자유 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 2){
        items.push('전투 경험치 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 3){
        items.push('크레딧 부스터 15개 (영웅)');
    }else if(randombooster < 50 + 8.33 * 4 + 4.17 * 4){
        items.push('승무원 경험치 부스터 15개 (영웅)');
    }


    const randomxp = Math.random() * 100;
    if(randomxp < 18.18){
        items.push('경험치 4배 증서 1개');
    }else if(randomxp < 18.18 + 12.12){
        items.push('경험치 4배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06){
        items.push('경험치 4배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09){
        items.push('경험치 5배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06){
        items.push('경험치 5배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03){
        items.push('경험치 5배 증서 3개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21){
        items.push('경험치 3배 증서 1개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15){
        items.push('경험치 3배 증서 2개');
    }else if(randomxp < 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03 + 21.21 + 15.15 + 9.09){
        items.push('경험치 3배 증서 3개');
    }





    let autoslider = document.getElementById('autoslide');
    
    function addLogItem(items, container) {
        const el = document.createElement('div');

        const hasSpecialItem = items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') || item.includes('(VI)') || item.includes('(V)'));
    
    // 특별 아이템이 있으면 스타일 적용
    if (hasSpecialItem) {
        el.style.color = 'red';
        el.style.backgroundColor = 'aqua';
        el.style.padding = '10px';
        el.style.margin = '5px 0';
        el.style.borderRadius = 'var(--border-radius)';
    }
        el.textContent = items.join(', ');
        container.appendChild(el);
        
        
        if (autoslider && autoslider.checked) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    
    let container = document.getElementById('log-container');
    addLogItem(items, container);
    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    
    window.addEventListener('scroll', function() {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    return items;

}







const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    opentimes = 0;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    finaltanks.innerText = '획득한 탱크: ';
    howmuch = 0;
    tanks = [];

});




slider.addEventListener('input', function() {
    const containerimg = document.getElementById('containerimg');
    if (slider.value == 1) {
        slid.innerText = '독일 상자';
        containerimg.src = "img/country.jpg";
        document.title = '독일 상자'
    }else if (slider.value == 2) {
        slid.innerText = '미국 상자';
        containerimg.src = "img/usa.jpg";
        document.title = '미국 상자'
    }else if (slider.value == 3) {
        slid.innerText = '소련 상자';
        containerimg.src = "img/ussr.jpg";
        document.title = '소련 상자'
    }else if (slider.value == 4) {
        slid.innerText = '영국 상자';
        containerimg.src = "img/uk.jpg";
        document.title = '영국 상자'
    }else if (slider.value == 5) {
        slid.innerText = '중국 상자';
        containerimg.src = "img/chinese.jpg";   
        document.title = '중국 상자'
    }else if (slider.value == 6) {
        slid.innerText = '프랑스 상자';
        containerimg.src = "img/france.jpg";
        document.title = '프랑스 상자'
    }else if (slider.value == 7) {
        slid.innerText = '유럽 상자';
        containerimg.src = "img/europe.jpg";
        document.title =  '유럽 상자'
    }
});

let open = document.getElementById('open');
open.addEventListener('click', function() {
    if(slider.value == 1){
        const items = ger();
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
        const items = usa();
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
    else if(slider.value == 3){
        const items = ussr();
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
    else if(slider.value == 4){
        const items = uk();
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
    else if(slider.value == 5){
        const items = china();
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
    else if(slider.value == 6){
        const items = france();
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
    else if(slider.value == 7){
        const items = europe();
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
});





