export default class vehicleRepository {
    static async getVehicles() {
        return await $fetch('/api/vehicles')
    }
}