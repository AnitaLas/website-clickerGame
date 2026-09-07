export class ControllerButtonClickColor {

    constructor(viewButtonClickColor, actionButtonClickColor) {
        this.viewButtonClickColor = viewButtonClickColor;
        this.actionButtonClickColor = actionButtonClickColor;
    }

    createGameButtonsView() {
        this.viewButtonClickColor.createViewGameButtonPlay();
    }
}