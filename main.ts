function on_pin_pressed_p0() {
    radio.sendValue("drive", 0)
}

input.onPinPressed(TouchPin.P0, on_pin_pressed_p0)
function on_pin_pressed_p1() {
    radio.sendValue("drive", 1)
}

input.onPinPressed(TouchPin.P0, on_pin_pressed_p0)
input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    radio.sendValue("drive", 2)
})
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p8() {
    radio.sendValue("drive", 1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    bitbot.stop(BBStopMode.Brake)
    radio.sendValue("drive", 10)
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (name == "drive") {
        if (value == 1) {
            bitbot.move(BBMotor.Right, BBDirection.Forward, 60)
        } else if (value == 2) {
            bitbot.move(BBMotor.Left, BBDirection.Forward, 60)
        } else if (value == 0) {
            bitbot.move(BBMotor.Both, BBDirection.Forward, 60)
        } else if (value == 8) {
            bitbot.move(BBMotor.Both, BBDirection.Reverse, 60)
        } else {
            bitbot.stop(BBStopMode.Brake)
        }
        
    }
    
})
basic.showIcon(IconNames.Giraffe)
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
