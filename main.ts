input.onButtonPressed(Button.A, function () {
    Suma = 0
    Numar = 1
    for (let index = 0; index < N; index++) {
        Suma = Suma + Numar
        Numar += 1
    }
    basic.showNumber(Suma)
})
input.onButtonPressed(Button.B, function () {
    Suma = 0
    Suma = N / 2 * (N + 1)
    basic.showNumber(Suma)
})
let Numar = 0
let Suma = 0
let N = 0
N = 99
