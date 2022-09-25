import {Auth} from './ds'

class DataService{
    get auth() {
        return new Auth
    }
}

export default new DataService()