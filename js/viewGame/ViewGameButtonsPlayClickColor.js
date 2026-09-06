import {
    createElementDiv,
    createElementButton,
    setElementClassNameById,
    setElementClassNamedAndText,
    createElementDivWithTheSameIdAndClassName,
    isElementsExistById,
} from "../common/function/commonFunctions.js";

import * as variablesGameButtons from "../common/variable/clickerGame/variablesGameButtons.js";


export class ViewGameButtonsPlayClickColor {

    createViewGameButtonPlay() {
        this.createGameFieldPButtonMain();
        this.createGameFieldPButtonPlay();
    }

    createGameFieldPButtonMain() {
        // start and stop
        createElementDiv(variablesGameButtons.containerGameFiledButtonMain, variablesGameButtons.containerGameFiledButtonsMainParts);
        // this.createGameFieldPButtonMainStart();
        // createGameFieldPButtonMainStop();
    }

    createGameFieldPButtonPlay() {
        createElementButton(variablesGameButtons.containerGameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlay);
        setElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlay);
        // setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
    }

    // createContainersGameFiledButtonsMainStop() {
    //     this.createGameFieldPButtonMainStop();
    // }

    // createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, containerGameFiledButtonsMainStartTextDisplay) {
    //     createElementButton(gameFiledButtonMainStart, buttonMainStart);
    //     setElementClassNamedAndText(buttonMainStart, variablesGameButtons.gameFiledButtonMain, containerGameFiledButtonsMainStartTextDisplay);
    // }
    //
    // createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart) {
    //     createElementDivWithTheSameIdAndClassName(variablesGameButtons.containerGameFiledButtonsMainParts, containerGameFiledButtonsMainStart);
    //     createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    // }
    //
    // createGameFieldPButtonMainStart() {
    //     this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStart, variablesGameButtons.gameFiledButtonMainStart);
    //     this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStart, variablesGameButtons.buttonMainStart, variablesGameButtons.containerGameFiledButtonsMainStartTextDisplay)
    //     // this.gameButtonAction.setFunctionOnCLick(variablesGameButtons.buttonMainStart);
    // }
    //
    // createGameFieldPButtonMainStop() {
    //     let result = isElementsExistById(variablesGameButtons.containerGameFiledButtonsMainStop);
    //     if (!result) {
    //         this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStop, variablesGameButtons.gameFiledButtonMainStop);
    //         // this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.buttonMainStop, variablesGameButtons.functionNameOnclickPlayGameColorStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay)
    //         this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.buttonMainStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay)
    //     }
    // }


    // setConfigurationButtonMainGameStart() {
    //     this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    //     this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
    //     removeElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
    // }


    setConfigurationMaxClicksNumber() {
        // maxClicksNumber = maxClicksNumberSetByUser;
        // // this.setConfigurationMaxClicksNumberButtonChosen();
        // viewGameConfigurationRound.setConfigurationMaxClicksNumberButtonChosen();


        // viewGameConfigurationRound.getMaxClicksNumberSetByUser()
        // viewGameConfigurationRound.setConfigurationMaxClicksNumberButtonChosen();
    }
}