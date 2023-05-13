input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (back) {
        radio.sendValue("drive", 8)
        back = false
        forward = false
    } else {
        radio.sendValue("drive", 16)
        back = true
    }
})
input.onButtonPressed(Button.A, function () {
    if (left) {
        radio.sendValue("drive", 1)
        left = false
    } else {
        radio.sendValue("drive", 16)
        left = true
    }
})
input.onButtonPressed(Button.AB, function () {
    if (forward) {
        radio.sendValue("drive", 0)
        forward = false
    } else {
        radio.sendValue("drive", 16)
        forward = true
    }
})
input.onButtonPressed(Button.B, function () {
    if (right) {
        radio.sendValue("drive", 2)
        right = false
    } else {
        radio.sendValue("drive", 16)
        right = true
    }
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
    } else if (name == "sound") {
        if (value == 1) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
        }
    }
})
let back = false
let forward = false
let right = false
let left = false
basic.showIcon(IconNames.Giraffe)
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
bitbot.ledClear()
left = true
right = true
forward = true
back = true
