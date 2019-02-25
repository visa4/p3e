// Modules to control application life and create native browser window
const {app, BrowserWindow, protocol} = require('electron');
const path  = require('path');
const fs    = require('fs');

/**
 * @type Application
 */
class Application {

    /**
     * @return {string}
     */
    static get PATH_CONFIG() {
        return path.join(__dirname, '/config/config.json');
    };

    constructor() {

        this.browserWindow = null;

        /**
         * @type {Object}
         */
        this.config = JSON.parse(
            fs.readFileSync(Application.PATH_CONFIG, {'encoding': 'UTF8'})
        );
    }

    /**
     * Run application
     */
    run() {
        this._createWindows();
    }

    /**
     * Create the browser window.
     * @private
     */
    _createWindows() {

        this.browserWindow = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true,
            },
            width: 500,
            height: 500
        });

        let entryPoint = 'index.html'
        if(this.config.env === 'development') {

            this.browserWindow .webContents.openDevTools();
            entryPoint = 'development/index.html';
        }

        this.browserWindow .loadURL(`file://${__dirname}/${entryPoint}`);

        /**
         * On close browser window
         */
        this.browserWindow.on('closed', () => {
            this.browserWindow = null
        })
    }
}

let application = new Application();

/**
 * Electron ready
 */
app.on('ready', () => {
    application.run();
});

/**
 * Electron close all windows
 */
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', ()  => {
    // On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
    if (application.browserWindow === null) {
        application.run();
    }
});
