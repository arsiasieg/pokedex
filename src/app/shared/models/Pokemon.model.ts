export class Pokemon {
    public id: string
    public name : string
    public url : string
    public description : string
    public sound : string
    public type: string[]

    constructor(id: string, name: string, url: string, description: string, sound: string, type: string[]){
        this.id = id
        this.name = name
        this.url = url
        this.description = description
        this.sound = sound
        this.type = type
    }
}