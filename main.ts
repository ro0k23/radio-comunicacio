radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("fatoudiakhate")
    basic.showIcon(IconNames.Butterfly)
    basic.pause(200)
    basic.clearScreen()
})
radio.setGroup(1)
