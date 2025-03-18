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

// Dark mode toggle
const darkModeToggle = document.getElementById('darkmode');
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
        localStorage.setItem('darkMode', darkModeToggle.checked);
    });
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        darkModeToggle.checked = true;
        document.body.classList.add('dark-mode');
    }
}

// Clean up the settings toggle code - remove the duplicate event handlers

// Settings panel functionality


// settings.js

// 1. HTML 요소 선택



// 모든 html 공통
let box = document.getElementById('box');
box.addEventListener('change', function() {
    if (box.value == '1' || box.value == '2') {
        window.location.href = '/blackbox';
    } else if (box.value == '3') {
        window.location.href = '/mysterybox';
    } else if (box.value == '4') {
        window.location.href = '/cta';
    } else if (box.value == '5') {
        window.location.href = '/mega';
    } else if (box.value == '6') {
        window.location.href = '/awc'
    } else if (box.value == '7') {
        window.location.href = '/massive';
    } else if (box.value == '8') {
        window.location.href = '/country';
    } else if (box.value == '9') {
        window.location.href = '/tank';
    } else if (box.value == '10') {
        window.location.href = '/alpha';
    } else if (box.value == '11') {
        window.location.href = '/event';
    } else if (box.value == '12') {
        window.location.href = '/extras';
    } else if (box.value == '13'){
        window.location.href = '/type';
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