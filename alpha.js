let times = document.getElementById('times');
let howmuch = 0;
const container = document.getElementById('log-container');
let tanks = [];
let camos = [];
const finaltanks = document.getElementById('tanks');
const finalcamos = document.getElementById('camos');


function updateFinalTanks() {
    finaltanks.innerText = '획득한 탱크: ' + tanks.join(', ');
}

// 탱크를 추가하는 함수
function addTank(tank) {
    tanks.push(tank);
    updateFinalTanks();
}

function updateFinalcamos() {
    finalcamos.innerText = '획득한 위장: ' + camos.join(', ');
}

function addCamo(camo) {
    camos.push(camo);
    updateFinalcamos();
}

function alpha(){
    const items = []

    items.push('최상위 포식자 부적');

    const randomtank = Math.random() * 100;
    if(randomtank < 5){
        const tanks = [
            '(X) 121B',
            '(X) WZ-111 5A',
            '(X) Carro 45t',
            '(X) T-22 medium',
            '(X) M60',
            '(X) VK 90.01 (P)',
            '(X) Strv K',
            '(X) AMX 30 B',
            '(X) AMX M4 54',
            '(X) Kpz 50 t',
            '(X) Cheiftain Mk.6',
            '(X) Super Conqueror',
            '(X) FV217 Badger',
            '(X) Concept 1B',
            '(X) T95E6',
            '(X) Obj. 907',
            '(X) Obj. 260',
            '(X) Obj. 777 II',
            '(X) Object 268/4'
        ]
        const selectedTank = tanks[Math.floor(Math.random() * tanks.length)];
        items.push(selectedTank);
        console.log(selectedTank);
        addTank(selectedTank);
    }

    const randomCamouflage = Math.random() * 100;
    if(randomCamouflage < 5){
        const camouflages = [
            'Rocketeer 위장',
            '무적 위장',
            'Rex 위장',
            '임펄스 위장',
            'Royal 위장',
            '피라냐 위장',
            '홍염룡 위장',
            '파이크 위장',
            '무자비 위장',
            '코르시카 위장',
            '코눙 위장',
            '쾨니히 위장',
            'Jager 위장',
            '글리치 위장',
            '대검 위장',
            '언캐쳐블 위장',
            '크로노스 위장',
            'Esquire 위장',
            '불새 위장'
        ]
        const selectedCamo = camouflages[Math.floor(Math.random() * camouflages.length)];
        items.push(selectedCamo);
        console.log(selectedCamo);
        addCamo(selectedCamo);
    }

    const randomxpboost = Math.random() * 100;
    if(randomxpboost < 17.5){
        items.push('경험치 4배 1개');
    }else if(randomxpboost < 17.5 + 11.67){
        items.push('경험치 4배 2개');
    }else if(randomxpboost < 17.5 + 11.67 + 5.83){
        items.push('경험치 4배 3개');
    }else if(randomxpboost < 17.5 + 11.67 + 5.83 + 7.5){
        items.push('경험치 5배 1개');
    }else if(randomxpboost < 17.5 + 11.67 + 5.83 + 7.5 + 5){
        items.push('경험치 5배 2개');
    }else if(randomxpboost < 17.5 + 11.67 + 5.83 + 7.5 + 5 + 2.5){
        items.push('경험치 5배 3개');
    }else if(randomxpboost < 17.5 + 11.67 + 5.83 + 7.5 + 5 + 2.5 + 23.33){
        items.push('경험치 3배 1개');
    }else if(randomxpboost < 17.5 + 11.67 + 5.83 + 7.5 + 5 + 2.5 + 23.33 + 16.67){
        items.push('경험치 3배 2개');
    }else if(randomxpboost < 17.5 + 11.67 + 5.83 + 7.5 + 5 + 2.5 + 23.33 + 16.67 + 10){
        items.push('경험치 3배 3개');
    }

    const randomfxpcertificate = Math.random() * 100;
    if(randomfxpcertificate < 8.33){
        items.push('자유 경험치 28000증서 1개 ');
    }else if(randomfxpcertificate < 8.33 + 5){
        items.push('자유 경험치 28000증서 2개');
    }else if(randomfxpcertificate < 8.33 + 5 + 1.67){
        items.push('자유 경험치 28000증서 3개');
    }else if(randomfxpcertificate < 8.33 + 5 + 1.67 + 19.44){
        items.push('자유 경험치 2300증서 1개');
    }else if(randomfxpcertificate < 8.33 + 5 + 1.67 + 19.44 + 11.67){
        items.push('자유 경험치 2300증서 2개');
    }else if(randomfxpcertificate < 8.33 + 5 + 1.67 + 19.44 + 11.67 + 3.89){
        items.push('자유 경험치 2300증서 3개');
    }else if(randomfxpcertificate < 8.33 + 5 + 1.67 + 19.44 + 11.67 + 3.89 + 27.78){
        items.push('자유 경험치 200증서 1개');
    }else if(randomfxpcertificate < 8.33 + 5 + 1.67 + 19.44 + 11.67 + 3.89 + 27.78 + 16.67){
        items.push('자유 경험치 200증서 2개');
    }else if(randomfxpcertificate < 8.33 + 5 + 1.67 + 19.44 + 11.67 + 3.89 + 27.78 + 16.67 + 5.56){
        items.push('자유 경험치 200증서 3개');
    }

    const randombooster = Math.random() * 100;
    if(randombooster < 2.08){
        items.push('크레딧 부스터 (영웅) 15개');
    }else if(randombooster < 2.08*2){
        items.push('자유 경험치 부스터 (영웅) 15개');
    }else if(randombooster < 2.08*3){
        items.push('경험치 부스터 (영웅) 15개');
    }else if(randombooster < 2.08*4){
        items.push('승무원 경험치 부스터 (영웅) 15개');
    }else if(randombooster < 2.08*4 + 1.25){
        items.push('크레딧 부스터 (영웅) 20개');
    }else if(randombooster < 2.08*4 + 1.25*2){
        items.push('자유 경험치 부스터 (영웅) 20개');
    }else if(randombooster < 2.08*4 + 1.25*3){
        items.push('경험치 부스터 (영웅) 20개');
    }else if(randombooster < 2.08*4 + 1.25*4){
        items.push('승무원 경험치 부스터 (영웅) 20개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42){
        items.push('크레딧 부스터 (영웅) 25개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*2){
        items.push('자유 경험치 부스터 (영웅) 25개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*3){
        items.push('경험치 부스터 (영웅) 25개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4){
        items.push('승무원 경험치 부스터 (영웅) 25개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86){
        items.push('크레딧 부스터 (희귀) 15개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*2){
        items.push('자유 경험치 부스터 (희귀) 15개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*3){
        items.push('경험치 부스터 (희귀) 15개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4){
        items.push('승무원 경험치 부스터 (희귀) 15개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92){
        items.push('크레딧 부스터 (희귀) 20개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*2){
        items.push('자유 경험치 부스터 (희귀) 20개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*3){
        items.push('경험치 부스터 (희귀) 20개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4){
        items.push('승무원 경험치 부스터 (희귀) 20개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97){
        items.push('크레딧 부스터 (희귀) 25개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*2){
        items.push('자유 경험치 부스터 (희귀) 25개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*3){
        items.push('경험치 부스터 (희귀) 25개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4){
        items.push('승무원 경험치 부스터 (희귀) 25개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94){
        items.push('크레딧 부스터 (일반) 15개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94*2){
        items.push('자유 경험치 부스터 (일반) 15개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94*3){
        items.push('경험치 부스터 (일반) 15개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94*4){
        items.push('승무원 경험치 부스터 (일반) 15개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94*4 + 4.17){
        items.push('크레딧 부스터 (일반) 20개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94*4 + 4.17*2){
        items.push('자유 경험치 부스터 (일반) 20개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94*4 + 4.17*3){
        items.push('경험치 부스터 (일반) 20개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94*4 + 4.17*4){
        items.push('승무원 경험치 부스터 (일반) 20개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94*4 + 4.17*4 + 1.39){
        items.push('크레딧 부스터 (일반) 25개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94*4 + 4.17*4 + 1.39*2){
        items.push('자유 경험치 부스터 (일반) 25개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94*4 + 4.17*4 + 1.39*3){
        items.push('경험치 부스터 (일반) 25개');
    }else if(randombooster < 2.08*4 + 1.25*4 + 0.42*4 + 4.86*4 + 2.92*4 + 0.97*4 + 6.94*4 + 4.17*4 + 1.39*4){
        items.push('승무원 경험치 부스터 (일반) 25개');
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

    howmuch++;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;



    return items;










}

let open = document.getElementById('open')
open.addEventListener('click', function() {
    const items = awc();
    const resultElement = document.getElementById('result');
    if (items.some(item => item.includes('(X)') || item.includes('위장'))) {
        resultElement.style.color = 'red';
        resultElement.style.backgroundColor = 'aqua';
    } else {
        resultElement.style.backgroundColor = 'white';
        resultElement.style.color = 'black';
    }
    resultElement.innerText = `결과: ${items.join(', ')}`;
    
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    opentimes = 0;
    gold = 0;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    finalgold.innerText = `총 골드량: ${gold}`;
    finaltanks.innerText = '획득한 탱크: ';
    howmuch = 0;
    tanks = [];

});