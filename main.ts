input.onPinPressed(TouchPin.P0, function () {
    radio.sendValue("drive", 0)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    radio.sendValue("drive", 10)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    radio.sendValue("drive", 11)
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendValue("drive", 2)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendValue("drive", 1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "drive") {
        bitbot.ledRainbow()
        if (value == 1) {
            bitbot.rotate(BBRobotDirection.Left, 40)
            bitbot.ledRotate()
        } else if (value == 2) {
            bitbot.rotate(BBRobotDirection.Right, 40)
            bitbot.ledRotate()
        } else if (value == 0) {
            bitbot.go(BBDirection.Forward, 60)
            bitbot.ledRotate()
        } else if (value == 10) {
            bitbot.go(BBDirection.Reverse, 60)
            bitbot.setLedColor(0x00FF00)
        } else if (value == 11) {
            bitbot.stop(BBStopMode.Brake)
            bitbot.setLedColor(0xFF0000)
        }
    } else if (name == "lights") {
        if (value == 0) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
        }
    }
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    radio.sendValue("lights", 0)
})
basic.showIcon(IconNames.Giraffe)
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
