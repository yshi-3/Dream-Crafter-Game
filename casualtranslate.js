    // Translations dictionary
    const translations = {
        zh: {
            "Hi, welcome to the world of casual games": "嗨，欢迎来到休闲游戏的世界",
            "Kick Back, Relax, and Let the Fun Unfold": "放松身心，让乐趣尽情展开",
            "Click image for description": "点击游戏图片看介绍",
            "Collect all the fruits! Each fruit has a different speed, position, and score. Your task is to collect all the fruits within the specified time, go kill the fruits!": "收集所有水果！每个水果的速度、位置和分数都不同。您的任务是在规定时间内收集所有水果，去消灭这些水果吧！",
            "Unable to unlock temporarily, please stay tuned": "暂时无法解锁，请继续关注",
            "The Fruit Killer": "水果杀手",
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
