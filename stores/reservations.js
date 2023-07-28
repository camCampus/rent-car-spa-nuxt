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
        userVehicleSelection:useStorage('userVehicleSelection', null, localStorage),
        reservationId:useStorage('reservationID', null, localStorage)
    }),
    actions: {
        async getReservationList() {
            return await reservationRepository.getAllReservation()
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
        },

        async addNewResa(vehicle, startDate, endDate) {
            let resa = {
                "actualKm": 0,
                "estimateKm":0,
                "licenseId": 0,
                "locationEnd": startDate,
                "locationStart": endDate,
                "price": vehicle["price"],
                "status": "PENDING",
                "vehicleId": vehicle["registration"]
            }
            let res = await reservationRepository.createReservation(resa)
            this.reservationId = JSON.stringify(res["id"])

        },

        async getResaById() {
            return await reservationRepository.getReservationById(JSON.parse(this.reservationId))
        },

        async addLicenseIdToReservation(license) {
            try {
                const res = await reservationRepository.reservationLicenseIdUpdate(license, JSON.parse(this.reservationId))
            } catch (e) {
                console.log(e)
            }

                    }
    }
})