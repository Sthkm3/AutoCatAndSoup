**| English | [繁體中文](README.md) | [简体中文](README_zh-CN.md) |**

# **AutoCatAndSoup**

Cat and Soup auto script | An assistant script for *Cat and Soup*, developed and compiled using Auto.js 6.

![icon](https://play-lh.googleusercontent.com/A2Wq3C8LfjxpREC0DccMcYcRIqWB7ol5o3cDhfL3rYS2ZFqOwCB5tFOEOS5Tzya37df7=s180-rw)

## Features

### Basic Tasks

- **Sell Products**: Automatically taps to sell products and collect coins when items are available in the selling area.
- **Facility Upgrade**: Automatically upgrades cat facilities when sufficient coins are available.
- **Recipe Upgrade**: Automatically upgrades recipes when enough stamina is available (can be disabled after recipes reach max level).

### Reward Collection

- **AFK Reward**: Collects offline rewards (usually up to 6 hours).
- **Jar Fairy Reward**: Collects random Jar Fairy rewards.
- **Merchant Reward**: Collects merchant rewards twice per day.
- **Golden Butterfly Reward**: Locates and captures the Golden Butterfly when it appears.
- **Frog Prince Reward**: Locates and collects the Frog Prince reward when it appears.
- **Mailbox**: Collects mailbox rewards.
- **Achievements**: Collects achievement and daily task rewards.

> **Why are Golden Butterfly and Frog Prince rewards sometimes not collected?**  
> Sometimes they appear too close to the edge of the screen, causing the game camera to snap back when clicking.  
> Currently, this script only relies on color detection. Visual recognition algorithms are not used because they are too resource-intensive for mobile devices.  
> A temporary workaround is to move facilities closer to the screen edge to prevent these events from spawning too close to the boundary.

### Random Tasks

- **Take Photo**: Automatically completes photo tasks and closes the result screen.
- **Gift**: Collects gifts prepared by cats and additional coin rewards (when ads are not removed, the middle option is always selected).
- **Play**: Automatically plays with cats to increase affection.

> **Will this script consume ad tickets?**  
> No. Ad doubling will only be used when the game is in ad-free mode.

### Daily Tasks

> Not implemented yet. Please wait for future updates.

## Installation [![](https://img.shields.io/github/downloads/Sthkm3/AutoCatAndSoup/total?color=4e4c97)](https://github.com/Sthkm3/AutoCatAndSoup/releases)

### Method 1: Use Precompiled APK (Recommended)

1. **Download the latest APK from the Releases page**
2. **Install the APK on your Android device**
3. **After launching the app, enable the following permissions as prompted:**
   - Accessibility Service
   - Floating Window (Overlay) permission

### Method 2: Compile with Auto.js 6

1. **Install Auto.js 6 (AutoJS6)**
2. **Download or clone this repository to your device**
3. **Open main.js with Auto.js 6**
4. **Compile it into an APK or run it directly using Auto.js**

## Usage

1. **Launch the application**
2. **Select the features you want to enable**
3. **Tap “Start”**
4. **Grant temporary screen capture permission**
5. **The script will automatically launch the game and begin running**
6. **A floating control window will appear on the left side of the screen, allowing you to:**
   - Pause the script
   - Resume the script

> Do not operate the phone while the script is running. Please pause the script before manual interaction.
>

> If any incorrect behavior occurs, simply uncheck the corresponding feature.

## Requirements

- **Android device** (currently recommended to use emulators such as Bluestacks, Mumu 12, or Nox Player)
- **Screen resolution:**
  - Portrait mode: 720 × 1280  
  (Currently only this resolution is supported. Flexible resolution support is planned for future versions.)
- **Game version: Cat and Soup 4.28.1**
- **Required permissions:**
  - Accessibility Service
  - Floating Window (Overlay)
  - Screen Capture permission

> This project is intended for learning and research purposes only.  
> Please comply with the game’s terms of service. Use at your own risk.

## About **Auto.js 6**

ACAS is developed and compiled using **Auto.js 6 (AutoJS6)**.  
Auto.js 6 is an Android automation scripting tool that uses JavaScript in combination with the Accessibility Service to perform actions such as tapping, swiping, and screen recognition.

This project:
- Uses Auto.js 6 as the development and compilation environment
- Produces a standalone installable APK
- Can be used without installing Auto.js after compilation

<sub>This software uses AutoJs6 (MPL‑2.0 License) as its engine.
Copyright (C) 2021‑2025 SuperMonster003 and contributors.</sub>
