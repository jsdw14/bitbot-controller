def on_microbit_id_button_a_evt_up():
    radio.send_value("drive", 16)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_UP,
    on_microbit_id_button_a_evt_up)

def on_microbit_id_button_ab_evt_up():
    radio.send_value("drive", 16)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_AB,
    EventBusValue.MICROBIT_BUTTON_EVT_UP,
    on_microbit_id_button_ab_evt_up)

def on_microbit_id_button_ab_evt_down():
    radio.send_value("drive", 0)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_AB,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
    on_microbit_id_button_ab_evt_down)

def my_function():
    global speed
    basic.show_icon(IconNames.SURPRISED)
    speed = 0
    radio.send_value("speed", 0)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P14,
    joystickbit.ButtonType.DOWN,
    my_function)

def on_logo_long_pressed():
    global speed, logo_press
    if logo_press == 0:
        basic.show_icon(IconNames.SURPRISED)
        speed = 1
        radio.send_value("speed", 0)
    logo_press += 1
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def my_function2():
    radio.send_value("drive", 2)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P15,
    joystickbit.ButtonType.DOWN,
    my_function2)

def on_microbit_id_button_a_evt_down():
    radio.send_value("drive", 1)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
    on_microbit_id_button_a_evt_down)

def on_microbit_id_button_b_evt_up():
    radio.send_value("drive", 16)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_BUTTON_EVT_UP,
    on_microbit_id_button_b_evt_up)

def on_microbit_id_button_b_evt_down():
    radio.send_value("drive", 2)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
    on_microbit_id_button_b_evt_down)

def on_received_value(name, value):
    global speed
    if name == "drive":
        if value == 1:
            bitbot.led_rainbow()
            if speed == 0:
                bitbot.rotate(BBRobotDirection.LEFT, 20)
            else:
                bitbot.rotate(BBRobotDirection.LEFT, 50)
        elif value == 2:
            bitbot.led_rainbow()
            if speed == 0:
                bitbot.rotate(BBRobotDirection.RIGHT, 20)
            else:
                bitbot.rotate(BBRobotDirection.RIGHT, 50)
        elif value == 0:
            bitbot.led_rainbow()
            if speed == 0:
                bitbot.go(BBDirection.FORWARD, 30)
            else:
                bitbot.go(BBDirection.FORWARD, 70)
        elif value == 8:
            bitbot.led_rainbow()
            bitbot.go(BBDirection.REVERSE, 60)
            music.play_tone(262, music.beat(BeatFraction.WHOLE))
        elif value == 16:
            bitbot.stop(BBStopMode.BRAKE)
            bitbot.set_led_color(0xFF0000)
    elif name == "sound":
        if value == 1:
            basic.show_number(input.acceleration(Dimension.X))
            music.play_sound_effect(music.builtin_sound_effect(soundExpression.giggle),
                SoundExpressionPlayMode.IN_BACKGROUND)
    elif name == "speed":
        speed = value
        if value == 0:
            basic.show_icon(IconNames.GIRAFFE)
        else:
            basic.show_icon(IconNames.SURPRISED)
radio.on_received_value(on_received_value)

def my_function3():
    global speed
    basic.show_icon(IconNames.GIRAFFE)
    speed = 1
    radio.send_value("speed", 1)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P13,
    joystickbit.ButtonType.DOWN,
    my_function3)

def my_function4():
    radio.send_value("drive", 1)
joystickbit.on_button_event(joystickbit.JoystickBitPin.P12,
    joystickbit.ButtonType.DOWN,
    my_function4)

logo_press = 0
speed = 0
basic.show_icon(IconNames.GIRAFFE)
radio.set_group(1)
bitbot.select_model(BBModel.XL)
bitbot.led_clear()
speed = 0
logo_press = 0
bitbot.bb_bias(BBRobotDirection.LEFT, 10)
joystickbit.init_joystick_bit()

def on_forever():
    pass
basic.forever(on_forever)
