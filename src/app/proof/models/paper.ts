import { Artifact } from "./artifact";

export class Paper extends Artifact{
    constructor() {
        super();
        this.name = "Paper";
        this.lost = 'Scissor';
    }
}