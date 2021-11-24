function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide");

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll");

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
};

function checkFields(event) {
    const valueToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]

    const isEmpty = valueToCheck.find(function (value) {
        
        const checkIfIsString = typeof event.target[value].value === "string";
        const checkIfIsempty = !event.target[value].value.trim();

        if (checkIfIsString && checkIfIsempty) {
            return true;
        }
    })

    if(isEmpty){
        event.preventDefault();
        alert("Por favor preencha todos os campos");
    }

}