const item = document.querySelector('.item')
const rows = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const row of rows) {
    row.addEventListener('dragover', dragover)
    row.addEventListener('dragenter', dragenter)
    row.addEventListener('dragleave', dragleave)
    row.addEventListener('drop', drop)

}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(()=>event.target.classList.add('hide', 0))
}

function dragend (event) {
    event.target.classList.remove('hold', 'hide')
    event.target.className = 'item'
}

function dragover (event) {
    event.preventDefault()
}
function dragenter (event) {
    event.target.classList.add('hovered')

}
function dragleave (event) {
    event.target.classList.remove('hovered')

}
function drop (event) {
    event.target.append(item)
    event.target.classList.remove('hovered')
}