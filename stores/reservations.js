import {defineStore} from "pinia";
import reservationRepository from "~/repository/reservationRepository";
import vehicleRepository from "~/repository/vehicleRepository";
import {useStorage} from '@vueuse/core'
export const useReservationStore = defineStore('reservations', {
    state: () => ({
        baseUrl: 'http://172.10.230.10:80823',
        allReservations: [],
        vehiclesList: [],
        priceList: [],
        vehiclesWithPrice: [],
        userVehicleSelection:useStorage('userVehicleSelection', null, localStorage)
    }),
    actions: {
        async allReservation() {
            this.allReservations = await reservationRepository.getAllReservation()
        }
        ,async getVehiclesForDates(start, end) {
            this.vehiclesList = await reservationRepository.getForUserDates(start, end)
        },
        async getPrice() {
            this.priceList = await vehicleRepository.getVehiclesTypes();
        },
          async getVehicleWithPrice(price, vehicle) {
              vehicle.map((el) => {
                 price.map((e) => {
                    if (e["vehicleType"] === el["type"]){
                        this.vehiclesWithPrice.push(Object.assign(el, {"basePrice":e["basePrice"],"kilometerPrice":e["kilometerPrice"]}))
                    }
                })
            })
        },
        async initResa(s, e) {
            let v = await reservationRepository.getForUserDates(s, e)
            this.vehiclesList = v;
            let p = await vehicleRepository.getVehiclesTypes();
            await this.getVehicleWithPrice(p, v)
        }
    }
})