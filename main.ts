control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    basic.pause(6000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showNumber(randint(1, 6))
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_AB,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN
    )
})
led.setBrightness(32)
basic.showIcon(IconNames.Giraffe)
basic.pause(1000)
basic.clearScreen()
