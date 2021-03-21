

document.addEventListener("keydown", function(event) {
    let aud = document.createElement("AUDIO");
    switch (event.code) {
        case "KeyA":
            // A.play();
            aud.setAttribute("src", "aud/A.mp3");
            break;
        case "KeyS":
            // S.play();
            aud.setAttribute("src", "aud/S.mp3");
            break;
        case "KeyD":
            // D.play();
            aud.setAttribute("src", "aud/D.mp3");
            break;
        case "KeyF":
            // F.play();
            aud.setAttribute("src", "aud/F.mp3");
            break;
        case "KeyG":
            // G.play();
            aud.setAttribute("src", "aud/G.mp3");
            break;
        case "KeyH":
            // H.play();
            aud.setAttribute("src", "aud/H.mp3");
            break;
        case "KeyJ":
            // J.play();
            aud.setAttribute("src", "aud/J.mp3");
            break;
        case "KeyW":
            // J.play();
            aud.setAttribute("src", "aud/W.mp3");
            break;
        case "KeyE":
            // J.play();
            aud.setAttribute("src", "aud/E.mp3");
            break;
        case "KeyT":
            // J.play();
            aud.setAttribute("src", "aud/T.mp3");
            break;
        case "KeyY":
            // J.play();
            aud.setAttribute("src", "aud/Y.mp3");
            break;
        case "KeyU":
            // J.play();
            aud.setAttribute("src", "aud/U.mp3");
            break;
        default:
            console.log("Warning: wrong key");
            return;
    }
    aud.play();
});
