"use strict";

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({
		width : 640,
		height: 480,
		icon  : 'RESOURCE/icon/pripara/icon_aroma.jpg'
	});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	//mainWindow.openDevTools();
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});

