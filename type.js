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

function light() {
    const items = [];

    items.push('골드 부적')

    const randomtank = Math.floor(Math.random() * 100);
    if(randomtank < 5){
        const tanks = [
            '(VIII) HWK 30',
            '(VIII) LT-432',
            '(VII) M41D',
            '(VIII) AMX Defender',
            '(VIII) leKpz M 41 90 mm',
            '(VIII) Fv1066 Senlac',
            '(VII) Type 62',
            '(VII) AMX 13 57',
            '(VII) Kunze Panzer',
            '(VI) Type 64',
        ]
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    }
    
    const randomxpboost = Math.floor(Math.random() * 100);
    if(randomxpboost < 59.21){
        items.push('경험치 3배 1개')
    }else if(randomxpboost < 59.21 + 11.84){
        items.push('경험치 3배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95){
        items.push('경험치 3배 3개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79){
        items.push('경험치 4배 1개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16){
        items.push('경험치 4배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05){
        items.push('경험치 4배 3개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95){
        items.push('경험치 5배 1개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95 + 0.79){
        items.push('경험치 5배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95 + 0.79 + 0.26){
        items.push('경험치 5배 3개')
    }

    const randomcamo = Math.floor(Math.random() * 100);
    if(randomcamo < 0.56){
        items.push('"잡동사니 함정" 위장')
    }else if(randomcamo < 0.56 *2){
        items.push('"사냥꾼의 표식" 위장')
    }else if(randomcamo < 0.56 *3){
        items.push('"달의 궁전" 위장')
    }else if(randomcamo < 0.56 *4){
        items.push('"가을 낙엽" 위장')
    }else if(randomcamo < 0.56 *5){
        items.push('"은하 방랑자" 위장')
    }else if(randomcamo < 0.56 *6){
        items.push('"디지털 일루전" 위장')
    }else if(randomcamo < 0.56 *7){
        items.push('"플럭스" 위장')
    }else if(randomcamo < 0.56 *8){
        items.push('"조각난 화염" 위장')
    }else if(randomcamo < 0.56 *9){
        items.push('"현기증" 위장')
    }

    const randomfxp = Math.floor(Math.random() * 100);
    if(randomfxp < 3.95){
        items.push('자유경험치 28000 증서 1개')
    }else if(randomfxp < 3.95 + 0.79){
        items.push('자유경험치 28000 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26){
        items.push('자유경험치 28000 증서 3개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79){
        items.push('자유경험치 2300 증서 1개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16){
        items.push('자유경험치 2300 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05){
        items.push('자유경험치 2300 증서 3개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21){
        items.push('자유경험치 200 증서 1개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21 + 11.84){
        items.push('자유경험치 200 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21 + 11.84 + 3.95){
        items.push('자유경험치 200 증서 3개')
    }

    const randombooster = Math.floor(Math.random() * 100);
    if(randombooster < 10.42){
        items.push('승무원 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *2){
        items.push('자유 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *3){
        items.push('전투 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *4){
        items.push('크레딧 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25){
        items.push('승무원 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *2){
        items.push('자유 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *3){
        items.push('전투 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4){
        items.push('크레딧 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08){
        items.push('승무원 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *2){
        items.push('자유 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *3){
        items.push('전투 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4){
        items.push('크레딧 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78){
        items.push('승무원 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *2){
        items.push('자유 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *3){
        items.push('전투 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4){
        items.push('크레딧 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67){
        items.push('승무원 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *2){
        items.push('자유 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *3){
        items.push('전투 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4){
        items.push('크레딧 경험치 부스터 2개 (희귀)')   
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56){
        items.push('승무원 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *2){
        items.push('자유 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *3){
        items.push('전투 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4){
        items.push('크레딧 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69){
        items.push('승무원 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *2){
        items.push('자유 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *3){
        items.push('전투 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4){
        items.push('크레딧 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42){
        items.push('승무원 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *2){
        items.push('자유 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *3){
        items.push('전투 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4){
        items.push('크레딧 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14){
        items.push('승무원 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *2){
        items.push('자유 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *3){
        items.push('전투 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *4){
        items.push('크레딧 경험치 부스터 3개 (영웅)')
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

function medium() {

    const items = [];

    items.push('골드 부적')

    const randomtank = Math.floor(Math.random() * 100);
    if(randomtank < 5){
        const tanks = [
            '(X) 121B',
            '(X) Carro 45t',
            '(X) AMX 30 B',
            '(X) T-22 medium',
            '(X) Kpz 50 t',
            '(X) M60',
            '(X) Object 907',
            '(IX) Char Futur 4',
            '(IX) AMX 30 1er prototype',
            '(IX) Erich Konzept I',
            '(IX) T 55A',
            '(IX) Cobra',
            '(VIII) WZ-122 TM',
            '(VIII) Skoda T 27',
            '(VIII) Progetto 46',
            '(VIII) A.P AMX 30',
            '(VIII) Loraine 40 t',
            '(VIII) AMX CDC',
            '(VIII) Panther 8.8',
            '(VIII) Panzer 58',
            '(VIII) Defender Mk. 1',
            '(VIII) ASTRON Rex',
            '(VIII) T26E4',
            '(VIII) T95E2',
            '(VIII) T-54 mod. 1',
            '(VIII) T-44-100',
            '(VIII) STG',
            '(VIII) Object 274a',
            '(VIII) Type 59',
            '(VIII) T-34-3',
            '(VIII) 59 Patton',
            '(VIII) Strv 81',
            '(VIII) Lancen C',
            '(VIII) B-C Bourrasque',
            '(VIII) M4A1 Revalorise',
            '(VIII) FCM 50 t',
            '(VIII) M48A2  Räumpanzer',
            '(VIII) Kpz 07 RH',
            '(VIII) Kpz. Pr.68 (P)',
            '(VIII) Titan-54d',
            '(VIII) TSL-7 Defender',
            '(VIII) Vickers MBT Mk.3',
            '(VIII) Centurion Mk. 5/1',
            '(VIII) Chimera',
            '(VIII) Obj.590',
            '(VIII) ST-62 Ver.2',
            '(VII) T26E3 Eagle 7',
            '(VII) T23E3',
            '(VII) CS-52 LIS',
            '(VII) Svear',
            '(VII) Panther/M10',
            '(VII) M4/FL10',
            '(VII) T-44-85',
            '(VI) Bretagne Panther',
            '(VI) AC IV Sentinel',
            '(VI Cromwell B',
            '(VI) Pz.IV S.',
            '(VI) Strv 74A2',
            "(VI) Loza's Sherman",
            '(VI) T-34-85 Victory',
            '(VI) Pudel',
            '(V) Matilda BP',
            '(V) Krupp-38(D)',
            '(V) Pz.V/IV',
            '(V) T-25',
            '(V) Chi-Nu Kai',
            '(V) Ram II',
            '(V) Matilda IV',
            '(V) T-34 shielded',
            '(V) Pz.III/IV',
            '(V) M4A2E4'
        ]
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    }

    const randomxpboost = Math.floor(Math.random() * 100);
    if(randomxpboost < 59.21){
        items.push('경험치 3배 1개')
    }else if(randomxpboost < 59.21 + 11.84){
        items.push('경험치 3배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95){
        items.push('경험치 3배 3개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79){
        items.push('경험치 4배 1개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16){
        items.push('경험치 4배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05){
        items.push('경험치 4배 3개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95){
        items.push('경험치 5배 1개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95 + 0.79){
        items.push('경험치 5배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95 + 0.79 + 0.26){
        items.push('경험치 5배 3개')
    }

    const randomcamo = Math.floor(Math.random() * 100);
    if(randomcamo < 0.56){
        items.push('"잡동사니 함정" 위장')
    }else if(randomcamo < 0.56 *2){
        items.push('"사냥꾼의 표식" 위장')
    }else if(randomcamo < 0.56 *3){
        items.push('"달의 궁전" 위장')
    }else if(randomcamo < 0.56 *4){
        items.push('"가을 낙엽" 위장')
    }else if(randomcamo < 0.56 *5){
        items.push('"은하 방랑자" 위장')
    }else if(randomcamo < 0.56 *6){
        items.push('"디지털 일루전" 위장')
    }else if(randomcamo < 0.56 *7){
        items.push('"플럭스" 위장')
    }else if(randomcamo < 0.56 *8){
        items.push('"조각난 화염" 위장')
    }else if(randomcamo < 0.56 *9){
        items.push('"현기증" 위장')
    }

    const randomfxp = Math.floor(Math.random() * 100);
    if(randomfxp < 3.95){
        items.push('자유경험치 28000 증서 1개')
    }else if(randomfxp < 3.95 + 0.79){
        items.push('자유경험치 28000 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26){
        items.push('자유경험치 28000 증서 3개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79){
        items.push('자유경험치 2300 증서 1개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16){
        items.push('자유경험치 2300 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05){
        items.push('자유경험치 2300 증서 3개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21){
        items.push('자유경험치 200 증서 1개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21 + 11.84){
        items.push('자유경험치 200 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21 + 11.84 + 3.95){
        items.push('자유경험치 200 증서 3개')
    }

    const randombooster = Math.floor(Math.random() * 100);
    if(randombooster < 10.42){
        items.push('승무원 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *2){
        items.push('자유 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *3){
        items.push('전투 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *4){
        items.push('크레딧 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25){
        items.push('승무원 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *2){
        items.push('자유 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *3){
        items.push('전투 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4){
        items.push('크레딧 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08){
        items.push('승무원 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *2){
        items.push('자유 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *3){
        items.push('전투 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4){
        items.push('크레딧 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78){
        items.push('승무원 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *2){
        items.push('자유 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *3){
        items.push('전투 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4){
        items.push('크레딧 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67){
        items.push('승무원 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *2){
        items.push('자유 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *3){
        items.push('전투 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4){
        items.push('크레딧 경험치 부스터 2개 (희귀)')   
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56){
        items.push('승무원 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *2){
        items.push('자유 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *3){
        items.push('전투 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4){
        items.push('크레딧 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69){
        items.push('승무원 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *2){
        items.push('자유 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *3){
        items.push('전투 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4){
        items.push('크레딧 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42){
        items.push('승무원 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *2){
        items.push('자유 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *3){
        items.push('전투 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4){
        items.push('크레딧 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14){
        items.push('승무원 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *2){
        items.push('자유 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *3){
        items.push('전투 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *4){
        items.push('크레딧 경험치 부스터 3개 (영웅)')
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

function heavy() {

    const items = [];

    items.push('골드 부적')

    const randomtank = Math.floor(Math.random() * 100);
    if(randomtank < 5){
        const tanks = [
            '(X) WZ-111-5A',
            '(X) 114 SP2',
            '(X) Strv K',
            '(X) AMX M4 mle. 54',
            '(X) VK 90.01 (P)',
            '(X) Chieftain Mk. 6',
            '(X) Super Conqueror',
            '(X) Concept 1B',
            '(X) T95E6',
            '(X) Obj.260',
            '(X) Obj.777 II',
            '(IX) WZ-114',
            '(IX) Kpz 70',
            '(IX) TL-7-120',
            '(IX) K-91',
            '(IX) Object 752',
            '(IX) Object 452K',
            '(VIII) 112 Glacial',
            '(VIII) Skoda T 56',
            '(VIII) AMX M4 49',
            '(VIII) Lowe',
            '(VIII) Charlemagne',
            '(VIII) Caernarvon Defender',
            '(VIII) Chrysler K',
            '(VIII) M6A2E1 EXP',
            '(VIII) T34 ',
            '(VIII) IS-6',
            '(VIII) KV-5',
            '(VIII) IS-5',
            '(VIII0 WZ-111',
            '(VIII) WZ-112-2'  ,
            '(VIII) Bisonte C45',
            '(VIII) EMIL 1951',
            '(VIII) Tornvagn',  
            '(VIII) Somua SM',
            '(VIII) Cheiftain',
            '(VIII) VK 168.01 (P)',
            '(VIII) Keiler',
            '(VIII) E 75 TS',
            '(VIII) Type 57',
            '(VIII) Caliban',
            '(VIII) Action X',
            '(VIII) T26E5',
            '(VIII) T54E2',
            '(VIII) T77',
            '(VIII) M-IV-Y',
            '(VIII) IS-2Sh',
            '(VIII) IS-3 Defender',
            '(VIII) K-2',
            '(VIII) T-2020',
            '(VII) Skoda T 45',
            '(VII) FV201 (A45)',
            '(VII) M6A2E1',
            '(VII) IS-2 shielded',
            '(VII) VK 45.03',
            '(VII) Tankenstein',
            '(VII) Titna H-Nd',
            '(VII) IS-2 (1945)',
            '(VI) TOG II*',
            '(VI) Churchill Mk. VI',
            '(VI) Tiger 131',
            '(VI) Chuchill VII',
            '(VI) Object 244',
            '(V) Excelsior',
            '(V) T14',
            '(V) Churchill III'
        ]
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    }

    const randomxpboost = Math.floor(Math.random() * 100);
    if(randomxpboost < 59.21){
        items.push('경험치 3배 1개')
    }else if(randomxpboost < 59.21 + 11.84){
        items.push('경험치 3배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95){
        items.push('경험치 3배 3개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79){
        items.push('경험치 4배 1개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16){
        items.push('경험치 4배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05){
        items.push('경험치 4배 3개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95){
        items.push('경험치 5배 1개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95 + 0.79){
        items.push('경험치 5배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95 + 0.79 + 0.26){
        items.push('경험치 5배 3개')
    }

    const randomcamo = Math.floor(Math.random() * 100);
    if(randomcamo < 0.56){
        items.push('"잡동사니 함정" 위장')
    }else if(randomcamo < 0.56 *2){
        items.push('"사냥꾼의 표식" 위장')
    }else if(randomcamo < 0.56 *3){
        items.push('"달의 궁전" 위장')
    }else if(randomcamo < 0.56 *4){
        items.push('"가을 낙엽" 위장')
    }else if(randomcamo < 0.56 *5){
        items.push('"은하 방랑자" 위장')
    }else if(randomcamo < 0.56 *6){
        items.push('"디지털 일루전" 위장')
    }else if(randomcamo < 0.56 *7){
        items.push('"플럭스" 위장')
    }else if(randomcamo < 0.56 *8){
        items.push('"조각난 화염" 위장')
    }else if(randomcamo < 0.56 *9){
        items.push('"현기증" 위장')
    }

    const randomfxp = Math.floor(Math.random() * 100);
    if(randomfxp < 3.95){
        items.push('자유경험치 28000 증서 1개')
    }else if(randomfxp < 3.95 + 0.79){
        items.push('자유경험치 28000 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26){
        items.push('자유경험치 28000 증서 3개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79){
        items.push('자유경험치 2300 증서 1개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16){
        items.push('자유경험치 2300 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05){
        items.push('자유경험치 2300 증서 3개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21){
        items.push('자유경험치 200 증서 1개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21 + 11.84){
        items.push('자유경험치 200 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21 + 11.84 + 3.95){
        items.push('자유경험치 200 증서 3개')
    }

    const randombooster = Math.floor(Math.random() * 100);
    if(randombooster < 10.42){
        items.push('승무원 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *2){
        items.push('자유 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *3){
        items.push('전투 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *4){
        items.push('크레딧 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25){
        items.push('승무원 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *2){
        items.push('자유 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *3){
        items.push('전투 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4){
        items.push('크레딧 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08){
        items.push('승무원 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *2){
        items.push('자유 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *3){
        items.push('전투 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4){
        items.push('크레딧 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78){
        items.push('승무원 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *2){
        items.push('자유 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *3){
        items.push('전투 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4){
        items.push('크레딧 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67){
        items.push('승무원 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *2){
        items.push('자유 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *3){
        items.push('전투 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4){
        items.push('크레딧 경험치 부스터 2개 (희귀)')   
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56){
        items.push('승무원 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *2){
        items.push('자유 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *3){
        items.push('전투 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4){
        items.push('크레딧 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69){
        items.push('승무원 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *2){
        items.push('자유 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *3){
        items.push('전투 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4){
        items.push('크레딧 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42){
        items.push('승무원 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *2){
        items.push('자유 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *3){
        items.push('전투 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4){
        items.push('크레딧 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14){
        items.push('승무원 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *2){
        items.push('자유 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *3){
        items.push('전투 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *4){
        items.push('크레딧 경험치 부스터 3개 (영웅)')
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

function td() {

    const items = [];

    items.push('골드 부적')

    const randomtank = Math.floor(Math.random() * 100);
    if(randomtank < 5){
        const tanks = [
            '(X) FV217 Badger',
            '(X) XM66F',
            '(X) Object 268/4',
            '(VIII) WZ-120-1G FT',
            '(VIII) JgTig.8,8cm',
            '(VIII) JgTig.8,8cm (2015)',
            '(VIII) Turtle Mk. I',
            '(VIII) TS-5',
            '(VIII) T28 Defender',
            '(VIII) ISU-130',
            '(VIII) ShPTK-TVP 100',
            '(VIII) SMV Vipera',
            '(VIII) AMX CDA 105',
            '(VIII) Kanonenjagdpanzer 105',
            '(VIII) Skorpion G',
            '(VIII) Type 5 Ka-Ri',
            '(VIII) Titan Charioteer',
            '(VIII) GSOR 1008',
            '(VIII) TS-60',
            '(VIII) SU-130PM',
            '(VII) E 25',
            '(VII) WZ Blaze',
            '(VII) ISU-122S',
            '(VII) SU-122-44',
            '(VII) AT 15A',
            '(VII) Steyr WT',
            '(VII) T28 HTC',
            '(VII) Super Hellcat',
            '(VI) Dicker Max',
            '(VI) SU-100Y',
            '(V) Angry Connor',
            '(V) SU-85I'
        ]
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    }

    const randomxpboost = Math.floor(Math.random() * 100);
    if(randomxpboost < 59.21){
        items.push('경험치 3배 1개')
    }else if(randomxpboost < 59.21 + 11.84){
        items.push('경험치 3배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95){
        items.push('경험치 3배 3개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79){
        items.push('경험치 4배 1개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16){
        items.push('경험치 4배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05){
        items.push('경험치 4배 3개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95){
        items.push('경험치 5배 1개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95 + 0.79){
        items.push('경험치 5배 2개')
    }else if(randomxpboost < 59.21 + 11.84 + 3.95 + 15.79 + 3.16 + 1.05 + 3.95 + 0.79 + 0.26){
        items.push('경험치 5배 3개')
    }

    const randomcamo = Math.floor(Math.random() * 100);
    if(randomcamo < 0.56){
        items.push('"잡동사니 함정" 위장')
    }else if(randomcamo < 0.56 *2){
        items.push('"사냥꾼의 표식" 위장')
    }else if(randomcamo < 0.56 *3){
        items.push('"달의 궁전" 위장')
    }else if(randomcamo < 0.56 *4){
        items.push('"가을 낙엽" 위장')
    }else if(randomcamo < 0.56 *5){
        items.push('"은하 방랑자" 위장')
    }else if(randomcamo < 0.56 *6){
        items.push('"디지털 일루전" 위장')
    }else if(randomcamo < 0.56 *7){
        items.push('"플럭스" 위장')
    }else if(randomcamo < 0.56 *8){
        items.push('"조각난 화염" 위장')
    }else if(randomcamo < 0.56 *9){
        items.push('"현기증" 위장')
    }

    const randomfxp = Math.floor(Math.random() * 100);
    if(randomfxp < 3.95){
        items.push('자유경험치 28000 증서 1개')
    }else if(randomfxp < 3.95 + 0.79){
        items.push('자유경험치 28000 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26){
        items.push('자유경험치 28000 증서 3개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79){
        items.push('자유경험치 2300 증서 1개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16){
        items.push('자유경험치 2300 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05){
        items.push('자유경험치 2300 증서 3개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21){
        items.push('자유경험치 200 증서 1개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21 + 11.84){
        items.push('자유경험치 200 증서 2개')
    }else if(randomfxp < 3.95 + 0.79 + 0.26 + 15.79 + 3.16 + 1.05 + 59.21 + 11.84 + 3.95){
        items.push('자유경험치 200 증서 3개')
    }

    const randombooster = Math.floor(Math.random() * 100);
    if(randombooster < 10.42){
        items.push('승무원 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *2){
        items.push('자유 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *3){
        items.push('전투 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *4){
        items.push('크레딧 경험치 부스터 1개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25){
        items.push('승무원 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *2){
        items.push('자유 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *3){
        items.push('전투 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4){
        items.push('크레딧 경험치 부스터 2개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08){
        items.push('승무원 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *2){
        items.push('자유 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *3){
        items.push('전투 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4){
        items.push('크레딧 경험치 부스터 3개 (일반)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78){
        items.push('승무원 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *2){
        items.push('자유 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *3){
        items.push('전투 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4){
        items.push('크레딧 경험치 부스터 1개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67){
        items.push('승무원 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *2){
        items.push('자유 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *3){
        items.push('전투 경험치 부스터 2개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4){
        items.push('크레딧 경험치 부스터 2개 (희귀)')   
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56){
        items.push('승무원 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *2){
        items.push('자유 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *3){
        items.push('전투 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4){
        items.push('크레딧 경험치 부스터 3개 (희귀)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69){
        items.push('승무원 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *2){
        items.push('자유 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *3){
        items.push('전투 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4){
        items.push('크레딧 경험치 부스터 1개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42){
        items.push('승무원 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *2){
        items.push('자유 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *3){
        items.push('전투 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4){
        items.push('크레딧 경험치 부스터 2개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14){
        items.push('승무원 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *2){
        items.push('자유 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *3){
        items.push('전투 경험치 부스터 3개 (영웅)')
    }else if(randombooster < 10.42 *4 + 6.25 *4 + 2.08 *4 + 2.78 *4 + 1.67 *4 + 0.56 *4 + 0.69 *4 + 0.42 *4 + 0.14 *4){
        items.push('크레딧 경험치 부스터 3개 (영웅)')
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
        slid.innerText = '경전차 상자'
        containerimg.src = 'img/light.jpg';
        document.title = '경전차 상자'
    } else if(slider.value == 2) {
        slid.innerText = '중형전차 상자'
        containerimg.src = 'img/medium.jpg';
        document.title = '중형전차 상자'
    } else if(slider.value == 3) {
        slid.innerText = '중전차 상자'
        containerimg.src = 'img/heavy.jpg';
        document.title = '중전차 상자'
    } else if(slider.value == 4) {
        slid.innerText = '구축전차 상자'
        containerimg.src = 'img/td.jpg';
        document.title = '구축전차 상자'
    }
});

let open = document.getElementById('open');
open.addEventListener('click', function() {
    if(slider.value == 1){
        const items = light();
        const resultElement = document.getElementById('result');
        if (items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') || items.includes('(VI)') || items.includes('(V)') || items.includes('(IV)') || items.includes('(III)') || items.includes('(II)') || items.includes('(I)'))) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
    resultElement.innerText = `결과: ${items.join(', ')}`;
    } else if(slider.value == 2){
        const items = medium();
        const resultElement = document.getElementById('result');
        if (items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') || items.includes('(VI)') || items.includes('(V)') || items.includes('(IV)') || items.includes('(III)') || items.includes('(II)') || items.includes('(I)'))) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
    resultElement.innerText = `결과: ${items.join(', ')}`;
    } else if(slider.value == 3){
        const items = heavy();
        const resultElement = document.getElementById('result');
        if (items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') || items.includes('(VI)') || items.includes('(V)') || items.includes('(IV)') || items.includes('(III)') || items.includes('(II)') || items.includes('(I)'))) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
    resultElement.innerText = `결과: ${items.join(', ')}`;
    } else if(slider.value == 4){
        const items = td();
        const resultElement = document.getElementById('result');
        if (items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') || items.includes('(VI)') || items.includes('(V)') || items.includes('(IV)') || items.includes('(III)') || items.includes('(II)') || items.includes('(I)'))) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
    resultElement.innerText = `결과: ${items.join(', ')}`;
    }
});