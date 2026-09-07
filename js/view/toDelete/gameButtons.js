// function createGameFieldPButtonMain() {
//     // start and stop
//     createElementDiv(containerGameFiledButtonMain, containerGameFiledButtonsMainParts);
//     createGameFieldPButtonMainStart();
//     // createGameFieldPButtonMainStop();
// }
//
// function createGameFieldPButtonPlay() {
//     createElementButton(containerGameFiledButtonPlay, gameFiledButtonPlay);
//     setElementClassNameById(gameFiledButtonPlay, gameFiledButtonPlay);
//     // setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
// }
//
// function createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart, containerGameFiledButtonsMainStartTextDisplay) {
//     createElementButtonAndSetFunctionOnclick(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart);
//     setElementClassNamedAndText(buttonMainStart, gameFiledButtonMain, containerGameFiledButtonsMainStartTextDisplay);
// }
//
// function createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart) {
//     createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainParts, containerGameFiledButtonsMainStart);
//     createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
// }
//
// function createGameFieldPButtonMainStart() {
//     createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
//     createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart, containerGameFiledButtonsMainStartTextDisplay)
// }
//
// function createGameFieldPButtonMainStop() {
//     let result = isElementsExistById(containerGameFiledButtonsMainStop);
//     if (!result) {
//         createContainerGameFieldButtonMain(containerGameFiledButtonsMainStop, gameFiledButtonMainStop);
//         createAndConfigureGameButton(gameFiledButtonMainStop, buttonMainStop, functionNameOnclickPlayGameColorStop, containerGameFiledButtonsMainStopTextDisplay)
//     }
// }