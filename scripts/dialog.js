const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )

 // Show Goldfish's details when the button is clicked
 document.querySelector("#button--gold").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--gold")
        theDialog.showModal()
    }
)


    // Show Betty's details when the button is clicked
    document.querySelector("#button--betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--betty")
            theDialog.showModal()
        }
    )

    // Show Nemo's details when the button is clicked
    document.querySelector("#button--nemo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--nemo")
            theDialog.showModal()
        }
    )

    // Show Dory's details when the button is clicked
    document.querySelector("#button--dory").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dory")
            theDialog.showModal()
        }
    )
    
    // Show Dory's details when the button is clicked
    document.querySelector("#button--angler").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--angler")
            theDialog.showModal()
        }
    )


     // Show Dolly's details when the button is clicked
     document.querySelector("#button--dolly").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dolly")
        }
     )
     
    document.querySelector("#button--quint").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--quint")
            theDialog.showModal()
        }
    )
}

export default initializeDetailButtonEvents