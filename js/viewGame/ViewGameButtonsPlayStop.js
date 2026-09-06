import {
    isElementsExistById
} from "../common/function/commonFunctions.js";
import * as variablesGameButtons from "../common/variable/clickerGame/variablesGameButtons.js";
import {ViewGameButtonsPlay} from "./ViewGameButtonsPlay.js";

export class ViewGameButtonsPlayStop extends ViewGameButtonsPlay{


    // createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, containerGameFiledButtonsMainStartTextDisplay) {
    //     createElementButton(gameFiledButtonMainStart, buttonMainStart);
    //     setElementClassNamedAndText(buttonMainStart, variablesGameButtons.gameFiledButtonMain, containerGameFiledButtonsMainStartTextDisplay);
    // }
    //
    // createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart) {
    //     createElementDivWithTheSameIdAndClassName(variablesGameButtons.containerGameFiledButtonsMainParts, containerGameFiledButtonsMainStart);
    //     createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    // }


    createGameFieldPButtonMainStop() {
        let result = isElementsExistById(variablesGameButtons.containerGameFiledButtonsMainStop);
        if (!result) {
            this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStop, variablesGameButtons.gameFiledButtonMainStop);
            // this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.buttonMainStop, variablesGameButtons.functionNameOnclickPlayGameColorStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay)
            this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.buttonMainStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay)
        }
    }
}