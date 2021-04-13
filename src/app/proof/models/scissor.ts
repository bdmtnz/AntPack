import { Artifact } from "./artifact";

export class Scissor extends Artifact{
    constructor() {
        super();
        this.name = "Scissor";
        this.lost = 'Rock'
    }
}