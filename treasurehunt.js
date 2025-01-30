const translations = {
    en: {
        "Explore our games": "探索我们的游戏",
        "嗨，欢迎来到寻宝游戏的世界": "Hi, welcome to the world of Treasure Hunt games",
        "发现你的传奇，潜入冒险，揭开宝藏的面纱！": "Find Your Legend - Dive into the Adventure and Uncover the Treasure!!",
        "点击游戏图片看介绍": "Click image for description",
        "选择语言": "Select Language",
        "寻找宝藏": "Find Treasure",
        "国王宣布了一个挑战：谁从地牢中救出公主并取回所有宝藏，谁将被授予爵士头衔。你急切地接受了这项任务，财富和荣耀就在眼前。但要小心，沿途潜伏的鬼魂是危险的。不惜一切代价避免它们。你的名声和荣誉的命运在等着你!": "The king has announced a challenge: whoever rescues the princess from the dungeon and retrieves all the treasures will be granted knighthood. Eagerly, you accept the task, with fortune and glory in sight. But beware—the ghosts lurking along the way are perilous. Avoid them at all costs. Your destiny of fame and honor awaits!",
        "暂时无法解锁，请继续关注": "Unable to unlock temporarily, please stay tuned", 
        "地窖：第一次遭遇": "Dungeon: The First Encounter",
        "你发现自己突然被带到了一个陌生的地牢。你唯一的选择就是收集钥匙并找到出口。不过要小心，地牢里充满了危险，一个错误的举动可能是你的最后一步。但这也是一个提高生存技能的机会。幸运的是，生活药水通常隐藏在地牢里，以帮助恢复你的健康。祝你好运，愿你逃命！":"You find yourself suddenly transported to a strange dungeon. Your only option is to collect the key and find the exit. Beware, though—the dungeon is full of dangers, and one wrong move could be your last. But it's also a chance to sharpen your survival skills. Fortunately, life potions are often hidden within the dungeon to help restore your health. Good luck, and may you escape with your life!",
        "万圣节快乐！在这个世界上，有怪物让你很难逃脱。作为一位勇敢的公主或帮助公主的人，请用你惊人的速度摆脱怪物，找到隐藏在万圣节鬼屋里的水晶！任务很刺激，我们走吧！": "Happy Halloween! In this world, there are monsters that make it difficult for you to escape. As a brave princess or someone who helps princesses, please use your amazing speed to get rid of the monsters and find the crystal hidden in the Halloween haunted house! The mission is thrilling, let's go!",
        "寻找水晶": "The Crytal Hunt",
        "无法解锁": "Unable",
        "联系我们": "Contact",
        "Instagram": "Instagram",
        "梦想工匠游戏团队。版权所有": "Dream Crafter Games team. All rights reserved."
    },
    zh: {
        "探索我们的游戏": "Explore our games",
        "Hi, welcome to the world of Treasure Hunt games": "嗨，欢迎来到寻宝游戏的世界",
        "Find Your Legend - Dive into the Adventure and Uncover the Treasure!": "发现你的传奇，潜入冒险，揭开宝藏的面纱！",
        "Unable to unlock temporarily, please stay tuned": "暂时无法解锁，请继续关注",
        "Click image for description": "点击游戏图片看介绍",
        "Select Language": "选择语言",
        "The king has announced a challenge: whoever rescues the princess from the dungeon and retrieves all the treasures will be granted knighthood. Eagerly, you accept the task, with fortune and glory in sight. But beware—the ghosts lurking along the way are perilous. Avoid them at all costs. Your destiny of fame and honor awaits!": "国王宣布了一个挑战：谁从地牢中救出公主并取回所有宝藏，谁将被授予爵士头衔。你急切地接受了这项任务，财富和荣耀就在眼前。但要小心，沿途潜伏的鬼魂是危险的。不惜一切代价避免它们。你的名声和荣誉的命运在等着你!",
        "Find Treasure":"寻找宝藏",
        "Dungeon: The First Encounter":"地窖：第一次遭遇",
        "You find yourself suddenly transported to a strange dungeon. Your only option is to collect the key and find the exit. Beware, though—the dungeon is full of dangers, and one wrong move could be your last. But it's also a chance to sharpen your survival skills. Fortunately, life potions are often hidden within the dungeon to help restore your health. Good luck, and may you escape with your life!": "你发现自己突然被带到了一个陌生的地牢。你唯一的选择就是收集钥匙并找到出口。不过要小心，地牢里充满了危险，一个错误的举动可能是你的最后一步。但这也是一个提高生存技能的机会。幸运的是，生活药水通常隐藏在地牢里，以帮助恢复你的健康。祝你好运，愿你逃命！",
        "Happy Halloween! In this world, there are monsters that make it difficult for you to escape. As a brave princess or someone who helps princesses, please use your amazing speed to get rid of the monsters and find the crystal hidden in the Halloween haunted house! The mission is thrilling, let's go!": "万圣节快乐！在这个世界上，有怪物让你很难逃脱。作为一位勇敢的公主或帮助公主的人，请用你惊人的速度摆脱怪物，找到隐藏在万圣节鬼屋里的水晶！任务很刺激，我们走吧！",
        "The Crystal Hunt": "寻找水晶",
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
