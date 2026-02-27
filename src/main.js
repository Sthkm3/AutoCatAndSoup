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
        toast("請開啟懸浮窗權限");
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
        toast("請啟用無障礙服務");
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
        <text text="Auto CatAndSoup 設定" textSize="20sp" textColor="#000000" gravity="center_horizontal" padding="16"/>
        
        <scroll layout_weight="1">
            <vertical padding="24">
                <text text="── 基本 ──" textColor="#888888"/>
                <checkbox id="cbSell" text="販賣商品"/>
                <checkbox id="cbUpgrade" text="設施升級"/> 
                <checkbox id="cbUpgrade2" text="食譜升級"/>
                <checkbox id="cbBuild" text="設施建設(未開發)"/>
                
                <space h="16"/>
                <text text="── 領取 ──" textColor="#888888"/>
                <checkbox id="cbReceive" text="掛機獎勵"/>
                <checkbox id="cbReceive2" text="罐子精靈獎勵"/>
                <checkbox id="cbReceive3" text="商人獎勵"/>
                <checkbox id="cbReceive4" text="黃金蝴蝶獎勵"/>
                <checkbox id="cbReceive5" text="青蛙王子獎勵"/>
                <checkbox id="cbReceive6" text="信箱"/>
                <checkbox id="cbReceive7" text="成就"/>
                
                <space h="16"/>
                <text text="─ 隨機任務 ─" textColor="#888888"/>
                <checkbox id="cbPhoto" text="拍攝照片"/>
                <checkbox id="cbGift" text="禮物"/>
                <checkbox id="cbPlay" text="玩耍"/>
                <checkbox id="cbTravel" text="旅行(未開發)"/>
                
                <space h="16"/>
                <text text="─ 每日任務 ─" textColor="#888888"/>
                <checkbox id="cbFishing" text="釣魚(未開發)"/>
                <checkbox id="cbGacha" text="扭蛋(未開發)"/>
                <checkbox id="cbShooting" text="投籃(未開發)"/>
            </vertical>
        </scroll>

        <button id="btnStart" text="啟動" textSize="18sp" layout_gravity="center_horizontal" margin="16"/>
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
