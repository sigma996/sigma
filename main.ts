basic.forever(function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # # #
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
    basic.pause(200)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    music.play(music.stringPlayable("- - - - - - - - ", 268), music.PlaybackMode.UntilDone)
    music.ringTone(131)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
