import type { User } from "../types/userType"

export  const getUsers =  async () : Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
}

export const addUser = async (user: User) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(user)
    })
    return await response.json()
}