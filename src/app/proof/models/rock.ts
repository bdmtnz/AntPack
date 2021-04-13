import { Artifact } from "./artifact";

export class Rock extends Artifact{
    constructor() {
        super();
        this.name = "Rock";
        this.lost = 'Paper';
    }    
}