/**
 *
 */
class HomeEntity extends require("@p3e/library").storage.entity.EntityIdentifier {

    constructor() {
        super();

        this.home = 'home';
    }
}

module.exports = HomeEntity;