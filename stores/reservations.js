import {defineStore} from "pinia";
import reservationRepository from "~/repository/reservationRepository";
import vehicleRepository from "~/repository/vehicleRepository";

export const useReservationStore = defineStore('reservations', {
    state: () => ({
        baseUrl: 'http://172.10.230.10:80823',
        vehiclesList: [],
        priceList: [],
        vehiclesWithPrice: []
    }),
    actions: {
        async getVehiclesForDates(start, end) {
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