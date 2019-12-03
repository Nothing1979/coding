const render = () => {

    let data = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]

    let current = 0

    let divBoxContainer = document.createElement("div")

    for(let i = 0; i < data.length / 3; i++) {

        let divBoxRow = document.createElement("div")
        divBoxRow.setAttribute("class", "box-row")

        for(let j = 0; j < 3; j++) {

            if(current < data.length) {

                let divBox = document.createElement("div")
                divBox.setAttribute("class", "box")
                divBox.setAttribute("onclick", "select(this)")
                let divText = document.createTextNode(data[current])
                divBox.appendChild(divText)

                divBoxRow.appendChild(divBox)

                current++

            }

        }

        let divBoxExtra = document.createElement("div")
        divBoxExtra.setAttribute("class", "extra")
        divBoxRow.appendChild(divBoxExtra)

        let divBoxClear = document.createElement("div")
        divBoxClear.setAttribute("class", "box-clear")

        divBoxContainer.appendChild(divBoxRow)
        divBoxContainer.appendChild(divBoxClear)
    }

    document.getElementById("container").appendChild(divBoxContainer)

}

const select = (_this) => {

    let elements = document.getElementById("container").getElementsByClassName("box-row")

    _this.parentElement.classList.add("active")

}

render()