export default class reservationRepository {
    static async getForUserDates(start, end) {
        return await $fetch('/api/reservations/AviaibleVehicles' + '/?dateDebut=' + start + '&dateFin=' + end)
    }

    static async getAllReservation() {
        return await $fetch('/api/reservations')
    }

    static async createReservation(reservation) {
        return await $fetch('/api/reservations', {
            method: "POST",
            body: reservation
        })
    }

    static async getReservationById(id) {
        return await $fetch('/api/reservations/' + id)
    }

    static async reservationLicenseIdUpdate(license, id){
        return await $fetch('/api/reservations/user/license', {
            method: "PUT",
            body: {
                "id":id,
                "licenseId":license
            }
        })
    }
}