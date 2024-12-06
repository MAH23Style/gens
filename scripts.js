const num = document.getElementById('temp');

function showRNG() {
    document.getElementById('rngStuff').style.display = "block";
}

function getNumber() {
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    num.innerHTML = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function closeRNG() {
    document.getElementById('rngStuff').style.display = "none";
}

function showCoinFlip() {
    document.getElementById('coinStuff').style.display = "block";
}

function flipCoin() {
    const coinOptions = ["https://www.clker.com/cliparts/7/d/e/0/139362185558690588heads-hi.png", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dc61c80b-e2ae-4da0-801e-4c84d7cf91b7/dc7egby-23b23f3b-db59-4e3e-b57f-8b1ada105126.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RjNjFjODBiLWUyYWUtNGRhMC04MDFlLTRjODRkN2NmOTFiN1wvZGM3ZWdieS0yM2IyM2YzYi1kYjU5LTRlM2UtYjU3Zi04YjFhZGExMDUxMjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QemscS80d_Q7Ir-sDQ26ZAiiTHIJHbRAzTgpW1tDvsw"];
    const random = Math.floor(Math.random() * coinOptions.length);
    const result = coinOptions[random];
    document.getElementById('coinResult').src = result;
}

function closeCoin() {
    document.getElementById('coinStuff').style.display = "none";
}

function showColor() {
    document.getElementById('colorStuff').style.display = "block";
}

function getRandomColor() {
    const colorValue = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    const colorPar = document.getElementById('randomColor');
    colorPar.innerHTML = colorValue;
    colorPar.style.backgroundColor = colorValue;
}