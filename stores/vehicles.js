import {defineStore} from "pinia";
import vehicleRepository from "~/repository/vehicleRepository";
export const useVehicleStore = defineStore('vehicles', {
    state: () => ({
        baseUrl:'http://172.10.230.20:8082',
        priceList:[],
    }),
    actions: {
        async getVehiclesBasePrice() {
            this.vehicleList = await vehicleRepository.getVehiclesTypes();
        },
    }
})