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

const i18n = {};

const locale = java.util.Locale.getDefault().getLanguage();

let currentLang = "zh";

if (locale.startsWith("en")) {
    currentLang = "en";
}

// 支援的語系定義
const languages = {
    "zh": {
        // UI 標題與標籤
        "title": "Auto CatAndSoup 設定",
        "basic_section": "── 基本 ──",
        "collect_section": "── 領取 ──",
        "random_task": "─ 隨機任務 ─",
        "daily_task": "─ 每日任務 ─",
        
        // 選項文字
        "sell_product": "販賣商品",
        "upgrade_facility": "設施升級",
        "upgrade_recipe": "食譜升級",
        "build_facility": "設施建設(未開發)",
        "afk_reward": "掛機獎勵",
        "jar_reward": "罐子精靈獎勵",
        "merchant_reward": "商人獎勵",
        "butterfly_reward": "黃金蝴蝶獎勵",
        "frog_reward": "青蛙王子獎勵",
        "mail": "信箱",
        "achievement": "成就",
        "take_photo": "拍攝照片",
        "gift": "禮物",
        "play": "玩耍",
        "travel": "旅行(未開發)",
        "fishing": "釣魚(未開發)",
        "gacha": "扭蛋(未開發)",
        "shooting": "投籃(未開發)",
        
        // 按鈕與提示
        "start": "啟動",
        "pause": "暫停",
        "resume": "繼續",
        "running": "運行中",
        "perm_floaty": "請開啟懸浮窗權限",
        "perm_accessibility": "請啟用無障礙服務",
        "launching_game": "嘗試開啟遊戲..."
    },
    "en": {
        "title": "Auto CatAndSoup Settings",
        "basic_section": "── Basic ──",
        "collect_section": "── Collect ──",
        "random_task": "─ Random Task ─",
        "daily_task": "─ Daily Task ─",
        
        "sell_product": "Sell Products",
        "upgrade_facility": "Upgrade Facility",
        "upgrade_recipe": "Upgrade Recipe",
        "build_facility": "Build (Dev)",
        "afk_reward": "AFK Reward",
        "jar_reward": "Jar Spirit",
        "merchant_reward": "Merchant Reward",
        "butterfly_reward": "Golden Butterfly",
        "frog_reward": "Frog Prince",
        "mail": "Mailbox",
        "achievement": "Achievement",
        "take_photo": "Take Photo",
        "gift": "Gifts",
        "play": "Play",
        "travel": "Travel (Dev)",
        "fishing": "Fishing (Dev)",
        "gacha": "Gacha (Dev)",
        "shooting": "Basket (Dev)",
        
        "start": "START",
        "pause": "PAUSE",
        "resume": "RESUME",
        "running": "Running",
        "perm_floaty": "Please enable Floating Window permission",
        "perm_accessibility": "Please enable Accessibility service",
        "launching_game": "Launching game..."
    }
};

function t(key){
    if(languages[currentLang] && languages[currentLang][key]){
        return languages[currentLang][key];
    }
    return key;
}

module.exports = t;
