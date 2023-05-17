input.onButtonPressed(Button.A, function () {
    if (left) {
        radio.sendValue("drive", 1)
        left = false
    } else {
        radio.sendValue("drive", 1)
        left = true
    }
})
input.onButtonPressed(Button.AB, function () {
    if (forward) {
        radio.sendValue("drive", 0)
        forward = false
    } else {
        radio.sendValue("drive", 0)
        forward = true
    }
})
input.onButtonPressed(Button.B, function () {
    if (right) {
        radio.sendValue("drive", 2)
        right = false
    } else {
        radio.sendValue("drive", 2)
        right = true
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "drive") {
        if (value == 1) {
            bitbot.rotatems(BBRobotDirection.Left, 40, 200)
            bitbot.ledRainbow()
        } else if (value == 2) {
            bitbot.rotatems(BBRobotDirection.Right, 40, 200)
            bitbot.ledRainbow()
        } else if (value == 0) {
            bitbot.goms(BBDirection.Forward, 60, 400)
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
let right = false
let left = false
let forward = false
basic.showIcon(IconNames.Giraffe)
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
bitbot.ledClear()
forward = true
left = true
right = true
let back = true
