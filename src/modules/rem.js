document.documentElement.style.fontSize = 
    document.documentElement.clientWidth / 3.75 + "px"

window.onresize = () => {
    document.documentElement.style.fontSize = 
        document.documentElement.clientWidth / 3.75 + "px"
}