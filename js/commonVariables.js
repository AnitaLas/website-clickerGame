// CSS variable
let rootVariables = document.querySelector(":root");
let cssGameFiledButtonPlayColor = "--gameFiledButtonPlayColor";
let gameFiledButtonPlayStartColor = "black";

// container main
const containerMain = "containerMain";
const containerMainSectionMenu = "containerMainSectionMenu";
const containerMainSectionActions = "containerMainSectionActions";
const containerMainSectionFooter = "containerMainSectionFooter";

// subpage HOME - game
const sectionHome = "sectionHome";
const containerMainSectionHome = "containerMainSectionHome";
const containerMainHome = "containerMainHome";
const containerGameElements = "containerGameElements";
const containerGameFiledButtonPlay = "containerGameFiled-buttonPlay";
const gameFiledButtonPlay = "buttonPlay";
const gameFiledButtonPlayGameOver = "gameFiledButtonPlayGameOver";
// const gameFiledButtonPlayGameOverTextDisplay = "You did well ! <br /><br /> game over";
const gameFiledButtonPlayGameOverTextDisplay = "You did well ! <br /> game over";
const functionNameOnclickPlayGameColor = "playClickerGame";
const functionNameOnclickPlayGameColorClickBeforeNewRound = "playClickerGameClickBeforeNewRound";


const containerGameFiledButtonMain = "containerGameFiled-buttonsMain";
const containerGameFiledButtonsMainParts = "containerGameFiled-buttonsMainParts";

const containerGameFiledButtonsMainStart = "containerGameFiled-buttonsMainStart";
const gameFiledButtonMainStart = "gameFiledButtonMainStart";
const buttonMainStart = "buttonMainStart";
const functionNameOnclickPlayGameColorStart = "playGameColorStart";
// const containerGameFiledButtonsMainStartTextDisplay = "START";
const containerGameFiledButtonsMainStartTextDisplay = "<i class=\"fa-solid fa-play fa-playGameAction\"></i>";
const gameFiledButtonMain = "gameFiledButtonMain";

const containerGameFiledButtonsMainStop = "containerGameFiled-buttonsMainStop";
const gameFiledButtonMainStop = "gameFiledButtonMainStop";
const buttonMainStop = "buttonMainStop";
const functionNameOnclickPlayGameColorStop = "playGameColorStop";
const functionNameOnclickPlayGameColorContinue = "playGameColorContinue";
// const containerGameFiledButtonsMainStopTextDisplay = "STOP";
const containerGameFiledButtonsMainStopTextDisplay = "<i class=\"fa-solid fa-stop fa-playGameAction\"></i>";
// const containerGameFiledButtonsMainStopTextDisplay = "<i class=\"fa-solid fa-pause fa-playGameAction\"></i>";
// const containerGameFiledButtonsMainContinueTextDisplay = "CONTINUE";
const containerGameFiledButtonsMainContinueTextDisplay = "<i class=\"fa-solid fa-forward fa-playGameAction\"></i>";

// statistic time
const timeKindMin = "Min";
const timeKindAvg = "Avg";
const timeKindMax = "Max";
const timeKindBest = "Best";

const containerGameFiledStatisticsTimeKind = "containerGameFiled-statisticsTimeKind";
const containerGameFiledStatisticsTimeKindParts = "containerGameFiled-statisticsTimeKindParts";
const containerGameFiledStatisticsTimeKindText = "containerGameFiled-statisticsTimeKindText";
const containerGameFiledStatisticsTimeKindGamePlay = "containerGameFiled-statisticsTimeKindGamePlay";
const gameFiledStatisticsTimeKindGamePlay = "containerGameFiled-statisticsTimeKindGamePlay";
const gameFiledStatisticsTimeKindText = "gameFiledStatisticsTimeKindText";
const statisticsTimeKindGamePlay = "statisticsTimeKindGamePlay";
const statisticsTimeKindText = "statisticsTimeKindText";
const statisticsTimeKindGamePlayDisplay = "0.0000 ??? ";
const containerGameFiledStatisticsTime = "containerGameFiled-statisticsTime";
const containerGameFiledStatisticsTimeParts = "containerGameFiled-statisticsTimeParts";

