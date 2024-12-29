let times = document.getElementById('times');
let howmuch = 0;
const container = document.getElementById('log-container');
let tanks = [];
let boxes = [];
const finaltanks = document.getElementById('tanks');

const blackbox = document.querySelector('.blackbox');
const mysterybox = document.querySelector('.mysterybox');
const cta = document.querySelector('.cta');

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

function kaleido1() {
    const items = [];

    const randomtank = Math.floor(Math.random() * 100);
    if (randomtank < 0.12) {
        items.push('(VII) Type 62');
        addTank('(VII) Type 62');
        console.log('(VII) Type 62');
    } else if (randomtank < 0.24) {
        items.push('(VII) M6A2E1');
        addTank('(VII) M6A2E1');
        console.log('(VII) M6A2E1');
    } else if (randomtank < 0.36) {
        items.push('(VII) CS-52 LIS');
        addTank('(VII) CS-52 LIS');
        console.log('(VII) CS-52 LIS');
    } else if (randomtank < 0.48) {
        items.push('(VII) Steyr WT')
        addTank('(VII) Steyr WT');
        console.log('(VII) Steyr WT');
    } else if (randomtank < 0.6) {
        items.push('(VII) Kunze Panzer');
        addTank('(VII) Kunze Panzer');
        console.log('(VII) Kunze Panzer');
    } else if (randomtank < 0.72) {
        items.push('(VII) Smasher')
        addTank('(VII) Smasher');
        console.log('(VII) Smasher');
    } else if (randomtank < 0.84) {
        items.push('(VII) Annihilator')
        addTank('(VII) Annihilator');
        console.log('(VII) Annihilator');
    } else if (randomtank < 0.96) {
        items.push('(VII) T28 HTC')
        addTank('(VII) T28 HTC');
        console.log('(VII) T28 HTC');
    }

    const randombox = Math.floor(Math.random() * 100);
    if (randombox < 0.20) {
        items.push('만화경 상자 IV')
        addBox('만화경 상자 IV');
    } else if (randombox < 0.20 + 1) {
        items.push('만화경상자 III')
        addBox('만화경 상자 III');
    } else if (randombox < 0.20 + 1 + 14.8) {
        items.push('만화경 상자 II')
        addBox('만화경 상자 II');
    } else if (randombox < 0.20 + 1 + 14.8 + 4) {
        items.push('만화경 상자 I')
        addBox('만화경 상자 I');
    } else if (randombox < 0.20 + 1 + 14.8 + 4 + 1) {
        items.push('특급 아바타 상자')
        addBox('특급 아바타 상자');
    }

    const randomfxp = Math.floor(Math.random() * 100);
    if (randomfxp < 45) {
        items.push('자유경험치 250개');
    } else if (randomfxp < 45 + 4.5) {
        items.push('자유경험치 500개');
    } else if (randomfxp < 45 + 4.5 + 0.5) {
        items.push('자유경험치 750개');
    }

    const randomcredit = Math.floor(Math.random() * 100);
    if (randomcredit < 90) {
        items.push('크레딧 150,000개');
    } else if (randomcredit < 90 + 9) {
        items.push('크레딧 200,000개');
    } else if (randomcredit < 90 + 9 + 1) {
        items.push('크레딧 250,000개');
    }

    const randomtankcertificate = Math.floor(Math.random() * 100);
    if (randomtankcertificate < 22.5) {
        items.push('전차 연구 증서 1개 (일반)');
    } else if (randomtankcertificate < 22.5 + 22.5) {
        items.push('전차 구매 증서 1개 (일반)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25) {
        items.push('전차 연구 증서 1개 (희귀)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25) {
        items.push('전차 구매 증서 1개 (희귀)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25 + 0.25) {
        items.push('전차 연구 증서 1개 (영웅)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25 + 0.25 + 0.25) {
        items.push('전차 구매 증서 1개 (영웅)');
    }

    const random3x = Math.floor(Math.random() * 100);
    if (random3x < 90) {
        items.push('경험치 3배 1개');
    } else if (random3x < 90 + 9) {
        items.push('경험치 3배 2개');
    } else if (random3x < 90 + 9 + 1) {
        items.push('경험치 3배 3개');
    }

    const randomfxpcertificate = Math.floor(Math.random() * 100);
    if (randomfxpcertificate < 22.5) {
        items.push('자유경험치 200증서 1개');
    } else if (randomfxpcertificate < 22.5 + 2.25) {
        items.push('자유경험치 200증서 2개');
    } else if (randomfxpcertificate < 22.5 + 2.25 + 0.25) {
        items.push('자유경험치 200증서 3개');
    }

    const randombooster = Math.floor(Math.random() * 100);
    if (randombooster < 18) {
        items.push('크레딧 부스터 1개');
    } else if (randombooster < 18 + 1.8) {
        items.push('크레딧 부스터 2개');
    } else if (randombooster < 18 + 1.8 + 0.2) {
        items.push('크레딧 부스터 3개');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18) {
        items.push('경험치 부스터 1개');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('경험치 부스터 2개');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) {
        items.push('경험치 부스터 3개');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18) {
        items.push('자유 경험치 부스터 1개');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('자유 경험치 부스터 2개');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) {
        items.push('자유 경험치 부스터 3개');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18) {
        items.push('승무원 경험치 부스터 1개');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('승무원 경험치 부스터 2개');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) {
        items.push('승무원 경험치 부스터 3개');
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

function kaleido2() {
    const items = [];

    const randomtank = Math.floor(Math.random() * 100);
    if (randomtank < 0.21) {
        items.push('(VIII) SMV Vipera');
        addTank('(VIII) SMV Vipera');
        console.log('(VIII) SMV Vipera');
    } else if (randomtank < 0.21 + 0.21) {
        items.push('(VIII) B-C Bourrasque');
        addTank('(VIII) B-C Bourrasque');
        console.log('(VIII) B-C Bourrasque');
    } else if (randomtank < 0.21 + 0.21 + 0.21) {
        items.push('(VIII) FV1066 Senlac');
        addTank('(VIII) FV1066 Senlac');
        console.log('(VIII) FV1066 Senlac');
    } else if (randomtank < 0.21 + 0.21 + 0.21 + 0.21) {
        items.push('(VIII) Caliban');
        addTank('(VIII) Caliban');
        console.log('(VIII) Caliban');
    } else if (randomtank < 0.21 + 0.21 + 0.21 + 0.21 + 0.21) {
        items.push('(VIII) Chimera');
        addTank('(VIII) Chimera');
        console.log('(VIII) Chimera');
    } else if (randomtank < 0.21 + 0.21 + 0.21 + 0.21 + 0.21 + 0.21) {
        items.push('(VIII) T77');
        addTank('(VIII) T77');
        console.log('(VIII) T77');
    } else if (randomtank < 0.21 + 0.21 + 0.21 + 0.21 + 0.21 + 0.21 + 0.21) {
        items.push('(VIII) Obj. 590');
        addTank('(VIII) Obj. 590');
        console.log('(VIII) Obj. 590');
    }

    const randombox = Math.floor(Math.random() * 100);
    if (randombox < 5) {
        items.push('차고 설비 상자')
        addBox('차고 설비 상자');
    } else if (randombox < 5 + 0.2) {
        items.push('만화경 상자 IV')
        addBox('만화경 상자 IV');
    } else if (randombox < 5 + 0.2 + 5) {
        items.push('장식 상자');
        addBox('장식 상자');
    } else if (randombox < 5 + 0.2 + 5 + 13.8) {
        items.push('만화경 상자 III');
        addBox('만화경 상자 III');
    } else if (randombox < 5 + 0.2 + 5 + 13.8 + 5) {
        items.push('특급 아바타 상자');
        addBox('특급 아바타 상자');
    } else if (randombox < 5 + 0.2 + 5 + 13.8 + 5 + 4.4) {
        items.push('만화경 상자 II');
        addBox('만화경 상자 II');
    } else if (randombox < 5 + 0.2 + 5 + 13.8 + 5 + 4.4 + 5) {
        items.push('희귀 위장 상자');
        addBox('희귀 위장 상자');
    } else if (randombox < 5 + 0.2 + 5 + 13.8 + 5 + 4.4 + 5 + 1.6) {
        items.push('만화경 상자 I');
        addBox('만화경 상자 I');
    }

    const randomfxp = Math.floor(Math.random() * 100);
    if (randomfxp < 45) {
        items.push('자유경험치 1000개');
    } else if (randomfxp < 45 + 4.5) {
        items.push('자유경험치 1250개');
    } else if (randomfxp < 45 + 4.5 + 0.5) {
        items.push('자유경험치 1500개');
    }

    const randomcredit = Math.floor(Math.random() * 100);
    if (randomcredit < 90) {
        items.push('크레딧 200,000개');
    } else if (randomcredit < 90 + 9) {
        items.push('크레딧 250,000개');
    } else if (randomcredit < 90 + 9 + 1) {
        items.push('크레딧 300,000개');
    }

    const random4x = Math.floor(Math.random() * 100);
    if (random4x < 90) {
        items.push('경험치 4배 1개');
    } else if (random4x < 90 + 9) {
        items.push('경험치 4배 2개');
    } else if (random4x < 90 + 9 + 1) {
        items.push('경험치 4배 3개');
    }

    const randomfxpcertificate = Math.floor(Math.random() * 100);
    if (randomfxpcertificate < 22.5) {
        items.push('자유경험치 2300증서 1개');
    } else if (randomfxpcertificate < 22.5 + 2.25) {
        items.push('자유경험치 2300증서 2개');
    } else if (randomfxpcertificate < 22.5 + 2.25 + 0.25) {
        items.push('자유경험치 2300증서 3개');
    }

    const randombooster = Math.floor(Math.random() * 100);
    if (randombooster < 18) {
        items.push('크레딧 부스터 1개 (희귀)');
    } else if (randombooster < 18 + 1.8) {
        items.push('크레딧 부스터 2개 (희귀)');
    } else if (randombooster < 18 + 1.8 + 0.2) {
        items.push('크레딧 부스터 3개 (희귀)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18) {
        items.push('경험치 부스터 1개 (희귀)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('경험치 부스터 2개 (희귀)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) {
        items.push('경험치 부스터 3개 (희귀)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18) {
        items.push('자유 경험치 부스터 1개 (희귀)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('자유 경험치 부스터 2개 (희귀)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) {
        items.push('자유 경험치 부스터 3개 (희귀)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18) {
        items.push('승무원 경험치 부스터 1개 (희귀)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('승무원 경험치 부스터 2개 (희귀)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) {
        items.push('승무원 경험치 부스터 3개 (희귀)');
    }

    const randomtankcertificate = Math.floor(Math.random() * 100);
    if (randomtankcertificate < 22.5) {
        items.push('전차 연구 증서 1개 (일반)');
    } else if (randomtankcertificate < 22.5 + 22.5) {
        items.push('전차 구매 증서 1개 (일반)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25) {
        items.push('전차 연구 증서 1개 (희귀)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25) {
        items.push('전차 구매 증서 1개 (희귀)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25 + 0.25) {
        items.push('전차 연구 증서 1개 (영웅)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25 + 0.25 + 0.25) {
        items.push('전차 구매 증서 1개 (영웅)');
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

function kaleido3() {

    const items = [];

    const randomtank = Math.floor(Math.random() * 100);
    if (randomtank < 0.33) {
        items.push('(IX) Char Futur 4');
        addTank('(IX) Char Futur 4');
        console.log('(IX) Char Futur 4');
    } else if (randomtank < 0.33 + 0.33) {
        items.push('(IX) Lorraine 50t)');
        addTank('(IX) Lorraine 50t)');
        console.log('(IX) Lorraine 50t)');
    } else if (randomtank < 0.33 + 0.33 + 0.33) {
        items.push('(IX) Erich Konzept I');
        addTank('(IX) Erich Konzept I');
        console.log('(IX) Erich Konzept I');
    } else if (randomtank < 0.33 + 0.33 + 0.33 + 0.33) {
        items.push('(IX) Cobra');
        addTank('(IX) Cobra');
        console.log('(IX) Cobra');
    } else if (randomtank < 0.33 + 0.33 + 0.33 + 0.33 + 0.33) {
        items.push('(IX) K-91');
        addTank('(IX) K-91');
        console.log('(IX) K-91');
    } else if (randomtank < 0.33 + 0.33 + 0.33 + 0.33 + 0.33 + 0.33) {
        items.push('(IX) Object 752');
        addTank('(IX) Object 752');
        console.log('(IX) Object 752');
    }

    const randombox = Math.floor(Math.random() * 100);
    if (randombox < 10) {
        items.push('차고 설비 상자')
        addBox('차고 설비 상자');
    } else if (randombox < 10 + 14.8) {
        items.push('만화경 상자 IV')
        addBox('만화경 상자 IV');
    } else if(randombox < 10 + 14.8 + 10) {
        items.push('장식 상자');
        addBox('장식 상자');
    } else if (randombox < 10 + 14.8 + 10 + 4.6) {
        items.push('만화경 상자 III');
        addBox('만화경 상자 III');
    } else if (randombox < 10 + 14.8 + 10 + 4.6 + 10) {
        items.push('전설 아바타 상자');
        addBox('전설 아바타 상자');
    } else if (randombox < 10 + 14.8 + 10 + 4.6 + 10 + 10) {
        items.push('특급 위장 상자')
        addBox('특급 위장 상자');
    } else if (randombox < 10 + 14.8 + 10 + 4.6 + 10 + 10 + 0.4) {
        items.push('만화경 상자 II');
        addBox('만화경 상자 II');
    } else if (randombox < 10 + 14.8 + 10 + 4.6 + 10 + 10 + 0.4 + 0.2) {
        items.push('만화경 상자 I');
        addBox('만화경 상자 I');
    }
    
    const randomfxp = Math.floor(Math.random() * 100);
    if (randomfxp < 45) {
        items.push('자유경험치 1750개');
    } else if (randomfxp < 45 + 4.5) {
        items.push('자유경험치 2000개');
    } else if (randomfxp < 45 + 4.5 + 0.5) {
        items.push('자유경험치 2250개');
    }

    const randomcredit = Math.floor(Math.random() * 100);
    if (randomcredit < 90) {
        items.push('크레딧 350,000개');
    } else if (randomcredit < 90 + 9) {
        items.push('크레딧 400,000개');
    } else if (randomcredit < 90 + 9 + 1) {
        items.push('크레딧 450,000개');
    }

    const random5x = Math.floor(Math.random() * 100);
    if (random5x < 90) {
        items.push('경험치 5배 1개');
    } else if (random5x < 90 + 9) {
        items.push('경험치 5배 2개');
    } else if (random5x < 90 + 9 + 1) {
        items.push('경험치 5배 3개');
    }

    const randomfxpcertificate = Math.floor(Math.random() * 100);
    if (randomfxpcertificate < 22.5) {
        items.push('자유경험치 28000증서 1개');
    } else if (randomfxpcertificate < 22.5 + 2.25) {
        items.push('자유경험치 28000증서 2개');
    } else if (randomfxpcertificate < 22.5 + 2.25 + 0.25) {
        items.push('자유경험치 28000증서 3개');
    }

    const randombooster = Math.floor(Math.random() * 100);
    if (randombooster < 18) {
        items.push('크레딧 부스터 1개 (영웅)');
    } else if (randombooster < 18 + 1.8) {
        items.push('크레딧 부스터 2개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2) {
        items.push('크레딧 부스터 3개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18) {
        items.push('경험치 부스터 1개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('경험치 부스터 2개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) {
        items.push('경험치 부스터 3개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18) {
        items.push('자유 경험치 부스터 1개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('자유 경험치 부스터 2개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) {
        items.push('자유 경험치 부스터 3개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18) {
        items.push('승무원 경험치 부스터 1개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('승무원 경험치 부스터 2개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) {
        items.push('승무원 경험치 부스터 3개 (영웅)');
    }

    const randomtankcertificate = Math.floor(Math.random() * 100)
    if (randomtankcertificate < 22.5) {
        items.push('전차 연구 증서 1개 (일반)');
    } else if (randomtankcertificate < 22.5 + 22.5) {
        items.push('전차 구매 증서 1개 (일반)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25) {
        items.push('전차 연구 증서 1개 (희귀)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25) {
        items.push('전차 구매 증서 1개 (희귀)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25 + 0.25) {
        items.push('전차 연구 증서 1개 (영웅)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25 + 0.25 + 0.25) {
        items.push('전차 구매 증서 1개 (영웅)');
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

function kaleido4(){
    const items = [];

    const randomtank = Math.floor(Math.random() * 100);
    if (randomtank < 0.5) {
        items.push('(IX) 114 SP2');
        addTank('(IX) 114 SP2');
        console.log('(IX) 114 SP2');
    } else if (randomtank < 0.5 + 0.5) {
        items.push('(X) Carro 45t)');
        addTank('(X) Carro 45t)');
        console.log('(X) Carro 45t)');
    } else if (randomtank < 0.5 + 0.5 + 0.5) {
        items.push('(X) Strv K');
        addTank('(X) Strv K');
        console.log('(X) Strv K');
    } else if (randomtank < 0.5 + 0.5 + 0.5 + 0.5) {
        items.push('(X) Obj. 777 II');
        addTank('(X) Obj. 777 II');
        console.log('(X) Obj. 777 II');;
    }

    const randombox = Math.floor(Math.random() * 100);
    if (randombox < 20) {
        items.push('차고 설비 상자')
        addBox('차고 설비 상자');
    } else if (randombox < 20 + 20) {
        items.push('애니메이션 위장 상자')
        addBox('애니메이션 위장 상자');
    } else if (randombox < 20 + 20 + 20) {
        items.push('애니메이션 아바타상자')
        addBox('애니메이션 아바타상자');
    } else if (randombox < 20 + 20 + 20 + 20) {
        items.push('장식 상자')
        addBox('장식 상자');
    } else if (randombox < 20 + 20 + 20 + 20 + 0.2) {
        items.push('만화경 상자 IV')
        addBox('만화경 상자 IV');
    } else if (randombox < 20 + 20 + 20 + 20 + 0.2 + 0.4) {
        items.push('만화경 상자 III')
        addBox('만화경 상자 III');
    } else if (randombox < 20 + 20 + 20 + 20 + 0.2 + 0.4 + 0.6) {
        items.push('만화경 상자 II')
        addBox('만화경 상자 II');
    } else if (randombox < 20 + 20 + 20 + 20 + 0.2 + 0.4 + 0.6 + 18.8) {
        items.push('만화경 상자 I')
        addBox('만화경 상자 I');
    }

    const randomfxp = Math.floor(Math.random() * 100);
    if (randomfxp < 45) {
        items.push('자유경험치 2500개');
    } else if (randomfxp < 45 + 4.5) {
        items.push('자유경험치 2750개');
    } else if (randomfxp < 45 + 4.5 + 0.5) {
        items.push('자유경험치 3000개');
    }

    const randomcredit = Math.floor(Math.random() * 100);
    if (randomcredit < 90) {
        items.push('크레딧 500,000개');
    } else if (randomcredit < 90 + 9) {
        items.push('크레딧 750,000개');
    } else if (randomcredit < 90 + 9 + 1) {
        items.push('크레딧 1,000,000개');
    }

    const randomgold = Math.floor(Math.random() * 100);
    if (randomgold < 27) {
        items.push('골드 1000개');
    } else if (randomgold < 27 + 1.5) {
        items.push('골드 2000개');
    } else if (randomgold < 27 + 1.5 + 0.75) {
        items.push('골드 5000개');
    } else if (randomgold < 27 + 1.5 + 0.75 + 0.45) {
        items.push('골드 7500개');
    } else if (randomgold < 27 + 1.5 + 0.75 + 0.45 + 0.3) {
        items.push('골드 10000개');
    }

    const random10x = Math.floor(Math.random() * 100);
    if (random10x < 90) {
        items.push('경험치 10배 1개');
    } else if (random10x < 90 + 9) {
        items.push('경험치 10배 2개');
    } else if (random10x < 90 + 9 + 1) {
        items.push('경험치 10배 3개');
    }

    const randomfxpcertificate = Math.floor(Math.random() * 100);
    if (randomfxpcertificate < 22.5) {
        items.push('자유경험치 350000증서 1개');
    } else if (randomfxpcertificate < 22.5 + 2.25) {
        items.push('자유경험치 350000증서 2개');
    } else if (randomfxpcertificate < 22.5 + 2.25 + 0.25) {
        items.push('자유경험치 350000증서 3개');
    }

    const randombooster = Math.floor(Math.random() * 100);
    if (randombooster < 18) {
        items.push('크레딧 부스터 3개 (영웅)');
    } else if (randombooster < 18 + 1.8) {
        items.push('크레딧 부스터 5개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2) {
        items.push('크레딧 부스터 7개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18) {
        items.push('경험치 부스터 3개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('경험치 부스터 5개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) {
        items.push('경험치 부스터 7개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18) {
        items.push('자유 경험치 부스터 3개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('자유 경험치 부스터 5개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) { 
        items.push('자유 경험치 부스터 7개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18) {
        items.push('승무원 경험치 부스터 3개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8) {
        items.push('승무원 경험치 부스터 5개 (영웅)');
    } else if (randombooster < 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2 + 18 + 1.8 + 0.2) {
        items.push('승무원 경험치 부스터 7개 (영웅)');
    }

    const randomtankcertificate = Math.floor(Math.random() * 100)
    if (randomtankcertificate < 22.5) {
        items.push('전차 연구 증서 1개 (일반)');
    } else if (randomtankcertificate < 22.5 + 22.5) {
        items.push('전차 구매 증서 1개 (일반)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25) {
        items.push('전차 연구 증서 1개 (희귀)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25) {
        items.push('전차 구매 증서 1개 (희귀)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25 + 0.25) {
        items.push('전차 연구 증서 1개 (영웅)');
    } else if (randomtankcertificate < 22.5 + 22.5 + 2.25 + 2.25 + 0.25 + 0.25) {
        items.push('전차 구매 증서 1개 (영웅)');
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

slider.addEventListener('input', function () {
    const containerimg = document.getElementById('containerimg');
    if (slider.value == 1) {
        slid.innerText = '만화경 상자 I';
        containerimg.src = "img/kaleidoscope1.jpg";
    } else if (slider.value == 2) {
        slid.innerText = '만화경 상자 II';
        containerimg.src = "img/kaleidoscope2.jpg";
    } else if (slider.value == 3) {
        slid.innerText = '만화경 상자 III';
        containerimg.src = "img/kaleidoscope3.jpg";
    } else if (slider.value == 4) {
        slid.innerText = '만화경 상자 IV';
        containerimg.src = "img/kaleidoscope4.jpg";
    }
});

let open = document.getElementById('open');
open.addEventListener('click', function () {
    if (slider.value == 1) {
        const items = kaleido1();
        const resultElement = document.getElementById('result');
        if (items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)'))) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }
    else if (slider.value == 2) {
        const items = kaleido2();
        const resultElement = document.getElementById('result');
        if (items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)'))) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    } else if (slider.value == 3) {
        const items = kaleido3();
        const resultElement = document.getElementById('result');
        if (items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)'))) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    } else if (slider.value == 4) {
        const items = kaleido4();
        const resultElement = document.getElementById('result');
        if (items.some(item => item.includes('(X)') || item.includes('(IX)') || item.includes('(VIII)') || item.includes('(VII)'))) {
            resultElement.style.color = 'red';
            resultElement.style.backgroundColor = 'aqua';
        } else {
            resultElement.style.backgroundColor = 'white';
            resultElement.style.color = 'black';
        }
        resultElement.innerText = `결과: ${items.join(', ')}`;
    }
});






const reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    opentimes = 0;
    gold = 0;
    times.innerText = `상자를 깐 횟수: ${opentimes}`;
    finaltanks.innerText = '획득한 탱크: ';
    howmuch = 0;
    tanks = [];
    boxes = [];
    finalboxes.innerText = '획득한 상자: ';
});
