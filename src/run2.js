while (true) {
   

    

 

    // --- 根據 Config 呼叫對應的 Task ---
    if (config.sellProduct) Tasks.sellProduct(img);
    
    if (config.upgradeFacility) Tasks.upgradeFacility(img);
    
    if (config.upgradeRecipe) Tasks.upgradeRecipe(img);
    
    if (config.Photo) Tasks.takePhoto(img);

    // 獎勵領取類
    if (config.receiveAFK || config.receiveJar || config.receiveMerchant) {
        Tasks.collectRewards(img);
    }

    if (config.receiveButterfly || config.receiveFrog) {
        Tasks.randomRewards(img);
    }

    // --- 結束本輪 ---
    img.recycle();
    sleep(200); 
}
