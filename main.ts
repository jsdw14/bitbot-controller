input.onPinPressed(TouchPin.P0, function () {
    radio.sendValue("drive", 0)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("drive", 8)
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendValue("drive", 2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("drive", 16)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendValue("drive", 1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "drive") {
        if (value == 1) {
            bitbot.rotate(BBRobotDirection.Left, 40)
            bitbot.ledRainbow()
        } else if (value == 2) {
            bitbot.rotate(BBRobotDirection.Right, 40)
            bitbot.ledRainbow()
        } else if (value == 0) {
            bitbot.go(BBDirection.Forward, 60)
            bitbot.ledRainbow()
        } else if (value == 8) {
            bitbot.go(BBDirection.Reverse, 60)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
            bitbot.ledRainbow()
        } else if (value == 16) {
            bitbot.stop(BBStopMode.Brake)
            bitbot.setLedColor(0xFF0000)
        }
    }
})
basic.showIcon(IconNames.Giraffe)
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
bitbot.ledClear()