const containerGameFiledStatisticsTimeBest = "containerGameFiled-statisticsTimeBest";
const containerGameFiledStatisticsTimeBestParts = "containerGameFiled-statisticsTimeBestParts";
const containerGameFiledStatisticsTimeBestText = "containerGameFiled-statisticsTimeBestText";
const containerGameFiledStatisticsTimeBestGamePlay = "containerGameFiled-statisticsTimeBestGamePlay";
const gameFiledStatisticsTimeBestGamePlay = "containerGameFiled-statisticsTimeBestGamePlay";
const gameFiledStatisticsTimeBestText = "gameFiledStatisticsTimeBestText";
const statisticsTimeBestGamePlay = "statisticsTimeBestGamePlay";
const statisticsTimeBestGamePlayDisplay = "0.0000 ??? ";
const statisticsTimeBestText = "statisticsTimeBestText";
// const statisticsTimeBestTextDisplay = "Best";
const statisticsTimeBestTextDisplay = "<i class=\"fa-solid fa-star\"></i> &nbsp " +
    "<i class=\"fa-solid fa-clock fa-timeBest\"></i> &nbsp " +
    "<i class=\"fa-solid fa-star\"></i> ";

const containerGameFiledStatisticsTimeMin = "containerGameFiled-statisticsTimeMin";
const containerGameFiledStatisticsTimeMinParts = "containerGameFiled-statisticsTimeMinParts";
const containerGameFiledStatisticsTimeMinText = "containerGameFiled-statisticsTimeMinText";
const containerGameFiledStatisticsTimeMinGamePlay = "containerGameFiled-statisticsTimeMinGamePlay";
const gameFiledStatisticsTimeMinGamePlay = "gameFiledStatisticsTimeMinGamePlay";
const statisticsTimeMinGamePlay = "statisticsTimeMinGamePlay";
const gameFiledStatisticsTimeMinText = "gameFiledStatisticsTimeMinText";

const containerGameFiledStatisticsTimeAvg = "containerGameFiled-statisticsTimeAvg";
const containerGameFiledStatisticsTimeAvgParts = "containerGameFiled-statisticsTimeAvgParts";
const containerGameFiledStatisticsTimeAvgText = "containerGameFiled-statisticsTimeAvgText";
const containerGameFiledStatisticsTimeAvgGamePlay = "containerGameFiled-statisticsTimeAvgGamePlay";
const gameFiledStatisticsTimeAvgGamePlay = "containerGameFiled-statisticsTimeAvgGamePlay";
const gameFiledStatisticsTimeAvgText = "gameFiledStatisticsTimeAvgText";
const statisticsTimeAvgGamePlay = "statisticsTimeAvgGamePlay";
const statisticsTimeAvgGamePlayDisplay = "0.0002 ??? ";
const statisticsTimeAvgText = "statisticsTimeAvgText";
// const statisticsTimeAvgTextDisplay = "avg";
const statisticsTimeAvgTextDisplay = "<i class=\"fa-solid fa-clock fa-timeAvg\"></i> &nbsp avg";

const containerGameFiledStatisticsTimeMax = "containerGameFiled-statisticsTimeMax";
const containerGameFiledStatisticsTimeMaxParts = "containerGameFiled-statisticsTimeMaxParts";
const containerGameFiledStatisticsTimeMaxText = "containerGameFiled-statisticsTimeMaxText";
const containerGameFiledStatisticsTimeMaxGamePlay = "containerGameFiled-statisticsTimeMaxGamePlay";
const gameFiledStatisticsTimeMaxGamePlay = "containerGameFiled-statisticsTimeMaxGamePlay";
const gameFiledStatisticsTimeMaxText = "gameFiledStatisticsTimeMaxText";
const statisticsTimeMaxGamePlay = "statisticsTimeMaxGamePlay";
const statisticsTimeMaxGamePlayDisplay = "0.0003 ???";
const statisticsTimeMaxText = "statisticsTimeMaxText";
// const statisticsTimeMaxTextDisplay = "max";
const statisticsTimeMaxTextDisplay = "<i class=\"fa-solid fa-clock fa-timeMax\"></i> &nbsp max";

