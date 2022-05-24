radio.onReceivedNumber(function (receivedNumber) {
    Potato = 0
})
input.onGesture(Gesture.Shake, function () {
    if (Potato > 0) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
input.onButtonPressed(Button.AB, function () {
    Potato = randint(10, 20)
})
let Potato = 0
radio.setGroup(5555)
Potato = -1
basic.forever(function () {
    if (Potato == 0) {
        basic.showIcon(IconNames.Skull)
        soundExpression.sad.play()
    }
    if (Potato) {
        basic.clearScreen()
    }
    if (Potato > 0) {
        basic.showIcon(IconNames.Target)
        Potato += -1
    }
})
