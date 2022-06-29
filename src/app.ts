import { app, BrowserWindow } from "electron";
import reloader from "electron-reload";
import path from "path";

reloader(__dirname, {});

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		titleBarStyle: "customButtonsOnHover",
		closable: true,
		webPreferences: { preload: path.join(__dirname, "preload.js") },
	});
	win.setBackgroundColor("grey");
	win.setMenu(null);
	win.loadFile("../src/index.html");
}

app.disableHardwareAcceleration();
app.whenReady().then(() => {
	createWindow();
});

app.on("window-all-closed", () => {
	console.log("Closed");
});
