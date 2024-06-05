const right = document.querySelector('.Right');
const left = document.querySelector('.Left');
const win = document.body;

let crashDiv = document.createElement('div')
let kickDiv = document.createElement('div')
let snareDiv = document.createElement('div')
let tomDiv = document.createElement('div')

let crash = document.createElement('img');
crash.src = "assets_drumkit/crash.png";
crashDiv.append(crash);
right.append(crashDiv);

let kick = document.createElement('img');
kick.src = "assets_drumkit/kick.png";
kickDiv.append(kick);
right.append(kickDiv)

let snare = document.createElement('img');
snare.src = "assets_drumkit/snare.png";
snareDiv.append(snare);
right.append(snareDiv)

let tom = document.createElement('img');
tom.src = "assets_drumkit/tom.png"
tomDiv.append(tom);
right.append(tomDiv)

crash.addEventListener('click', playCrash);
kick.addEventListener('click', playKick);
snare.addEventListener('click', playSnare);
tom.addEventListener('click', playTom);

win.addEventListener('keyup', (e) => {
    // console.log(e);
    switch (e.key) {
        case (e.key = 'a'):
            playCrash();
            let p1 = document.createElement('p');
            p1.innerHTML = e.key;
            crashDiv.append(p1)
            setTimeout(() => {
                p1.remove()
            }, 250)
            break;
        case (e.key = 's'):
            playKick();
            let p2 = document.createElement('p');
            p2.innerHTML = e.key;
            kickDiv.append(p2)
            setTimeout(() => {
                p2.remove()
            }, 250)
            break;
        case (e.key = 'd'):
            playSnare();
            let p3 = document.createElement('p');
            p3.innerHTML = e.key;
            snareDiv.append(p3)
            setTimeout(() => {
                p3.remove()
            }, 250)
            break;
        case (e.key = 'f'):
            playTom();
            let p4 = document.createElement('p');
            p4.innerHTML = e.key;
            tomDiv.append(p4)
            setTimeout(() => {
                p4.remove()    
            }, 250)
            break;
        default:
            console.log("kaha aa gaya")
    }

})

function playCrash() {
    let crashAudio = new Audio;
    crashAudio.src = "assets_drumkit/crash.mp3"
    crashAudio.play();
}

function playKick() {
    let kickAudio = new Audio;
    kickAudio.src = "assets_drumkit/kick.mp3"
    kickAudio.play();
}

function playSnare() {
    let snareAudio = new Audio;
    snareAudio.src = "assets_drumkit/snare.mp3"
    snareAudio.play();
}

function playTom() {
    let tomAudio = new Audio;
    tomAudio.src = "assets_drumkit/tom.mp3"
    tomAudio.play();
}