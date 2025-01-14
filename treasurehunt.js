const translations = {
    en: {
        "Explore our games": "探索我们的游戏",
        "嗨，欢迎来到寻宝游戏的世界": "Hi, welcome to the world of Treasure Hunt games",
        "发现你的传奇，潜入冒险，揭开宝藏的面纱！": "Find Your Legend – Dive into the Adventure and Uncover the Treasure!!",
        "点击游戏图片看介绍": "Click image for description",
        "选择语言": "Select Language",
        "国王宣布了一个挑战：谁从地牢中救出公主并取回所有宝藏，谁将被授予爵士头衔。你急切地接受了这项任务，财富和荣耀就在眼前。但要小心，沿途潜伏的鬼魂是危险的。不惜一切代价避免它们。你的名声和荣誉的命运在等着你!": "The king has announced a challenge: whoever rescues the princess from the dungeon and retrieves all the treasures will be granted knighthood. Eagerly, you accept the task, with fortune and glory in sight. But beware—the ghosts lurking along the way are perilous. Avoid them at all costs. Your destiny of fame and honor awaits!",
        "暂时无法解锁，请继续关注": "Unable to unlock temporarily, please stay tuned", 
        "寻找宝藏": "Find Treasure",
        "无法解锁": "Unable",
        "联系我们": "Contact",
        "Instagram": "Instagram",
        "梦想工匠游戏团队。版权所有": "Dream Crafter Games team. All rights reserved."
    },
    zh: {
        "探索我们的游戏": "Explore our games",
        "Hi, welcome to the world of Treasure Hunt games": "嗨，欢迎来到寻宝游戏的世界",
        "Find Your Legend – Dive into the Adventure and Uncover the Treasure!": "发现你的传奇，潜入冒险，揭开宝藏的面纱！",
        "Unable to unlock temporarily, please stay tuned": "暂时无法解锁，请继续关注",
        "Click image for description": "点击游戏图片看介绍",
        "Select Language": "选择语言",
        "The king has announced a challenge: whoever rescues the princess from the dungeon and retrieves all the treasures will be granted knighthood. Eagerly, you accept the task, with fortune and glory in sight. But beware—the ghosts lurking along the way are perilous. Avoid them at all costs. Your destiny of fame and honor awaits!": "国王宣布了一个挑战：谁从地牢中救出公主并取回所有宝藏，谁将被授予爵士头衔。你急切地接受了这项任务，财富和荣耀就在眼前。但要小心，沿途潜伏的鬼魂是危险的。不惜一切代价避免它们。你的名声和荣誉的命运在等着你!",
        "Find Treasure":"寻找宝藏",
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
