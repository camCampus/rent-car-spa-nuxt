import {defineStore} from "pinia";
export const useUsersStore = defineStore('users', {
    state: () => ({
        baseUrl:'http://172.10.230.30:8084',
        userList:[],
    }),
    getters: {
      listOfAllUsers: state => `list of all user ${state.userList}`
    },
    actions: {
         async getAllUsers() {
             this.userList = await $fetch('/api/users');
         },
    }
})