function newImage(image, leftPosition, bottomPosition, z) {
    let object = document.createElement('img')
    object.src = image
    object.style.position = 'fixed'
    object.style.left = leftPosition + 'px'
    object.style.bottom = bottomPosition + 'px'
    object.style.zIndex = z
    document.body.append(object)
    return object
}

function newItem(image, leftPosition, bottomPosition, z) {
    let object = newImage(image, leftPosition, bottomPosition, z)

    object.addEventListener('dblclick', function() {
        object.remove()
    })
}

newImage('assets/green-character.gif', 100, 100, 1)
// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

newImage('assets/pine-tree.png', 450, 200, 1)
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

newImage('assets/tree.png', 200, 300, 1)
newImage('assets/pillar.png', 350, 100, 1)
newImage('assets/crate.png', 150, 200, 1)
newImage('assets/well.png', 500, 425, 1)

newItem('assets/sword.png', 500, 405, 1)
newItem('assets/shield.png', 165, 185, 1)
newItem('assets/staff.png', 600, 100, 1)

// bonus

function tile(image, leftPosition, bottomPosition, z, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(image, leftPosition + w*100, bottomPosition + h*100, z)
        }
    }
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, 0, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, 0, window.innerWidth/100, heightOfGrass/100)