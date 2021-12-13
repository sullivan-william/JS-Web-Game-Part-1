function newImage(image, leftPosition, bottomPosition) {
    let object = document.createElement('img')
    object.src = image
    object.style.position = 'fixed'
    object.style.left = leftPosition + 'px'
    object.style.bottom = bottomPosition + 'px'
    document.body.append(object)
    return object
}

function newItem(image, leftPosition, bottomPosition) {
    let object = newImage(image, leftPosition, bottomPosition)

    object.addEventListener('dblclick', function() {
        object.remove()
    })
}

newImage('assets/green-character.gif', 100, 100)
// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

newImage('assets/pine-tree.png', 450, 200)
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

// bonus