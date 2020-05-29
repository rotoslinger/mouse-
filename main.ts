controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true_false) {
        mouse.setButton(MouseButton.Left, true)
        true_false = false
    } else {
        true_false = true
        mouse.setButton(MouseButton.Left, false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mouse.click(MouseButton.Left)
})
let true_false = false
let mySprite = sprites.create(img`
    b b b b b b b b b b b b b b b b
    b c b b b b b b b b b b b b c b
    b b b c 6 6 6 6 6 6 6 6 c b b b
    b b c 6 6 6 6 6 6 6 6 6 6 c b b
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b
    b b 9 6 6 6 6 6 6 6 6 6 6 9 b b
    b b 9 6 6 6 6 6 6 6 6 6 6 9 b b
    b b 6 9 6 6 6 6 6 6 6 6 9 6 b b
    b b c 6 9 9 9 9 9 9 9 9 6 c b b
    b b b c c c c c c c c c c b b b
    b c b b b b b b b b b b b b c b
    b b b b b b b b b b b b b b b b
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
true_false = false
game.onUpdate(function () {
    mouse.move(controller.dx(), controller.dy())
})
