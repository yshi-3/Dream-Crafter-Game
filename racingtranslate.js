const translations = {
    en: {
        "嗨，欢迎来到竞速游戏的世界": "Hi, welcome to the world of racing games",
        "提高你的速度，感受兴奋，并争取胜利！": "Improve your speed, feel the excitement, and strive towards victory!",
        "点击游戏图片看介绍": "Click image for description",
        "作为一条鲨鱼，你有机会在一个养满无数小鱼的池塘里大快朵颐。但要小心，这个机会中隐藏着一个威胁：一个鬼魂在池塘里游荡！你的目标是在时间用完之前吃饱，但如果你遇到鬼魂，它会偷走你的猎物。所以，潜入水中，捕鱼，躲避鬼魂，开始你的海洋之旅吧！": "As a shark, you have the chance to feast in a pond teeming with endless small fish. But beware—hidden within this opportunity lies a threat: a ghost roams the pond! Your goal is to eat your fill before time runs out, but if you encounter the ghost, it will steal your catch. So, dive in, catch fish, dodge the ghost, and begin your journey to the ocean!",
        "你是一名正在巡逻的城市守护者。 城市被怪物包围，您必须将它们击倒。 不过你的枪似乎出了点问题，只有当你正确回答箭头的方向时，你的射击才能击中怪物，否则就会打偏。 面对每只怪物，您只有一次射击机会，射击后，您必须向前移动。 杀死怪物并获得分数。 但是，当你撞上怪物时，你就会失去一条命并失去分数。坚守你的职责，保护城市！":"You are a city guardian on patrol. The city is surrounded by monsters and you have to shoot them down. Your shot will only hit the monster if you answer the asked direction of the arrow correctly. You only get one shot at each monster you face, after that you have to move forward. Kill monsters and earn points. But when you run into a monster, you lose a life and lose points. Stick to your responsibility, protect the city!",
        "城市保卫战":"City Defense War",
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
        "You are a city guardian on patrol. The city is surrounded by monsters and you have to shoot them down. Your shot will only hit the monster if you answer the asked direction of the arrow correctly. You only get one shot at each monster you face, after that you have to move forward. Kill monsters and earn points. But when you run into a monster, you lose a life and lose points. Stick to your responsibility, protect the city!":"你是一名正在巡逻的城市守护者。 城市被怪物包围，您必须将它们击倒。 不过你的枪似乎出了点问题，只有当你正确回答箭头的方向时，你的射击才能击中怪物，否则就会打偏。 面对每只怪物，您只有一次射击机会，射击后，您必须向前移动。 杀死怪物并获得分数。 但是，当你撞上怪物时，你就会失去一条命并失去分数。坚守你的职责，保护城市！",
        "City Defense War":"城市保卫战",
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
