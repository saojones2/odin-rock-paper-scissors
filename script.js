function getComputerChoice () {
    let randNum = Math.floor(Math.random() * 3) + 1
    let CompChoice = ""
    switch(randNum) {
        case 1:
            CompChoice = ("Rock!")
            break;
        case 2:
            CompChoice = ("Scissors!")
            break;
        default:
            CompChoice = ("Paper!");
    }

    return console.log(CompChoice)
}

getComputerChoice()