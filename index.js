homeCount = 0
guestCount = 0
homeScore = document.getElementById('home-score')
guestScore = document.getElementById('guest-score')

homeScore.textContent = homeCount
guestScore.textContent = guestCount

function homePlus1() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function homePlus2() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function homePlus3() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function guestPlus1() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestPlus2() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guestPlus3() {
    guestCount += 3
    guestScore.textContent = guestCount
}


