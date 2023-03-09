import { getWalkers, getCities } from "./database.js"
const walkers = getWalkers()

const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ol>"


    for (const currentCity of cities){
    citiesHTML += `<li>${currentCity.name}</li>`
    }

    for (const currentWalker of walkers) {
        citiesHTML += `<li>${currentWalker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML  
    

}
