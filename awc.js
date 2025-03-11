// 변수 선언부 수정
let times = document.getElementById('times');
let howmuch = 0;
let gold = 0; // 골드 변수 초기화
const container = document.getElementById('log-container');
let tanks = [];
let boxes = [];
const finaltanks = document.getElementById('tanks');
const finalgold = document.getElementById('finalgold'); // id 수정
const finalboxes = document.getElementById('finalboxes');

// 상자 추가 함수
function addBox(box) {
    boxes.push(box);
    updateFinalBoxes();
}

// 상자 목록 업데이트 함수
function updateFinalBoxes() { 
    if (finalboxes) {
        finalboxes.innerText = '획득한 상자: ' + boxes.join(', ');
    }
}

// 탱크 목록 업데이트 함수
function updateFinalTanks() {
    finaltanks.innerText = '획득한 탱크: ' + tanks.join(', ');
}

// 탱크 추가 함수
function addTank(tank) {
    tanks.push(tank);
    updateFinalTanks();
}

// 골드 업데이트 함수 추가
function updateGold(amount) {
    gold += amount;
    if (finalgold) {
        finalgold.innerText = `획득한 골드: ${gold}개`;
    }
}

// 로그 항목 추가 함수 - 특별 아이템 강조 기능 포함
function addLogItem(items, container) {
    const el = document.createElement('div');
    
    // 특별 아이템(탱크나 위장) 확인
    const hasSpecialItem = items.some(item => 
        item.includes('(X)') || 
        item.includes('(IX)') || 
        item.includes('(VIII)') || 
        item.includes('(VII)') || 
        item.includes('위장')
    );
    
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
    
    let autoslider = document.getElementById('autoslide');
    if (autoslider && autoslider.checked) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

// 끝내줘요 상자 열기 함수
function awc(){
    const items = [];
    
    // 기본 아이템 추가
    items.push('끝내줘요! 부적');
    
    // 탱크 획득 로직 (10% 확률)
    const randomtank = Math.random() * 100;
    if(randomtank < 10){
        const tanks = [
            '(X) Carro 45t', '(X) Strv K', '(X) T-22 medium', '(X) Object 907',
            '(X) Object 268/4', '(X) AMX M4 54', '(X) Kpz 50t', '(X) VK 90.01 (P)',
            '(X) Chieftain Mk. 6', '(X) Concept 1B', '(IX) Char Futur 4', '(IX) TL-7-120',
            '(IX) K-91', '(IX) Object 752', '(VIII) WZ-120-1 FT', '(VIII) WZ-122 TM',
            '(VIII) Skoda T 56', '(VIII) Progetto 46', '(VIII) Object 274a', '(VIII) Lansen C',
            '(VIII) B-C Bourrasque', '(VIII) AMX CDA 105', '(VIII) Skorpion G',
            '(VIII) M48A2 Räumpanzer', '(VIII) Keiler', '(VIII) Type 57', '(VIII) Titan-54d',
            '(VIII) GSOR 1008', '(VIII) Action X', '(VIII) Chimera', '(VIII) T77',
            '(VIII) M-IV-Y', '(VII) Helsing', '(VII) Dracula', '(VII) Smasher', '(VII) Annihilator'
        ];
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        addTank(selectedTank);
    }
    
    // 프리미엄 계정 획득 로직
    const randompremium = Math.random() * 100;
    if(randompremium < 20.83){
        items.push('프리미엄 계정 7일');
    }else if(randompremium < 20.83 + 3.12){
        items.push('프리미엄 계정 14일');
    }else if(randompremium < 20.83 + 3.12 + 1.04){
        items.push('프리미엄 계정 30일');
    }
    
    // 상자 획득 로직
    const randomcrate = Math.random() * 100;
    if(randomcrate < 16.67){
        items.push('모두 모아보세요 상자');
        addBox('모두 모아보세요 상자');
    }else if(randomcrate < 16.67 + 16.67){
        items.push('블랙 상자 I');
        addBox('블랙 상자 I');
    }else if(randomcrate < 16.67 + 16.67 + 16.67){
        items.push('미스터리 상자');
        addBox('미스터리 상자');
    }
    
    // 열쇠 획득 로직
    const randomkey = Math.random() * 100;
    if(randomkey < 7){
        items.push('자물쇠 상자 열쇠 1개');
    }
    
    // 골드 획득 로직 (UI에서는 제거하지만 기능은 유지)
    let goldAmount = 0;
    const randomgold = Math.random() * 100;
    if(randomgold < 11.87){
        items.push('100골드');
        goldAmount = 100;
    }else if(randomgold < 11.87 + 9.50){
        items.push('200골드');
        goldAmount = 200;
    }else if(randomgold < 11.87 + 9.50 + 8.31){
        items.push('500골드');
        goldAmount = 500;  
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12){
        items.push('750골드');
        goldAmount = 750;    
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94){
        items.push('1000골드');
        goldAmount = 1000;
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94 + 3.09){
        items.push('1500골드');
        goldAmount = 1500;
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94 + 3.09 + 1.90){
        items.push('3000골드');
        goldAmount = 3000;
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94 + 3.09 + 1.90 + 1.42){
        items.push('5000골드');
        goldAmount = 5000;
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94 + 3.09 + 1.90 + 1.42 + 0.83){
        items.push('10000골드');
        goldAmount = 10000;
    }else if(randomgold < 11.87 + 9.50 + 8.31 + 7.12 + 5.94 + 3.09 + 1.90 + 1.42 + 0.83 + 0.02){
        items.push('100000골드');
        goldAmount = 100000;
    }

    // 골드 업데이트 호출 추가
    if (goldAmount > 0) {
        updateGold(goldAmount);
    }
    
    // 자유경험치 획득 로직
    const randomfreexp = Math.random() * 100;
    if(randomfreexp < 6.43){
        items.push('200 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43){
        items.push('500 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43){
        items.push('1000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83){
        items.push('2000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22){
        items.push('5000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57){
        items.push('10000 자유경험치');   
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61){
        items.push('15000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97){
        items.push('20000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97 + 0.32){
        items.push('50000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97 + 0.32 + 0.16){
        items.push('100000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97 + 0.32 + 0.16 + 0.02){
        items.push('250000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97 + 0.32 + 0.16 + 0.02 + 0.006){
        items.push('500000 자유경험치');
    }else if(randomfreexp < 6.43 + 6.43 + 6.43 + 4.83 + 3.22 + 2.57 + 1.61 + 0.97 + 0.32 + 0.16 + 0.02 + 0.006 + 0.003){
        items.push('1000000 자유경험치');
    }
    
    // 경험치 부스터 획득 로직
    const randomxmboost = Math.random() * 100;
    if(randomxmboost < 21.21){
        items.push('경험치 3배 1개');
    }else if(randomxmboost < 21.21 + 15.15){
        items.push('경험치 3배 2개');
    }else if(randomxmboost < 21.21 + 15.15 + 9.09){
        items.push('경험치 3배 3개');
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18){
        items.push('경험치 4배 1개');
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18 + 12.12){
        items.push('경험치 4배 2개');
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06){
        items.push('경험치 4배 3개');
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06 + 9.09){
        items.push('경험치 5배 1개');
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06 + 9.09 + 6.06){
        items.push('경험치 5배 2개');
    }else if(randomxmboost < 21.21 + 15.15 + 9.09 + 18.18 + 12.12 + 6.06 + 9.09 + 6.06 + 3.03){
        items.push('경험치 5배 3개');
    }
    
    // 자유경험치 증서 획득 로직
    const randomfxpboost = Math.random() * 100;
    if(randomfxpboost < 60.61){
        items.push('자유경험치 200증서 3개');
    }else if(randomfxpboost < 60.61 + 30.30){
        items.push('자유경험치 2300증서 2개');
    }else if(randomfxpboost < 60.61 + 30.30 + 9.09){
        items.push('자유경험치 28000증서 1개');
    }
    
    // 부스터 획득 로직
    const randombooster = Math.random() * 100;
    if(randombooster < 12.50){
        items.push('전투 경험치 부스터 15개(일반)');
    }else if(randombooster < 12.50 + 12.50){
        items.push('자유 경험치 부스터 15개(일반)');
    }else if(randombooster < 12.50 + 12.50 + 12.50){
        items.push('승무원 경험치 부스터 15개(일반)');
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50){
        items.push('크레딧 경험치 부스터 15개(일반)');
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33){
        items.push('전투 경험치 부스터 15개(희귀)');
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33){
        items.push('자유 경험치 부스터 15개(희귀)');
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33){
        items.push('승무원 경험치 부스터 15개(희귀)');
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33 + 8.33){
        items.push('크레딧 경험치 부스터 15개(희귀)');
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33 + 8.33 + 4.17){
        items.push('전투 경험치 부스터 15개(영웅)');
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33 + 8.33 + 4.17 + 4.17){
        items.push('자유 경험치 부스터 15개(영웅)');
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33 + 8.33 + 4.17 + 4.17 + 4.17){
        items.push('승무원 경험치 부스터 15개(영웅)');
    }else if(randombooster < 12.50 + 12.50 + 12.50 + 12.50 + 8.33 + 8.33 + 8.33 + 8.33 + 4.17 + 4.17 + 4.17 + 4.17){
        items.push('크레딧 경험치 부스터 15개(영웅)');
    }
    
    // 로그 항목 추가
    addLogItem(items, container);
    
    // 세팅 메뉴 스크롤 이벤트
    window.addEventListener('scroll', function() {
        let settingsButton = document.getElementById('settings');
        let settingsPage = document.getElementById('settingsPage');
        if (settingsButton && settingsPage) {
            let rect = settingsButton.getBoundingClientRect();
            if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
                settingsPage.style.display = 'none';
            }
        }
    });
    
    // 카운터 업데이트
    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    
    return items;
}

// 페이지 로드 시 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    // 상자 열기 버튼 이벤트
    let open = document.getElementById('open');
    if (open) {
        open.addEventListener('click', function() {
            const items = awc();
            const resultElement = document.getElementById('result');
            
            // 특별 아이템 확인 및 스타일 적용
            if (items.some(item => 
                item.includes('(X)') || 
                item.includes('(IX)') || 
                item.includes('(VIII)') || 
                item.includes('(VII)')
            )) {
                resultElement.style.color = 'red';
                resultElement.style.backgroundColor = 'aqua';
                resultElement.style.padding = '10px';
                resultElement.style.borderRadius = 'var(--border-radius)';
            } else {
                resultElement.style.backgroundColor = 'var(--card-bg)';
                resultElement.style.color = 'var(--text-color)';
                resultElement.style.padding = '15px';
            }
            
            resultElement.innerText = `결과: ${items.join(', ')}`;
        });
    }
    
    // 초기화 버튼 이벤트
    const reset = document.getElementById('reset');
    if (reset) {
        reset.addEventListener('click', function() {
            howmuch = 0;
            gold = 0; // 골드 초기화 추가
            times.innerText = `상자를 깐 횟수: ${howmuch}회`;
            finaltanks.innerText = '획득한 탱크: ';
            if (finalgold) finalgold.innerText = '획득한 골드: 0개'; // 골드 표시 초기화
            tanks = [];
            boxes = [];
        });
    }
    
    // 설정 버튼 이벤트
    const settingsBtn = document.getElementById('settings');
    const settingsPage = document.getElementById('settingsPage');
    if (settingsBtn && settingsPage) {
        settingsBtn.addEventListener('click', function() {
            settingsPage.style.display = settingsPage.style.display === 'block' ? 'none' : 'block';
        });
        
        // 설정 외부 클릭 이벤트
        document.addEventListener('click', function(e) {
            if (settingsBtn && settingsPage && !settingsBtn.contains(e.target) && !settingsPage.contains(e.target)) {
                settingsPage.style.display = 'none';
            }
        });
    }
    
    // 로그 토글 버튼 이벤트
    const log = document.getElementById('log');
    const deleteButton = document.getElementById('delete');
    if (log && container) {
        log.addEventListener('click', function() {
            if (container.style.display === 'none' || container.style.display === '') {
                container.style.display = 'block';
                if (deleteButton) deleteButton.style.display = 'block';
            } else {
                container.style.display = 'none';
                if (deleteButton) deleteButton.style.display = 'none';
            }
        });
    }
    
    // 로그 삭제 버튼 이벤트
    if (deleteButton && container) {
        deleteButton.addEventListener('click', function() {
            container.innerHTML = '';
        });
    }
    
    // 뒤로가기 버튼 이벤트
    const back = document.getElementById('back');
    if (back) {
        back.addEventListener('click', function() {
            window.location.href = '/';
        });
    }
    
    // 박스 선택 이벤트
    const box = document.getElementById('box');
    if (box) {
        box.addEventListener('change', function() {
            const boxValue = box.value;
            const boxRedirects = {
                '1': '/index.html',
                '2': '/blackbox.html',
                '3': '/mysterybox.html',
                '4': '/cta.html',
                '5': '/mega.html',
                '6': '/awc.html',
                '7': '/massive.html',
                '8': '/country.html',
                '9': '/tank.html',
                '10': '/alpha.html',
                '11': '/event.html',
                '12': '/extras.html',
                '13': '/nation.html'
            };
            
            if (boxRedirects[boxValue]) {
                window.location.href = boxRedirects[boxValue];
            }
        });
    }
    
    // 초기값 설정
    if (times) times.innerText = `상자를 깐 횟수: 0회`;
    if (finaltanks) finaltanks.innerText = '획득한 탱크: ';
    if (finalgold) finalgold.innerText = '획득한 골드: 0개'; // 0개 표시 추가
    
});





