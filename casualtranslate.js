    // Translations dictionary
    const translations = {
        zh: {
            "Hi, welcome to the world of casual games": "嗨，欢迎来到休闲游戏的世界",
            "Kick Back, Relax, and Let the Fun Unfold": "放松身心，让乐趣尽情展开",
            "Click image for description": "点击游戏图片看介绍",
            "Collect all the fruits! Each fruit has a different speed, position, and score. Your task is to collect all the fruits within the specified time, go kill the fruits!": "收集所有水果！每个水果的速度、位置和分数都不同。您的任务是在规定时间内收集所有水果，去消灭这些水果吧！",
            "Unable to unlock temporarily, please stay tuned": "暂时无法解锁，请继续关注",
            "This is a game for tennis enthusiasts! Among them, you will have opponents hitting balls at different speeds. Can you see if your skills and reactions can catch these balls? Is your movement speed fast enough?":"这个是一个网球爱好者的游戏！其中你会有对手打出不一样速度的球，看你的技术和反应是否可以接到这些球呢？你的移动速度是否够快呢？",
            "Tennis Competition":"网球比赛",
            "This is a simple little game without any obstacles. Please capture ghosts as quickly as possible within the designated time.":"这是一个简单的小游戏，没有任何障碍，请你在规定时间以最快的速度捕捉幽灵.",
            "Ghost Warrior":"幽灵杀手",
            "The Fruit Killer": "水果杀手",
            "Step into the webbed feet of a heroic goose in this quirky and fast-paced arcade-style game! Your mission? Save lives by catching falling “exploding fruits” before they hit the ground. The gameplay is straightforward: move your goose to catch as many exploding fruits as possible within a 20-second time limit.": 
            "在这个古怪而快节奏的街机风格游戏中，踏入一只英雄鹅的蹼足！你的任务？在掉落的“爆炸水果”落地之前抓住它们，拯救生命。游戏玩法很简单：在20秒内移动你的鹅，抓住尽可能多的爆炸水果。",
            "Be a Goose, Eat a Bomb": "做一只鹅，吃炸弹",
            "Unable":"无法解锁",
            "Contact": "联系我们",
            "Instagram": "Instagram",
            "Dream Crafter Games team. All rights reserved.": "梦想工匠游戏团队。版权所有。",
        },
        en: {
            "嗨，欢迎来到休闲游戏的世界": "Hi, welcome to the world of casual games",
            "放松身心，让乐趣尽情展开": "Kick Back, Relax, and Let the Fun Unfold",
            "点击游戏图片看介绍": "Click image for description",
            "网球比赛":"Tennis Competition",
            "这个是一个网球爱好者的游戏！其中你会有对手打出不一样速度的球，看你的技术和反应是否可以接到这些球呢？你的移动速度是否够快呢？":"This is a game for tennis enthusiasts! Among them, you will have opponents hitting balls at different speeds. Can you see if your skills and reactions can catch these balls? Is your movement speed fast enough?",
            "幽灵杀手":"Ghost Warrior",
            "这是一个简单的小游戏，没有任何障碍，请你在规定时间以最快的速度捕捉幽灵.":"This is a simple little game without any obstacles. Please capture ghosts as quickly as possible within the designated time.",
            "收集所有水果！每个水果的速度、位置和分数都不同。您的任务是在规定时间内收集所有水果，去消灭这些水果吧！": "Collect all the fruits! Each fruit has a different speed, position, and score. Your task is to collect all the fruits within the specified time, go kill the fruits!",
            "暂时无法解锁，请继续关注": "Unable to unlock temporarily, please stay tuned",
            "水果杀手": "The Fruit Killer",
            "在这个古怪而快节奏的街机风格游戏中，踏入一只英雄鹅的蹼足！你的任务？在掉落的“爆炸水果”落地之前抓住它们，拯救生命。游戏玩法很简单：在20秒内移动你的鹅，抓住尽可能多的爆炸水果。": "Step into the webbed feet of a heroic goose in this quirky and fast-paced arcade-style game! Your mission? Save lives by catching falling “exploding fruits” before they hit the ground. The gameplay is straightforward: move your goose to catch as many exploding fruits as possible within a 20-second time limit.",
            "做一只鹅，吃炸弹": "Be a Goose, Eat a Bomb",
            "Unable":"Unable",
            "联系我们": "Contact",
            "梦想工匠游戏团队。版权所有。": "Dream Crafter Games team. All rights reserved.",
        },
    };

    // Function to change the language
    function changeLanguage() {
        const selectedLanguage = document.getElementById("language-select").value;
        const elements = document.querySelectorAll("[id], .game-description, .game-link, h2, p, footer p, label, a");

        elements.forEach((element) => {
            const originalText = element.innerText.trim();
            if (translations[selectedLanguage] && translations[selectedLanguage][originalText]) {
                element.innerText = translations[selectedLanguage][originalText];
            } else if (translations.en[originalText]) {
                element.innerText = translations.en[originalText];
            }
        });
    }
