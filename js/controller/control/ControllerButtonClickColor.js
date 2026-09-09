import {addEventListenerOnClickButton} from "../../common/function/commonFunctions.js";
import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";


export class ControllerButtonClickColor {

    constructor(viewButtonClickColor, actionButtonClickColor) {
        this.viewButtonClickColor = viewButtonClickColor;
        this.actionButtonClickColor = actionButtonClickColor;
        this.onClickColor = null;
    }

    setOnClickColor(onClickColor) {
        this.onClickColor = onClickColor;
    }

    createGameButtonsView() {
        this.viewButtonClickColor.createViewGameButtonPlay();
    }

    setConfiguration(event) {

        // console.log("button click color for fraud");

        if (this.onClickColor) {
            this.onClickColor();
        }
    }

    configureButtonClickColor(){
        addEventListenerOnClickButton(
            variablesGameButtons.gameFiledButtonPlay,
            this.setConfiguration,
            this
        );
    }

    configureClickColorGameOver(){
        this.actionButtonClickColor.setConfigurationGameOver();
    }
}