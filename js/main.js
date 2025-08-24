function menu(){
    let options = prompt("1) Suma 2) Resta 3)Multiplicacion 4)Division\n"+"ingrese un numero: " )
    let num1 = parseFloat(prompt("Ingrese el primer número: "))
    let num2 = parseFloat(prompt("Ingrese el segundo número: "))

    let resultado

    switch (options) {
        case "1":
            resultado = num1 + num2;
            alert("El resultado de la suma es: " + resultado)
            break;
        case "2":
            resultado = num1 - num2;
            alert("El resultado de la resta es: " + resultado)
            break;
        case "3":
            resultado = num1 * num2;
            alert("El resultado de la multiplicación es: " + resultado)
            break;
        case "4":
            if (num2 === 0) {
                alert("No se puede dividir entre 0")
            } else {
                resultado = num1 / num2;
                alert("El resultado de la división es: " + resultado)
            }
            break;
        default:
            alert("Opción inválida")
    }
}
    


menu()
