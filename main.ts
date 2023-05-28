joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    speed = 1
    radio.sendValue("speed", 1)
    basic.showIcon(IconNames.Surprised)
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
            bitbot.go(BBDirection.Reverse, 60)
            bitbot.setLedColor(0xFFFF00)
        } else if (value == 16) {
            bitbot.stop(BBStopMode.Brake)
            bitbot.setLedColor(0xFF0000)
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
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    speed = 0
    radio.sendValue("speed", 0)
    basic.showIcon(IconNames.Giraffe)
})
let speed = 0
basic.showIcon(IconNames.Giraffe)
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
joystickbit.initJoystickBit()
bitbot.setLedColor(0x00FF00)
speed = 0
let logo_press = 0
bitbot.BBBias(BBRobotDirection.Left, 10)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 900) {
        radio.sendValue("drive", 1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 100) {
        radio.sendValue("drive", 2)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 900) {
        radio.sendValue("drive", 0)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 100) {
        radio.sendValue("drive", 8)
    } else {
        radio.sendValue("drive", 16)
    }
})
