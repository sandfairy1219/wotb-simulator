const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // 브라우저 창 생성
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // index.html 파일을 로드
  mainWindow.loadFile('index.html');

  // 개발자 도구를 엽니다.
  mainWindow.webContents.openDevTools();
}

// 애플리케이션이 준비되었을 때 창을 생성
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // macOS에서는 dock 아이콘이 클릭되고 다른 창이 열려 있지 않으면 새 창을 다시 만듭니다.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 모든 창이 닫혔을 때 애플리케이션 종료
app.on('window-all-closed', () => {
  // macOS에서는 사용자가 명확하게 Cmd + Q를 누르기 전까지 애플리케이션이 종료되지 않습니다.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});