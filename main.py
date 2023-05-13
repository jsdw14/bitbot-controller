def on_pulsed_p16_high():
    basic.show_icon(IconNames.STICK_FIGURE)
    radio.send_value("drive", 1)
pins.on_pulsed(DigitalPin.P16, PulseValue.HIGH, on_pulsed_p16_high)

def on_pin_pressed_p0():
    radio.send_value("drive", 0)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def my_function():
    radio.send_value("drive", 16)
Kitronik_Game_Controller.on_button_press(Kitronik_Game_Controller.ControllerButtonPins.FIRE2,
    Kitronik_Game_Controller.ControllerButtonEvents.DOWN,
    my_function)

def my_function2():
    radio.send_value("lights", 16)
Kitronik_Game_Controller.on_button_press(Kitronik_Game_Controller.ControllerButtonPins.FIRE2,
    Kitronik_Game_Controller.ControllerButtonEvents.UP,
    my_function2)

def on_pin_pressed_p2():
    radio.send_value("drive", 2)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_button_pressed_b():
    radio.send_value("drive", 16)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    radio.send_value("drive", 1)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def on_pulsed_p8_high():
    basic.show_icon(IconNames.STICK_FIGURE)
    radio.send_value("drive", 8)
pins.on_pulsed(DigitalPin.P8, PulseValue.HIGH, on_pulsed_p8_high)

def on_received_value(name, value):
    if name == "drive":
        if value == 1:
            bitbot.rotate(BBRobotDirection.LEFT, 40)
            bitbot.led_rotate()
        elif value == 2:
            bitbot.rotate(BBRobotDirection.RIGHT, 40)
            bitbot.led_rotate()
        elif value == 0:
            bitbot.go(BBDirection.FORWARD, 60)
            bitbot.led_rotate()
        elif value == 8:
            bitbot.go(BBDirection.REVERSE, 60)
            bitbot.set_led_color(0x00FF00)
        elif value == 16:
            bitbot.stop(BBStopMode.BRAKE)
            bitbot.set_led_color(0xFF0000)
    elif name == "lights":
        if value == 12:
            music.play_sound_effect(music.builtin_sound_effect(soundExpression.giggle),
                SoundExpressionPlayMode.IN_BACKGROUND)
            bitbot.led_rainbow()
        elif value == 16:
            bitbot.led_rainbow()
radio.on_received_value(on_received_value)

def my_function3():
    radio.send_value("lights", 12)
Kitronik_Game_Controller.on_button_press(Kitronik_Game_Controller.ControllerButtonPins.LEFT,
    Kitronik_Game_Controller.ControllerButtonEvents.CLICK,
    my_function3)

def my_function4():
    radio.send_value("drive", 8)
Kitronik_Game_Controller.on_button_press(Kitronik_Game_Controller.ControllerButtonPins.FIRE1,
    Kitronik_Game_Controller.ControllerButtonEvents.CLICK,
    my_function4)

basic.show_icon(IconNames.GIRAFFE)
radio.set_group(1)
bitbot.select_model(BBModel.XL)
bitbot.led_clear()
pins.set_events(DigitalPin.P8, PinEventType.TOUCH)
pins.set_events(DigitalPin.P16, PinEventType.TOUCH)