// class NAME
// const containerGameFiledStatisticsTime = "containerGameFiled-statisticsTime";
const containerGameFiledCommonParts = "containerGameFiled-commonParts";
const containerGameFiledCommonStaticText = "containerGameFiled-commonStaticText";
const containerGameFiledCommonGamePlayUpdate = "containerGameFiled-commonGamePlayUpdate";
const commonGamePlayTextUpdate = "commonGamePlayUpdateText";
const commonGamePlayUpdateTextTime = "commonGamePlayUpdateTextTime";
const commonStaticText = "commonStaticText";
const commonGameFiledDisplay = "commonGameFiledDisplay";

const statisticsTimeMinGamePlayDisplay = "0.0001 ???";
const statisticsTimeMinText = "statisticsTimeMinText";
// const statisticsTimeMinTextDisplay = "min";
const statisticsTimeMinTextDisplay = "<i class=\"fa-solid fa-clock fa-timeMin\"></i> &nbsp min";

// statistic fraud
const containerGameFiledStatisticsFraud = "containerGameFiled-statisticsFraud";
const containerGameFiledStatisticsFraudParts = "containerGameFiled-statisticsFraudParts";

const containerGameFiledStatisticsFraudBest = "containerGameFiled-statisticsFraudBest";
const containerGameFiledStatisticsFraudBestParts = "containerGameFiled-statisticsFraudBestParts";
const containerGameFiledStatisticsFraudBestText = "containerGameFiled-statisticsFraudBestText";
const containerGameFiledStatisticsFraudBestGamePlay = "containerGameFiled-statisticsFraudBestGamePlay";
const gameFiledStatisticsFraudBestGamePlay = "containerGameFiled-statisticsFraudBestGamePlay";
const gameFiledStatisticsFraudBestText = "gameFiledStatisticsFraudBestText";
const statisticsFraudBestGamePlay = "statisticsFraudBestGamePlay";
const statisticsFraudBestGamePlayDisplay = " ??? ";
// const statisticsFraudBestGamePlayDisplay = "<i class=\"fa-solid fa-whiskey-glass fa-fraudBest\"></i> &nbsp &nbsp";
const statisticsFraudBestText = "statisticsFraudBestText";
const statisticsFraudBestUpdateNumber = "statisticsFraudBestUpdateNumber";
// const statisticsFraudBestTextDisplay = "Best";
// const statisticsFraudBestTextDisplay = "<i class=\"fa-solid fa-mask\"></i> &nbsp sum"
// const statisticsFraudBestTextDisplay = "<i class=\"fa-solid fa-user-ninja\"></i> &nbsp sum"
// const statisticsFraudBestTextDisplay = "<i class=\"fa-solid fa-gem\"></i> &nbsp sum"
// const statisticsFraudBestTextDisplay = "<i class=\"fa-solid fa-gem\"></i> &nbsp SUM &nbsp <i class=\"fa-solid fa-gem\"></i>"
const statisticsFraudBestTextDisplay = "<i class=\"fa-solid fa-gem\"></i> &nbsp <i class=\"fa-solid fa-whiskey-glass fa-fraudBest\"></i> &nbsp <i class=\"fa-solid fa-gem\"></i>"
// const statisticsFraudBestTextDisplay = "<i class=\"fa-solid fa-person-military-rifle\"></i> &nbsp sum"

