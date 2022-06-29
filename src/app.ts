import { app, BrowserWindow } from "electron";

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		titleBarStyle: "hidden",
	});
	win.setBackgroundColor("grey");
	win.setMenu(null);
	win.loadURL("https://www.google.com");
}

app.whenReady().then(() => {
	createWindow();
});

app.on("window-all-closed", () => {
	console.log("Closed");
	app.quit();
});
