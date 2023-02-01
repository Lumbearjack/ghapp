import { DialogRef, DIALOG_DATA } from "@angular/cdk/dialog";
import { Component, Inject } from "@angular/core";
import { GameManager, gameManager } from "src/app/game/businesslogic/GameManager";
import { ScenarioData } from "src/app/game/model/data/ScenarioData";

@Component({
    selector: 'ghs-section-dialog',
    templateUrl: './section-dialog.html',
    styleUrls: ['./section-dialog.scss']
})
export class SectionDialogComponent {

    gameManager: GameManager = gameManager;

    constructor(@Inject(DIALOG_DATA) public sectionData: ScenarioData, private dialogRef: DialogRef) { }

    addSection() {
        gameManager.stateManager.before("addSection", this.sectionData.index, "data.section." + this.sectionData.name, "data.edition." + this.sectionData.edition);
        gameManager.scenarioManager.addSection(this.sectionData);
        gameManager.stateManager.after();
        this.dialogRef.close(true);
    }

    cancel() {
        this.dialogRef.close(false);
    }
}