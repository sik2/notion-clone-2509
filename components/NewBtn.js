export default function NewBtn({ $target }) {
    const $newBtn = document.createElement('button')
    $newBtn.textContent = '+ New Page'
    $newBtn.className = 'newBtn'

    $target.appendChild($newBtn)
}
