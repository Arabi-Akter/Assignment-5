// scroll function
function moveSectionByid(){
    const element = document.getElementById('ticket');
    element.scrollIntoView({ behavior: 'smooth' });
}


function play() {
    // hide everything show only the playground
    hideElementById('ticket');
    hideElementById('home-screen');
    hideElementById('final-score');
    // hideElementById('play-ground');
    showElementById('show');
}
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}