export default class reservationRepository {
    static async getForUserDates(start, end) {
        return await  $fetch('/api/reservations/AviaibleVehicles'+'/?dateDebut='+ start + '&dateFin=' + end)
    }
}