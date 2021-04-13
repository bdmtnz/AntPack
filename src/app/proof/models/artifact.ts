export class Artifact {
    name?:string;
    lost?:string;

    win(artifact:Artifact):any{
        if(this.name == artifact.name)
            return undefined;
        return this.lost == artifact.name ? false : true;
    }
}