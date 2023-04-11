// import 2 separate modules
const { app, BrowserWindow } = require('electron')

// Declare a function to create 800 * 600 window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })
    // Load the html in the window
    win.loadFile('src/index.html')
}

// Calling the function only the app is ready
//helper specifically for the ready event to avoid subtle pitfalls
app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });