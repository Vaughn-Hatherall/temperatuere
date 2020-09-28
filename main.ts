let Current_temperature = 0
// Created By:Vaughn Hatherall
// 
// Created on: september 28
// 
// This program runs temperature
// 
basic.forever(function () {
    Current_temperature = input.temperature()
    basic.showNumber(Current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
