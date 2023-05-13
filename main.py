def on_pin_pressed_p0():
    radio.send_value("drive", 0)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_pin_pressed_p1():
    radio.send_value("drive", 1)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_pin_pressed_p2():
    radio.send_value("drive", 2)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_pin_pressed_p8():
    radio.send_value("drive", 1)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p8)

def on_button_pressed_b():
    bitbot.stop(BBStopMode.BRAKE)
    radio.send_value("drive", 10)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    if name == "drive":
        if value == 1:
            bitbot.move(BBMotor.RIGHT, BBDirection.FORWARD, 60)
        elif value == 2:
            bitbot.move(BBMotor.LEFT, BBDirection.FORWARD, 60)
        elif value == 0:
            bitbot.move(BBMotor.BOTH, BBDirection.FORWARD, 60)
        elif value == 8:
            bitbot.move(BBMotor.BOTH, BBDirection.REVERSE, 60)
        else:
            bitbot.stop(BBStopMode.BRAKE)
radio.on_received_value(on_received_value)

basic.show_icon(IconNames.GIRAFFE)
radio.set_group(1)
bitbot.select_model(BBModel.XL)