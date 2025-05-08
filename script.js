// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

const formButton = document.getElementById("formButton")

let number = 1

formButton.addEventListener("click", (event) => {
    event.preventDefault() //this stops the click from refreshing the page and deleting all the input data
    
    
    let firstName = document.getElementById("firstInput").value
    let lastName = document.getElementById("secondInput").value
    let duty = document.getElementById("thirdInput").value

    let newTableRow = document.createElement("tr")

    let numberNode = document.createElement("td")
    numberNode.innerHTML = number
    newTableRow.append(numberNode)

    let firstNameNode = document.createElement("td")
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)

    let lastNameNode = document.createElement("td")
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let dutyNode = document.createElement("td")
    dutyNode.innerHTML = duty
    newTableRow.append(dutyNode)
    //console.log(newTableRow) this showsthe user input into the console, so yay!

    document.getElementById("tBody").appendChild(newTableRow)
    //make sure this is in the function of the button so it actually works -_-
    document.getElementById("firstInput").value = ""
    document.getElementById("secondInput").value = ""
    document.getElementById("thirdInput").value = ""

    number++
})