import {defineStore} from "pinia";
import reservationRepository from "~/repository/reservationRepository";
export const useReservationStore = defineStore('reservations', {
    state: () => ({
        baseUrl:'http://172.10.230.10:80823',
        resaForDate:[]
    }),
    actions: {
        async getForDate(start, end) {
            this.resaForDate = await reservationRepository.getForUserDates(start, end)
        }
    }
})