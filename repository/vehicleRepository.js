export default class vehicleRepository {
    static async getVehiclesTypes() {
        return await $fetch('/api/types')
    }
}