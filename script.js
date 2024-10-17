let rng = Math.floor(Math.random() * 100 + 1);
let number = document.getElementById("num");
let chance = 5

const form = document.getElementById("form");
const submit = document.getElementById("submiting");
const result = document.getElementById("result");
const retry = document.getElementById("retry");
const textChances = document.getElementById("chances")

retry.addEventListener("click", () => {
    window.location.reload()
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let playerNum = number.value

    if (playerNum >= 101){
        result.innerHTML = "Os valores vão entre 1 e 100"
    } else if (playerNum <= -1){
        result.innerHTML = "Os valores vão entre 1 e 100"
    } else {
        keepPlayer()
    }

    function keepPlayer(){
        if (playerNum == rng){
            result.innerHTML = "Parabéns, você acertou!"
            chances.style.marginLeft = "60px"
            chances.style.fontSize = "2rem"
            chances.innerHTML = "🎉🎉🎉"
        } else if (playerNum > rng) {
            result.innerHTML = "Chutou alto!"
    
            chance--
    
            if (chance == 1){
                chances.innerHTML = "Atenção, ultima chance!"
            } else if (chance == 0){
                Lost()
            } else if (chance <= -1) {
                Lost()
            }else {
                chances.innerHTML = `Você tem ${chance} chances`
            }
            
        } else if (playerNum < rng){
            result.innerHTML = "Chutou baixo!"
    
            chance--
    
            if (chance == 1){
                chances.innerHTML = "Atenção, ultima chance!"
            } else if (chance == 0){
                Lost()
            } else if (chance <= -1) {
                Lost()
            }else {
                chances.innerHTML = `Você tem ${chance} chances`
            }
        }
    }
    
    function Lost(){
        chances.innerHTML = "Você perdeu :/"

        chances.style.marginLeft = "70px"
        result.style.visibility = "hidden"
        retry.style.visibility = "visible"
    }
});