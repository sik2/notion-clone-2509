export default function EditorPage({ $target }) {
    const $page = document.createElement('div')
    $page.innerHTML = '<div>editor</div>'

    $target.appendChild($page)
}
