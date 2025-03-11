const finalgold = document.getElementById('finalgold');
const container = document.getElementById('log-container');
const times = document.getElementById('times');
let opentimes = 0;
let gold = 0;
function blackboxlv1() {
    const items = [];

    // 블랙상자 2
    const randomBlackBox2 = Math.random() * 100;
    if (randomBlackBox2 < 20) {
        items.push('블랙상자 2'); // 20% 확률
    }
    
    // 블랙상자 3
    const randomBlackBox3 = Math.random() * 100;
    if (randomBlackBox3 < 5) {
        items.push('블랙상자 3'); // 5% 확률
    }

    // 골드
    const randomGold = Math.random() * 100;
    if (randomGold < 25) {
        items.push('골드 100개'); // 25% 확률
        gold += 100;
    } else if (randomGold < 50) {
        items.push('골드 200개'); // 25% 확률
        gold += 200;
    } else if (randomGold < 75) {
        items.push('골드 300개'); // 25% 확률
        gold += 300;
    } else {
        items.push('골드 400개'); // 25% 확률
        gold += 400;
    }

    // 자유경험치 (1~900)
    const randomExp = Math.floor(Math.random() * 900) + 1;
    items.push(`자유경험치 ${randomExp}개`);

    // 골드 부스터
    const randomBooster = Math.random() * 100;
    if (randomBooster < 33.33) {
        items.push('골드 부스터 1개'); // 33.33% 확률
    } else if (randomBooster < 66.66) {
        items.push('골드 부스터 2개'); // 33.33% 확률
    } else {
        items.push('골드 부스터 3개'); // 33.33% 확률
    }

    finalgold.innerText = `총 골드량: ${gold}`;

    let autoslider = document.getElementById('autoslide');

    function addLogItem(items, container) {
    const el = document.createElement('div');

    // 특별 아이템(탱크나 위장) 확인
    const hasSpecialItem = items.some(item => item.includes('블랙상자 3') || item.includes('블랙상자 2'));
    
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

    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    
    return items;
}


function blackboxlv2() {
    const items = [];

    // 블랙상자 3
    const randomBlackBox2 = Math.random() * 100;
    if (randomBlackBox2 < 20) {
        items.push('블랙상자 3'); // 20% 확률
    }
    
    // 블랙상자 4
    const randomBlackBox3 = Math.random() * 100;
    if (randomBlackBox3 < 5) {
        items.push('블랙상자 4'); // 5% 확률
    }

    // 골드
    const randomGold = Math.random() * 100;
    if (randomGold < 20) {
        items.push('골드 200개'); // 20% 확률
        gold += 200;
    } else if (randomGold < 40) {
        items.push('골드 300개'); // 20% 확률
        gold += 300;
    } else if (randomGold < 60) {
        items.push('골드 400개'); // 20% 확률
        gold += 400;
    } else if(randomGold < 80){
        items.push('골드 500개'); // 20% 확률
        gold += 500;
    } else{
        items.push('골드 600개');
        gold += 600;
    }

    // 자유경험치 (1~900)
    const randomExp = Math.floor(Math.random() * 900) + 1;
    items.push(`자유경험치 ${randomExp}개`);

    // 골드 부스터
    const randomBooster = Math.random() * 100;
    if (randomBooster < 33.33) {
        items.push('골드 부스터 2개'); // 33.33% 확률
    } else if (randomBooster < 66.66) {
        items.push('골드 부스터 3개'); // 33.33% 확률
    } else {
        items.push('골드 부스터 4개'); // 33.33% 확률
    }

    finalgold.innerText = `총 골드량: ${gold}`;

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

    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    
    return items;
}


function blackboxlv3() {
    const items = [];

    items.push('블랙 부적')

    // 블랙상자 4
    const randomBlackBox2 = Math.random() * 100;
    if (randomBlackBox2 < 20) {
        items.push('블랙상자 4'); // 20% 확률
    }
    
    // 블랙상자 5
    const randomBlackBox3 = Math.random() * 100;
    if (randomBlackBox3 < 5) {
        items.push('블랙상자 5'); // 5% 확률
    }

    // 골드
    const randomGold = Math.random() * 100;
    if (randomGold < 14.29) {
        items.push('골드 300개'); // 20% 확률
        gold += 300;
    } else if (randomGold < 14.29 + 14.29) {
        items.push('골드 400개'); // 20% 확률
        gold += 400;
    } else if (randomGold < 14.29 + 14.29 + 14.29) {
        items.push('골드 500개'); // 20% 확률
        gold += 500;
    } else if(randomGold < 14.29 + 14.29 + 14.29 + 14.29){
        items.push('골드 600개'); // 20% 확률
        gold += 600;
    } else if(randomGold < 14.29 + 14.29 + 14.29 + 14.29 + 14.29 ){
        items.push('골드 700개');
        gold += 700;
    } else if(randomGold < 14.29 + 14.29 + 14.29 + 14.29 + 14.29 + 14.29){
        items.push('골드 800개');
        gold += 800;
    } else{
        items.push('골드 900개')
        gold += 900;
    }

    // 자유경험치 (1~900)
    const randomExp = Math.floor(Math.random() * 1000) 
    items.push(`자유경험치 ${randomExp}개`);

    // 골드 부스터
    const randomBooster = Math.random() * 100;
    if (randomBooster < 33.33) {
        items.push('골드 부스터 3개'); // 33.33% 확률
    } else if (randomBooster < 66.66) {
        items.push('골드 부스터 4개'); // 33.33% 확률
    } else {
        items.push('골드 부스터 5개'); // 33.33% 확률
    }

    finalgold.innerText = `총 골드량: ${gold}`;

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

    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    
    return items;
}

function blackboxlv4(){
    const items = [];
    
    items.push('블랙 부적')
    // 블랙상자 5
    const randomBlackBox2 = Math.random() * 100;
    if (randomBlackBox2 < 20) {
        items.push('블랙상자 5'); // 20% 확률
    }
    
    // 블랙상자 6
    const randomBlackBox3 = Math.random() * 100;
    if (randomBlackBox3 < 5) {
        items.push('블랙상자 6'); // 5% 확률
    }

    // 골드
    const randomGold = Math.random() * 100;
    if (randomGold < 9.09) {
        items.push('골드 500개'); // 9.09% 확률
        gold += 500;
    } else if (randomGold < 9.09 + 9.09) {
        items.push('골드 600개'); // 9.09% 확률
        gold += 600;
    } else if (randomGold < 9.09 + 9.09 + 9.09) {
        items.push('골드 700개'); // 9.09% 확률
        gold += 700;
    }else if(randomGold < 9.09 + 9.09 + 9.09 + 9.09){
        items.push('골드 800개'); // 9.09% 확률
        gold += 800;
    } else if(randomGold < 9.09 + 9.09 + 9.09 + 9.09 + 9.09 ){
        items.push('골드 900개');
        gold += 900;
    } else if(randomGold < 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09){
        items.push('골드 1000개');
        gold += 1000;
    } else if(randomGold < 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09){
        items.push('골드 1100개');
        gold += 1100;
    } else if(randomGold < 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09){
        items.push('골드 1200개');
        gold += 1200;
    } else if(randomGold < 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09){
        items.push('골드 1300개');
        gold += 1300;
    } else if(randomGold < 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09 + 9.09){
        items.push('골드 1400개');
        gold += 1400;
    } else{
        items.push('골드 1500개')
        gold += 1500;
    }

    // 자유경험치 (1~900)
    const randomExp = Math.floor(Math.random() * 1000) 
    items.push(`자유경험치 ${randomExp}개`);

    // 골드 부스터
    const randomBooster = Math.random() * 100;
    if (randomBooster < 20) {
        items.push('골드 부스터 4개'); // 20% 확률
    } else if (randomBooster < 40) {
        items.push('골드 부스터 5개'); // 20% 확률
    } else if (randomBooster < 60) {
        items.push('골드 부스터 6개'); // 20% 확률
    } else if (randomBooster < 80) {
        items.push('골드 부스터 7개'); // 20% 확률
    } else {
        items.push('골드 부스터 8개'); // 20% 확률
    }

    finalgold.innerText = `총 골드량: ${gold}`;

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

    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    
    return items;
}




function blackboxlv5() {
    const items = [];

    items.push('블랙 부적')
    
    // 블랙상자 6
    const randomBlackBox2 = Math.random() * 100;
    if (randomBlackBox2 < 20) {
        items.push('블랙상자 6'); // 20% 확률
    }
    
    // 블랙상자 7
    const randomBlackBox3 = Math.random() * 100;
    if (randomBlackBox3 < 5) {
        items.push('블랙상자 7'); // 5% 확률
    }
    
    // 골드
    const randomGold = Math.random() * 100;
    if (randomGold < 9.09) {
        items.push('골드 1000개'); // 9.09% 확률
        gold += 1000;
    } else if (randomGold < 18.18) {
        items.push('골드 1100개'); // 9.09% 확률
        gold += 1100;
    } else if (randomGold < 27.27) {
        items.push('골드 1200개'); // 9.09% 확률
        gold += 1200;
    } else if (randomGold < 36.36) {
        items.push('골드 1300개'); // 9.09% 확률
        gold += 1300;
    } else if (randomGold < 45.45) {
        items.push('골드 1400개'); // 9.09% 확률
        gold += 1400;
    } else if (randomGold < 54.54) {
        items.push('골드 1500개'); // 9.09% 확률
        gold += 1500;
    } else if (randomGold < 63.63) {
        items.push('골드 1600개'); // 9.09% 확률
        gold += 1600;
    } else if (randomGold < 72.72) {
        items.push('골드 1700개'); // 9.09% 확률
        gold += 1700;
    } else if (randomGold < 81.81) {
        items.push('골드 1800개'); // 9.09% 확률
        gold += 1800;
    } else if (randomGold < 90.90) {
        items.push('골드 1900개'); // 9.09% 확률
        gold += 1900;
    } else {
        items.push('골드 2000개'); // 9.09% 확률
        gold += 2000;
    }
    
    // 자유경험치 (1~1000)
    const randomExp = Math.floor(Math.random() * 1000) ;
    items.push(`자유경험치 ${randomExp}개`);
    
    // 골드 부스터
    const randomBooster = Math.random() * 100;
    if (randomBooster < 16.67) {
        items.push('골드 부스터 5개'); // 16.67% 확률
    } else if (randomBooster < 33.33) {
        items.push('골드 부스터 6개'); // 16.67% 확률
    } else if (randomBooster < 50) {
        items.push('골드 부스터 7개'); // 16.67% 확률
    } else if (randomBooster < 66.67) {
        items.push('골드 부스터 8개'); // 16.67% 확률
    } else if (randomBooster < 83.33) {
        items.push('골드 부스터 9개'); // 16.67% 확률
    } else {
        items.push('골드 부스터 10개'); // 16.67% 확률
    }
    
    const randomavatar = Math.random() * 100;
    if (randomavatar < 1) {
        items.push('빛나는 왕관 애니메이션 아바타');
    }    
    
    
    finalgold.innerText = `총 골드량: ${gold}`;
    
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
    
    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    
    return items;
}


function blackboxlv6() {
    const items = [];

    items.push('블랙 부적')
    
    // 블랙상자 7
    const randomBlackBox2 = Math.random() * 100;
    if (randomBlackBox2 < 20) {
        items.push('블랙상자 7'); // 20% 확률
    }
    
    // 블랙상자 8
    const randomBlackBox3 = Math.random() * 100;
    if (randomBlackBox3 < 5) {
        items.push('블랙상자 8'); // 5% 확률
    }
    
    // 골드
    const randomGold = Math.random() * 100;
if(randomGold < 7.14){
    items.push('골드 1200개');
    gold += 1200;
} else if(randomGold < 7.14 * 2){
    items.push('골드 1300개');
    gold += 1300;
} else if(randomGold < 7.14 * 3){
    items.push('골드 1400개');
    gold += 1400;
} else if(randomGold < 7.14 * 4){
    items.push('골드 1500개');
    gold += 1500;
} else if(randomGold < 7.14 * 5){
    items.push('골드 1600개');
    gold += 1600;
} else if(randomGold < 7.14 * 6){
    items.push('골드 1700개');
    gold += 1700;
} else if(randomGold < 7.14 * 7){
    items.push('골드 1800개');
    gold += 1800;
} else if(randomGold < 7.14 * 8){
    items.push('골드 1900개');
    gold += 1900;
} else if(randomGold < 7.14 * 9){
    items.push('골드 2000개');
    gold += 2000;
} else if(randomGold < 7.14 * 10){
    items.push('골드 2100개');
    gold += 2100;
} else if(randomGold < 7.14 * 11){
    items.push('골드 2200개');
    gold += 2200;
} else if(randomGold < 7.14 * 12){
    items.push('골드 2300개');
    gold += 2300;
} else if(randomGold < 7.14 * 13){
    items.push('골드 2400개');
    gold += 2400;
} else if(randomGold < 7.14 * 14){
    items.push('골드 2500개');
    gold += 2500;
}
    
    // 자유경험치 (1~1000)
    const randomExp = Math.floor(Math.random() * 1000) ;
    items.push(`자유경험치 ${randomExp}개`);
    
    // 골드 부스터
    const randomBooster = Math.random() * 100;
    if (randomBooster < 14.29) {
        items.push('골드 부스터 6개'); // 14.29% 확률
    } else if (randomBooster < 14.29 * 2) {
        items.push('골드 부스터 7개'); // 14.29% 확률
    } else if (randomBooster < 14.29 * 3) {
        items.push('골드 부스터 8개'); // 14.29% 확률
    } else if (randomBooster < 14.29 * 4) {
        items.push('골드 부스터 9개'); // 14.29% 확률
    } else if (randomBooster < 14.29 * 5) {
        items.push('골드 부스터 10개'); // 14.29% 확률
    } else if (randomBooster < 14.29 * 6) {
        items.push('골드 부스터 11개'); // 14.29% 확률
    } else{
        items.push('골드 부스터 12개'); // 14.29% 확률
    }
    
    const randomavatar = Math.random() * 100;
    if (randomavatar < 2) {
        items.push('빛나는 왕관 애니메이션 아바타');
    }    
    
    
    finalgold.innerText = `총 골드량: ${gold}`;
    
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
    
    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    
    return items;
}


function blackboxlv7() {
    const items = [];

    items.push('블랙 부적')
    
    // 블랙상자 8
    const randomBlackBox2 = Math.random() * 100;
    if (randomBlackBox2 < 20) {
        items.push('블랙상자 8'); // 20% 확률
    }
    
    // 블랙상자 9
    const randomBlackBox3 = Math.random() * 100;
    if (randomBlackBox3 < 5) {
        items.push('블랙상자 9'); // 5% 확률
    }
    
    // 골드
    const randomGold = Math.random() * 100;
if(randomGold < 20){
    items.push('골드 1500개');
    gold += 1500;
} else if(randomGold < 40){
    items.push('골드 2000개');
    gold += 2000;
} else if(randomGold < 60){
    items.push('골드 2500개');
    gold += 2500;
} else if(randomGold < 80){
    items.push('골드 3000개');
    gold += 3000;
} else{
    items.push('골드 3500개');
    gold += 3500;
}



    
    // 자유경험치 (1~1000)
    const randomExp = Math.floor(Math.random() * 9000) ;
    items.push(`자유경험치 ${randomExp}개`);
    
    // 골드 부스터
    const randomBooster = Math.random() * 100;
    if (randomBooster < 12.5) {
        items.push('골드 부스터 7개'); // 12.5% 확률
    } else if (randomBooster < 25) {
        items.push('골드 부스터 8개'); // 12.5% 확률
    } else if (randomBooster < 37.5) {
        items.push('골드 부스터 9개'); // 12.5% 확률
    } else if (randomBooster < 50) {
        items.push('골드 부스터 10개'); // 12.5% 확률
    } else if (randomBooster < 62.5) {
        items.push('골드 부스터 11개'); // 12.5% 확률
    } else if (randomBooster < 75) {
        items.push('골드 부스터 12개'); // 12.5% 확률
    } else if (randomBooster < 87.5) {
        items.push('골드 부스터 13개'); // 12.5% 확률
    } else {
        items.push('골드 부스터 14개'); // 12.5% 확률
    }   
    
    const randomavatar = Math.random() * 100;
    if (randomavatar < 3) {
        items.push('빛나는 왕관 애니메이션 아바타');
    }    
    
    const randombackground = Math.random() * 100;
    if (randombackground < 1) {
        items.push('재물 금고 프로필 배경')
    }

    
    finalgold.innerText = `총 골드량: ${gold}`;
    
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
    
    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    
    return items;
}

function blackboxlv8() {
    const items = [];

    items.push('블랙 부적')
    
    // 블랙상자 9
    const randomBlackBox2 = Math.random() * 100;
    if (randomBlackBox2 < 20) {
        items.push('블랙상자 9'); // 20% 확률
    }
    
    // 블랙상자 10
    const randomBlackBox3 = Math.random() * 100;
    if (randomBlackBox3 < 5) {
        items.push('블랙상자 10'); // 5% 확률
    }
    
    // 골드
    const randomGold = Math.random() * 100;
    if (randomGold < 14.29) {
        items.push('골드 2000개');
        gold += 2000;
    } else if (randomGold < 14.29 * 2) {
        items.push('골드 2500개');
        gold += 2500;
    } else if (randomGold < 14.29 * 3) {
        items.push('골드 3000개');
        gold += 3000;
    } else if (randomGold < 14.29 * 4) {
        items.push('골드 3500개');
        gold += 3500;
    } else if (randomGold < 14.29 * 5) {
        items.push('골드 4000개');
        gold += 4000;
    } else if (randomGold < 14.29 * 6) {
        items.push('골드 4500개');
        gold += 4500;
    } else {
        items.push('골드 5000개');
        gold += 5000;
    }



    
    // 자유경험치 (1~1000)
    const randomExp = Math.floor(Math.random() * 9000) ;
    items.push(`자유경험치 ${randomExp}개`);
    
    // 골드 부스터
    const randomBooster = Math.random() * 100;
    if (randomBooster < 7.69) {
    items.push('골드 부스터 8개'); // 7.69% 확률
    } else if (randomBooster < 7.69 * 2) {
    items.push('골드 부스터 9개'); // 7.69% 확률
    } else if (randomBooster < 7.69 * 3) {
    items.push('골드 부스터 10개'); // 7.69% 확률
    } else if (randomBooster < 7.69 * 4) {
    items.push('골드 부스터 11개'); // 7.69% 확률
    } else if (randomBooster < 7.69 * 5) {
    items.push('골드 부스터 12개'); // 7.69% 확률
    } else if (randomBooster < 7.69 * 6) {
    items.push('골드 부스터 13개'); // 7.69% 확률
    } else if (randomBooster < 7.69 * 7) {
    items.push('골드 부스터 14개'); // 7.69% 확률
    } else if (randomBooster < 7.69 * 8) {
    items.push('골드 부스터 15개'); // 7.69% 확률
    } else if (randomBooster < 7.69 * 9) {
    items.push('골드 부스터 16개'); // 7.69% 확률
    } else if (randomBooster < 7.69 * 10) {
    items.push('골드 부스터 17개'); // 7.69% 확률
    } else if (randomBooster < 7.69 * 11) {
    items.push('골드 부스터 18개'); // 7.69% 확률
    } else if (randomBooster < 7.69 * 12) {
    items.push('골드 부스터 19개'); // 7.69% 확률
    } else {
    items.push('골드 부스터 20개'); // 7.69% 확률
    } 
    
    const randomavatar = Math.random() * 100;
    if (randomavatar < 5) {
        items.push('빛나는 왕관 애니메이션 아바타');
    }    
    
    const randombackground = Math.random() * 100;
    if (randombackground < 2) {
        items.push('재물 금고 프로필 배경')
    }

    
    finalgold.innerText = `총 골드량: ${gold}`;
    
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
    
    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    
    return items;
}

function blackboxlv9() {
    const items = [];

    items.push('블랙 부적')
    
    // 블랙상자 10
    const randomBlackBox3 = Math.random() * 100;
    if (randomBlackBox3 < 25) {
        items.push('블랙상자 10'); // 5% 확률
    }
    
    // 골드
    const randomGold = Math.random() * 100;
    if (randomGold < 12.5) {
        items.push('골드 3000개');
        gold += 3000;
    } else if (randomGold < 12.5 * 2) {
        items.push('골드 4000개');
        gold += 4000;
    } else if (randomGold < 12.5 * 3) {
        items.push('골드 5000개');
        gold += 5000;
    } else if (randomGold < 12.5 * 4) {
        items.push('골드 6000개');
        gold += 6000;
    } else if (randomGold < 12.5 * 5) {
        items.push('골드 7000개');
        gold += 7000;
    } else if (randomGold < 12.5 * 6) {
        items.push('골드 8000개');
        gold += 8000;
    } else if (randomGold < 12.5 * 7) {
        items.push('골드 9000개');
        gold += 9000;
    } else {
        items.push('골드 10000개');
        gold += 10000;
    }


    
    // 자유경험치 (1~1000)
    const randomExp = Math.floor(Math.random() * 9000) ;
    items.push(`자유경험치 ${randomExp}개`);
    
    // 골드 부스터
    const randomBooster = Math.random() * 100;
    if (randomBooster < 4.55) {
        items.push('골드 부스터 10개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 2) {
        items.push('골드 부스터 11개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 3) {
        items.push('골드 부스터 12개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 4) {
        items.push('골드 부스터 13개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 5) {
        items.push('골드 부스터 14개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 6) {
        items.push('골드 부스터 15개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 7) {
        items.push('골드 부스터 16개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 8) {
        items.push('골드 부스터 17개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 9) {
        items.push('골드 부스터 18개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 10) {
        items.push('골드 부스터 19개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 11) {
        items.push('골드 부스터 20개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 12) {
        items.push('골드 부스터 21개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 13) {
        items.push('골드 부스터 22개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 14) {
        items.push('골드 부스터 23개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 15) {
        items.push('골드 부스터 24개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 16) {
        items.push('골드 부스터 25개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 17) {
        items.push('골드 부스터 26개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 18) {
        items.push('골드 부스터 27개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 19) {
        items.push('골드 부스터 28개'); // 4.55% 확률
    } else if (randomBooster < 4.55 * 20) {
        items.push('골드 부스터 29개'); // 4.55% 확률
    } else {
        items.push('골드 부스터 30개'); // 4.55% 확률
    }
    
    const randomavatar = Math.random() * 100;
    if (randomavatar < 15) {
        items.push('빛나는 왕관 애니메이션 아바타');
    }    
    
    const randombackground = Math.random() * 100;
    if (randombackground < 5) {
        items.push('재물 금고 프로필 배경')
    }

    
    finalgold.innerText = `총 골드량: ${gold}`;
    
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
    
    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    
    return items;
}

function blackboxlv10() {
    const items = [];
    
    items.push('블랙 증서')
    items.push('골드 250000개');
    gold += 250000;
    items.push('자유경험치 500000개');
    items.push('재물 금고 프로필 배경');
    items.push('빛나는 왕관 애니메이션 아바타');

    finalgold.innerText = `총 골드량: ${gold}`;
    
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
    
    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    
    return items;
}




const slider = document.getElementById('slider');
const slid = document.getElementById('slid');

slider.addEventListener('input', function() {
    slid.textContent = '블랙상자 단계 : '+slider.value;
});
let open = document.getElementById('open')
open.addEventListener('click', function() {
    
    if (slider.value == 1){
        const items = blackboxlv1();
        const resultElement = document.getElementById('result');
        if (items.includes('블랙상자 2')) {
            resultElement.style.color = 'red';
        resultElement.style.backgroundColor = 'aqua';
    }else if  (items.includes('블랙상자 3')) {
        resultElement.style.color = 'red';
        resultElement.style.backgroundColor = 'aqua';
    }
    else {
        resultElement.style.color = 'black';
        resultElement.style.backgroundColor = 'white';
    }
    resultElement.innerText = `결과: ${items.join(', ')}`;
    } else if (slider.value == 2){
        const items = blackboxlv2();
        const resultElement = document.getElementById('result');
        if (items.includes('블랙상자 3')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else if  (items.includes('블랙상자 4')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }
        else {
            resultElement.style.color = 'black';
            resultElement.style.backgroundColor = 'white';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;    
    } else if (slider.value == 3){
        const items = blackboxlv3();
        const resultElement = document.getElementById('result');
        if (items.includes('블랙상자 4')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else if  (items.includes('블랙상자 5')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }
        else {
            resultElement.style.color = 'black';
            resultElement.style.backgroundColor = 'white';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;    
    } else if (slider.value == 4){
        const items = blackboxlv4();
        const resultElement = document.getElementById('result');
        if (items.includes('블랙상자 5')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else if  (items.includes('블랙상자 6')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }
        else {
            resultElement.style.color = 'black';
            resultElement.style.backgroundColor = 'white';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;    
    } else if (slider.value == 5){
        const items = blackboxlv5();
        const resultElement = document.getElementById('result');
        if (items.includes('블랙상자 6')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }else if  (items.includes('블랙상자 7')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else if (items.includes('빛나는 왕관 애니메이션 아바타')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        }
        else {
            resultElement.style.color = 'black';
            resultElement.style.backgroundColor = 'white';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;    
    } else if(slider.value == 6){
        const items = blackboxlv6();
        const resultElement = document.getElementById('result');
        if(items.includes('블랙상자 7')){
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else if (items.includes('블랙상자 8')){
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else if (items.includes('빛나는 왕관 애니메이션 아바타')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else {
            resultElement.style.color = 'black';
            resultElement.style.backgroundColor = 'white';
        }
       resultElement.innerText = `결과: ${items.join(', ')}`;
    } else if(slider.value == 7){
        const items = blackboxlv7();
        const resultElement = document.getElementById('result'); 
        if(items.includes('블랙상자 8')){
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else if (items.includes('블랙상자 9')){
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else if (items.includes('빛나는 왕관 애니메이션 아바타')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else if (items.includes('재물 금고 프로필 배경')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else {
            resultElement.style.color = 'black';
            resultElement.style.backgroundColor = 'white';
        } 
        resultElement.innerText = `결과: ${items.join(', ')}`;
    } else if (slider.value == '8'){
        const items = blackboxlv8();
        const resultElement = document.getElementById('result');
        if(items.includes('블랙상자 9')){
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else if (items.includes('블랙상자 10')){
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else if (items.includes('빛나는 왕관 애니메이션 아바타')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else if (items.includes('재물 금고 프로필 배경')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else {
            resultElement.style.color = 'black';
            resultElement.style.backgroundColor = 'white';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    } else if (slider.value == '9'){
        const items = blackboxlv9();
        const resultElement = document.getElementById('result');
        if(items.includes('블랙상자 10')){
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else if (items.includes('빛나는 왕관 애니메이션 아바타')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else if (items.includes('재물 금고 프로필 배경')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else {
            resultElement.style.color = 'black';
            resultElement.style.backgroundColor = 'white';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    } else {
        const items = blackboxlv10();
        const resultElement = document.getElementById('result');
        resultElement.style.color = 'red';
        resultElement.style.backgroundColor = 'aqua';
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }
}
);
        



const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    opentimes = 0;
    gold = 0;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    finalgold.innerText = `총 골드량: ${gold}`;
});
