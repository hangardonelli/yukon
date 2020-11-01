import ClientInput from './ClientInput'


export default class ClientPenguin {

    constructor(client) {
        this.id = client.user.id
        this.inventory = client.inventory

        this.penguin = null // Reference to client Penguin object
        this.input = new ClientInput(this) // Input handling
    }

    get actions() {
        return this.penguin.actions
    }

    setInput(room) {
        this.input.setInput(room)
    }

}