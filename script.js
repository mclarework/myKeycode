let mainInput = document.getElementsByTagName("h1")[3]
let eventKey = document.getElementsByTagName("h1")[5]
let eventCode = document.getElementsByTagName("h1")[7]
let eventWhich = document.getElementsByTagName("h1")[9]
let youPressed = document.getElementsByTagName("h1")[2]

document.addEventListener("keypress",(event)=>{
    youPressed.textContent = `You pressed the "${event.key}" key.`
    mainInput.textContent = event.keyCode
    eventKey.textContent = event.key
    eventCode.textContent = event.code
    eventWhich.textContent = event.charCode
})