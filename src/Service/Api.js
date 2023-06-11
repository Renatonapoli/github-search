import axios from "axios"

export const dataAPI = axios.create({
  baseURL: "https://api.github.com/users/Renatonapoli",
})
