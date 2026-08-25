let goofus = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 8 . . . . . 
    . . . . . . . . . 8 . . . . . . 
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . 8 . . . . . . . . . . 
    . . . . . 8 . . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(goofus, 100, 0)
scene.cameraFollowSprite(goofus)
let map = [tilemap`level2`, tilemap`level1`]
game.onUpdate(function () {
    goofus.vy += 500
})
