export default class userRepository {
    static async getUsers() {
        return await $fetch('/api/users')
    }
}