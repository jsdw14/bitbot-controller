control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("drive", 16)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("drive", 16)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendValue("drive", 0)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (logo_press == 0) {
        basic.showIcon(IconNames.Surprised)
        speed = 1
        radio.sendValue("speed", 1)
    }
    logo_press += 1
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendValue("drive", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("drive", 16)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendValue("drive", 2)
})
radio.onReceivedValue(function (name, value) {
    if (name == "drive") {
        if (value == 1) {
            bitbot.ledRainbow()
            if (speed == 0) {
                bitbot.rotate(BBRobotDirection.Left, 20)
            } else {
                bitbot.rotate(BBRobotDirection.Left, 50)
            }
        } else if (value == 2) {
            bitbot.ledRainbow()
            if (speed == 0) {
                bitbot.rotate(BBRobotDirection.Right, 20)
            } else {
                bitbot.rotate(BBRobotDirection.Right, 50)
            }
        } else if (value == 0) {
            bitbot.ledRainbow()
            if (speed == 0) {
                bitbot.go(BBDirection.Forward, 30)
            } else {
                bitbot.go(BBDirection.Forward, 70)
            }
        } else if (value == 8) {
            bitbot.ledRainbow()
            bitbot.go(BBDirection.Reverse, 60)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
        } else if (value == 16) {
            bitbot.stop(BBStopMode.Brake)
            bitbot.setLedColor(0xFF0000)
        }
    } else if (name == "sound") {
        if (value == 1) {
            basic.showNumber(input.acceleration(Dimension.X))
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
        }
    } else if (name == "speed") {
        speed = value
        if (value == 0) {
            basic.showIcon(IconNames.Giraffe)
        } else {
            basic.showIcon(IconNames.Surprised)
        }
    }
})
let logo_press = 0
let speed = 0
basic.showIcon(IconNames.Giraffe)
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
bitbot.ledClear()
speed = 0
logo_press = 0
bitbot.BBBias(BBRobotDirection.Left, 10)
