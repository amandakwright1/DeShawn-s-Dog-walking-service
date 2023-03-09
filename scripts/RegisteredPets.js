import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()


document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a pet <li> was clicked
        */
        if (itemClicked.id.startsWith("pet")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("pet--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `petId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [,petPrimaryKey] = itemClicked.id.split("--")
//find whole pet object to get the name.
            let matchingPet=null
            /*
                Now that you have the primary key of a pet object,
                find the whole object by iterating the pet array.
            */
            for (const singlePet of pets) {

                /*
                    Compare the primary key of each walker to the one
                    you have. As soon as you find the right one, display
                    the window alert message.
                */
               
                if (parseInt(petPrimaryKey) === singlePet.id) {
                    matchingPet = singlePet
                }
            }
            //Find related walker object assigned to the pet.
            let matchingWalker = null
            for (const singleWalker of walkers){
                if (matchingPet.walkerId === singleWalker.id){
                    matchingWalker = singleWalker
                }
            }
                    window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`)
                }
            }
        
    
)


export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

