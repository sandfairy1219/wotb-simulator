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
});





