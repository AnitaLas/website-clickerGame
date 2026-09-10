import {
    addEventListenerOnClickButton,
    removeEventListenerOnClickButton
} from "../../common/function/commonFunctions.js";
import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";
import * as variablesMain from "../../common/variable/main/variablesMain.js";


export class ControllerButtonClickColor {

    constructor(viewButtonClickColor, actionButtonClickColor) {
        this.viewButtonClickColor = viewButtonClickColor;
        this.actionButtonClickColor = actionButtonClickColor;
        this.onClickColor = null;
        this.buttonClickEvent = null;
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

    configureButtonClickColor() {
        this.buttonClickEvent =
            addEventListenerOnClickButton(
                variablesGameButtons.gameFiledButtonPlay,
                this.setConfiguration,
                this
            );
    }

    setGameFieldColor(colorName) {
        variablesMain.rootVariables.style.setProperty(
            variablesMain.cssGameFiledButtonPlayColor,
            colorName
        );
    }

    removeEventListenerOnClickButtonClickColor() {

        removeEventListenerOnClickButton(
            variablesGameButtons.gameFiledButtonPlay,
            this.buttonClickEvent
        );

        this.buttonClickEvent = null;
    }

    configureClickColorGameOver() {
        this.actionButtonClickColor.setConfigurationGameOver();
    }

    setGameButtonClickColorAtStart(){
        this.actionButtonClickColor.setGameButtonClickColorAtStart();
    }

    setButtonClickColorRandom(gameRandomColor){
        this.actionButtonClickColor.setButtonClickColorRandom(gameRandomColor);
    }
}