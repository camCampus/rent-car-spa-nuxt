export default class userRepository {
    static async getUsers() {
        return await $fetch('/api/users')
    }

    static async getUserById(id) {
        return await $fetch('/api/users/'+ id)
    }

}