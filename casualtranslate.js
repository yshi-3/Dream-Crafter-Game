    // Translations dictionary
    const translations = {
        zh: {
            "Hi, welcome to the world of casual games": "嗨，欢迎来到休闲游戏的世界",
            "Kick Back, Relax, and Let the Fun Unfold": "放松身心，让乐趣尽情展开",
            "Click image for description": "点击游戏图片看介绍",
            "Collect all the fruits! Each fruit has a different speed, position, and score. Your task is to collect all the fruits within the specified time, go kill the fruits!": "收集所有水果！每个水果的速度、位置和分数都不同。您的任务是在规定时间内收集所有水果，去消灭这些水果吧！",
            "Unable to unlock temporarily, please stay tuned": "暂时无法解锁，请继续关注",
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
