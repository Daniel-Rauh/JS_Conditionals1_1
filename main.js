let result
function adult() {
    let age = document.getElementById("age").value
    check(age)
    output()
}
function check(x) {
    if (x >= 18) {
        result = true
    } else {
        result = false
    }
}
function output() {
    if (result == true) {
        document.getElementById("output").innerHTML = "Volljährig"
    } else {
        document.getElementById("output").innerHTML = "Minderjährig"
    }
}