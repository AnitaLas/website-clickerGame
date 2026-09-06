import * as variablesGameButtons from "../common/variable/clickerGame/variablesGameButtons.js";
import {ViewGameButtonsPlay} from "./ViewGameButtonsPlay.js";

export class ViewGameButtonsPlayStart extends ViewGameButtonsPlay{

    // createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, containerGameFiledButtonsMainStartTextDisplay) {
    //     createElementButton(gameFiledButtonMainStart, buttonMainStart);
    //     setElementClassNamedAndText(buttonMainStart, variablesGameButtons.gameFiledButtonMain, containerGameFiledButtonsMainStartTextDisplay);
    // }
    //
    // createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart) {
    //     createElementDivWithTheSameIdAndClassName(variablesGameButtons.containerGameFiledButtonsMainParts, containerGameFiledButtonsMainStart);
    //     createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    // }

    createGameFieldPButtonMainStart() {
        this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStart, variablesGameButtons.gameFiledButtonMainStart);
        this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStart, variablesGameButtons.buttonMainStart, variablesGameButtons.containerGameFiledButtonsMainStartTextDisplay)
        // this.gameButtonAction.setFunctionOnCLick(variablesGameButtons.buttonMainStart);
    }


}