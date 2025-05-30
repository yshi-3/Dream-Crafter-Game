// Object storing translations for the page
const translations = {
  zh: {
      "Select Language:": "选择语言：",
      "Welcome to the world of Dream-Crafter Games": "欢迎来到梦想工匠游戏的世界",
      "Challenge Game Released! Difficulty level up, pass or die, you can choose for yourself, come and try it out!":"挑战游戏发布！难度升级，通关还是死亡，你自己决定，来试试吧！",
      "Unleash the Fun, Ignite the Interest, Games for kids, Love for world--From Little Games to Big Dreams": "释放乐趣，点燃兴趣，为孩子们设计游戏，爱世界——从小小游戏到伟大梦想",
      "Version update! Now you can directly type and input information through keyboard of your phone and computer!":"版本更新！现在，您可以通过在手机和电脑的键盘上打字来直接键入和输入信息！",
      "Introduction": "介绍",
      "Our Mission": "我们的使命",
      "Our mission is to inspire children's passion for gaming and programming by creating fun, engaging, and healthy gaming experiences. We eliminate addictive games but striving to design innovative games that not only entertain, but also educate and cultivate a greater interest in exploring the function and codes behind the games. Recognizing the importance of inclusivity, we are committed to developing specialized games for children with disabilities, giving them the opportunity to embark on a fun gaming world.": 
      "我们的使命是通过创造有趣、引人入胜和健康的游戏体验，激发孩子们对游戏和编程的热情。我们消除了令人上瘾的游戏，但努力设计创新的游戏，不仅娱乐，而且教育和培养人们对探索游戏背后的功能和代码的更大兴趣。认识到包容性的重要性，我们致力于为残疾儿童开发专门的游戏，让他们有机会进入一个有趣的游戏世界",
      "Meet Our Team": "认识我们的团队",
      "Abigail has been passionate about computer science since high school, especially with a strong interest in website development and design. She loves children very much and often participates in community activities to help them, which also inspires her desire to help children grow by designing healthy and meaningful games. She bears the responsibility of team leadership and is the planner, founder, and initiator of this project. Her main job is to maintain order on the website, communicate various technical aspects, and primarily play the role of an innovative thinking leader.": 
      "Abigail从高中开始就对计算机科学充满热情，尤其是对网站开发和设计有着浓厚的兴趣。她非常爱孩子，经常参加社区活动来帮助他们，这也激发了她通过设计健康和有意义的游戏来帮助孩子成长的愿望。她承担着团队领导的责任，是本次项目的策划者，创始人和发起人，她的工作主要是维持网站的秩序以及沟通各个方面的技术，主要是一个创新思维的首脑的角色。",
      "Abigail Shi": "Abigail Shi",
      "In the past four years, Ben has accumulated rich programming experience. He also feels a strong concern for children with physical disabilities, recognizing the challenges they face. Limited physical accessibility often prevents them from fully enjoying games, and they often lack the learning resources they need. This motivates him to become the founder and technical director of this project, using his strengths to design games and mathematics to create innovative, educational, and easy to understand games.":
      "在过去的四年里，Ben积累了丰富的编程经验。他还关心以及体恤身体残疾的儿童，并了解这些儿童面临着重大挑战：有限的身体可及性往往使他们无法充分享受游戏，缺乏学习资源。这促使他成为这个项目的创始人和技术总监，利用他的优势设计游戏和数学，创造创新、教育和易于理解的游戏。",
      "Ben Xu": "Ben Xu",
      "Encho enjoys using block based programming such as Scratch and MakeCode Arcade, as well as coding with Python and Java. Because of her understanding ability and excellent writing skills, she serves as a game developer and text editor in the team. After understanding how children are attracted to games today, Encho believes that by making games fun, interactive, and even potentially educational, it can encourage children to spend time in a healthy way, avoid harmful games, and even teach them information in the process.":
      "Encho喜欢使用基于块的编程，如Scratch和MakeCode Arcade，以及使用Python和Java进行编码。因为理解能力和卓越的文书功底，她在团队中担任游戏开发人员和文本编辑员。在了解了当今儿童是如何被游戏吸引的之后，Encho认为，通过让游戏变得有趣、互动，甚至具有潜在的教育意义，它可以鼓励儿童以健康的方式度过时间，避免有害的游戏，甚至在这个过程中教给他们信息。",
      "Our Goal": "我们的目标",
      "Our goal is to ensure that every child, regardless of their abilities, can explore, learn, and grow through the power of playing games.": 
      "我们的目标是确保每个孩子，无论他们的能力如何，都能通过玩游戏的力量来探索、学习和成长。",
      "Our Roles": "我们的角色",
      "Game Designer": "游戏设计师",
      "Responsible for designing the core gameplay mechanics and ensuring the player's experience is engaging and fun.": 
      "负责设计核心游戏机制，确保玩家的体验引人入胜且充满乐趣。",
      "Developer": "开发者",
      "Focuses on coding, building the game's functionality, and ensuring a smooth and bug-free experience.": 
      "专注于编码，构建游戏功能，并确保流畅且无故障的体验。",
      "Artist": "艺术家",
      "Creates the visual assets, such as character designs, backgrounds, and animations to bring the game to life.": 
      "创建视觉素材，例如角色设计、背景和动画，使游戏栩栩如生。",
      "Producer": "制作人",
      "Oversees the development process, making sure that the project stays on track, within scope, and on time.": 
      "监督开发过程，确保项目按计划进行，符合范围且按时完成。",
      "&copy; 2025 Our Game Team. All rights reserved.": "&copy; 2025 我们的游戏团队。版权所有。"
  },
  en: {
      "选择语言：": "Select Language:",
      "欢迎来到梦想工匠游戏的世界": "Welcome to the world of Dream-Crafter Games",
      "释放乐趣，点燃兴趣，为孩子们设计游戏，爱世界——从小小游戏到伟大梦想": "Unleash the Fun, Ignite the Interest, Games for kids, Love for world--From Little Games to Big Dreams",
      "挑战游戏发布！难度升级，通关还是死亡，你自己决定，来试试吧！":"Challenge Game Released! Difficulty level up, pass or die, you can choose for yourself, come and try it out!",
      "版本更新！现在，您可以通过在手机和电脑的键盘上打字来直接键入和输入信息！":"Version update! Now you can directly type and input information through keyboard of your phone and computer!",
      "介绍": "Introduction",
      "我们的使命": "Our Mission",
      "我们的使命是通过创造有趣、引人入胜和健康的游戏体验，激发孩子们对游戏和编程的热情。我们消除了令人上瘾的游戏，但努力设计创新的游戏，不仅娱乐，而且教育和培养人们对探索游戏背后的功能和代码的更大兴趣。认识到包容性的重要性，我们致力于为残疾儿童开发专门的游戏，让他们有机会进入一个有趣的游戏世界": 
          "Our mission is to inspire children's passion for gaming and programming by creating fun, engaging, and healthy gaming experiences. We eliminate addictive games but striving to design innovative games that not only entertain, but also educate and cultivate a greater interest in exploring the function and codes behind the games. Recognizing the importance of inclusivity, we are committed to developing specialized games for children with disabilities, giving them the opportunity to embark on a fun gaming world.",
      "认识我们的团队": "Meet Our Team",
      "Abigail从高中开始就对计算机科学充满热情，尤其是对网站开发和网络有着浓厚的兴趣。她非常爱孩子，经常参加社区活动来帮助他们，这也激发了她通过设计健康和有意义的游戏来帮助孩子成长的愿望。她承担着团队领导的责任，是整个项目的策划者和创造者，为团队提供创新的想法和卓越的执行力。": 
      "Abigail has been passionate about computer science since high school, especially with a strong interest in website development and design. She loves children very much and often participates in community activities to help them, which also inspires her desire to help children grow by designing healthy and meaningful games. She bears the responsibility of team leadership and is the planner, founder, and initiator of this project. Her main job is to maintain order on the website, communicate various technical aspects, and primarily play the role of an innovative thinking leader",
      "Abigail Shi": "Abigail Shi",
      "在过去的四年里，Ben积累了丰富的编程经验。他还关心以及体恤身体残疾的儿童，并了解这些儿童面临着重大挑战：有限的身体可及性往往使他们无法充分享受游戏，缺乏学习资源。这促使他成为这个项目的创始人和技术总监，利用他的优势设计游戏和数学，创造创新、教育和易于理解的游戏。": 
          "In the past four years, Ben has accumulated rich programming experience. He also feels a strong concern for children with physical disabilities, recognizing the challenges they face. Limited physical accessibility often prevents them from fully enjoying games, and they often lack the learning resources they need. This motivates him to become the founder and technical director of this project, using his strengths to design games and mathematics to create innovative, educational, and easy to understand games.",
      "Ben Xu": "Ben Xu",
      "Encho Shi": "Encho Shi",
      "Encho喜欢使用基于块的编程，如Scratch和MakeCode Arcade，以及使用Python和Java进行编码。因为理解能力和卓越的文书功底，她在团队中担任游戏开发人员和文本编辑员。在了解了当今儿童是如何被游戏吸引的之后，Encho认为，通过让游戏变得有趣、互动，甚至具有潜在的教育意义，它可以鼓励儿童以健康的方式度过时间，避免有害的游戏，甚至在这个过程中教给他们信息。": "Encho enjoys using block based programming such as Scratch and MakeCode Arcade, as well as coding with Python and Java. Because of her understanding ability and excellent writing skills, she serves as a game developer and text editor in the team. After understanding how children are attracted to games today, Encho believes that by making games fun, interactive, and even potentially educational, it can encourage children to spend time in a healthy way, avoid harmful games, and even teach them information in the process.",
      "我们的目标": "Our Goal",
      "我们的目标是确保每个孩子，无论他们的能力如何，都能通过玩游戏的力量来探索、学习和成长。": 
          "Our goal is to ensure that every child, regardless of their abilities, can explore, learn, and grow through the power of playing games.",
      "我们的角色": "Our Roles",
      "游戏设计师": "Game Designer",
      "负责设计核心游戏机制，确保玩家的体验引人入胜且充满乐趣。": 
          "Responsible for designing the core gameplay mechanics and ensuring the player's experience is engaging and fun.",
      "开发者": "Developer",
      "专注于编码，构建游戏功能，并确保流畅且无故障的体验。": 
          "Focuses on coding, building the game's functionality, and ensuring a smooth and bug-free experience.",
      "艺术家": "Artist",
      "创建视觉素材，例如角色设计、背景和动画，使游戏栩栩如生。": 
          "Creates the visual assets, such as character designs, backgrounds, and animations to bring the game to life.",
      "制作人": "Producer",
      "监督开发过程，确保项目按计划进行，符合范围且按时完成。": 
          "Oversees the development process, making sure that the project stays on track, within scope, and on time.",
      "&copy; 2025 我们的游戏团队。版权所有。": "&copy; 2025 Our Game Team. All rights reserved."
  }
  };


  function selectLanguage() {
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
