type AnyParameter = string | number | undefined

function parameterType (variable: AnyParameter) {
    return typeof variable
}

console.log(parameterType("Bananinha"))
console.log(parameterType(123))