const containerGameFiledStatisticsFraudCount = "containerGameFiled-statisticsFraudCount";
const containerGameFiledStatisticsFraudCountParts = "containerGameFiled-statisticsFraudCountParts";
const containerGameFiledStatisticsFraudCountText = "containerGameFiled-statisticsFraudCountText";
const containerGameFiledStatisticsFraudCountGamePlay = "containerGameFiled-statisticsFraudCountGamePlay";
const gameFiledStatisticsFraudCountGamePlay = "containerGameFiled-statisticsFraudCountGamePlay";
const gameFiledStatisticsFraudCountText = "gameFiledStatisticsFraudCountText";
const statisticsFraudCountGamePlay = "statisticsFraudCountGamePlay";
const statisticsFraudCountText = "statisticsFraudCountText";
const fraudCountRoundUpdateSumNumber = "fraudCountRoundUpdateSumNumber";
const fraudCountRound = "fraudCountRound";
const fraudCountRoundGamePlayUpdateNumber = "fraudCountRound-";
const fraudCountRoundUpdateNumber = "fraudCountRoundUpdateNumber";
const fraudCountRoundCommon = "fraudCountRoundCommon";
// const statisticsFraudCountTextDisplay = "Count";
// const statisticsFraudCountTextDisplay = "<i class=\"fa-solid fa-gem\"></i> &nbsp sum"
// const statisticsFraudCountTextDisplay = " statistic fraud count "
// const statisticsFraudCountTextDisplay = "STATISTIC FRAUD COUNT"
const statisticsFraudCountTextDisplay = "FRAUD COUNT"
const statisticsFraudCountNumberTextDisplay = "<i class=\"fa-solid fa-whiskey-glass\"></i> &nbsp &nbsp"

// menu
const sectionMenu = "sectionMenu";
const containerSectionMenu = "containerSectionMenu";
const containerMenuMain = "containerMenuMain";
const containerMenuMainParts = "containerMenuMainParts";
const containerMenuTitleMain = "containerMenuTitleMain";
const menuTitle = "menuTitle";
const menuTitleText = "menuTitleText";
const menuTitleTextDisplay = "Clicker Game";

const containerMenuGameConfiguration = "containerMenuGameConfiguration";
const containerMenuGameConfigurationParts = "containerMenuGameConfigurationParts";
const menuGameConfigurationDisplay = "menuGameConfigurationDisplay";
const containerMenuGameConfigurationText = "containerMenuGameConfigurationText";
const menuGameConfigurationText = "menuGameConfigurationText";
const menuGameConfigurationButton = "menuGameConfigurationButton";
const menuGameConfigurationButtonCurrentNumber = "menuGameConfigurationButtonCurrentNumber";
const functionNameOnclickSetConfigurationClickNumber = "setConfigurationClickNumber";
const menuGameConfigurationButtonClickNumber = "menuGameConfigurationButtonClickNumber-";
const menuGameConfigurationButtonClickNumberGameOn = "menuGameConfigurationButtonClickNumberGameOn";
const menuGameConfigurationTextDisplay = "<i class=\"fa-solid fa-screwdriver-wrench\"></i>";
const containerMenuGameConfigurationGameKind = "containerMenuGameConfigurationGameKind";
const containerMenuGameConfigurationClickNumber = "containerMenuGameConfigurationClickNumber";
const containerMenuGameConfigurationClickNumberParts = "containerMenuGameConfigurationClickNumberParts";
const containerMenuGameConfigurationClickNumberRow0 = "containerMenuGameConfigurationClickNumber-row0";
const containerMenuGameConfigurationClickNumberPartsRow0 = "containerMenuGameConfigurationClickNumberParts-row0";
const containerMenuGameConfigurationClickNumberRow1 = "containerMenuGameConfigurationClickNumber-row1";
const containerMenuGameConfigurationClickNumberPartsRow1 = "containerMenuGameConfigurationClickNumberParts-row1";
const containerMenuGameConfigurationClickNumberPartsRow = "containerMenuGameConfigurationClickNumberParts-row";
const menuGameConfigurationClickNumberTextDisplay = "<i class=\"fa-solid fa-computer-mouse\"></i> &nbsp &nbsp"

//footer
const containerSectionFooter = "containerSectionFooter";
const containerMainFooter = "containerMainFooter";
const containerFooterAuthor = "containerFooterAuthor";
const footerAuthor = "footerAuthor";
const footerAuthorData = "Copyright &copy 2025 Anita Łaszczak";
const sectionFooter = "sectionFooter";


