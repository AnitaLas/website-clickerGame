import {ActionButton} from "./ActionButton.js";
import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";

export class ActionButtonStop extends ActionButton {

    setConfigurationButtonMainGameStop() {
        this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }
}