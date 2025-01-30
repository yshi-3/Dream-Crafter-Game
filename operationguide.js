const translations = {
    zh: {
        "Hi, Check for the Operation Guide first!": "嗨，请先查看游戏操作指南！",
        "Selection Operation": "选择操作",
        "Movement Operation": "移动操作",
        "Keyboard Operation": "键盘操作",
        "Contact": "联系我们",
        "Dream Crafter Games team. All rights reserved.": "梦想工匠游戏团队。版权所有。",
    },
    en: {
        "嗨，请先查看游戏操作指南！":"Hi, Check for the Operation Guide first!",
        "选择操作": "Selection Operation",
        "移动操作": "Movement Operation",
        "键盘操作": "Keyboard Operation",
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
