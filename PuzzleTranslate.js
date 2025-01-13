// Translations dictionary
const translations = {
    zh: {
        "Hi, welcome to the world of puzzle games": "嗨，欢迎来到益智游戏的世界",
        "Unlock your wisdom and explore the joy of knowledge mysteries！": "解锁你的智慧，探索知识谜题的乐趣",
        "Click image to access description": "点击游戏图片看介绍",
        "In this game, you are the driver with one mission: get home safely. Beware, the road is cursed! Stumps and oncoming cars will appear, and hitting them slows you down. Along the way, a math blessing awaits—answer questions correctly to reduce penalties or boost rewards. Now, take the wheel and explore!": "在这个游戏中，你是司机，任务是安全到家。小心，路上充满了诅咒！树桩和迎面而来的汽车会出现，撞到它们会减速。一路上还有数学祝福，回答正确问题可以减少处罚或获得奖励。现在，开车探索吧！",
        "Unable to unlock temporarily, please stay tuned": "暂时无法解锁，请继续关注",
        "The Missing Car": "迷失的汽车",
        "Play Now": "现在玩",
        "Unable":"无法解锁",
        "Contact": "联系我们",
        "Instagram": "Instagram",
        "Dream Crafter Games team. All rights reserved.": "梦想工匠游戏团队。版权所有。",
    },
    en: {
        "嗨，欢迎来到益智游戏的世界": "Hi, welcome to the world of puzzle games",
        "解锁你的智慧，探索知识谜题的乐趣": "Unlock your wisdom and explore the joy of knowledge mysteries！",
        "点击游戏图片看介绍": "Click image to access description",
        "在这个游戏中，你是司机，任务是安全到家。小心，路上充满了诅咒！树桩和迎面而来的汽车会出现，撞到它们会减速。一路上还有数学祝福，回答正确问题可以减少处罚或获得奖励。现在，开车探索吧！": "In this game, you are the driver with one mission: get home safely. Beware, the road is cursed! Stumps and oncoming cars will appear, and hitting them slows you down. Along the way, a math blessing awaits—answer questions correctly to reduce penalties or boost rewards. Now, take the wheel and explore!",
        "暂时无法解锁，请继续关注": "Unable to unlock temporarily, please stay tuned",
        "迷失的汽车": "The Missing Car",
        "现在玩": "Play Now",
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
