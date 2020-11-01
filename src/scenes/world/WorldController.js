import BaseScene from '@scenes/base/BaseScene'

import ClientPenguin from '@/world/penguin/client/ClientPenguin'
import PenguinFactory from '@/world/penguin/PenguinFactory'
import RoomFactory from '@/world/room/RoomFactory'


export default class WorldController extends BaseScene {

    constructor(key) {
        super(key)

        this.client = null
        this.room = null
    }

    init(data) {
        this.scene.launch('InterfaceController')

        this.penguinFactory = new PenguinFactory(this)
        this.roomFactory = new RoomFactory(this)

        this.joinRoom(data.room, data.users)
    }

    setClient(args) {
        this.client = new ClientPenguin(args)
    }

    joinRoom(id, users) {
        this.room = this.roomFactory.createRoom(id)

        this.room.penguins = this.penguinFactory.createPenguins(users, this.room)
    }

    addPenguin(user) {
        let penguin = this.penguinFactory.createPenguin(user, this.room)

        this.room.addPenguin(user.id, penguin)
    }

    removePenguin(id) {
        this.room.removePenguin(id)
    }

}