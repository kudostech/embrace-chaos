let ran = Math.random()
let r = ran * 255
let g = ran * 255 - 50
let b = ran * 255 + 50

let backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
$("body").css("background", "rgb(" + r + "," + g + "," + b + ")")

let textColor = "rgb(" + (255 - r) + "," + (255 - g) + "," + (255 - b) + ")"
$("h1").css("color", textColor)
$("h2").css("color", textColor)
$("h3").css("color", textColor)
$("h4").css("color", textColor)
$("h5").css("color", textColor)
$("h6").css("color", textColor)

let paragraph = "rgb(" + (r - 255) + "," + (g - 255) + "," + (b - 255) + ")"
$("legend").css("color", textColor)
$("label").css("color", textColor)
$("p").css("color", textColor)

$("button").css("background", textColor)
$("button").css("color", backgroundColor)
$("button").css("height", r % 100+ "rem")

$("button").css("width", r % 100+ "rem")

