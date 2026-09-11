import {ViewButtons} from "./ViewButtons.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";


export class ViewButtonStart extends ViewButtons {

    createGameFieldPButtonMainStart() {
        this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStart, variablesGameButtons.gameFiledButtonMainStart);
        this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStart, variablesGameButtons.buttonMainStart, variablesGameButtons.containerGameFiledButtonsMainStartTextDisplay)
    }

    setIconColorAfterClick() {
        this.setConfigurationButtonsAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }

    setIconColorBeforeClick() {
        console.log("removeIconColorAfterClick start")
        this.setConfigurationButtonsBeforeClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }
}