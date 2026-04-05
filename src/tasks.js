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

var tasks = {};

// 1. 販賣商品
tasks.sellProduct = function(img) {
    let l = (!images.detectsColor(img, "#B38282", 35, 1267) && !images.detectsColor(img, "#DCAB82", 35, 1267));
    let r = (!images.detectsColor(img, "#B38282", 45, 1267) && !images.detectsColor(img, "#DCAB82", 45, 1267));
    if (l || r) {
        click(60, 1222);
        return true;
    }
    return false;
};

// 2. 設施升級
tasks.upgradeFacility = function(img) {
    if (images.detectsColor(img, "#FFFFFF", 87, 1032)) {
        click(31, 1044);
        return true;
    }
    return false;
};

// 3. 食譜升級
tasks.upgradeRecipe = function(img) {
    if (images.detectsColor(img, "#FD7171", 581, 1081)) {
        click(550, 1101);
        sleep(500);
        let tempImg = captureScreen();
        while (images.detectsColor(tempImg, "#8EE3D3", 458, 1037)) {
            click(535, 1053);
            tempImg = captureScreen();
        }
        back();
        sleep(500);
    }
};

// 4. 拍照
tasks.takePhoto = function(img) {
    if (images.detectsColor(img, "#B5B5C6", 648, 813)) {
        click(660, 815);
        // 等待拍照按鈕出現
        while (!images.detectsColor(captureScreen(), "#FFFFFF", 360, 950)) sleep(100);
        click(360, 1025);
        // 等待返回
        while (!images.detectsColor(captureScreen(), "#F4ECD3", 360, 1150)) sleep(100);
        back();
        sleep(500);
    }
};

// 5. 領取獎勵 
tasks.collectRewards = function(img) {
    // 掛機獎勵
    if (images.detectsColor(img, "#E3C5AE", 371, 1092)) {
        click(360, 1130); sleep(500);
        click(420, 809);
    }
    // 罐子精靈
    if (images.detectsColor(img, "#AAAAAA", 433, 1132)) {
        click(360, 1130); sleep(500);
        click(420, 844);
    }
    // 商人
    if (images.detectsColor(img, "#DB937D", 351, 1152)) {
        click(360, 1130); sleep(500);
        click(420, 755);
    }
};

// 6. 隨機出現的獎勵 (蝴蝶/青蛙)
tasks.randomRewards = function(img) {
    // 蝴蝶或青蛙 (共用點擊位置)
    let isButterfly = images.detectsColor(img, "#FBE771", 71, 280);
    let isFrog = images.detectsColor(img, "#D8E0B7", 55, 291);
    if (isButterfly || isFrog) {
        click(71, 280);
        sleep(2000);
        click(360, 650); sleep(300); click(423, 724);
    }
};

// 7. 玩耍
tasks.playWithCat = function(img) {
    if (images.detectsColor(img, "#F9DBDC", 673, 737)) {
        click(645, 739);
        sleep(3000);
        click(360, 800);
        // 這裡保留你原本複雜的滑動邏輯...
    }
};

module.exports = tasks;