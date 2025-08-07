let times = document.getElementById('times');
let howmuch = 0;
const finalgold = document.getElementById('finalgold');
let gold = 0;
const container = document.getElementById('log-container');
let tanks = [];
let boxes = [];
const finaltanks = document.getElementById('tanks');
const finalboxes = document.getElementById('finalboxes');

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

function lockbox(){
    const items = []

    items.push('장식 열쇠 부적');

    const randomtank = Math.random() * 100;
    if(randomtank < 0.18){
        items.push('(X) Kpz 50 t')
        addTank('(X) Kpz 50 t');
        console.log('(X) Kpz 50 t');
    }else if(randomtank < 0.18 + 0.10){
        items.push('(X) Waffen F1.0')
        addTank('(X) Waffen F1.0');
        console.log('(X) Waffen F1.0');
    }else if(randomtank < 0.18 + 0.10 + 0.18){
        items.push('(X) Chieftain Mk.6')
        addTank('(X)Chieftain Mk.6');
        console.log('(X) Chieftain Mk.6');
    }else if(randomtank < 0.18 + 0.10 + 0.18 + 0.18){
        items.push('(X) XM66F')
        addTank('(X) XM66F');
        console.log('(X) XM66F');
    }else if(randomtank < 0.18 + 0.10 + 0.18 + 0.18 + 0.18){
        items.push('(X)T-22 Medium')
        addTank('(X) T-22 Medium');
        console.log('(X) T-22 Medium');
    }else if(randomtank < 0.18 + 0.10 + 0.18 + 0.18 + 0.18 + 0.18){
        items.push('(IX) Char Futur 4')
        addTank('(IX) Char Futur 4');
        console.log('(IX) Char Futur 4');
    }else if(randomtank < 0.18 + 0.10 + 0.18 + 0.18 + 0.18 + 0.18 + 0.18){
        items.push('(IX) Cobra')
        addTank('(IX) Cobra');
        console.log('(IX) Cobra');
    }else if(randomtank < 0.18 + 0.10 + 0.18 + 0.18 + 0.18 + 0.18 + 0.18 + 0.18){
        items.push('(IX) TL-7-120')
        addTank('(IX) TL-7-120');
        console.log('(IX) TL-7-120');
    }else if(randomtank < 0.18 + 0.10 + 0.18 + 0.18 + 0.18 + 0.18 + 0.18 + 0.18 + 0.18){
        items.push('(IX) Object 452K')
        addTank('(IX) Object 452K');
        console.log('(IX) Object 452K');
    }else if(randomtank < 0.18 + 0.10 + 0.18 + 0.18 + 0.18 + 0.18 + 0.18 + 0.18 + 0.18 + 0.18){
        items.push('(VIII) Progetto 46')
        addTank('(VIII) Progetto 46');
        console.log('(VIII) Progetto 46');
    }else if(randomtank < 0.18 + 0.10 + 0.18 + 0.18  + 0.18 + 0.18 + 0.18+ 0.18+ 0.18+ 0.18+ 0.18){
    items.push('(VIII) EMIL 1951')
    addTank('(VIII) EMIL 1951');
    console.log('(VIII) EMIL 1951');
    }else if(randomtank <  0.18 + 0.10 + 0.18 + 0.18  + 0.18 + 0.18 + 0.18+ 0.18+ 0.18+ 0.18+ 0.18 + 0.18){
        items.push('(VIII) B-C Bourrasque')
        addTank('(VIII) B-C Bourrasque');
        console.log('(VIII) B-C Bourrasque');
    }else if(randomtank <  0.18 + 0.10 + 0.18 + 0.18  + 0.18 + 0.18 + 0.18+ 0.18+ 0.18+ 0.18+ 0.18 + 0.18 + 0.18){
        items.push('(VIII) Kpz 07 RH')
        addTank('(VIII) Kpz 07 RH');
        console.log('(VIII) Kpz 07 RH');
    }else if(randomtank <  0.18 + 0.10 + 0.18 + 0.18  + 0.18 + 0.18 + 0.18+ 0.18+ 0.18+ 0.18+ 0.18 + 0.18 + 0.18 + 0.18){
        items.push('(VIII) Type 5 Ka-Ri')
        addTank('(VIII) Type 5 Ka-Ri');
        console.log('(VIII) Type 5 Ka-Ri');
    }else if(randomtank <  0.18 + 0.10 + 0.18 + 0.18  + 0.18 + 0.18 + 0.18+ 0.18+ 0.18+ 0.18+ 0.18 + 0.18 + 0.18 + 0.18 + 0.18){
        items.push('(VIII) Caliban')
        addTank('(VIII) Caliban');
        console.log('(VIII) Caliban');
    }else if(randomtank <  0.18 + 0.10 + 0.18 + 0.18  + 0.18 + 0.18 + 0.18+ 0.18+ 0.18+ 0.18+ 0.18 + 0.18 + 0.18    + 0.18 + 0.18 + 0.18){
        items.push('(VIII) Chimera')
        addTank('(VIII) Chimera');
        console.log('(VIII) Chimera');
    }else if(randomtank <  0.18 + 0.10 + 0.18 + 0.18  + 0.18 + 0.18 + 0.18+ 0.18+ 0.18+ 0.18+ 0.18 + 0.18 + 0.18    + 0.18 + 0.18 + 0.18 + 0.18){
        items.push('(VIII) T54E2')
        addTank('(VIII) T54E2');
        console.log('(VIII) T54E2');
    }else if(randomtank <  0.18 + 0.10 + 0.18 + 0.18  + 0.18 + 0.18 + 0.18+ 0.18+ 0.18+ 0.18+ 0.18 + 0.18 + 0.18   + 0.18 + 0.18 + 0.18 + 0.18 + 0.18){
        items.push('(VIII) Obj.590')
        addTank('(VIII) Obj.590');
        console.log('(VIII) Obj.590');
    }

    const randomgold = Math.random() * 100;
    if(randomgold < 85){
        items.push('500 골드');
        gold += 500;
    }else if(randomgold < 85 + 10){
        items.push('1500 골드');
        gold += 1500;
    }else if(randmomgold < 85 + 10 + 3){
        items.push('5000 골드');
        gold += 5000;
    }else if(randomgold < 85 + 10 + 3 + 1.5){
        items.push('10000 골드');
        gold += 10000;
    }else if(randomgold < 85 + 10 + 3 + 1.5 + 0.3){
        items.push('25000 골드');
        gold += 25000;
    }else if(randomgold < 85 + 10 + 3 + 1.5 + 0.3 + 0.15){
        items.push('50000 골드');
        gold += 50000;
    }else if(randomgold < 85 + 10 + 3 + 1.5 + 0.3 + 0.15 + 0.04){
        items.push('100000 골드');
        gold += 100000;
    }else if(randomgold < 85 + 10 + 3 + 1.5 + 0.3 + 0.15 + 0.04 + 0.02){
        items.push('200000 골드');
        gold += 200000;
    }

    const randomfxp = Math.random() * 100;
    if(randomfxp < 25.5){
        items.push('3000 자유 경험치');
    }else if(randomfxp < 25.5 + 3){
        items.push('5000 자유 경험치');
    }else if(randomfxp < 25.5 + 3 + 0.9){
        items.push('10000 자유 경험치');
    }else if(randomfxp < 25.5 + 3 + 0.9 + 0.45){
        items.push('25000 자유 경험치');
    }else if(randomfxp < 25.5 + 3 + 0.9 + 0.45 + 0.09){
        items.push('50000 자유 경험치');
    }else if(randomfxp < 25.5 + 3 + 0.9 + 0.45 + 0.09 + 0.04){
        items.push('100000 자유 경험치');
    }else if(randomfxp < 25.5 + 3 + 0.9 + 0.45 + 0.09 + 0.04 + 0.02){
        items.push('200000 자유 경험치');
    }

    const randomcamo = Math.random() * 100;
    if(randomcamo < 0.22){
        items.push('Jotunn 위장');
    }else if(randomcamo < 0.22 * 2){
        items.push('Starbust 위장');
    }else if(randomcamo < 0.22 * 3){
        items.push('휴고 위장')
    }else if(randomcamo < 0.22 * 4){
        items.push('방위각 위장');
    }else if(randomcamo < 0.22 * 5){
        items.push('Jager 위장');
    }else if(randomcamo < 0.22 * 6){
        items.push('Spooky 위장');
    }else if(randomcamo < 0.22 * 7){
        items.push('바이킹 위장')
    }else if(randomcamo < 0.22 * 8){
        items.push('누아르 위장')
    }else if(randomcamo < 0.22 * 9){
        items.push('톱니 작살 괴수 위장')
    }else if(randomcamo < 0.22 * 10){
        items.push('호러 위장')
    }else if(randomcamo < 0.22 * 11){
        items.push('Forster 위장')
    }else if(randomcamo < 0.22 * 12){
        items.push('추적자 위장')
    }else if(randomcamo < 0.22 * 13){
        items.push('상어 위장')
    }else if(randomcamo < 0.22 * 14){
        items.push('묠니르 위장')
    }else if(randomcamo < 0.22 * 15){
        items.push('아라크니드 위장')
    }else if(randomcamo < 0.22 * 16){
        items.push('언캐쳐블 위장')
    }else if(randomcamo < 0.22 * 17){
        items.push('글리치 위장')
    }else if(randomcamo < 0.22 * 18){
        items.push('닭장 위장')
    }else if(randomcamo < 0.22 * 19){
        items.push('눈꼴무늬 위장')
    }else if(randomcamo < 0.22 * 20){
        items.push('Seeker 위장')
    }else if(randomcamo < 0.22 * 21){
        items.push('Galvanox 위장')
    }else if(randomcamo < 0.22 * 22){   
        items.push('Baba-Yaga 위장')
    }else if(randomcamo < 0.22 * 23){
        items.push('Royal 위장')
    }

    const randomavatar = Math.random() * 100;
    if(randomavatar < 0.1){
        items.push('올해의 직원 애니메이션 아바타');
    }

    const randomkey = Math.random() * 100;
    if(randomkey < 3){
        items.push('장식 열쇠');
    }

    const random5x = Math.random() * 100;
    if(random5x < 25.5){
        items.push('경험치 5배 1개');
    }else if(random5x < 25.5 + 3){
        items.push('경험치 5배 2개');
    }else if(random5x < 25.5 + 3 + 0.9){
        items.push('경험치 5배 3개');
    }else if(random5x < 25.5 + 3 + 0.9 + 0.45){
        items.push('경험치 5배 5개');
    }else if(random5x < 25.5 + 3 + 0.9 + 0.45 + 0.09){
        items.push('경험치 5배 10개');
    }else if(random5x < 25.5 + 3 + 0.9 + 0.45 + 0.09 + 0.04){
        items.push('경험치 5배 15개');
    }else if(random5x < 25.5 + 3 + 0.9 + 0.45 + 0.09 + 0.04 + 0.02){
        items.push('경험치 5배 20개');
    }


    const randomxpboost = Math.random() * 100;
    if(randomxpboost < 50){
        items.push('경험치 부스터 3개 (영웅)');
    }else (
        items.push('경험치 부스터 5개 (영웅)')
    )

    const randomcreditboost = Math.random() * 100;  
    if(randomcreditboost < 50){
        items.push('크레딧 부스터 3개 (영웅)');
    }else (
        items.push('크레딧 부스터 5개 (영웅)')
    )

    const randomconsumables = Math.random() * 100;
    if(randomconsumables < 50){
        items.push('소모품 부스터 3개 (영웅)');
    }else (
        items.push('소모품 부스터 5개 (영웅)')
    )

    const randomhammer = Math.random() * 100;   
    if(randomhammer < 85){
        items.push('망치 5개');
    }else if(randomhammer < 85 + 10){
        items.push('망치 10개');
    }else if(randomhammer < 85 + 10 + 3){
        items.push('망치 20개');
    }else if(randomhammer < 85 + 10 + 3 + 1.5){
        items.push('망치 50개');
    }else if(randomhammer < 85 + 10 + 3 + 1.5 + 0.3){
        items.push('망치 100개');
    }else if(randomhammer < 85 + 10 + 3 + 1.5 + 0.3 + 0.15){
        items.push('망치 200개');
    }else if(randomhammer < 85 + 10 + 3 + 1.5 + 0.3 + 0.15 + 0.05){
        items.push('망치 300개');
    }

    const randommetaldetector = Math.random() * 100;
    if(randommetaldetector < 85){
        items.push('금속 탐지기 5개');
    }else if(randommetaldetector < 85 + 10){
        items.push('금속 탐지기 10개');
    }else if(randommetaldetector < 85 + 10 + 3){
        items.push('금속 탐지기 20개');
    }else if(randommetaldetector < 85 + 10 + 3 + 1.5){
        items.push('금속 탐지기 50개');
    }else if(randommetaldetector < 85 + 10 + 3 + 1.5 + 0.3){
        items.push('금속 탐지기 100개');
    }else if(randommetaldetector < 85 + 10 + 3 + 1.5 + 0.3 + 0.15){
        items.push('금속 탐지기 200개');
    }else if(randommetaldetector < 85 + 10 + 3 + 1.5 + 0.3 + 0.15 + 0.05){
        items.push('금속 탐지기 300개');
    }

    const randombox = Math.random() * 100;
    if(randombox < 0.45){
        items.push('대형 깜짝 상자 1개');
        addBox('대형 깜짝 상자');
    }else if(randombox < 0.45 + 0.10){
        items.push('대형 깜짝 상자 2개');
        addBox('대형 깜짝 상자 2개');
    }else if(randombox < 0.45 + 0.10 + 0.05){
        items.push('대형 깜짝 상자 3개');
        addBox('대형 깜짝 상자 3개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5){
        items.push('모두 모아보세요! 상자 1개')
        addBox('모두 모아보세요! 상자 1개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5){
        items.push('모두 모아보세요! 상자 2개')
        addBox('모두 모아보세요! 상자 2개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5){
        items.push('모두 모아보세요! 상자 3개')
        addBox('모두 모아보세요! 상자 3개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3){
        items.push('블랙 상자 1개')
        addBox('블랙 상자 1개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5){
        items.push('블랙 상자 2개')
        addBox('블랙 상자 2개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20){
        items.push('블랙 상자 3개')
        addBox('블랙 상자 3개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5){
        items.push('미스터리 상자 1개')
        addBox('미스터리 상자 1개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1){
        items.push('미스터리 상자 2개')
        addBox('미스터리 상자 2개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3){
        items.push('미스터리 상자 3개')
        addBox('미스터리 상자 3개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1){
        items.push('메가 상자 1개')
        addBox('메가 상자 1개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1 + 0.2){
        items.push('메가 상자 2개')
        addBox('메가 상자 2개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1 + 0.2 + 0.1){
        items.push('메가 상자 3개')
        addBox('메가 상자 3개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1 + 0.2 + 0.1 + 9){
        items.push('커스터마이징 상자 1개')
        addBox('커스터마이징 상자 1개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1 + 0.2 + 0.1 + 9 + 4){
        items.push('커스터마이징 상자 2개')
        addBox('커스터마이징 상자 2개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1 + 0.2 + 0.1 + 9 + 4 + 1.5){
        items.push('커스터마이징 상자 3개')
        addBox('커스터마이징 상자 3개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1 + 0.2 + 0.1 + 9 + 4 + 1.5 + 0.45){
        items.push('끝내줘요! 상자 1개')
        addBox('끝내줘요! 상자 1개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1 + 0.2 + 0.1 + 9 + 4 + 1.5 + 0.45 + 0.10){
        items.push('끝내줘요! 상자 2개')
        addBox('끝내줘요! 상자 2개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1 + 0.2 + 0.1 + 9 + 4 + 1.5 + 0.45 + 0.10 + 0.05){
        items.push('끝내줘요! 상자 3개')
        addBox('끝내줘요! 상자 3개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1 + 0.2 + 0.1 + 9 + 4 + 1.5 + 0.45 + 0.10 + 0.05 + 9){
        items.push('샌드박스 상자 1개')
        addBox('샌드박스 상자 1개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1 + 0.2 + 0.1 + 9 + 4 + 1.5 + 0.45 + 0.10 + 0.05 + 9 + 2){
        items.push('샌드박스 상자 2개')
        addBox('샌드박스 상자 2개');
    }else if(randombox < 0.45 + 0.10 + 0.05 + 8.5 + 1.5 + 0.5 + 3 + 0.5 + 0.20 + 5 + 1 + 0.3 + 1 + 0.2 + 0.1 + 9 + 4 + 1.5 + 0.45 + 0.10 + 0.05 + 9 + 2 + 1.5){
        items.push('샌드박스 상자 3개')
        addBox('샌드박스 상자 3개');
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

function afterparty(){
    const items = [];

    items.push('장식 열쇠 부적');

    const randomtank = Math.random() * 100;
    if(randomtank < 0.29){
        items.push('(X) Kpz 50 t')
        addTank('(X) Kpz 50 t');
        console.log('(X) Kpz 50 t');
    }else if(randomtank < 0.29 + 3){
        items.push('(X) Waffen F1.0')
        addTank('(X) Waffen F1.0');
        console.log('(X) Waffen F1.0');
    }else if(randomtank < 0.29 + 3 + 0.29){
        items.push('(X) Chieftain Mk.6')
        addTank('(X)Chieftain Mk.6');
        console.log('(X) Chieftain Mk.6');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29){
        items.push('(X) XM66F')
        addTank('(X) XM66F');
        console.log('(X) XM66F');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29){
        items.push('(X)T-22 Medium')
        addTank('(X) T-22 Medium');
        console.log('(X) T-22 Medium');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(IX) Char Futur 4')
        addTank('(IX) Char Futur 4');
        console.log('(IX) Char Futur 4');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(IX) Cobra')
        addTank('(IX) Cobra');
        console.log('(IX) Cobra');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(IX) TL-7-120')
        addTank('(IX) TL-7-120');
        console.log('(IX) TL-7-120');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(IX) Object 452K')
        addTank('(IX) Object 452K');
        console.log('(IX) Object 452K');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(VIII) Progetto 46')
        addTank('(VIII) Progetto 46');
        console.log('(VIII) Progetto 46');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(VIII) EMIL 1951')
        addTank('(VIII) EMIL 1951');
        console.log('(VIII) EMIL 1951');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(VIII) B-C Bourrasque')
        addTank('(VIII) B-C Bourrasque');
        console.log('(VIII) B-C Bourrasque');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(VIII) Kpz 07 RH')
        addTank('(VIII) Kpz 07 RH');
        console.log('(VIII) Kpz 07 RH');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(VIII) Type 5 Ka-Ri')
        addTank('(VIII) Type 5 Ka-Ri');
        console.log('(VIII) Type 5 Ka-Ri');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(VIII) Caliban')
        addTank('(VIII) Caliban');
        console.log('(VIII) Caliban');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(VIII) Chimera')
        addTank('(VIII) Chimera');
        console.log('(VIII) Chimera');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(VIII) T54E2')
        addTank('(VIII) T54E2');
        console.log('(VIII) T54E2');
    }else if(randomtank < 0.29 + 3 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29 + 0.29){
        items.push('(VIII) Obj.590')
        addTank('(VIII) Obj.590');
        console.log('(VIII) Obj.590');
    }

    const randomgold = Math.random() * 100;
    if(randomgold < 85){
        items.push('1000 골드');
        gold += 1000;
    }else if(randomgold < 85 + 10){
        items.push('2500 골드');
        gold += 2500;
    }else if(randmomgold < 85 + 10 + 3){
        items.push('5000 골드');
        gold += 5000;
    }else if(randomgold < 85 + 10 + 3 + 1.5){
        items.push('10000 골드');
        gold += 10000;
    }else if(randomgold < 85 + 10 + 3 + 1.5 + 0.3){
        items.push('50000 골드');
        gold += 50000;
    }else if(randomgold < 85 + 10 + 3 + 1.5 + 0.3 + 0.15){
        items.push('100000 골드');
        gold += 100000;
    }else if(randomgold < 85 + 10 + 3 + 1.5 + 0.3 + 0.15 + 0.04){
        items.push('200000 골드');
        gold += 200000;
    }else if(randomgold < 85 + 10 + 3 + 1.5 + 0.3 + 0.15 + 0.04 + 0.01){
        items.push('300000 골드');
        gold += 300000;
    }

    const randomfxp = Math.random() * 100;
    if(randomfxp < 51){
        items.push('3000 자유 경험치');
    }else if(randomfxp < 51 + 6){
        items.push('5000 자유 경험치');
    }else if(randomfxp < 51 + 6 + 1.8){
        items.push('10000 자유 경험치');
    }else if(randomfxp < 51 + 6 + 1.8 + 0.9){
        items.push('25000 자유 경험치');
    }else if(randomfxp < 51 + 6 + 1.8 + 0.9 + 0.18){
        items.push('50000 자유 경험치');
    }else if(randomfxp < 51 + 6 + 1.8 + 0.9 + 0.18 + 0.09){
        items.push('100000 자유 경험치');
    }else if(randomfxp < 51 + 6 + 1.8 + 0.9 + 0.18 + 0.09 + 0.03){
        items.push('200000 자유 경험치');
    }

    const randomcamo = Math.random() * 100;
    if(randomcamo < 0.43){
        items.push('Starbust 위장');
    }else if(randomcamo < 0.43 * 2){
        items.push('휴고 위장');
    }else if(randomcamo < 0.43 * 3){
        items.push('추적자 위장');
    }else if(randomcamo < 0.43 * 4){
        items.push('Jager 위장');
    }else if(randomcamo < 0.43 * 5){
        items.push('Spooky 위장');
    }else if(randomcamo < 0.43 * 6){
        items.push('Jotunn 위장');
    }else if(randomcamo < 0.43 * 7){
        items.push('방위각 위장');
    }else if(randomcamo < 0.43 * 8){
        items.push('호러 위장');
    }else if(randomcamo < 0.43 * 9){
        items.push('Forster 위장');
    }else if(randomcamo < 0.43 * 10){
        items.push('상어 위장');
    }else if(randomcamo < 0.43 * 11){
        items.push('누아르 위장');
    }else if(randomcamo < 0.43 * 12){
        items.push('바이킹 위장');
    }else if(randomcamo < 0.43 * 13){
        items.push('묠니르 위장');
    }else if(randomcamo < 0.43 * 14){
        items.push('아라크니드 위장');
    }else if(randomcamo < 0.43 * 15){
        items.push('언캐쳐블 위장');
    }else if(randomcamo < 0.43 * 16){
        items.push('글리치 위장');
    }else if(randomcamo < 0.43 * 17){
        items.push('닭장 위장');
    }else if(randomcamo < 0.43 * 18){
        items.push('눈꼴무늬 위장');
    }else if(randomcamo < 0.43 * 19){
        items.push('Seeker 위장');
    }else if(randomcamo < 0.43 * 20){
        items.push('Galvanox 위장');
    }else if(randomcamo < 0.43 * 21){   
        items.push('톱니 작살 괴수 위장');
    }else if(randomcamo < 0.43 * 22){
        items.push('Baba-Yaga 위장');
    }else if(randomcamo < 0.43 * 23){
        items.push('Royal 위장');
    }

    const randomavatar = Math.random() * 100;
    if(randomavatar < 1){
        items.push('올해의 직원 애니메이션 아바타');
    }


    const random5x = Math.random() * 100;
    if(random5x < 51){
        items.push('경험치 5배 1개');
    }else if(random5x < 51 + 6){
        items.push('경험치 5배 2개');
    }else if(random5x < 51 + 6 + 1.8){
        items.push('경험치 5배 3개');
    }else if(random5x < 51 + 6 + 1.8 + 0.9){
        items.push('경험치 5배 5개');
    }else if(random5x < 51 + 6 + 1.8 + 0.9 + 0.18){
        items.push('경험치 5배 10개');
    }else if(random5x < 51 + 6 + 1.8 + 0.9 + 0.18 + 0.09){
        items.push('경험치 5배 15개');
    }else if(random5x < 51 + 6 + 1.8 + 0.9 + 0.18 + 0.09 + 0.03){
        items.push('경험치 5배 20개');
    }

    const randomxpboost = Math.random() * 100;
    if(randomxpboost < 50){
        items.push('경험치 부스터 3개 (영웅)');
    }else (
        items.push('경험치 부스터 5개 (영웅)')
    )

    const randomcreditboost = Math.random() * 100;
    if(randomcreditboost < 50){
        items.push('크레딧 부스터 3개 (영웅)');
    }else (
        items.push('크레딧 부스터 5개 (영웅)')
    )

    const randomconsumables = Math.random() * 100;
    if(randomconsumables < 50){
        items.push('소모품 부스터 3개 (영웅)');
    }else (
        items.push('소모품 부스터 5개 (영웅)')
    )

    const randomhammer = Math.random() * 100;
    if(randomhammer < 85){
        items.push('망치 10개');
    }else if(randomhammer < 85 + 10){
        items.push('망치 20개');
    }else if(randomhammer < 85 + 10 + 3){
        items.push('망치 50개');
    }else if(randomhammer < 85 + 10 + 3 + 1.5){
        items.push('망치 100개');
    }else if(randomhammer < 85 + 10 + 3 + 1.5 + 0.3){
        items.push('망치 200개');
    }else if(randomhammer < 85 + 10 + 3 + 1.5 + 0.3 + 0.15){
        items.push('망치 300개');
    }else if(randomhammer < 85 + 10 + 3 + 1.5 + 0.3 + 0.15 + 0.05){
        items.push('망치 400개');
    }

    const randommetaldetector = Math.random() * 100;
    if(randommetaldetector < 85){
        items.push('금속 탐지기 10개');
    }else if(randommetaldetector < 85 + 10){
        items.push('금속 탐지기 20개');
    }else if(randommetaldetector < 85 + 10 + 3){
        items.push('금속 탐지기 50개');
    }else if(randommetaldetector < 85 + 10 + 3 + 1.5){
        items.push('금속 탐지기 100개');
    }else if(randommetaldetector < 85 + 10 + 3 + 1.5 + 0.3){
        items.push('금속 탐지기 200개');
    }else if(randommetaldetector < 85 + 10 + 3 + 1.5 + 0.3 + 0.15){
        items.push('금속 탐지기 300개');
    }else if(randommetaldetector < 85 + 10 + 3 + 1.5 + 0.3 + 0.15 + 0.05){
        items.push('금속 탐지기 400개');
    }

    const randomprofilebackground = Math.random() * 100;
    if(randomprofilebackground < 0.1){
        items.push('뒤풀이 프로필 배경');
    }

    const randombox = Math.random() * 100;
    if(randombox < 0.90){
        items.push('대형 깜짝 상자 1개');
        addBox('대형 깜짝 상자 1개');
    }else if(randombox < 0.90 + 0.2){
        items.push('대형 깜짝 상자 2개');
        addBox('대형 깜짝 상자 2개');
    }else if(randombox < 0.90 + 0.2 + 0.1){
        items.push('대형 깜짝 상자 3개');
        addBox('대형 깜짝 상자 3개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17){
        items.push('모두 모아보세요! 상자 1개')
        addBox('모두 모아보세요! 상자 1개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3){
        items.push('모두 모아보세요! 상자 2개')
        addBox('모두 모아보세요! 상자 2개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1){
        items.push('모두 모아보세요! 상자 3개')
        addBox('모두 모아보세요! 상자 3개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6){
        items.push('블랙 상자 1개')
        addBox('블랙 상자 1개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1){
        items.push('블랙 상자 2개')
        addBox('블랙 상자 2개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4){
        items.push('블랙 상자 3개')
        addBox('블랙 상자 3개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10){
        items.push('미스터리 상자 1개')
        addBox('미스터리 상자 1개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2){
        items.push('미스터리 상자 2개')
        addBox('미스터리 상자 2개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6){
        items.push('미스터리 상자 3개')
        addBox('미스터리 상자 3개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2){
        items.push('메가 상자 1개')
        addBox('메가 상자 1개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2 + 0.4){
        items.push('메가 상자 2개')
        addBox('메가 상자 2개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2 + 0.4 + 0.2){
        items.push('메가 상자 3개')
        addBox('메가 상자 3개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2 + 0.4 + 0.2 + 0.9){
        items.push('끝내줘요! 상자 1개')
        addBox('끝내줘요! 상자 1개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2 + 0.4 + 0.2 + 0.9 + 0.2){
        items.push('끝내줘요! 상자 2개')
        addBox('끝내줘요! 상자 2개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2 + 0.4 + 0.2 + 0.9 + 0.2 + 0.1){
        items.push('끝내줘요! 상자 3개')
        addBox('끝내줘요! 상자 3개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2 + 0.4 + 0.2 + 0.9 + 0.2 + 0.1 + 18){
        items.push('샌드박스 상자 1개')
        addBox('샌드박스 상자 1개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2 + 0.4 + 0.2 + 0.9 + 0.2 + 0.1 + 18 + 4){
        items.push('샌드박스 상자 2개')
        addBox('샌드박스 상자 2개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2 + 0.4 + 0.2 + 0.9 + 0.2 + 0.1 + 18 + 4 + 3){
        items.push('샌드박스 상자 3개')
        addBox('샌드박스 상자 3개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2 + 0.4 + 0.2 + 0.9 + 0.2 + 0.1 + 18 + 4 + 3 + 18){
        items.push('커스터마이징 상자 1개')
        addBox('커스터마이징 상자 1개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2 + 0.4 + 0.2 + 0.9 + 0.2 + 0.1 + 18 + 4 + 3 + 18 + 8){
        items.push('커스터마이징 상자 2개')
        addBox('커스터마이징 상자 2개');
    }else if(randombox < 0.90 + 0.2 + 0.1 + 17 + 3 + 1 + 6 + 1 + 0.4 + 10 + 2 + 0.6 + 2 + 0.4 + 0.2 + 0.9 + 0.2 + 0.1 + 18 + 4 + 3 + 18 + 8 + 3){
        items.push('커스터마이징 상자 3개')
        addBox('커스터마이징 상자 3개');
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

function slot(){

    const items = [];
    const randomball = Math.floor(Math.random() * 100);
    const normalball = 3.23
    if(randomball < 0.01){
        items.push('다이아몬드 추첨 공 1')
    }else if(randomball < 0.01 + 0.02){
        items.push('다이아몬드 추첨 공 2')
    }else if(randomball < 0.01 + 0.02 + 0.02){
        items.push('다이아몬드 추첨 공 3')
    }else if(randomball < 0.05 + normalball){
        items.push('추첨공 1')
    }else if(randomball < 0.05 + normalball *2){
        items.push('추첨공 2')
    }else if(randomball < 0.05 + normalball *3){
        items.push('추첨공 3')
    }else if(randomball < 0.05 + normalball *4){
        items.push('추첨공 4')
    }else if(randomball < 0.05 + normalball *5){
        items.push('추첨공 5')
    }else if(randomball < 0.05 + normalball *6){
        items.push('추첨공 6')
    }else if(randomball < 0.05 + normalball *7){
        items.push('추첨공 7')
    }else if(randomball < 0.05 + normalball *8){    
        items.push('추첨공 8')
    }else if(randomball < 0.05 + normalball *9){
        items.push('추첨공 9')
    }else if(randomball < 0.05 + normalball *10){
        items.push('추첨공 10')
    }else if(randomball < 0.05 + normalball *11){
        items.push('추첨공 11')
    }else if(randomball < 0.05 + normalball *12){
        items.push('추첨공 12')
    }else if(randomball < 0.05 + normalball *13){
        items.push('추첨공 13')
    }else if(randomball < 0.05 + normalball *14){
        items.push('추첨공 14')
    }else if(randomball < 0.05 + normalball *15){
        items.push('추첨공 15')
    }else if(randomball < 0.05 + normalball *16){
        items.push('추첨공 16')
    }else if(randomball < 0.05 + normalball *17){
        items.push('추첨공 17')
    }else if(randomball < 0.05 + normalball *18){
        items.push('추첨공 18')
    }else if(randomball < 0.05 + normalball *19){
        items.push('추첨공 19')
    }else if(randomball < 0.05 + normalball *20){
        items.push('추첨공 20')
    }else if(randomball < 0.05 + normalball *21){
        items.push('추첨공 21')
    }else if(randomball < 0.05 + normalball *22){
        items.push('추첨공 22')
    }else if(randomball < 0.05 + normalball *23){
        items.push('추첨공 23')
    }else if(randomball < 0.05 + normalball *24){
        items.push('추첨공 24')
    }else if(randomball < 0.05 + normalball *25){
        items.push('추첨공 25')
    }else if(randomball < 0.05 + normalball *26){
        items.push('추첨공 26')
    }else if(randomball < 0.05 + normalball *27){
        items.push('추첨공 27')
    }else if(randomball < 0.05 + normalball *28){
        items.push('추첨공 28')
    }else if(randomball < 0.05 + normalball *29){
        items.push('추첨공 29')
    }else if(randomball < 0.05 + normalball *30){
        items.push('추첨공 30')
    }else if(randomball < 0.05 + normalball *31){
        items.push('추첨공 31')
    }

    let autoslider = document.getElementById('autoslide');

    function addLogItem(items, container) {
        const el = document.createElement('div');
        const hasSpecialItem = items.some(item => item.includes('다이아몬드'));
    
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

    window.addEventListener('scroll', function () {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;



    return items;
}

function party(){
    const items = []
    items.push('황금 파티 부적');
    const randompartycert = Math.random() * 100;
    if(randompartycert < 3){
        items.push('파티 증서 1개');
    }

    const randomfxp = Math.random() * 100;
    if(randomfxp < 49.09){
        items.push('자유경험치 250개')
    }else if(randomfxp < 49.09 + 32.73){
        items.push('자유경험치 500개')
    }else if(randomfxp < 49.09 + 32.73 + 16.36){
        items.push('자유경험치 1000개')
    }else if(randomfxp < 49.09 + 32.73 + 16.36 + 1.64){
        items.push('자유경험치 2500개')
    }else if(randomfxp < 49.09 + 32.73 + 16.36 + 1.64 + 0.16){
        items.push('자유경험치 5000개')
    }else if(randomfxp < 49.09 + 32.73 + 16.36 + 1.64 + 0.16 + 0.02){
        items.push('자유경험치 7500개')
    }else if(randomfxp < 49.09 + 32.73 + 16.36 + 1.64 + 0.16 + 0.02 + 0.002){
        items.push('자유경험치 10000개')
    }

    const randomcredit = Math.random() * 100;
    if(randomcredit < 33.09){
        items.push('크레딧 50,000개')
    }else if(randomcredit < 33.09 + 26.47){
        items.push('크레딧 75,000개')
    }else if((randomcredit < 33.09 + 26.47 + 19.85)){
        items.push('크레딧 100,000개')
    }else if(randomcredit < 33.09 + 26.47 + 19.85 + 13.24){
        items.push('크레딧 150,000개')
    }else if(randomcredit < 33.09 + 26.47 + 19.85 + 13.24 + 6.62){
        items.push('크레딧 200,000개')
    }else if(randomcredit < 33.09 + 26.47 + 19.85 + 13.24 + 6.62 + 0.66){
        items.push('크레딧 250,000개')
    }else if(randomcredit < 33.09 + 26.47 + 19.85 + 13.24 + 6.62 + 0.66 + 0.07){
        items.push('크레딧 500,000개')
    }else if(randomcredit < 33.09 + 26.47 + 19.85 + 13.24 + 6.62 + 0.66 + 0.07 + 0.007){
        items.push('크레딧 750,000개')
    }else if(randomcredit < 33.09 + 26.47 + 19.85 + 13.24 + 6.62 + 0.66 + 0.07 + 0.007 + 0.0007){
        items.push('크레딧 1,000,000개')
    }

    const randomcosmetics = Math.random() * 100;
    if(randomcosmetics < 4.55){
        items.push('따사로운 햇살 프로필 배경');
    }else if(randomcosmetics < 4.55 *2){
        items.push('네온 스라소니 아바타(전설)');
    }else if(randomcosmetics < 4.55 *3){
        items.push('행운의 주사위 아바타(전설)');
    }else if(randomcosmetics < 4.55 *4){
        items.push('집계발랄한 친구 아바타(전설)');
    }else if(randomcosmetics < 4.55 *5){
        items.push('열대 음료 아바타(전설)');
    }else if(randomcosmetics < 4.55 *6){
        items.push('우주 오리 아바타(전설)');
    }else if(randomcosmetics < 4.55 *7){
        items.push('바스티유 위장');
    }else if(randomcosmetics < 4.55 *8){
        items.push('열대 음료 아바타(영웅)');
    }else if(randomcosmetics < 4.55 *9){
        items.push('네온 스라소니 아바타(영웅)');
    }else if(randomcosmetics < 4.55 *10){
        items.push('집게발랄한 친구 아바타(영웅)');   
    }else if(randomcosmetics < 4.55 *11){
        items.push('우주 오리 아바타(영웅)');
    }else if(randomcosmetics < 4.55 *12){
        items.push('행운의 주사위 아바타(영웅)');
    }else if(randomcosmetics < 4.55 *13){
        items.push('52구역 위장');
    }else if(randomcosmetics < 4.55 *14){
        items.push('뇌전 위장');
    }else if(randomcosmetics < 4.55 *15){
        items.push('어반 스파크 위장');
    }else if(randomcosmetics < 4.55 *16){
        items.push('네온 버티고 위장');
    }else if(randomcosmetics < 4.55 *17){
        items.push('예측 불가 위장');   
    }else if(randomcosmetics < 4.55 *18){
        items.push('지옥불 위장');
    }else if(randomcosmetics < 4.55 *19){
        items.push('산화 금속 위장');
    }else if(randomcosmetics < 4.55 *20){
        items.push('현기증 위장');
    }else if(randomcosmetics < 4.55 *21){
        items.push('삼림 수색대 위장');
    }else if(randomcosmetics < 4.55 *22){
        items.push('불꽃놀이 위장');
    }

    const randombooster = Math.random() * 100;
    if(randombooster < 0.67){
        items.push('승무원 경험치 부스터 10개 (영웅)');
    }else if(randombooster < 0.67 + 1){
        items.push('자유 경험치 부스터 9개 (영웅)');
    }else if(randombooster < 0.67 + 1 + 1.33){
        items.push('크레딧 부스터 3개 (영웅)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33){
        items.push('소모품 부스터 12개 (영웅)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33 + 1.67){
        items.push('전투 경험치 부스터 4개 (영웅)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33 + 1.67 + 5.33){
        items.push('크레딧 부스터 4개 (희귀)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33 + 1.67 + 5.33 + 1.33){
        items.push('소모품 부스터 20개 (희귀)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33 + 1.67 + 5.33 + 1.33 + 2.67){
        items.push('승무원 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33 + 1.67 + 5.33 + 1.33 + 2.67 + 4){
        items.push('자유 경험치 부스터 12개 (희귀)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33 + 1.67 + 5.33 + 1.33 + 2.67 + 4 + 6.67){
        items.push('전투 경험치 부스터 5개 (희귀)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33 + 1.67 + 5.33 + 1.33 + 2.67 + 4 + 6.67 + 4.67){
        items.push('소모품 부스터 50개(일반)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33 + 1.67 + 5.33 + 1.33 + 2.67 + 4 + 6.67 + 4.67 + 23.33){
        items.push('전투 경험치 부스터 12개(일반)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33 + 1.67 + 5.33 + 1.33 + 2.67 + 4 + 6.67 + 4.67 + 23.33 + 18.67){
        items.push('크레딧 부스터 8개(일반)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33 + 1.67 + 5.33 + 1.33 + 2.67 + 4 + 6.67 + 4.67 + 23.33 + 18.67 + 14){
        items.push('자유 경험치 부스터 30개(일반)');
    }else if(randombooster < 0.67 + 1 + 1.33 + 0.33 + 1.67 + 5.33 + 1.33 + 2.67 + 4 + 6.67 + 4.67 + 23.33 + 18.67 + 14 + 9.33){
        items.push('승무원 경험치 부스터 40개(일반)');
    }

    const randomgoldbooster = Math.random() * 100;
    if(randomgoldbooster < 1.67){
        items.push('골드 부스터 15개');
    }else if(randomgoldbooster < 1.67 + 1.33){
        items.push('골드 부스터 20개');
    }else if(randomgoldbooster < 1.67 + 1.33 + 0.67){
        items.push('골드 부스터 30개');
    }else if(randomgoldbooster < 1.67 + 1.33 + 0.67 + 0.33){
        items.push('골드 부스터 35개');
    }

    let autoslider = document.getElementById('autoslide');

    function addLogItem(items, container) {
        const el = document.createElement('div');
        const hasSpecialItem = items.some(item => item.includes('파티 증서'));
    
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

    window.addEventListener('scroll', function () {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;



    return items;
}

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    opentimes = 0;
    gold = 0;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    finalgold.innerText = `총 골드량: ${gold}`;
    finaltanks.innerText = '획득한 탱크: ';
    finalboxes.innerText = '획득한 상자: ';
    howmuch = 0;
    tanks = [];
    boxes = [];
});

function goldparty(){
    const items = [];
    items.push('파티 증서 부적');
    const randomtank = Math.random() * 100;
    if(randomtank < 0.45){
        items.push('(X) 114-SP2');
        addTank('(X) 114-SP2');
    }else if(randomtank < 0.45 *2){
        items.push('(X) 116-F3')
        addTank('(X) 116-F3');
    }else if(randomtank < 0.45 *3){
        items.push('(X) Lion');
        addTank('(X) Lion');
    }else if(randomtank < 0.45 *4){
        items.push('(X) XM66F');
        addTank('(X) XM66F');        
    }else if(randomtank < 0.45 *5){
        items.push('(IX) BZ-176');
        addTank('(IX) BZ-176');
    }else if(randomtank < 0.45 *6){ 
        items.push('(IX) BZ-58-2');
        addTank('(IX) BZ-58-2');
    }else if(randomtank < 0.45 *7){
        items.push('(IX) Lorraine 50 t');
        addTank('(IX) Lorraine 50 t');
    }else if(randomtank < 0.45 *8){
        items.push('(VIII) Elefant');
        addTank('(VIII) Elefant');
    }else if(randomtank < 0.45 *9){
        items.push('(VIII) Titan Strife');
        addTank('(VIII) Titan Strife');
    }else if(randomtank < 0.45 *10){
        items.push('(VIII) Vickers MBT');
        addTank('(VIII) Vickers MBT');
    }else if(randomtank < 0.45 *11){
        items.push('(VIII) K-2');
        addTank('(VIII) K-2');
    }

    const randombox = Math.random() * 100;
    if(randombox < 3.57){
        items.push('블랙상자 I 1개');
        addBox('블랙상자 I 1개');   
    }else if(randombox < 3.57 *2){
        items.push('미스터리 상자 I 1개');
        addBox('미스터리 상자 I 1개');
    }else if(randombox < 3.57 *3){
        items.push('모두 모아보세요 상자 1개');
        addBox('모두 모아보세요 상자 1개');
    }else if(randombox < 3.57 *4){
        items.push('중형전차 상자 1개');
        addBox('중형전차 상자 1개');
    }else if(randombox < 3.57 *5){
        items.push('중전차 상자 1개');
        addBox('중전차 상자 1개');
    }else if(randombox < 3.57 *6){
        items.push('경전차 상자 1개');
        addBox('경전차 상자 1개');
    }else if(randombox < 3.57 *7){
        items.push('구축전차 상자 1개');
        addBox('구축전차 상자 1개');
    }

    const randomgold = Math.random() * 100;
    if(randomgold < 27.59){
        items.push('골드 100개');
        gold += 100;
    }else if(randomgold < 27.59 + 27.59){
        items.push('골드 200개');
        gold += 200;
    }else if(randomgold < 27.59 + 27.59 + 22.07){
        items.push('골드 300개');
        gold += 300;
    }else if(randomgold < 27.59 + 27.59 + 22.07 + 22.07){
        items.push('골드 400개');
        gold += 400;
    }else if(randomgold < 27.59 + 27.59 + 22.07 + 22.07 + 0.28){
        items.push('골드 500개');
        gold += 500;
    }else if(randomgold < 27.59 + 27.59 + 22.07 + 22.07 + 0.28 + 0.14){
        items.push('골드 600개');
        gold += 600;
    }else if(randomgold < 27.59 + 27.59 + 22.07 + 22.07 + 0.28 + 0.14 + 0.11){
        items.push('골드 700개');
        gold += 700;
    }else if(randomgold < 27.59 + 27.59 + 22.07 + 22.07 + 0.28 + 0.14 + 0.11 + 0.08){
        items.push('골드 800개');
        gold += 800;
    }else if(randomgold < 27.59 + 27.59 + 22.07 + 22.07 + 0.28 + 0.14 + 0.11 + 0.08 + 0.06){
        items.push('골드 900개');
        gold += 900;
    }else if(randomgold < 27.59 + 27.59 + 22.07 + 22.07 + 0.28 + 0.14 + 0.11 + 0.08 + 0.06 + 0.03){
        items.push('골드 1000개');
        gold += 1000;
    }

    const randomcosmetics = Math.random() * 100;
    if(randomcosmetics < 0.76){
        items.push('이모티콘 조명');
    }else if(randomcosmetics < 0.76 + 0.76){
        items.push('깜짝 상자');
    }else if(randomcosmetics < 0.76 + 0.76 + 3.79){
        items.push('MG 08')
    }else if(randomcosmetics < 0.76 + 0.76 + 3.79 *2){
        items.push('잡동사니 함정 위장');
    }else if(randomcosmetics < 0.76 + 0.76 + 3.79 *3){
        items.push('사냥꾼의 표식 위장');
    }else if(randomcosmetics < 0.76 + 0.76 + 3.79 *3 + 1.52){
        items.push('디지털 일루전 위장');
    }else if(randomcosmetics < 0.76 + 0.76 + 3.79 *3 + 1.52*2 ){
        items.push('달의 궁전 위장');
    }else if(randomcosmetics < 0.76 + 0.76 + 3.79 *4 + 1.52*2){
        items.push('가을 낙엽 위장');  
    }else if(randomcosmetics < 0.76 + 0.76 + 3.79 *4 + 1.52*3){
        items.push('Commedia dell"arte" 위장');
    }else if(randomcosmetics < 0.76 + 0.76 + 3.79 *5 + 1.52*3){
        items.push('헛ㅅ고 사격');
    }

    const randomfxp = Math.random() * 100;
    if(randomfxp < 0.24){
        items.push('자유경험치 28000 증서');
    }else if(randomfxp < 0.24 + 0.47){
        items.push('자유경험치 2300 증서');
    }else if(randomfxp < 0.24 + 0.47 + 47.28){
        items.push('자유경험치 200 증서 2개');
    }else if(randomfxp < 0.24 + 0.47 + 47.28 + 47.28){
        items.push('자유경험치 200 증서 3개');
    }else if(randomfxp < 0.24 + 0.47 + 47.28 + 47.28 + 4.73){
        items.push('자유경험치 200 증서 4개');
    }

    const randomgoldbooster = Math.random() * 100;
    if(randomgoldbooster < 16.67){
        items.push('골드 부스터 1개');
    }else if(randomgoldbooster < 16.67 + 13.33){
        items.push('골드 부스터 2개');
    }else if(randomgoldbooster < 16.67 + 13.33 + 10){
        items.push('골드 부스터 3개');
    }else if(randomgoldbooster < 16.67 + 13.33 + 10 + 6.67){
        items.push('골드 부스터 4개');
    }else if(randomgoldbooster < 16.67 + 13.33 + 10 + 6.67 + 3.33){
        items.push('골드 부스터 5개');
    }

    const randombooster = Math.random() * 100;
    if(randombooster < 5.5){
        items.push('전투 경험치 부스터 3개 (영웅)');
    }else if(randombooster < 5.5 *2){
        items.push('크레딧 부스터 3개 (영웅)');
    }else if(randombooster < 5.5 *3){
        items.push('자유 경험치 부스터 3개 (영웅)');    
    }else if(randombooster < 5.5 *4){   
        items.push('소모품 부스터 3개 (영웅)');
    }else if(randombooster < 5.5 *5){
        items.push('승무원 경험치 부스터 3개 (영웅)');
    }else if(randombooster < 5.5 *5 + 7.34){
        items.push('전투 경험치 부스터 7개 (영웅)');
    }else if(randombooster < 5.5 *5 + 7.34 *2){
        items.push('크레딧 부스터 7개 (영웅)');
    }else if(randombooster < 5.5 *5 + 7.34 *3){
        items.push('자유 경험치 부스터 7개 (영웅)');    
    }else if(randombooster < 5.5 *5 + 7.34 *4){
        items.push('소모품 부스터 7개 (영웅)');
    }else if(randombooster < 5.5 *5 + 7.34 *5){
        items.push('승무원 경험치 부스터 7개 (영웅)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67){
        items.push('전투 경험치 부스터 11개 (영웅)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *2){
        items.push('크레딧 부스터 11개 (영웅)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *3){
        items.push('자유 경험치 부스터 11개 (영웅)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *4){    
        items.push('소모품 부스터 11개 (영웅)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *5){
        items.push('승무원 경험치 부스터 11개 (영웅)'); 
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *5 + 11.01){
        items.push('전투 경험치 부스터 3개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *5 + 11.01 *2){
        items.push('크레딧 부스터 3개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *5 + 11.01 *3){
        items.push('자유 경험치 부스터 3개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *5 + 11.01 *4){
        items.push('소모품 부스터 3개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *5 + 11.01 *5){
        items.push('승무원 경험치 부스터 3개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *5 + 11.01 *6){
        items.push('전투 경험치 부스터 7개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *5 + 11.01 *7){
        items.push('크레딧 부스터 7개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *5 + 11.01 *8){
        items.push('자유 경험치 부스터 7개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *5 + 11.01 *9){
        items.push('소모품 부스터 7개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *5 + 3.67 *5 + 11.01 *10){  
        items.push('승무원 경험치 부스터 7개 (희귀)'); 
    }else if(randombooster < 5.5 *5 + 7.34 *6 + 3.67 *5 + 11.01 *10){
        items.push('전투 경험치 부스터 11개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *7 + 3.67 *5 + 11.01 *10){
        items.push('크레딧 부스터 11개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *8 + 3.67 *5 + 11.01 *10){
        items.push('자유 경험치 부스터 11개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *9 + 3.67 *5 + 11.01 *10){
        items.push('소모품 부스터 11개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10){  
        items.push('승무원 경험치 부스터 11개 (희귀)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94){
        items.push('전투 경험치 부스터 3개 (일반)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *2){
        items.push('크레딧 부스터 3개 (일반)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *3){
        items.push('자유 경험치 부스터 3개 (일반)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *4){
        items.push('소모품 부스터 3개 (일반)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *5){
        items.push('승무원 경험치 부스터 3개 (일반)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *5 + 16.51){
        items.push('전투 경험치 부스터 7개 (일반)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *5 + 16.51 *2){
        items.push('크레딧 부스터 7개 (일반)'); 
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *5 + 16.51 *3){
        items.push('자유 경험치 부스터 7개 (일반)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *5 + 16.51 *4){
        items.push('소모품 부스터 7개 (일반)'); 
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *5 + 16.51 *5){
        items.push('승무원 경험치 부스터 7개 (일반)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *5 + 16.51 *5 + 14.68){
        items.push('전투 경험치 부스터 11개 (일반)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *5 + 16.51 *5 + 14.68 *2){
        items.push('크레딧 부스터 11개 (일반)');    
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *5 + 16.51 *5 + 14.68 *3){
        items.push('자유 경험치 부스터 11개 (일반)');
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *5 + 16.51 *5 + 14.68 *4){
        items.push('소모품 부스터 11개 (일반)');    
    }else if(randombooster < 5.5 *5 + 7.34 *10 + 3.67 *5 + 11.01 *10 + 22.94 *5 + 16.51 *5 + 14.68 *5){
        items.push('승무원 경험치 부스터 11개 (일반)');
    }

    let autoslider = document.getElementById('autoslide');

    function addLogItem(items, container) {
        const el = document.createElement('div');
        const hasSpecialItem = items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') );
    
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

    window.addEventListener('scroll', function () {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;



    return items;


}

function partycert(){
    const items = [];
    const randomtank = Math.random() * 100;
    if(randomtank < 2){
        items.push('(X) 114-SP2');
        addTank('(X) 114-SP2');
    }else if(randomtank < 2 *2){
        items.push('(X) 116-F3')
        addTank('(X) 116-F3');
    }else if(randomtank < 2 *3){
        items.push('(X) Lion');
        addTank('(X) Lion');
    }else if(randomtank < 2 *4){
        items.push('(X) XM66F');
        addTank('(X) XM66F');
    }else if(randomtank < 2 *4 + 4){
        items.push('(IX) BZ-176');
        addTank('(IX) BZ-176');
    }else if(randomtank < 2 *4 + 4 *2){
        items.push('(IX) BZ-58-2');
        addTank('(IX) BZ-58-2');
    }else if(randomtank < 2 *4 + 4 *3){
        items.push('(IX) Lorraine 50 t');
        addTank('(IX) Lorraine 50 t');
    }else if(randomtank < 2 *4 + 4 *3 + 6){
        items.push('(VIII) Elefant');
        addTank('(VIII) Elefant');
    }else if(randomtank < 2 *4 + 4 *3 + 6 *2){
        items.push('(VIII) Titan Strife');
        addTank('(VIII) Titan Strife');
    }else if(randomtank < 2 *4 + 4 *3 + 6 *3){
        items.push('(VIII) Vickers MBT');
        addTank('(VIII) Vickers MBT');
    }else if(randomtank < 2 *4 + 4 *3 + 6 *4){
        items.push('(VIII) K-2');
        addTank('(VIII) K-2');
    }else if(randomtank < 2 *4 + 4 *3 + 6 *4 + 8){
        items.push('모두 모아보세요 상자 10개');
        addBox('모두 모아보세요 상자 10개');
    }else if(randomtank < 2 *4 + 4 *3 + 6 *4 + 8 *2){
        items.push('블랙상자 I 10개');
        addBox('블랙상자 I 10개');
    }else if(randomtank < 2 *4 + 4 *3 + 6 *4 + 8 *3){
        items.push('미스터리 상자 I 10개');
        addBox('미스터리 상자 I 10개');
    }else if(randomtank < 2 *4 + 4 *3 + 6 *4 + 8 *4){
        items.push('중형전차 상자 7개');
        addBox('중형전차 상자 7개');
    }else if(randomtank < 2 *4 + 4 *3 + 6 *4 + 8 *5){
        items.push('중전차 상자 7개');
        addBox('중전차 상자 7개');
    }else if(randomtank < 2 *4 + 4 *3 + 6 *4 + 8 *6){
        items.push('경전차 상자 7개');
        addBox('경전차 상자 7개');
    }else if(randomtank < 2 *4 + 4 *3 + 6 *4 + 8 *7){
        items.push('구축전차 상자 7개');
        addBox('구축전차 상자 7개');
    }
    let autoslider = document.getElementById('autoslide');

    function addLogItem(items, container) {
        const el = document.createElement('div');
        const hasSpecialItem = items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') );
    
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

    window.addEventListener('scroll', function () {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;



    return items;
}

function goldgift1(){
    const items = [];
    items.push('고양이워터볼 선물 부적');
    items.push('황금 태그');
    const randomwaterball = Math.random() * 100;
    if(randomwaterball < 5){
        items.push('고양이 워터볼');
    }else{
        const randomcredit = Math.random() * 100;
        if(randomcredit < 90.9){
            items.push('크레딧 100000개');
        }else if(randomcredit < 90.9 + 9.09){
            items.push('크레딧 200000개');
        }

        items.push('자유 경험치 200 증서 9개');
        
        const randombooster = Math.random() * 100;
        if(randombooster < 24.38){
            items.push('자유 경험치 부스터 10개 (영웅)');
        }else if(randombooster < 24.38 + 24.38){
            items.push('승무원 경험치 부스터 10개 (영웅))');
        }else if(randombooster < 24.38 + 24.38 + 24.38){
            items.push('크레딧 부스터 10개 (영웅)');
        }else if(randombooster < 24.38 + 24.38 + 24.38 + 12.2){
            items.push('전투 경험치 부스터 10개 (영웅)');
        }else if(randombooster < 24.38 + 24.38 + 24.38 + 12.2 + 2.44){
            items.push('자유 경험치 부스터 15개 (영웅)');
        }else if(randombooster < 24.38 + 24.38 + 24.38 + 12.2 + 2.44 + 2.44){
            items.push('승무원 경험치 부스터 15개 (영웅)');
        }else if(randombooster < 24.38 + 24.38 + 24.38 + 12.2 + 2.44 + 2.44 + 2.44){
            items.push('크레딧 부스터 15개 (영웅)');
        }else if(randombooster < 24.38 + 24.38 + 24.38 + 12.2 + 2.44 + 2.44 + 2.44 + 2.44){
            items.push('전투 경험치 부스터 15개 (영웅)');
        }else if(randombooster < 24.38 + 24.38 + 24.38 + 12.2 + 2.44 + 2.44 + 2.44 + 2.44 + 1.22){
            items.push('자유 경험치 부스터 20개 (영웅)');
        }else if(randombooster < 24.38 + 24.38 + 24.38 + 12.2 + 2.44 + 2.44 + 2.44 + 2.44 + 1.22 *2){
            items.push('승무원 경험치 부스터 20개 (영웅)');
        }else if(randombooster < 24.38 + 24.38 + 24.38 + 12.2 + 2.44 + 2.44 + 2.44 + 2.44 + 1.22 *3){
            items.push('크레딧 부스터 20개 (영웅)');
        }else if(randombooster < 24.38 + 24.38 + 24.38 + 12.2 + 2.44 + 2.44 + 2.44 + 2.44 + 1.22 *4){
            items.push('전투 경험치 부스터 20개 (영웅)');
        }
    }
    const randomprofilebackground = Math.random() * 100;
    if(randomprofilebackground < 2.38){
        items.push('Natasha Sokolova 프로필 배경');
    }else if(randomprofilebackground < 2.38 + 2.38){
        items.push('Emily Lowenstein 프로필 배경');
    }else if(randomprofilebackground < 2.38 + 2.38 + 2.38){
        items.push('Natasha Sokolova 애니매이션 아바타');
    }else if(randomprofilebackground < 2.38 + 2.38 + 2.38 + 2.38){
        items.push('Emily Lowenstein 애니매이션 아바타');
    }

    let autoslider = document.getElementById('autoslide');

    function addLogItem(items, container) {
        const el = document.createElement('div');
        const hasSpecialItem = items.some(item => item.includes('고양이 워터볼')  );
    
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

    window.addEventListener('scroll', function () {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;



    return items;
}

function gift1(){
    const items = [];

    const randomcatball = Math.random() * 100;
    if(randomcatball < 2){
        items.push('고양이 워터볼')
    }
    const randombooster = Math.random() * 100;
    if(randombooster < 13.61){
        items.push('전투 경험치 부스터 5개 (희귀)');
    }else if(randombooster < 13.61 *2){
        items.push('크레딧 부스터 5개 (희귀)'); 
    }else if(randombooster < 13.61 *3){
        items.push('승무원 경험치 부스터 5개 (희귀)');
    }else if(randombooster < 13.61 *4){
        items.push('소모품 부스터 5개 (희귀)');
    }else if(randombooster < 13.61 *4 + 8.17){
        items.push('전투 경험치 부스터 10개 (희귀)');
    }else if(randombooster < 13.61 *4 + 8.17 *2){
        items.push('크레딧 부스터 10개 (희귀)');
    }else if(randombooster < 13.61 *4 + 8.17 *3){
        items.push('승무원 경험치 부스터 10개 (희귀)');
    }else if(randombooster < 13.61 *4 + 8.17 *4){
        items.push('소모품 부스터 10개 (희귀)');
    }else if(randombooster < 13.61 *4 + 8.17 *4 + 2.72){
        items.push('전투 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 13.61 *4 + 8.17 *4 + 2.72 *2){
        items.push('크레딧 부스터 15개 (희귀)');
    }else if(randombooster < 13.61 *4 + 8.17 *4 + 2.72 *3){
        items.push('승무원 경험치 부스터 15개 (희귀)');
    }else if(randombooster < 13.61 *4 + 8.17 *4 + 2.72 *4){
        items.push('소모품 부스터 15개 (희귀)');
    }
    const randomgold = Math.random() * 100;
    if(randomgold < 60,12){
        items.push('골드 15개');
        gold += 15;
    }else if(randomgold < 60.12 + 30.06){
        items.push('골드 60개');
        gold += 60;
    }else if(randomgold < 60.12 + 30.06 + 6.01){
        items.push('골드 160개');
        gold += 160;
    }else if(randomgold < 60.12 + 30.06 + 6.01 + 1.20){
        items.push('골드 650개');
        gold += 650;
    }else if(randomgold < 60.12 + 30.06 + 6.01 + 1.20 + 0.60){
        items.push('골드 1650개');
        gold += 1650;
    }

    const randomscert = Math.random() * 100;
    if(randomscert < 4.9){
        items.push('샌드박스 증서')
    }
    const randomcustom = Math.random() * 100;
    if(randomcustom < 11.76){
        items.push('커스터마이징 상자')
    }
    const randomcosmetics = Math.random() * 100;
    if(randomcosmetics < 2.94){
        items.push('Ichigo Shinohara 프로필 배경')
    }else if(randomcosmetics < 2.94 *2){
        items.push('Ichigo Shinohara 애니메이션 아바타')
    }

    let autoslider = document.getElementById('autoslide');

    function addLogItem(items, container) {
        const el = document.createElement('div');
        const hasSpecialItem = items.some(item => item.includes('고양이 워터볼') );
    
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

    window.addEventListener('scroll', function () {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        let rect = settingsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            settingsPage.style.display = 'none';
        }
    });

    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;



    return items;
}

const slider = document.getElementById('slider');
const slid = document.getElementById('slid');

slider.addEventListener('input', function() {
    const containerimg = document.getElementById('containerimg');
    if (slider.value == 1) {
        slid.innerText = '사물함';
        containerimg.src = "img/lockbox.jpg";
        document.title = "사물함";
    }else if (slider.value == 2) {
        slid.innerText = '뒤풀이 상자';
        containerimg.src = "img/afterparty.jpg";
        document.title = "뒤풀이 상자";
    }else if (slider.value == 3) {
        slid.innerText = '추첨 기계';
        containerimg.src = "img/slot.jpg";
        document.title = "추첨 기계";
    }else if(slider.value == 4){
        slid.innerText = '파티 상자';
        containerimg.src = "img/party.jpg";
        document.title = "파티 상자";
    }else if(slider.value == 5){
        slid.innerText = '황금 파티 상자';
        containerimg.src = "img/goldparty.jpg";
        document.title = "황금 파티 상자";
    }else if(slider.value == 6){
        slid.innerText = '파티 증서'
        containerimg.src = "img/partycert.jpg";
        document.title = "파티 증서";
    }else if(slider.value == 7){
        slid.innerText = '황금 선물 상자 (2025-07-26 야옹 카페)';
        containerimg.src = "img/goldgift1.jpg";
        document.title = "황금 선물 상자 (2025-07-26 야옹 카페)";
    }else if(slider.value == 8){
        slid.innerText = '선물 상자 (2025-07-26 야옹 카페)';
        containerimg.src = "img/gift1.jpg";
        document.title = "선물 상자 (2025-07-26 야옹 카페)";
    }
});

let open = document.getElementById('open');
open.addEventListener('click', function() {
    if(slider.value == 1){
        const items = lockbox();
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
        const items = afterparty();
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
        const items = slot();
        resultElement = document.getElementById('result');
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }else if(slider.value == 4){
        const items = party();
        resultElement = document.getElementById('result');
        if(items.some(item => item.includes('파티 증서'))) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }else if(slider.value == 5){
        const items = goldparty();
        resultElement = document.getElementById('result');
        if(items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') )) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }else if(slider.value == 6){
        const items = partycert();
        resultElement = document.getElementById('result');
        if(items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') )) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }else if(slider.value == 7){
        const items = goldgift1();
        resultElement = document.getElementById('result');
        if(items.some(item => item.includes('고양이 워터볼') )) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }else if(slider.value == 8){
        const items = gift1();
        resultElement = document.getElementById('result');
        if(items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)') )) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }   
});





