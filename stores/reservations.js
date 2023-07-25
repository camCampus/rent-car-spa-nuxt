import {defineStore} from "pinia";
import reservationRepository from "~/repository/reservationRepository";
export const useReservationStore = defineStore('reservations', {
    state: () => ({
        baseUrl:'http://172.10.230.10:80823',
        vehiclesList:[],
    }),
    actions: {
        async getVehiclesForDates(start, end) {
            this.vehiclesList = await reservationRepository.getForUserDates(start, end)
        }
    }
})