export default class vehicleRepository {
    static async getVehiclesTypes() {
        return await $fetch('/api/types')
    }

    static async getAllVehicules () {
        return await  $fetch('/api/vehicles')
    }
}