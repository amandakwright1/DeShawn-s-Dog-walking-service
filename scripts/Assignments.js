import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findPetWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

// Function whose responsibility is to find the CITY assigned to a walker
const findCity = (walkerObject, cities) => {
    let matchingCity = null

    for (const city of cities) {
        if (city.id === walkerObject.cityId) {
            matchingCity = city.name
        }
    }

    return matchingCity
}

// RUN THE TWO FUNCTIONS AND THROW IT ALL IN A STRING FOR EACH PET

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        
        const currentPetWalker = findPetWalker(currentPet, walkers)
        const currentPetCity = findCity(currentPetWalker, cities)
        
        
        
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }

    

    assignmentHTML += "</ul>"

    return assignmentHTML
}

