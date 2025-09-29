export default function EditorPage({ $target, initalState }) {
    this.state = initalState

    const $page = document.createElement('div')
    $page.innerHTML = `
        <input type='text' class="editorTitle" placeholder='제목없음' value=${this.state.title} />
        <textarea class="editorContent" placeholder='내용없음'>${this.state.content}</textarea>
    `

    $target.appendChild($page)
}
