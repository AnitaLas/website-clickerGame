export class ControllerGameButtonPlayStop {

    constructor(viewGameButtonsPlayStop, gameButtonsPlayStopAction) {
        this.viewGameButtonsPlayStop = viewGameButtonsPlayStop;
        this.gameButtonsPlayStopAction = gameButtonsPlayStopAction;
    }

    createButtonsStop() {

        this.viewGameButtonsPlayStop.createGameFieldPButtonMainStop();

    }

}