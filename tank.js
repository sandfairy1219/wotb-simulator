let howmuch = 0
let times = document.getElementById('times');
let maintank = document.getElementById('maintank');
let usegold = document.getElementById('usegold');
let usedgold = 0;
let gotgold = 0;
const container = document.getElementById('log-container');



function tank(){
    const items = [];

    const randomtank = Math.random() * 100;
    if(randomtank < 5){
        items.push(maintank.value);
        console.log(maintank.value);
    }

    const randomgold = Math.random() * 100;
    if(randomgold < 8.25){
        items.push('100골드');
        gotgold += 100;
    }else if(randomgold < 8.25 + 7.22){
        items.push('200골드');
        gotgold += 200;
    }else if(randomgold < 8.25 + 7.22 + 6.19){
        items.push('500골드');
        gotgold += 500;
    }else if(randomgold < 8.25 + 7.22 + 6.19 + 4.12){
        items.push('750골드');
        gotgold += 750;
    }else if(randomgold < 8.25 + 7.22 + 6.19 + 4.12 + 1.34){
        items.push('1000골드');
        gotgold += 1000;
    }else if(randomgold < 8.25 + 7.22 + 6.19 + 4.12 + 1.34 + 1.13){
        items.push('1500골드');
        gotgold += 1500;
    }else if(randomgold < 8.25 + 7.22 + 6.19 + 4.12 + 1.34 + 1.13 + 0.82){
        items.push('3000골드');
        gotgold += 3000;
    }else if(randomgold < 8.25 + 7.22 + 6.19 + 4.12 + 1.34 + 1.13 + 0.82 + 0.62){
        items.push('5000골드');
        gotgold += 5000;
    }else if(randomgold < 8.25 + 7.22 + 6.19 + 4.12 + 1.34 + 1.13 + 0.82 + 0.62 + 0.31){
        items.push('10000골드');
        gotgold += 10000;
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









    howmuch++;
    times.innerText = `상자를 깐 횟수 : ${howmuch}회`;
    usedgold += 1500;

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

    return items;
}

let open = document.getElementById('open');
open.addEventListener('click', () => {
    const items = tank();
    const resultElement = document.getElementById('result');
    if (items.includes(maintank.value)) {
        resultElement.style.backgroundColor = 'aqua';
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'black';
        resultElement.style.backgroundColor = 'white';
    }
    resultElement.innerText = `결과: ${items.join(', ')}`;
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    howmuch = 0
    usedgold = 0
    gold = 0
    
    usegold.textContent = `사용한 골드량 : ${usedgold}`;
    times.innerText = `상자를 깐 횟수: ${howmuch}회`;
    finalgold.textContent = `획득한 골드량 : ${usedgold - gold}`;
    tanks = [];
    updateFinalTanks()
    
});