document.getElementById('settings').addEventListener('click', function() {
    var settingsPage = document.getElementById('settingsPage');
    if (settingsPage.style.display === 'none' || settingsPage.style.display === '') {
        settingsPage.style.display = 'block';
    } else {
        settingsPage.style.display = 'none';
    }
});

// 다크 모드 활성화/비활성화
const darkmode = document.getElementById('darkmode');
darkmode.addEventListener('change', function() {
    if (darkmode.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

const back = document.getElementById('back');
back.addEventListener('click', function() {
    window.location.href = '/';
});



// settings.js

// 1. HTML 요소 선택
const languageSelect = document.getElementById('languageSelect');

// 2. 언어 데이터 정의
const translations = {
    'title': {
        'ko': '블랙상자',
        'en': 'Black Box',
        'jp': 'ブラックボックス',
        'ch': '黑匣子'
    },
    'settings': {
        'ko': '설정',
        'en': 'Settings',
        'jp': '設定',
        'ch': '设置'
    },
    'back': {
        'ko': '돌아가기',
        'en': 'Back',
        'jp': '戻る',
        'ch': '返回'
    },
    'blackBox': {
        'ko': '블랙 상자',
        'en': 'Black Box',
        'jp': 'ブラックボックス',
        'ch': '黑匣子'
    },
    'selectBox': {
        'ko': '상자 종류 선택',
        'en': 'Select Box Type',
        'jp': 'ボックスタイプを選択',
        'ch': '选择盒子类型'
    },
    'mysteryBox': {
        'ko': '미스터리상자',
        'en': 'Mystery Box',
        'jp': 'ミステリーボックス',
        'ch': '神秘盒子'
    },
    'ctaBox': {
        'ko': '모두모아보세요상자',
        'en': 'Collect Em All Box',
        'jp': 'すべて集めるボックス',
        'ch': '收集所有盒子'
    },
    'megaBox': {
        'ko': '메가상자',
        'en': 'Mega container',
        'jp': 'メガボックス',
        'ch': '巨型盒子'
    },
    'AWCBox': {
        'ko': '끝내줘요 상자',
        'en': 'Awesome Box',
        'jp': '素晴らしいボックス',
        'ch': '极好的盒子'
    },
    'sliderLabel': {
        'ko': '블랙상자 단계 : ',
        'en': 'Black Box Level: ',
        'jp': 'ブラックボックスレベル: ',
        'ch': '黑匣子等级: '
    },
    'open': {
        'ko': '뽑기',
        'en': 'Open',
        'jp': '開ける',
        'ch': '打开'
    },
    'log': {
        'ko': '로그',
        'en': 'Log',
        'jp': 'ログ',
        'ch': '日志'
    },
    'result': {
        'ko': '결과 : ',
        'en': 'Result: ',
        'jp': '結果: ',
        'ch': '结果: '
    },
    'reset': {
        'ko': '초기화',
        'en': 'Reset',
        'jp': 'リセット',
        'ch': '重置'
    },
    'delete': {
        'ko': '로그 비우기',
        'en': 'Clear Log',
        'jp': 'ログをクリア',
        'ch': '清除日志'
    },
    'autoslide': {
        'ko': '화면 자동 내림',
        'en': 'Auto Slide',
        'jp': '自動スライド',
        'ch': '自动滑动'
    },
    'darkmode': {
        'ko': '다크 모드',
        'en': 'Dark Mode',
        'jp': 'ダークモード',
        'ch': '黑暗模式'
    },
    'langKo': {
        'ko': '한국어',
        'en': 'Korean',
        'jp': '韓国語',
        'ch': '韩语'
    },
    'langEn': {
        'ko': '영어',
        'en': 'English',
        'jp': '英語',
        'ch': '英语'
    },
    'langJp': {
        'ko': '일본어',
        'en': 'Japanese',
        'jp': '日本語',
        'ch': '日语'
    },
    'langCh': {
        'ko': '중국어',
        'en': 'Chinese',
        'jp': '中国語',
        'ch': '中文'
    },
    'boxOpened': {
        'ko': '상자를 깐 횟수: ',
        'en': 'Boxes Opened: ',
        'jp': '開けた箱の数: ',
        'ch': '打开的盒子数量: '
    },
    'totalGold': {
        'ko': '총 골드량: ',
        'en': 'Total Gold: ',
        'jp': '総ゴールド量: ',
        'ch': '总金币量: '
    },
    'resetAll': {
        'ko': '초기화',
        'en': 'Reset All',
        'jp': 'すべてリセット',
        'ch': '重置所有'
    },
    'gold': {
        'ko': '골드',
        'en': 'Gold',
        'jp': 'ゴールド',
        'ch': '金币'
    },
    'freeExp': {
        'ko': '자유 경험치',
        'en': 'Free xp',
        'jp': '自由経験値',
        'ch': '自由经验'
    },
    'goldBooster': {
        'ko': '골드 부스터',
        'en': 'Gold Booster',
        'jp': 'ゴールドブースター',
        'ch': '金币加速器'
    },
    'treasureVault': {
        'ko': '재물 금고',
        'en': 'Treasure Vault',
        'jp': '宝物庫',
        'ch': '宝库'
    },
    'profileBackground': {
        'ko': '프로필 배경',
        'en': 'Profile Background',
        'jp': 'プロフィール背景',
        'ch': '个人资料背景'
    },
    'shiningCrown': {
        'ko': '빛나는 왕관',
        'en': 'Shining Crown',
        'jp': '輝く王冠',
        'ch': '闪亮的王冠'
    },
    'animatedAvatar': {
        'ko': '애니메이션 아바타',
        'en': 'Animated Avatar',
        'jp': 'アニメーションアバター',
        'ch': '动画头像'
    }
};

// 3. 언어 변경 함수
function changeLanguage(language) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[key][language];
    });
}



// 모든 html 공통
let box = document.getElementById('box');
box.addEventListener('change', function() {
    if (box.value == '1' || box.value == '2') {
        window.location.href = '/blackbox.html';
    } else if (box.value == '3') {
        window.location.href = '/mysterybox.html';
    } else if (box.value == '4') {
        window.location.href = '/cta.html';
    } else if (box.value == '5') {
        window.location.href = '/mega.html';
    } else if (box.value == '6') {
        window.location.href = '/awc.html'
    } else if (box.value == '7') {
        window.location.href = '/massive.html';
    } else if (box.value == '8') {
        window.location.href = '/country.html';
    } else if (box.value == '9') {
        window.location.href = '/tank.html';
    } else if (box.value == '10') {
        window.location.href = '/alpha.html';
    } else if (box.value == '11') {
        window.location.href = '/event.html';
    } else if (box.value == '12') {
        window.location.href = '/kaleidoscope.html';
    }
});

let log = document.getElementById('log');
log.addEventListener('click', function() {
    if (container.style.display === 'none') {
        container.style.display = 'block';
        deleteButton.style.display = 'block';
    }
    else {
        container.style.display = 'none';
        deleteButton.style.display = 'none';
    }
    
});

let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', function() {
    container.innerHTML = '';
});