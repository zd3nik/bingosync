var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var thisVersion = "v3 beta 9";

var bingoList = [];


bingoList[1] = [
    { name: "15 Blue Coins from M Graffiti", jp: "M字から青コイン15枚", types: ["M_Graffiti", "Ricco_M"] },
    { name: "3 Fruit Lady Blue Coins", jp: "アルバイトの青コイン3枚", types: ["Fruit_Ladies"] },
    { name: "3 Red Coin Shines", jp: "赤コインのシャイン3枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Low_Reds"] },
    { name: "12 Delfino Blue Coins", jp: "ドルピックタウンの青コイン12枚", types: ["Plaza_Blues", "Fruit_Ladies"] },
    { name: "15 Ricco Blue Coins", jp: "リコハーバーの青コイン15枚", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_Shines"] },
    { name: "Pianta 100 Coin Shine", jp: "モンテのむらの100枚コイン", types: ["X100_Coins"] }
];
bingoList[2] = [
    { name: "10 Pinna Blue Coins", jp: "ピンナパークの青コイン10枚", types: ["Pinna_Blues", "Pinna_10", "Pinna_30"] },
    { name: "15 Gelato Blue Coins", jp: "マンマビーチの青コイン15枚", types: ["Gelato_Blues", "Fast_20"] },
    { name: "20 Ricco Blue Coins", jp: "リコハーバーの青コイン20枚", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
    { name: "15 Bianco Blue Coins", jp: "ビアンコヒルズの青コイン15枚", types: ["Bianco_Blues", "Bianco_Early"] },
    { name: "Ricco 100 Coin Shine", jp: "リコハーバーの100枚コイン", types: ["Ricco_100s", "Ricco_Early", "Ricco_Top", "Ricco_Shines"] },
    { name: "50 Yellow Coins From 3 Levels", jp: "4ステージでコイン50枚（ドルピックタウン以外）", types: ["Ricco_100s", "X100_Coins", "Gelato_100s", "Bianco_100s"] }
];
bingoList[3] = [
    { name: "4 Fruit Lady Blue Coins", jp: "アルバイトの青コイン4枚", types: ["Fruit_Ladies"] },
    { name: "Bianco 4 Fluddless", jp: "ビアンコ4 ポンプ禁止", types: ["Bianco_Early", "Bianco_Shines"] },
    { name: "1 Bianco Hidden Shine", jp: "ビアンコヒルズの隠しシャイン1枚", types: ["Bianco_Early", "Bianco_Hidden", "Bianco_Shines"] },
    { name: "5 Linked Blue Coin Pairs", jp: "双子ラクガキの青コイン5ペア", types: ["Linked_Blues"] },
    { name: "Ricco 3 Fluddless", jp: "リコハーバー3 ポンプ禁止", types: ["Ricco_Top", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] },
    { name: "22 Blue Coins from M Graffiti", jp: "M字から青コイン22枚", types: ["M_Graffiti", "Ricco_M"] }
];
bingoList[4] = [
    { name: "5 Blue Bird Blue Coins", jp: "青い鳥の青コイン5枚", types: ["Blue_Bird"] },
    { name: "15 Delfino Blue Coins", jp: "ドルピックタウンの青コイン15枚", types: ["Plaza_Blues"] },
    { name: "2 Rocket Nozzle Unlocks", jp: "ロケットノズル2つ解放", types: ["Rocket_Nozzle", "Bianco_Rocket", "Ricco_Rocket", "Noki_Rocket", "Pianta_Rocket", "Two_Rockets"] },
    { name: "5 Shines from Bianco", jp: "ビアンコヒルズのシャイン5枚", types: ["Bianco_Rocket", "Bianco_Boss", "Bianco_Secret", "Bianco_Early", "Bianco_Late", "Bianco_Blues", "Bianco_Shines"] },
    { name: "1 Ricco Hidden Shine", jp: "リコハーバーの隠しシャイン1枚", types: ["Ricco_Top", "Ricco_Hidden", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] },
    { name: "4 Gelato Shines", jp: "マンマビーチのシャイン4枚", types: ["Gelato_5", "Wiggler", "Gelato_Early"] }
];
bingoList[5] = [
    { name: "Box Game 3", jp: "木箱3のシャイン", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
    { name: "4 Red Coin Shines", jp: "赤コインのシャイン4枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Bianco_Early", "Bianco_8", "Low_Reds"] },
    { name: "15 Pinna Blue Coins", jp: "ピンナパークの青コイン15枚", types: ["Pinna_Blues", "Fast_20", "Pinna_Early", "Pinna_30", "Pinna_Shines"] },
    { name: "20 Gelato Blue Coins", jp: "マンマビーチの青コイン20枚", types: ["Gelato_Early", "Gelato_Blues", "Wiggler", "Fast_20"] },
    { name: "2 Gelato Hidden Shines", jp: "マンマビーチの隠しシャイン2枚", types: ["Gelato_Early", "Gelato_Hidden"] },
    { name: "Pianta 3 Damageless", jp: "モンテ3をノーダメージでクリア", types: ["Goopy_Inferno", "Pianta_Shines"] }
];
bingoList[6] = [
    { name: "150 Coins From Delfino", jp: "ドルピックでコイン150枚", types: ["Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza", "X100_Coins"] },
    { name: "25 Ricco Blue Coins", jp: "リコハーバーの青コイン25枚", types: ["Ricco_Blues", "Blue_Enemies", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
    { name: "Gelato 100 Coin Shine", jp: "マンマビーチの100枚コイン", types: ["Gelato_100s", "Gelato_Early"] },
    { name: "Bianco 100 Coin Shine", jp: "ビアンコヒルズの100枚コイン", types: ["Bianco_100s", "Bianco_Early"] },
    { name: "7 NPC Blue Coins (No Pianta)", jp: "NPCの青コイン7枚 (モンテ以外)", types: ["Fruit_Ladies", "Plaza_Blues", "NPC_Blues"] }
];
bingoList[7] = [
    { name: "12 Noki Blue Coins", jp: "マーレのいりえの青コイン10枚", types: ["Noki_Blues", "Noki_Early"] },
    { name: "20 Bianco Blue Coins", jp: "ビアンコヒルズの青コイン20枚", types: ["Bianco_Early", "Bianco_Blues", "Bianco_Shines"] },
    { name: "Defeat Both Peteys", jp: "ボスパックン撃破（ビアンコ5）", types: ["Bianco_Boss", "Bianco_Early", "Unique_Boss", "Bianco_Shines"] },
    { name: "Sirena 100 Coin Shine", jp: "シレナビーチの100枚コイン", types: ["Sirena_100s", "X100_Coins", "Sirena_Early"] },
    { name: "Wiggler Shine", jp: "ボスハナチャン撃破（マンマ3）", types: ["Wiggler", "Gelato_Early"] },
    { name: "Pinna 100 Coin Shine", jp: "ピンナパークの100枚コイン", types: ["Pinna_100s", "Pinna_Hoverless"] }
];
bingoList[8] = [
    { name: "4 Secret Shines", jp: "ヒミツステージのシャイン4枚", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden", "Plaza_Secret"] },
    { name: "Defeat Both Cannon Moles and Collect Their Shines", jp: "チョロプーを2匹とも倒す", types: ["Noki_Early", "Pinna_Shines"] },
    { name: "4 Boss Shines", jp: "ボス4体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss"] },
    { name: "1 Pinna Hidden Shine", jp: "ピンナパークの隠しシャイン1枚", types: ["Pinna_Early", "Pinna_Hidden", "Pinna_Yoshi", "Pinna_Shines"] },
    { name: "100 Coin Shine in a Secret", jp: "ヒミツ内部で100枚コインのシャイン取得", types: ["Secret_100s"] }
];
bingoList[9] = [
    { name: "Pinna 3 Hoverless", jp: "ピンナ3ホバー禁止", types: ["Pinna_Hoverless", "Pinna_Yoshi", "Pinna_Shines", "Plaza_Yoshi"] },
    { name: "5 Blue Coins from Enemies", jp: "敵から青コイン5枚", types: ["Blue_Enemies", "Ricco_Top", "Ricco_Blues", "Ricco_Early", "XBoss_Shines", "M_Graffiti"] },
    { name: "4 Unique Boss Shines", jp: "ボス4種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss"] },
    { name: "4 Hidden Shines", jp: "隠しシャイン4枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Secret_Shines"] },
    { name: "5 Red Coin Shines", jp: "赤コインのシャイン5枚", types: ["Red_Shines", "Hidden_Shines", "Low_Reds"] },
    { name: "20 Lives", jp: "残機20", types: ["X_Lives", "Pianta_Lives"] },
    { name: "25 Lives", jp: "残機25", types: ["X_Lives", "Pianta_Lives"] }
];
bingoList[10] = [
    { name: "30 Total Blue Coins", jp: "青コイン合計30枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
    { name: "40 Total Blue Coins", jp: "青コイン合計40枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "XTotal_Blues", "Blue_30"] },
    { name: "50 Total Blue Coins", jp: "青コイン合計50枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "XTotal_Blues", "Blue_30"] },
    { name: "15 Blue Coins from 3 Worlds", jp: "3ステージで青コイン15枚", types: ["XTotal_Blues", "High_Blues"] },
    { name: "20 Blues from 2 Levels", jp: "2ステージで青コイン20枚（ドルピックタウン以外）", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "XTotal_Blues", "Blue_30"] }
];
bingoList[11] = [
    { name: "5 Blue Coins from Enemies (No Ricco)", jp: "敵から青コイン5枚（リコハーバー以外）", types: ["Blue_Enemies", "Bianco_Early", "Bianco_Shines"] },
    { name: "7 Blue Coins from Enemies", jp: "敵から青コイン7枚", types: ["Blue_Enemies", "XBoss_Shines", "M_Graffiti"] },
    { name: "8 Linked Blue Coin Pairs", jp: "双子ラクガキの青コイン8ペア", types: ["Linked_Blues", "Pinna_10"] },
    { name: "Ride Yoshi in 2 Levels", jp: "2ステージでヨッシーに乗る（ドルピックタウン以外）", types: ["Pinna_Yoshi", "Three_Yoshi", "Pianta_Yoshi", "Sirena_Yoshi", "Pinna_Shines", "Bianco_Yoshi", "Ricco_Yoshi"] },
    { name: "6 Delfino Shines", jp: "ドルピックタウンのシャイン6枚", types: ["Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza", "Pianta_8", "Plaza_Secret", "LateS_Plaza"] },
    { name: "12 Sirena Blue Coins", jp: "シレナビーチの青コイン12枚", types: ["Sirena_Blues", "Sirena_Early", "Three_Yoshi"] },
    { name: "25 Pinna Blue Coins", jp: "ピンナパークの青コイン25枚", types: ["Pinna_Blues", "Pinna_Late", "Pinna_30", "Pinna_Yoshi"] }
];
bingoList[12] = [
    { name: "5 Boss Shines", jp: "ボス5体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss", "5_Bosses"] },
    { name: "5 Hidden Shines", jp: "隠しシャイン5枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Secret_Shines", "Hidden_Plaza"] },
    { name: "20 Noki Blue Coins", jp: "マーレのいりえの青コイン20枚", types: ["Noki_Blues", "Noki_Early", "Noki_20", "LateG_Noki"] },
    { name: "1 Sirena Hidden Shine", jp: "シレナビーチの隠しシャイン1枚", types: ["Sirena_Hidden", "Sirena_Early"] },
    { name: "Ricco 6 Blooperless", jp: "リコハーバー6ゲッソーに乗るの禁止", types: ["Ricco_Top", "Ricco_Early", "Ricco_6", "Ricco_100s", "Ricco_Shines"] },
    { name: "Ride Yoshi in Pianta", jp: "モンテのむらのヨッシーに乗る", types: ["Pianta_6", "Pianta_Yoshi", "Pianta_Butterfly", "Pianta_Lives", "LateP_LateG", "LateP_LateS", "Gelato_Yoshi"] },
    { name: "6 Buttons in Unique Locations", jp: "ヒップドロップ6種類のボタン", types: ["Hidden_Shines", "Gelato_Hidden", "Pinna_Hoverless", "Ricco_6", "Ricco_Hidden"] }
];
bingoList[13] = [
    { name: "4 Nozzle Unlocks", jp: "ノズル4つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Noki_Rocket", "Three_Rockets", "Pianta_Rocket", "Gelato_Turbo", "Turbo_Nozzle", "Bianco_Turbo", "Ricco_Turbo", "Sirena_Late"] },
    { name: "6 Red Coin Shines", jp: "赤コインのシャイン6枚", types: ["Red_Shines", "Hidden_Shines", "Low_Reds"] },
    { name: "2 Ricco Hidden Shines", jp: "リコハーバーの隠しシャイン2枚", types: ["Ricco_Hidden", "Ricco_Early", "Ricco_6"] },
    { name: "6 Pianta Shines", jp: "モンテのむらのシャイン6枚", types: ["Pianta_Late", "Pianta_8", "Pianta_Lives", "Pianta_6", "Pianta_Shines"] },
    { name: "Sand Bird Shine", jp: "大砂鳥のシャインを取得", types: ["Wiggler", "Gelato_5", "Paint_Race"] },
    { name: "9 Delfino Shines", jp: "ドルピックタウンのシャイン9枚", types: ["Plaza_Shines", "Shadow_Plaza", "Hidden_Plaza", "Plaza_Mix_Up", "Pianta_8", "Plaza_Secret", "Plaza_G8", "Plaza_Rocket", "LateS_Plaza", "HighBlue_Plaza"] },
    { name: "Pinna 5 From the Back Hoverless", jp: "ピンナ5を裏側からホバー禁止でクリア", types: ["Pinna_Hoverless", "Pinna_Early", "Pinna_Butterfly", "Pinna_Shines", "Plaza_Yoshi"] }
];
bingoList[14] = [
    { name: "12 Blue Coins From 5 Worlds", jp: "5ステージで青コイン12枚", types: ["XTotal_Blues", "High_Blues"] },
    { name: "60 Total Blue Coins", jp: "青コイン合計60枚", types: ["XTotal_Blues", "High_Blues"] },
    { name: "65 Total Blue Coins", jp: "青コイン合計65枚", types: ["XTotal_Blues", "High_Blues"] },
    { name: "70 Total Blue Coins", jp: "青コイン合計70枚", types: ["XTotal_Blues", "High_Blues", "HighBlue_Plaza"] },
    { name: "75 Total Blue coins", jp: "青コイン合計75枚", types: ["XTotal_Blues", "High_Blues"] },
    { name: "80 Total Blue Coins", jp: "青コイン合計80枚", types: ["XTotal_Blues", "High_Blues"] }
];
bingoList[15] = [
    { name: "10 NPC Blue Coins", jp: "NPCの青コイン10枚", types: ["Pianta_6", "LateP_LateS", "Noki_Early", "Fruit_Ladies", "NPC_Blues"] },
    { name: "30 Lives", jp: "残機30", types: ["X_Lives", "Pianta_Lives", "100_Lives", "LateN_Lives"] },
    { name: "35 Lives", jp: "残機35", types: ["X_Lives", "Pianta_Lives", "100_Lives", "LateN_Lives"] },
    { name: "40 Lives", jp: "残機40", types: ["X_Lives", "Pianta_Lives", "100_Lives", "LateN_Lives", "Gelato_Lives"] },
    { name: "25 Bianco Blue Coins", jp: "ビアンコヒルズの青コイン25枚", types: ["Bianco_30", "Bianco_Early", "Bianco_Blues"] },
    { name: "Bianco Shadow Mario", jp: "ビアンコヒルズのニセマリオ撃破", types: ["Bianco_Shadow", "Bianco_Late", "Bianco_Shines", "Bianco_8", "Multi_Shadow"] },
    { name: "5 Secret Shines", jp: "ヒミツステージのシャイン5枚", types: ["Secret_Shines", "Hidden_Shines", "Secret_Count", "Plaza_Secret", "Ricco_Secret", "Pianta_Secret", "Gelato_Secret"] },
    { name: "1 Pianta Hidden Shine", jp: "モンテのむらの隠しシャイン1枚", types: ["Pianta_Hidden", "Pianta_Shines", "Pianta_Lives", "LateP_LateG"] }
];
bingoList[16] = [
    { name: "Both Gold Bird Shines", jp: "金の鳥のシャインを2枚取得", types: ["Noki_Early", "Noki_Hidden", "Noki_Rocket"] },
    { name: "25 Gelato Blue Coins", jp: "マンマビーチの青コイン25枚", types: ["Gelato_Blues", "Wiggler", "Paint_Race", "LateG_LateN"] },
    { name: "20 Pianta Blue Coins", jp: "モンテのむらの青コイン20枚", types: ["Pianta_Blues", "Pianta_Late", "Pianta_Butterfly", "Pianta_Yoshi", "Pianta_Shines", "Pianta_Lives"] },
    { name: "Pianta Shadow Mario", jp: "モンテのむらのニセマリオ撃破", types: ["Pianta_Late", "Pianta_Shadow", "Pianta_8", "Pianta_Lives", "Pianta_Yoshi", "Pianta_6", "LateP_LateS", "LateP_LateG", "Pianta_Rocket", "Pianta_Secret", "NPC_Blues"] },
    { name: "6 Boss Shines", jp: "ボス6体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss"] },
    { name: "20 Sirena Blue Coins", jp: "シレナビーチの青コイン20枚", types: ["Sirena_Early", "Sirena_Blues", "Sirena_20"] },
    { name: "Ricco Shadow Mario", jp: "リコハーバーのニセマリオ撃破", types: ["Ricco_Shadow", "Ricco_Late", "Ricco_Shines", "Ricco_8", "Ricco_Turbo"] },
    { name: "Ricco 8 Shine", jp: "リコハーバーストーリー8", types: ["Ricco_8", "Ricco_Late", "Ricco_Yoshi", "Ricco_Shines", "2EP_8", "Ricco_Turbo", "Ricco_Secret"] }
];
bingoList[17] = [
    { name: "3 Rocket Nozzle Unlocks", jp: "ロケットノズル3つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Noki_Rocket", "Three_Rockets", "Pianta_Rocket"] },
    { name: "5 Unique Boss Shines", jp: "ボス5種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss", "Pianta_6", "Unique_Gelato"] },
    { name: "12 Delfino Shines (With Blue Trades)", jp: "ドルピックでシャイン12枚(青換金可)", types: ["Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza", "Pianta_8", "Plaza_Secret", "Plaza_Rocket", "LateS_Plaza", "Noki_100s"] },
    { name: "6 Pinna Shines", jp: "ピンナパークのシャイン6枚", types: ["Pinna_Yoshi", "Pinna_Butterfly", "Pinna_6", "Pinna_Hoverless", "Pinna_Shines", "Four_Rockets"] },
    { name: "Bianco 8 Shine", jp: "ビアンコヒルズストーリー8", types: ["Bianco_Shadow", "Bianco_Late", "Bianco_Yoshi", "Bianco_Shines", "Bianco_8", "2EP_8", "Sirena_Late"] },
    { name: "Defeat All 3 Gooper Blooper Bosses", jp: "ボスゲッソーを3体全て倒す", types: ["Noki_Early", "XBoss_Shines", "Ricco_6", "Ricco_Shadow", "Sirena_Late"] },
    { name: "100 Noki Coin Shine", jp: "マーレのいりえの100枚コイン", types: ["Noki_100s", "Noki_20"] }
];
bingoList[18] = [
    { name: "1 Shine From Each Level", jp: "各ステージからシャインを1枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Single_Mix_Up"] },
    { name: "2 Bianco Hidden Shines", jp: "ビアンコヒルズの隠しシャイン2枚", types: ["Bianco_Hidden", "Bianco_Late", "Blue_Bird", "Bianco_Yoshi", "Bianco_Shines"] },
    { name: "2 Shines From 5 Levels", jp: "5つのステージからシャイン2枚ずつ取得", types: ["Mix_Up", "Plaza_Mix_Up", "Single_Mix_Up"] },
    { name: "2 Turbo Nozzle Unlocks", jp: "ターボノズル2つ解放", types: ["Gelato_Turbo", "Turbo_Nozzle", "Bianco_Turbo", "Ricco_Turbo", "Sirena_Late"] },
    { name: "7 Blue Bird Blue Coins", jp: "青い鳥の青コイン7枚", types: ["Blue_Bird"] },
    { name: "25 Pianta Blue Coins", jp: "モンテのむらの青コイン25枚", types: ["Pianta_Blues", "Pianta_30", "Pianta_Shines", "Pianta_Lives", "Sirena_Late", "Pianta_Butterfly"] }
];
bingoList[19] = [
    { name: "2 Shadow Mario Shines", jp: "ニセマリオ2体撃破", types: ["Shadow_Mario", "Bianco_Shadow", "Gelato_Shadow", "Ricco_Shadow", "Pianta_Shadow", "Shadow_Plaza", "Shadow_Mix_Up"] },
    { name: "Three 100 Coin Shines", jp: "100枚コインのシャイン3枚", types: ["X100_Coins", "Bianco_100s", "Ricco_100s", "Gelato_100s", "Pinna_100s", "Sirena_100s", "Noki_100s", "Secret_100s", "100_Lives"] },
    { name: "2 Piantissimo Shines", jp: "モンテマンレース2つ", types: ["Paint_Race", "Wiggler", "Pinna_Paint"] },
    { name: "5 Shines from 3 Levels", jp: "3つのステージからシャイン5枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Single_Mix_Up"] },
    { name: "5 Sirena Shines", jp: "シレナビーチのシャイン5枚", types: ["Sirena_5", "Sirena_Yoshi"] },
    { name: "6 Hidden Shines", jp: "隠しシャイン6枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Pianta_Hidden", "Secret_Shines", "Hidden_Plaza"] }
];
bingoList[20] = [
    { name: "Pianta 8 Shine", jp: "モンテのむらストーリー8", types: ["Pianta_8", "Pianta_Shadow", "Pianta_6", "Pianta_Shines", "Pinna_Shadow", "Gelato_Shadow", "2EP_8", "LateP_LateG", "Pianta_Late", "NPC_Blues"] },
    { name: "25 Shines", jp: "シャイン25枚", types: ["Total_Shines", "X_Lives", "Slow_Awful"] },
    { name: "4 Shines From 4 Levels", jp: "4つのステージからシャイン4枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Single_Mix_Up"] },
    { name: "Pinna Shadow Mario", jp: "ピンナパークのニセマリオ撃破", types: ["Pinna_Shadow", "Pinna_6", "Pinna_Shines", "Four_Rockets"] },
    { name: "9 Shines From 1 Level", jp: "任意の1ステージからシャイン9枚取得（ドルピックタウン以外）", types: ["Ricco_8", "Pianta_Lives", "Bianco_8", "Gelato_8", "Pinna_8", "Pianta_8", "9_S", "Single_Mix_Up"] },
    { name: "Enter 10 Pipes AND Collect their Shines", jp: "10回土管に入りその先でシャイン回収", types: ["Pianta_8", "Sirena_5", "Pianta_Shadow", "Pianta_6", "LateP_LateS", "NPC_Blues"] }
];
bingoList[21] = [
    { name: "Gelato Shadow Mario", jp: "マンマビーチのニセマリオ撃破", types: ["Gelato_Late", "Gelato_5", "Gelato_Shadow", "Sirena_8", "Gelato_8", "Noki_Paint", "Plaza_G8", "Multi_Shadow", "LateG_Noki", "Slow_Awful", "Gelato_Yoshi", "Unique_Gelato"] },
    { name: "7 Red Coin Shines", jp: "赤コインのシャイン7枚", types: ["Red_Shines"] },
    { name: "Ride Yoshi in Bianco", jp: "ビアンコヒルズのヨッシーに乗る", types: ["Bianco_Yoshi", "Bianco_8", "Bianco_30", "Ricco_Shadow", "Noki_Paint"] },
    { name: "9 Blue Coins from Enemies", jp: "敵から青コイン9枚", types: ["Blue_Enemies", "Ricco_Blues"] },
    { name: "Both Bell Shines", jp: "ベルのシャインを2枚取得", types: ["Plaza_Shines", "Plaza_Yoshi", "Pinna_6", "No_Clip"] },
    { name: "Lighthouse Shine", jp: "灯台シャイン", types: ["Plaza_Shines", "Plaza_Yoshi", "Pinna_6", "No_Clip"] },
    { name: "Lily Pad Shine (No Fruit Clipping)", jp: "毒川のシャイン取得（果物壁抜け禁止）", types: ["Plaza_Shines", "Plaza_Yoshi", "No_Clip"] }
];
bingoList[22] = [
    { name: "2 Sirena Hidden Shines", jp: "シレナビーチの隠しシャイン2枚", types: ["Sirena_Hidden", "Sirena_Late", "Sirena_5", "Three_Rockets"] },
    { name: "2 Pinna Hidden Shines", jp: "ピンナパークの隠しシャイン2枚", types: ["Pinna_Hidden", "Pinna_Late", "Pinna_Shines", "Turbo_Nozzle"] },
    { name: "Sirena 3 NO Clipping", jp: "シレナ3すり抜けバグ禁止", types: ["Sirena_Late", "Pinna_Yoshi", "Three_Rockets", "Sirena_Yoshi", "No_Clip"] },
    { name: "27 Shines", jp: "シャイン27枚", types: ["Total_Shines", "X_Lives", "Slow_Awful"] },
    { name: "4 Noki Shines", jp: "マーレのいりえのシャイン4枚", types: ["Noki_Late", "Slow_Awful"] },
    { name: "10 Shines From 1 Level", jp: "任意の1ステージからシャイン10枚取得（ドルピックタウン以外）", types: ["Ricco_8", "Pianta_Lives", "Bianco_8", "Gelato_8", "Pinna_8", "9_S", "Single_Mix_Up", "Secret_Count", "Pianta_Late"] }
];
bingoList[23] = [
    { name: "Pinna 8 Shine", jp: "ピンナパークストーリー8", types: ["Pinna_8", "Pinna_Late", "Pinna_Shines", "Gelato_8", "2EP_8", "Pinna_Paint"] },
    { name: "King Boo Shine", jp: "ボステレサ撃破", types: ["Sirena_5", "Sirena_Late", "Sirena_8", "Sirena_Boss", "Pianta_Shadow", "LateP_LateS", "Three_Rockets"] },
    { name: "8 Shines from 2 Levels", jp: "2つのステージからシャイン8枚ずつ取得", types: ["Shadow_Mario", "Shadow_Plaza", "Ricco_8", "Bianco_8", "Gelato_8", "Pinna_8", "9_S"] },
    { name: "Gelato 8 Shine", jp: "マンマビーチストーリー8", types: ["Gelato_8", "Gelato_Shadow", "Gelato_5", "Plaza_G8", "2EP_8", "Noki_Paint", "LateP_LateG", "LateG_Noki", "Sirena_8", "Gelato_Lives", "Gelato_Secret", "Gelato_Yoshi"] },
    { name: "2 Pianta Hidden Shines", jp: "モンテのむらの隠しシャイン2枚", types: ["Pianta_Late", "Pianta_Hidden", "Pianta_8", "Pianta_Shines", "9_S", "Low_Reds", "Pianta_Lives", "Pianta_Shadow", "Two_Rockets", "LateP_LateS", "Pianta_Secret"] }
];
bingoList[24] = [
    { name: "6 Secret Shines", jp: "ヒミツステージのシャイン6枚", types: ["Secret_Shines", "Secret_Count", "Plaza_Secret", "Ricco_Secret"] },
    { name: "Sirena Shadow Mario", jp: "シレナビーチのニセマリオ撃破", types: ["Sirena_Shadow", "Sirena_Late", "Rocket_Nozzle", "Multi_Shadow", "Bianco_Yoshi", "Slow_Awful", "LateP_LateS", "LateS_Plaza"] },
    { name: "4 Blue Coins from Butterflies", jp: "蝶の青コイン4枚", types: ["Pinna_Butterfly", "Blue_Bird", "Pianta_Butterfly"] },
    { name: "All 30 Blue Coins from a Single Level", jp: "1ステージから青コイン30枚取得", types: ["Ricco_30", "Bianco_30", "Pinna_30", "Pianta_30", "Blue_30", "Secret_Count", "Pinna_6"] },
    { name: "Ride Yoshi in 3 Levels", jp: "3ステージでヨッシーに乗る（ドルピックタウン以外）", types: ["Pianta_6", "Pianta_Yoshi", "X_Lives", "Plaza_Shines", "5_Bosses", "Three_Yoshi"] },
    { name: "8 Red Coin Shines", jp: "赤コインのシャイン8枚", types: ["Red_Shines"] }
];
bingoList[25] = [
    { name: "Eel Shine", jp: "ウナギ撃破（マーレ4）", types: ["Noki_Late", "LateN_Lives"] },
    { name: "Ride Yoshi in Gelato", jp: "マンマビーチのヨッシーに乗る", types: ["X_Lives", "LateP_LateG", "Ricco_Late", "Slow_Awful"] },
    { name: "4 Rocket Nozzle Unlocks", jp: "ロケットノズル4つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Four_Rockets", "Three_Rockets", "Plaza_Rocket", "Gelato_Yoshi"] },
    { name: "Sirena 8 Shine", jp: "シレナビーチストーリー8", types: ["Sirena_8", "Sirena_Late", "Paint_Race", "2EP_8", "Blue_Bird", "LateP_LateS", "LateS_Plaza", "Slow_Awful"] },
    { name: "25 Noki Blue Coins", jp: "マーレのいりえの青コイン25枚", types: ["Noki_Late", "Noki_Blues", "LateG_LateN"] },
    { name: "3 Turbo Nozzle Unlocks", jp: "ターボノズル3つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Noki_Rocket", "Three_Rockets", "Pianta_Rocket", "Gelato_Turbo", "Turbo_Nozzle", "Bianco_Turbo", "Ricco_Turbo", "Sirena_Late"] }
];
