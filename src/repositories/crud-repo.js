class CrudRepo {
    constructor (model){
        this.model = model;
    }

    async create (data) {
        try {
            const response = await this.model.bulkCreate(data);
            return response;
        } catch (error) {
            console.log("Something went wrong while creating data in repo layer");
            throw error;
        }
    }

    async destroy (id) {
        try {
            const airport = await this.model.findByPk(id);
            await this.model.destroy({
                where: {
                    id: id
                }
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong while deleting data in repo layer");
            throw error;
        }
    }

    async update (id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            console.log("Something went wrong while updating data in repo layer");
            throw error;
        }
    }

    async get (id) {
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log("Something went wrong while fetching data in repo layer");
            throw error;
        }
    }
}

module.exports = CrudRepo;