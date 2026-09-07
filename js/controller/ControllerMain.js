export class ControllerMain {

    constructor(controllerButtonsMain, controllerGameStatisticsMain) {
        this.controllerButtonsMain = controllerButtonsMain;
        this.controllerGameStatisticsMain = controllerGameStatisticsMain;
        this.game = null;
    }

    configureStartGame() {

        this.controllerButtonsMain.setOnStart(
            () => this.startGame()
        );
    }

    startGame() {

        this.controllerButtonsMain.setConfigurationForButtons();

        const maxClicksNumber =
            this.controllerButtonsMain
                .getMaxClicksNumberSetByUser();

        this.controllerGameStatisticsMain
            .createConfigurationStatisticsFraud(maxClicksNumber);

        this.controllerGameStatisticsMain.createConfigurationStatisticsMain();


        // const game = new Game(maxClicksNumber);

    }
}