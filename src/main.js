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

"ui";

importClass(android.provider.Settings);

// 基本設定
const STORAGE = storages.create("AutoCatAndSoupConfig");

// 語言包
const T = require("./i18n.js");

// 設定資料
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

// 浮窗權限檢查
function checkFloatyPermission() {
    if (!Settings.canDrawOverlays(context)) {
        toast("perm_floaty");
        var intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
        intent.setData(Uri.parse("package:" + context.getPackageName()));
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        app.startActivity(intent);
        return false;
    }
    return true;
}
    

// 無障礙檢查
function checkAccessibility() {
    if (!auto.service) {
        toast("perm_accessibility");
        app.startActivity({
            action: Settings.ACTION_ACCESSIBILITY_SETTINGS
        });
        return false;
    }
    return true;
}

// UI
ui.layout(
    <vertical>
        <text text="{{T('title')}}" textSize="20sp" textColor="#000000" gravity="center_horizontal" padding="16"/>
        
        <scroll layout_weight="1">
            <vertical padding="24">
                <text text="basic_section" textColor="#888888"/>
                <checkbox id="cbSell" text="sell_product"/>
                <checkbox id="cbUpgrade" text="upgrade_facility"/> 
                <checkbox id="cbUpgrade2" text="upgrade_recipe"/>
                <checkbox id="cbBuild" text="build_facility"/>
                
                <space h="16"/>
                <text text="collect_section" textColor="#888888"/>
                <checkbox id="cbReceive" text="afk_reward"/>
                <checkbox id="cbReceive2" text="jar_reward"/>
                <checkbox id="cbReceive3" text="merchant_reward"/>
                <checkbox id="cbReceive4" text="butterfly_reward"/>
                <checkbox id="cbReceive5" text="frog_reward"/>
                <checkbox id="cbReceive6" text="mail"/>
                <checkbox id="cbReceive7" text="achievement"/>
                
                <space h="16"/>
                <text text="random_task" textColor="#888888"/>
                <checkbox id="cbPhoto" text="take_photo"/>
                <checkbox id="cbGift" text="gift"/>
                <checkbox id="cbPlay" text="play"/>
                <checkbox id="cbTravel" text="travel"/>
                
                <space h="16"/>
                <text text="daily_task" textColor="#888888"/>
                <checkbox id="cbFishing" text="fishing"/>
                <checkbox id="cbGacha" text="gacha"/>
                <checkbox id="cbShooting" text="shooting"/>
            </vertical>
        </scroll>

        <button id="btnStart" text="start" textSize="18sp" layout_gravity="center_horizontal" margin="16"/>
    </vertical>
);

// 初始化狀態
ui.cbSell.checked = config.sellProduct;
ui.cbUpgrade.checked = config.upgradeFacility;
ui.cbUpgrade2.checked = config.upgradeRecipe;
ui.cbPhoto.checked = config.Photo;
ui.cbGift.checked = config.Gift;
ui.cbPlay.checked = config.Play;
ui.cbReceive.checked = config.receiveAFK;
ui.cbReceive2.checked = config.receiveJar;
ui.cbReceive3.checked = config.receiveMerchant;
ui.cbReceive4.checked = config.receiveButterfly;
ui.cbReceive5.checked = config.receiveFrog;
ui.cbReceive6.checked = config.receiveMail;
ui.cbReceive7.checked = config.receiveAchievement;

// 未開發功能鎖定
ui.cbBuild.enabled = false;
ui.cbTravel.enabled = false;
ui.cbFishing.enabled = false;
ui.cbGacha.enabled = false;
ui.cbShooting.enabled = false;

// 勾選監聽
ui.cbSell.on("check", checked => {
    config.sellProduct = checked;
    STORAGE.put("sellProduct", checked);
});

ui.cbUpgrade.on("check", checked => {
    config.upgradeFacility = checked;
    STORAGE.put("upgradeFacility", checked);
});

ui.cbUpgrade2.on("check", checked => {
    config.upgradeRecipe = checked;
    STORAGE.put("upgradeRecipe", checked);
});

ui.cbPhoto.on("check", checked => {
    config.Photo = checked;
    STORAGE.put("Photo", checked);
});

ui.cbGift.on("check", checked => {
    config.Gift = checked;
    STORAGE.put("Gift", checked);
});

ui.cbPlay.on("check", checked => {
    config.Play = checked;
    STORAGE.put("Play", checked);
});

ui.cbReceive.on("check", checked => {
    config.receiveAFK = checked;
    STORAGE.put("receiveAFK", checked);
});

ui.cbReceive2.on("check", checked => {
    config.receiveJar = checked;
    STORAGE.put("receiveJar", checked);
});

ui.cbReceive3.on("check", checked => {
    config.receiveMerchant = checked;
    STORAGE.put("receiveMerchant", checked);
});

ui.cbReceive4.on("check", checked => {
    config.receiveButterfly = checked;
    STORAGE.put("receiveButterfly", checked);
});

ui.cbReceive5.on("check", checked => {
    config.receiveFrog = checked;
    STORAGE.put("receiveFrog", checked);
});

ui.cbReceive6.on("check", checked => {
    config.receiveMail = checked;
    STORAGE.put("receiveMail", checked);
});

ui.cbReceive7.on("check", checked => {
    config.receiveAchievement = checked;
    STORAGE.put("receiveAchievement", checked);
});

// 啟動
ui.btnStart.on("click", () => {
    if (!checkAccessibility()) return;
    if (!checkFloatyPermission()) return;

    STORAGE.put("sellProduct", config.sellProduct);
    STORAGE.put("upgradeFacility", config.upgradeFacility);
    STORAGE.put("upgradeRecipe", config.upgradeRecipe);
    STORAGE.put("Photo", config.Photo);
    STORAGE.put("Gift", config.Gift);
    STORAGE.put("Play", config.Play);
    STORAGE.put("receiveAFK", config.receiveAFK);
    STORAGE.put("receiveJar", config.receiveJar);
    STORAGE.put("receiveMerchant", config.receiveMerchant);
    STORAGE.put("receiveButterfly", config.receiveButterfly);
    STORAGE.put("receiveFrog", config.receiveFrog);
    STORAGE.put("receiveMail", config.receiveMail);
    STORAGE.put("receiveAchievement", config.receiveAchievement);

    ui.finish();

    engines.execScriptFile("run.js");
});

// 啟動時確認權限
setTimeout(() => {
    checkFloatyPermission();
    checkAccessibility();
}, 300);
