export class Pokemon {
    public id: string
    public name : string
    public url : string
    public description : string

    constructor(id: string, name: string, url: string, description: string){
        this.id = id
        this.name = name
        this.url = url
        this.description = description
    }
}