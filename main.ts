input.onPinPressed(TouchPin.P0, function () {
    radio.sendValue("drive", 0)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("drive", 10)
    bitbot.move(BBMotor.Both, BBDirection.Reverse, 60)
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendValue("drive", 2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("drive", 10)
    bitbot.stop(BBStopMode.Brake)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendValue("drive", 1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "drive") {
        if (value == 1) {
            bitbot.move(BBMotor.Right, BBDirection.Forward, 60)
        } else if (value == 2) {
            bitbot.move(BBMotor.Left, BBDirection.Forward, 60)
        } else if (value == 0) {
            bitbot.move(BBMotor.Both, BBDirection.Forward, 60)
        } else if (value == 10) {
            bitbot.move(BBMotor.Both, BBDirection.Reverse, 60)
        }
    }
})
basic.showIcon(IconNames.Giraffe)
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
