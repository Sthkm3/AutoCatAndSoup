/**
 * 專案名稱: AutoCatAndSoup
 * Copyright (C) 2026 Sthkm3
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

"auto";

const STORAGE = storages.create("AutoCatAndSoupConfig");

const SCREEN_W = 720;
const SCREEN_H = 1280;

// 讀取
let config = {
    sellProduct: STORAGE.get("sellProduct", false),
    upgradeFacility: STORAGE.get("upgradeFacility", false),
    upgradeRecipe: STORAGE.get("upgradeRecipe", false),
    Photo: STORAGE.get("Photo", false),
    Gift: STORAGE.get("Gift", false),
    Play: STORAGE.get("Play", false),
    receiveAFK: STORAGE.get("receiveAFK", false),
    receiveJar: STORAGE.get("receiveJar", false),
    receiveMerchant: STORAGE.get("receiveMerchant", false),
    receiveButterfly: STORAGE.get("receiveButterfly", false),
    receiveFrog: STORAGE.get("receiveFrog", false),
    receiveMail: STORAGE.get("receiveMail", false),
    receiveAchievement: STORAGE.get("receiveAchievement", false)
};

// 小視窗
let isPaused = false;

let win = floaty.rawWindow(
    <vertical bg="#AA000000" padding="6">
        <text text="Auto CatAndSoup" textColor="#FFFFFF" textSize="12sp"/>
        <button id="btnPause" text="暫停"/>
    </vertical>
);

win.setPosition(0, (SCREEN_H / 2) - 80);
win.setSize(160, -2); win.btnPause.click(() => { isPaused = !isPaused;

win.btnPause.setText(isPaused ? "啟動" : "暫停");
toast(isPaused ? "已暫停" : "已啟動"); });

// 主循環
while (true) {
    
    var img = captureScreen();
    var pkg = currentPackage();
    
    // 判斷應用
    if (pkg != "com.hidea.cat" && !isPaused) {
        app.launchPackage("com.hidea.cat");
        sleep(1000);
        continue;
    }
  
    // 販賣商品
    if (config.sellProduct && !isPaused) {
        if (
            !images.detectsColor(img, "#B38282", 35, 1264) &&
            !images.detectsColor(img, "#DCAB82", 35, 1264)
        ) {
            let x = random(30, 90);
            let y = random(1200, 1240);
            click(x, y);
            sleep(200);
        }
    }

    // 設施升級
    if (config.upgradeFacility && !isPaused) {
        if (images.detectsColor(img, "#70FE7F", 95, 1024)) {
            click(31, 1044);
            sleep(200);
        }
    }
    
    // 食譜升級
    if (config.upgradeRecipe && !isPaused) {
        if (images.detectsColor(img, "#FD7171", 581, 1081)) {
            click(550, 1101);
            sleep(500);
            var img = captureScreen();
            while (images.detectsColor(img, "#8EE3D3", 458, 1037)){
                click(458, 1081);
                sleep(100);
                var img = captureScreen();
            }
            //back();
            sleep(3000);
        }
    }
    
    // 拍照
    if (config.Photo && !isPaused) {
        if (images.detectsColor(img, "#B5B5C6", 648, 813)){
            click(660, 815);
            sleep(1000);
            click(362, 1026);
            sleep(1000);
            back();
            sleep(500); //images.detectsColor(img, "#FF6F6F", 681, 796)
        }
    }
    
    // 禮物
    if (config.Gift && !isPaused) {
        if (images.detectsColor(img, "#FFFFFF", 680, 725) && images.detectsColor(img, "#FFFFFF", 680, 715)) {
            click(662, 745);
            var img = captureScreen();
            while (!images.detectsColor(img, "#FFFFFF", 250, 825)){
                sleep(100);
                var img = captureScreen();
            }
            sleep(500);
            click(360, 760);
            sleep(500);
            back();
            sleep(2000);
            var img = captureScreen();
            if (images.detectsColor(img, "#FFFFFF", 250, 830)){
                click(360, 735);
                sleep(3000);
                back();
            }
            sleep(500);
        }
    }
    
    // 玩耍
    if (config.Play && !isPaused) {
       if (images.detectsColor(img, "#F9DBDC", 673, 737)) {
            click(645, 739);
            sleep(3000);
            click(360, 800);
            sleep(500);
            
            swipe(360, 560, 360, 900, 1000);
            sleep(100);
            var img = captureScreen();
            while(images.detectsColor(img, "#F2B1B1", 501, 858)  && !isPaused){
                swipe(360, 800, 360, 200, 3000);
                sleep(100);
                swipe(360, 300, 360, 900, 3000);
                sleep(100);
                var img = captureScreen();
            }
            click(415, 923);
            sleep(1000);
        }
    }
    
    // 掛機獎勵
    if (config.receiveAFK && !isPaused) {
        if (images.detectsColor(img, "#E3C5AE", 371, 1092)) {
            click(360, 1130);
            sleep(500);
            click(420, 809);
            sleep(500);
        }
    }
    
    // 罐子精靈獎勵
    if (config.receiveJar && !isPaused) {
        if (images.detectsColor(img, "#AAAAAA", 433, 1132)) {
            click(360, 1130);
            sleep(500);
            click(420, 844);
            sleep(500);
        }
    }

    // 商人獎勵
    if (config.receiveMerchant && !isPaused) {
        if (images.detectsColor(img, "#DB937D", 351, 1152)) {
            click(360, 1130);
            sleep(500);
            click(420, 755);
            sleep(500);
        }
    }
    
    // 黃金蝴蝶獎勵
    if (config.receiveButterfly && !isPaused) {
        if (images.detectsColor(img, "#FBE771", 71, 280)) {
            click(71, 280);
            sleep(2000);
            click(360, 650);
            sleep(300);
            click(423, 724);
            sleep(500);
        }
    }
    
    // 青蛙王子獎勵
    if (config.receiveFrog && !isPaused) {
        if (images.detectsColor(img, "#D8E0B7", 55, 291) && images.detectsColor(img, "#D8E0B7", 49, 291)) {
            click(71, 280);
            sleep(2000);
            click(360, 650);
            sleep(300);
            click(423, 724);
            sleep(500);
        }
    }
    
    // 信箱
    if (config.receiveMail && !isPaused) {
        if (images.detectsColor(img, "#FFFFFF", 376, 199) && images.detectsColor(img, "#F2DFC7", 356, 234)) {
            click(360, 208);
            sleep(1000);
            var img = captureScreen();
            while (images.detectsColor(img, "#8EE3D3", 570, 380) && !isPaused) {
                click(484, 398);
                sleep(500);
                var img = captureScreen();
                if (images.detectsColor(img, "#E5D8CA", 489, 632)) {
                    click(400, 720);
                    var img = captureScreen();
                }
                sleep(500);
                var img = captureScreen();
            }
            back();
            sleep(500);
        }
    }
        
    // 成就與任務
    if (config.receiveAchievement && !isPaused) {
        if (images.detectsColor(img, "#FF6F6E", 680, 243)) {
            click(662, 263);
            sleep(500);
            var img = captureScreen();
            if (images.detectsColor(img, "#FF6F6E", 307, 234)) {
                click(225, 250);
                sleep(1000);              
                while (images.detectsColor(img, "#8EE3D3", 520, 460) && !isPaused) {
                    click(520, 470);
                    sleep(100);
                    var img = captureScreen();
                }
            }
            else {
                click(495, 250);
                sleep(1000);              
                while (images.detectsColor(img, "#8EE3D3", 520, 344) && !isPaused) {
                    click(520, 344);
                    sleep(100);
                    var img = captureScreen();
                }
            }
            back();
            sleep(500);
        }
    }
    img.recycle();
}
