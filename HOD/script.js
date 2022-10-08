//some elements
const races = ['Humans','Orcs','Night-Elves','High-Elves','Undead', 'Burning-Legion']
const left = document.querySelector('#left')
const right = document.querySelector('#right')

// divs for cards
function makeRaces() {
    const newRacesDiv = document.createElement('div')
    newRacesDiv.id = 'new-races-div'
    for(let race of races) {
        let newRace = document.createElement('div')
        newRace.id = race
        newRace.className = 'race-cards'
        newRace.style.display = 'None'
        newRacesDiv.appendChild(newRace)
    }
    document.querySelector('#window').appendChild(newRacesDiv)
}
makeRaces()

// geting card id's to manipulate innerHTML
const humans = document.querySelector('#Humans')
const orcs = document.querySelector('#Orcs')
const nightElves = document.querySelector('#Night-Elves')
const highElves = document.querySelector('#High-Elves')
const undead = document.querySelector('#Undead')
const burningLegion = document.querySelector('#Burning-Legion')

//manipulating inner html
humans.innerHTML = '<img id="human-img-id" class="card-img" src="https://i.pinimg.com/originals/ea/e0/4c/eae04cd69cd4fa9607c86143ea3cfd19.jpg"> <h3 id="humans" class="card-text" >Humans</h3>'
orcs.innerHTML = '<img id="orcs-img-id" class="card-img" src="https://pbs.twimg.com/media/CXaQJFrWMAARV75.jpg"> <h3 id="orcs" class="card-text" >Orcs</h3>'
nightElves.innerHTML = '<img id="night-elves-img-id" class="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6dMnLhThUkVocpgWNVZut08jfTHLXJy6xmDeaJgQ7ylEKUzAEtckhXEJiLPult1IHMk&usqp=CAU"> <h3 id="night-elves" class="card-text" >Night-Elves</h3>'
highElves.innerHTML = '<img id="high-elves-img-id" class="card-img" src="https://pbs.twimg.com/amplify_video_thumb/1438914400413487104/img/HBJcL9n1LWAT4zUn.jpg"> <h3 id="high-elves" class="card-text" >High-Elves</h3>'
undead.innerHTML = '<img id="undead-img-id" class="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IygSeFkI5MfeimkwI8LB4aRQeZJMgNVY0ZK-qN76ozFW9n4hjbrwv_XiabQ4x7fOCOM&usqp=CAU"> <h3 id="undead" class="card-text" >Undead</h3>'
burningLegion.innerHTML = '<img id="burning-legion-img-id" class="card-img" src="https://static.wikia.nocookie.net/wowwiki/images/d/d9/Illidan.png/revision/latest?cb=20140503134345"> <h3 id="burning-legion" class="card-text" >Burning-Legion</h3>'

//some arrays to slide cards
function moveCards () {
    //incomplete
let activeArr = [humans,orcs,nightElves,]
let hiddenArr = [burningLegion,undead,highElves]
let mapactiveArr = activeArr.map(i => i.style.display = 'block')
let maphiddenArr = hiddenArr.map(i => i.style.display = 'none')
right.addEventListener('click', () => {
    //incomplete
    hiddenArr.unshift(activeArr[0])
    activeArr.push(hiddenArr[3])
    activeArr.shift()
    hiddenArr.pop()
    console.log(activeArr,hiddenArr)
    mapactiveArr = activeArr.map(i => i.style.display = 'block')
    maphiddenArr = hiddenArr.map(i => i.style.display = 'none')
    })
left.addEventListener('click', () => {
    //incomplete
    hiddenArr.push(activeArr[2])
    activeArr.unshift(hiddenArr[0])
    activeArr.pop()
    hiddenArr.shift()
    console.log(activeArr,hiddenArr)
    mapactiveArr = activeArr.map(i => i.style.display = 'block')
    maphiddenArr = hiddenArr.map(i => i.style.display = 'none')
    })
}
moveCards()

//creating info box
let info = document.createElement('div')
info.className = 'info-div'
info.style.display = 'none'
document.querySelector('#window').appendChild(info)

//getting id's to access info box by clicking race text
const humansTxt = document.querySelector('#humans')
const orcsTxt = document.querySelector('#orcs')
const nightElvesTxt = document.querySelector('#night-elves')
const highElvesTxt = document.querySelector('#high-elves')
const undeadTxt = document.querySelector('#undead')
const burningLegionTxt = document.querySelector('#burning-legion')

humansTxt.addEventListener('click', () => {
    if(info.style.display == 'block') {
        info.style.display = 'none'
    } else {
        info.style.display = 'block'
        info.innerHTML = '<h1 class="box-header">Humans</h1>'
}  
})
orcsTxt.addEventListener('click', () => {
    if(info.style.display == 'block') {
        info.style.display = 'none'
    } else {
        info.style.display = 'block'
        info.innerHTML = '<h1>Orcs</h1>'
    }  
})
nightElvesTxt.addEventListener('click', () => {
    if(info.style.display == 'block') {
        info.style.display = 'none'
    } else {
        info.style.display = 'block'
        info.innerHTML = '<h1>Night Evles</h1>'
    }  
})
highElvesTxt.addEventListener('click', () => {
    if(info.style.display == 'block') {
        info.style.display = 'none'
    } else {
        info.style.display = 'block'
        info.innerHTML = '<h1>High Evles</h1>'
    }  
})
undeadTxt.addEventListener('click', () => {
    if(info.style.display == 'block') {
        info.style.display = 'none'
    } else {
        info.style.display = 'block'
        info.innerHTML = '<h1>Undead</h1>'
    }  
})
burningLegionTxt.addEventListener('click', () => {
    if(info.style.display == 'block') {
        info.style.display = 'none'
    } else {
        info.style.display = 'block'
        info.innerHTML = '<h1>Burning Legion</h1>'
    }  
})
//INCOMPLETE Version
