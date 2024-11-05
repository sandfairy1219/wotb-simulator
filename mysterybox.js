const container = document.getElementById('log-container');
const times = document.getElementById('times');
const mc = document.getElementById('mc');
let mctimes = 0;
let opentimes = 0;
let gold = 0
const finalgold = document.getElementById('finalgold');


function mysteryBox1() {
    const items = [];
    
    // 자유경험치 200증서 2개
    items.push('자유경험치 200증서 2개'); // 100% 확률
    
    const random = Math.random() * 100;
    if (random < 5) {
        items.push('미스터리 증서');
    } else if (random < 5 + 11.93) {
        items.push('골드 100개');
        gold += 100;
    } else if (random < 5 + 11.93 + 4.97) {
        items.push('골드 200개');
        gold += 200;
    } else if (random < 5 + 11.93 + 4.97 + 1.99) {
        items.push('골드 500개');
        gold += 500;
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67) {
        items.push('골드 1500개');
        gold += 1500;
    } else if (random < 5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34) {
        items.push('골드 3000개');
        gold += 3000;
    } else if (random < 5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1) {
        items.push('골드 5000개');
        gold += 5000;
    } else if (random < 5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01) {
        items.push('골드 100000개');
        gold += 100000;
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88) {
        items.push('자유경험치 2000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94) {
        items.push('자유경험치 4000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58) {
        items.push('자유경험치 7000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79) {
        items.push('자유경험치 10000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61) {
        items.push('자유경험치 30000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18) {
        items.push('자유경험치 100000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04) {
        items.push('자유경험치 500000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99) {
        items.push('크레딧 50000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49) {
        items.push('크레딧 75000개');
    } else if (random <  5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31) {
        items.push('크레딧 100000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40) {
        items.push('크레딧 200000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40 + 0.70) {
        items.push('크레딧 500000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40 + 0.70 + 0.07) {
        items.push('크레딧 1000000개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40 + 0.70 + 0.07 + 0.30) {
        items.push('번개잡이 아바타(전설)');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40 + 0.70 + 0.07 + 0.30 + 2.7) {
        items.push('번개잡이 아바타(영웅)');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40 + 0.70 + 0.07 + 0.30 + 2.7 + 11.71) {
        items.push('골드 부스터 1개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40 + 0.70 + 0.07 + 0.30 + 2.7 + 11.71 + 5.85) {
        items.push('골드 부스터 2개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40 + 0.70 + 0.07 + 0.30 + 2.7 + 11.71 + 5.85 + 3.90) {
        items.push('골드 부스터 3개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40 + 0.70 + 0.07 + 0.30 + 2.7 + 11.71 + 5.85 + 3.90 + 1.69) {
        items.push('골드 부스터 5개');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40 + 0.70 + 0.07 + 0.30 + 2.7 + 11.71 + 5.85 + 3.90 + 1.69 + 0.85) {
        items.push('골드 부스터 10개');
    } else if (random <    5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40 + 0.70 + 0.07 + 0.30 + 2.7 + 11.71 + 5.85 + 3.90 + 1.69 + 0.85 + 0.05) {
        items.push('미스터리 위장');
    } else if (random <     5 + 11.93 + 4.97 + 1.99 + 0.67 + 0.34 + 0.1 + 0.01 + 17.88 + 8.94 + 3.58 + 1.79 + 0.61 + 0.18 + 0.04 + 6.99 + 3.49 + 2.31 + 1.40 + 0.70 + 0.07 + 0.30 + 2.7 + 11.71 + 5.85 + 3.90 + 1.69 + 0.85 + 0.05 + 0.05) {
        items.push('Projekt Kpz.07P(E)');
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

    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    finalgold.innerText = `획득한 골드: ${gold}`;

    if (items.includes('미스터리증서')) {
        mctimes++;
        mc.innerText = `미스터리증서 획득 횟수: ${mctimes}`;
    }

    return items;
}

function mysteryBox2() {
    const items = [];
    
    items.push ('자유 경험치 200 증서 2개');
    
    const random = Math.random() * 100;
    
    if (random < 10) {
        items.push('미스터리 증서');
    }else if (random < 10 + 9.57) {
        items.push('프리미엄 계정 1일')
    }else if (random < 10 + 9.57 + 4.79) {
        items.push('프리미엄 계정 2일')
    }else if (random < 10 + 9.57 + 4.79 + 3.19) {
        items.push('프리미엄 계정 3일')
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38) {
        items.push('프리미엄 계정 7일')
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69) {
        items.push('프리미엄 계정 14일')
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32) {
        items.push('프리미엄 계정 30일')
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05) {
        items.push('프리미엄 계정 270일')
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41) {
        items.push('골드 100개');
        gold += 100;
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75) {
        items.push('골드 200개');
        gold += 200;
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10) {
        items.push('골드 500개');
        gold += 500;
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04) {
        items.push('골드 1500개');
        gold += 1500;
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53) {
        items.push('골드 3000개');
        gold += 3000;
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16) {
        items.push('골드 5000개');
        gold += 5000;   
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02) {
        items.push('골드 100000개');
        gold += 100000;
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54) {
        items.push('자유경험치 2000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77) {
        items.push('자유경험치 4000개');    
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71) {
        items.push('자유경험치 7000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35) {
        items.push('자유경험치 10000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46) {
        items.push('자유경험치 30000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14) {
        items.push('자유경험치 100000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03) {
        items.push('자유경험치 750000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03 + 6.78) {
        items.push('크레딧 50000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03 + 6.78 + 3.39) {
        items.push('크레딧 75000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03 + 6.78 + 3.39 + 2.24) {
        items.push('크레딧 100000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03 + 6.78 + 3.39 + 2.24 + 1.36) {
        items.push('크레딧 200000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03 + 6.78 + 3.39 + 2.24 + 1.36 + 0.68) {
        items.push('크레딧 500000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03 + 6.78 + 3.39 + 2.24 + 1.36 + 0.68 + 0.07) {
        items.push('크레딧 2000000개');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03 + 6.78 + 3.39 + 2.24 + 1.36 + 0.68 + 0.07 + 0.36) {
        items.push('번개잡이 애니메이션 아바타(전설)');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03 + 6.78 + 3.39 + 2.24 + 1.36 + 0.68 + 0.07 + 0.36 + 3.21) {
        items.push('번개잡이 아바타(영웅)');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03 + 6.78 + 3.39 + 2.24 + 1.36 + 0.68 + 0.07 + 0.36 + 3.21 + 1.43) {
        items.push('번개잡이 아바타(전설)');  
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03 + 6.78 + 3.39 + 2.24 + 1.36 + 0.68 + 0.07 + 0.36 + 3.21 + 1.43 + 0.5) {
        items.push('미스터리 위장');
    }else if (random < 10 + 9.57 + 4.79 + 3.19 + 1.38 + 0.69 + 0.32 + 0.05 + 12.41 + 7.75 + 3.10 + 1.04 + 0.53 + 0.16 + 0.02 + 13.54 + 6.77 + 2.71 + 1.35 + 0.46 + 0.14 + 0.03 + 6.78 + 3.39 + 2.24 + 1.36 + 0.68 + 0.07 + 0.36 + 3.21 + 1.43 + 0.5 + 0.5) {
        items.push('Projekt Kpz.07P(E)');
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

    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    finalgold.innerText = `획득한 골드: ${gold}`;

    if (items.includes('미스터리증서')) {
        mctimes++;
        mc.innerText = `미스터리증서 획득 횟수: ${mctimes}`;
    }

    return items;
}

function mysteryBox3() {
    const items = [];

    items.push('자유 경험치 200 증서 3개');

    const random = Math.random() * 100;

    if (random < 15) {
        items.push('미스터리 증서');
    }else if (random < 15 + 6.84) {
        items.push('프리미엄 계정 7일');
    }else if (random < 15 + 6.84 + 3.42) {
        items.push('프리미엄 계정 14일');
    }else if (random < 15 + 6.84 + 3.42 + 1.58) {
        items.push('프리미엄 계정 30일');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32) {
        items.push('프리미엄 계정 60일');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05) {
        items.push('프리미엄 계정 90일');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53) {
        items.push('프리미엄 계정 180일');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26) {
        items.push('프리미엄 계정 360일');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84) {
        items.push('골드 1000개');
        gold += 1000;
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28) {
        items.push('골드 2000개');
        gold += 2000;   
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71) {
        items.push('골드 3500개');
        gold += 3500;
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24) {
        items.push('골드 5000개');
        gold += 5000;
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63) {
        items.push('골드 10000개');
        gold += 10000;
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28) {
        items.push('골드 50000개');
        gold += 50000;
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02) {
        items.push('골드 300000개');
        gold += 300000;
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83) {
        items.push('자유경험치 10000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42) {
        items.push('자유경험치 15000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17) {
        items.push('자유경험치 20000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08) {
        items.push('자유경험치 50000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37) {
        items.push('자유경험치 100000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11) {
        items.push('자유경험치 250000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11 + 0.02) {
        items.push('자유경험치 1000000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11 + 0.02 + 5.61) {
        items.push('크레딧 150000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11 + 0.02 + 5.61 + 2.80) {
        items.push('크레딧 200000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11 + 0.02 + 5.61 + 2.80 + 1.85) {
        items.push('크레딧 300000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11 + 0.02 + 5.61 + 2.80 + 1.85 + 1.12) {
        items.push('크레딧 350000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11 + 0.02 + 5.61 + 2.80 + 1.85 + 1.12 + 0.56) {
        items.push('크레딧 500000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11 + 0.02 + 5.61 + 2.80 + 1.85 + 1.12 + 0.56 + 0.06) {
        items.push('크레딧 5000000개');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11 + 0.02 + 5.61 + 2.80 + 1.85 + 1.12 + 0.56 + 0.06 + 1) {
        items.push('미스터리 프로필 배경');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11 + 0.02 + 5.61 + 2.80 + 1.85 + 1.12 + 0.56 + 0.06 + 1 + 5) {
        items.push('미스터리 위장');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11 + 0.02 + 5.61 + 2.80 + 1.85 + 1.12 + 0.56 + 0.06 + 1 + 5 + 5) {
        items.push('Projekt Kpz.07P(E)');
    }else if (random < 15 + 6.84 + 3.42 + 1.58 + 1.32 + 1.05 + 0.53 + 0.26 + 14.84 + 9.28 + 3.71 + 1.24 + 0.63 + 0.28 + 0.02 + 10.83 + 5.42 + 2.17 + 1.08 + 0.37 + 0.11 + 0.02 + 5.61 + 2.80 + 1.85 + 1.12 + 0.56 + 0.06 + 1 + 5 + 5 + 2) {
        items.push('번개잡이 애니메이션 아바타(전설)');
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

    opentimes++;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    finalgold.innerText = `획득한 골드: ${gold}`;

    if (items.includes('미스터리 증서')) {
        mctimes++;
        mc.innerText = `미스터리증서 획득 횟수: ${mctimes}`;
    }

    return items;
}

const slider = document.getElementById('slider');
const slid = document.getElementById('slid');
slider.addEventListener('input', function() {
    if (slider.value === '1') {
        slid.innerText = '미스터리 상자 1';
    }else if (slider.value === '2') {
        slid.innerText = '미스터리 상자 2';
    }else if (slider.value === '3') {
        slid.innerText = '미스터리 상자 3';
    }
});



let open = document.getElementById('open')
open.addEventListener('click', function() {
    if (slider.value === '1') {
        const items = mysteryBox1();
        const resultElement = document.getElementById('result');
        if (items.includes('미스터리 증서') || items.includes('미스터리 위장') || items.includes('Projekt Kpz.07P(E)')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else {
            resultElement.style.color = 'black';
            resultElement.style.backgroundColor = 'white';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }else if (slider.value === '2') {
        const items = mysteryBox2();
        const resultElement = document.getElementById('result');
        if (items.includes('미스터리 증서') || items.includes('미스터리 위장') || items.includes('Projekt Kpz.07P(E)')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else {
            resultElement.style.color = 'black';
            resultElement.style.backgroundColor = 'white';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }else if (slider.value === '3') {
        const items = mysteryBox3();
        const resultElement = document.getElementById('result');
        if (items.includes('미스터리 증서') || items.includes('미스터리 위장') || items.includes('Projekt Kpz.07P(E)')) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else {
            resultElement.style.color = 'black';
            resultElement.style.backgroundColor = 'white';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;

    }

    
});



const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    opentimes = 0;
    mctimes = 0;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    mc.innerText = `미스터리증서 획득 횟수: ${mctimes}`
    finalgold.innerText = `획득한 골드: 0`;
    ;
});
