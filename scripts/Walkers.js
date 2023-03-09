import { getCities, getWalkers, getWalkerCities } from "./database.js"

const walkers = getWalkers()

const findWalkerCitiesByWalker = (walkerId) => {
    // get all the walker city bridge table objects
    const allTheWalkerCities = getWalkerCities()
    // loop through them all to find the ones for THIS particular walker we clicked on
    const matchingWalkerCityObjects = []
    for(const walkerCityObject of allTheWalkerCities){
        if(walkerCityObject.walkerId === parseInt(walkerId)){
            matchingWalkerCityObjects.push(walkerCityObject)
        }
    }

    return matchingWalkerCityObjects

}

const assignedCityNamed = (objectsWeJustFound) => {

const allTheCities = getCities()

let cityString = ""
for(const matchingObject of objectsWeJustFound){
   for(const singleCity of allTheCities){
       if(singleCity.id === matchingObject.cityId){
           cityString += ` ${singleCity.name}`
       }
   }
}
return cityString

}

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("walker")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [,walkerId] = itemClicked.id.split("--")

            /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
            */
            for (const walkerObject of walkers) {

                /*
                    Compare the primary key of each walker to the one
                    you have. As soon as you find the right one, display
                    the window alert message.
                */
                if (walkerObject.id === parseInt(walkerId)) {
                    window.alert(`${walkerObject.name} services ${walkerObject.city}`)

                    const matchingObjects = findWalkerCitiesByWalker(walkerId)

                    const stringListOfCities = assignedCityNamed(matchingObjects)

                    window.alert(`${walkerObject.name} services ${stringListOfCities}`)
                }
            }
        }
    }
)



export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walkerObject of walkers) {
    
        walkerHTML += `<li id="walker--${walkerObject.id}">${walkerObject.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

