input.onButtonPressed(Button.A, function () {
    note += -1
    if (note < 0) {
        _if = 0
    }
})
input.onButtonPressed(Button.B, function () {
    note += 1
    if (note > 7) {
        note = 7
    }
})
let note = 0
let _if = 0
_if = 4
while (true) {
    if (true) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (note == 1) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (note == 2) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (note == 3) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (note == 4) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (note == 5) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (note == 6) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
}
basic.forever(function () {
	
})
