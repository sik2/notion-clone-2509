export default function SidebarPage({ $target }) {
    const $page = document.createElement('div')
    $page.innerHTML = '<div>sidebar</div>'

    $target.appendChild($page)
}
