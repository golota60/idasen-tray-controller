
<p align="center">
</p>

<div align="center">
<img src="https://github.com/golota60/idasen-tray-controller/blob/master/public/carrot.png" width="200">
	<h1>Idasen controller</h1>
	<p>
		<b>🥕 A cross-platform background tray app for controlling your IKEA Idasen desk 🥕</b>
	</p>
	<br>
</div>

Linux             |  MacOS   | Windows
:-------------------------:|:-------------------------:|:-------------------------:
![](https://github.com/golota60/idasen-tray-controller/blob/master/linux-demo.png)  |  ![](https://github.com/golota60/idasen-tray-controller/blob/master/macos-demo.png)   |   ![](https://github.com/golota60/idasen-tray-controller/blob/master/win-demo.png)

<br>


## Usage

When you open the app for the first time, it will automatically scan the network to find any desks that have `Desk` in their name. Once it finds it, it will attempt to connect.

After first usage, the name of the desk is saved in the configuration file, so the next time you open the app, it should connect to the desk automatically.

The desk cannot be connected to multiple machines at once, so make sure the desk is not connected to anything when you open the app.

## System-specific quirks

Some systems can handle the app gracefully, some don't - here are the quirks i've found while using on different systems

### Windows

From my experience, in order to connect to the desk I had to first connect the desk via bluetooth control panel. After that, the app can pick up on it.

### MacOS

Desk should NOT be connected to the system while opening the app. This is a weird quirk of MacOS that I'll look into fixing in the future. Also, since I'm not a signed Apple developer, you might get a prompt saying that the app can be opened - [here's how to bypass that](https://support.apple.com/en-us/HT202491).

### Linux

On my local machine(steam deck/arch) there are no quirks and the app handles almost any interaction. But since there are a lot of linux flavors out there, there's a chance that your machine might have some

## Troubleshooting and reset config

If you encounter any problems that were not explained anywhere in this README, feel free to open an issue describing your problem.

If you'd like to reset the app to factory settings, delete the following file(depending on the system you're using):
- MacOS
```bash
 /Users/<your_profile_name>/Library/Application\ Support/idasen-tray-config.json
```
- Linux
```bash
 /home/<your_profile_name>/.local/share/idasen-tray-config.json
```
- Windows
```bash
 C:\\Users\\<your_profile_name>\\AppData\\Roaming/idasen-tray-config.json
```

**Important** - If you changed your device name, you'll also need to remove this file.

## Roadmap, known issues and feature requests

Roadmap(w/o order):

- [x] Create config file if not present
- [x] Drop MAC address requirement; add some better way - replaced with device name
- [x] Auto save MAC address upon first connection to be reused later
- [x] Adding new desk positions
- [x] Deleting desk positions
- [x] Windows support
- [x] MacOS support
- [x] Nicer icon
- [x] Better input window decorator- no need imo
- [x] Better desk moving behavior(currently it moves weirdly, due to usage of external lib)
- [X] More information inside README + potential problems
- [ ] Better tests
- [ ] Run on system startup
- [ ] Display a setup screen instead of automatic connection for better UX
- [ ] Allow for config reset from inside the app
- [ ] Add options(TBD which ones)
- [ ] Automatic update prompts

Known issues:

- [x] Clicking on newly added element
- [ ] manually stopping a moving desk deadlocks the app
- [ ] opening a new window while the other is already open
