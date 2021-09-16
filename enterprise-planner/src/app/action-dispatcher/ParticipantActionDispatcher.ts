import { BaseActionDispatcher } from "@ainosoft/appops-br-core-components/components/enterprise-grid/dist/enterprise-grid";
import { ParticipantGridComponent } from '../participant-grid/participant-grid.component';

export class ParticipantActionDispatcher extends BaseActionDispatcher {
    constructor(private participantGrid: ParticipantGridComponent) {
        super();
    }

    editAttribute(obj: {}) {
        this.participantGrid.EditAttribute(obj);
    }

}
