export class ControllerButtonStop {

    constructor(viewButtonStop, actionButtonStop) {
        this.viewButtonStop = viewButtonStop;
        this.actionButtonStop = actionButtonStop;
    }

    createButtonsStop() {
        this.viewButtonStop.createGameFieldPButtonMainStop();
    }

    setConfigurationAfterClick(){
        this.viewButtonStop.setIconColorAfterClick();
    }

    setConfigurationBeforeClick(){
        this.viewButtonStop.setIconColorBeforeClick();
    }
}