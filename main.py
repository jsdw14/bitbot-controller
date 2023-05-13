def on_pin_pressed_p0():
    radio.send_value("drive", 0)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    radio.send_value("drive", 8)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    radio.send_value("drive", 2)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_button_pressed_b():
    radio.send_value("drive", 16)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    radio.send_value("drive", 1)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def on_received_value(name, value):
    if name == "drive":
        if value == 1:
            bitbot.rotate(BBRobotDirection.LEFT, 40)
            bitbot.led_rainbow()
        elif value == 2:
            bitbot.rotate(BBRobotDirection.RIGHT, 40)
            bitbot.led_rainbow()
        elif value == 0:
            bitbot.go(BBDirection.FORWARD, 60)
            bitbot.led_rainbow()
        elif value == 8:
            bitbot.go(BBDirection.REVERSE, 60)
            music.play_sound_effect(music.builtin_sound_effect(soundExpression.giggle),
                SoundExpressionPlayMode.IN_BACKGROUND)
            bitbot.led_rainbow()
        elif value == 16:
            bitbot.stop(BBStopMode.BRAKE)
            bitbot.set_led_color(0xFF0000)
radio.on_received_value(on_received_value)

basic.show_icon(IconNames.GIRAFFE)
radio.set_group(1)
bitbot.select_model(BBModel.XL)
bitbot.led_clear()