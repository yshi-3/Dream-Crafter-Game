const translations = {
    en: {
        "嗨，欢迎来到竞速游戏的世界": "Hi, welcome to the world of racing games",
        "提高你的速度，感受兴奋，并争取胜利！": "Improve your speed, feel the excitement, and strive towards victory!",
        "点击游戏图片看介绍": "Click image for description",
        "作为一条鲨鱼，你有机会在一个养满无数小鱼的池塘里大快朵颐。但要小心，这个机会中隐藏着一个威胁：一个鬼魂在池塘里游荡！你的目标是在时间用完之前吃饱，但如果你遇到鬼魂，它会偷走你的猎物。所以，潜入水中，捕鱼，躲避鬼魂，开始你的海洋之旅吧！": "As a shark, you have the chance to feast in a pond teeming with endless small fish. But beware—hidden within this opportunity lies a threat: a ghost roams the pond! Your goal is to eat your fill before time runs out, but if you encounter the ghost, it will steal your catch. So, dive in, catch fish, dodge the ghost, and begin your journey to the ocean!",
        "暂时无法解锁，请继续关注": "Unable to unlock temporarily, please stay tuned",
        "抓鱼游戏": "The Fish Game",
        "无法解锁": "Unable",
        "联系我们": "Contact",
        "Instagram": "Instagram",
        "梦想工匠游戏团队。版权所有。": "Dream Crafter Games team. All rights reserved."
    },
    zh: {
        "Hi, welcome to the world of racing games": "嗨，欢迎来到竞速游戏的世界",
        "Improve your speed, feel the excitement, and strive towards victory!": "提高你的速度，感受兴奋，并争取胜利！",
        "Click image for description": "点击游戏图片看介绍",
        "As a shark, you have the chance to feast in a pond teeming with endless small fish. But beware—hidden within this opportunity lies a threat: a ghost roams the pond! Your goal is to eat your fill before time runs out, but if you encounter the ghost, it will steal your catch. So, dive in, catch fish, dodge the ghost, and begin your journey to the ocean!": "作为一条鲨鱼，你有机会在一个养满无数小鱼的池塘里大快朵颐。但要小心，这个机会中隐藏着一个威胁：一个鬼魂在池塘里游荡！你的目标是在时间用完之前吃饱，但如果你遇到鬼魂，它会偷走你的猎物。所以，潜入水中，捕鱼，躲避鬼魂，开始你的海洋之旅吧！",
        "Unable to unlock temporarily, please stay tuned": "暂时无法解锁，请继续关注",
        "The Fish Game": "抓鱼游戏",
        "Unable": "无法解锁",
        "Contact": "联系我们",
        "Instagram": "Instagram",
        "Dream Crafter Games team. All rights reserved.": "梦想工匠游戏团队。版权所有。"
    }
};
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
