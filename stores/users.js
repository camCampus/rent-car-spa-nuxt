import {defineStore} from "pinia";
import userRepository from "~/repository/userRepository";
export const useUserStore = defineStore('users', {
    state: () => ({
        baseUrl:'http://172.10.230.30:8084',
        userList:[],

    }),
    actions: {
         async getAllUsers() {
             this.userList = await userRepository.getUsers();
         },
        async getUserById(id) {
             return await userRepository.getUserById(id)
        }
    }
})