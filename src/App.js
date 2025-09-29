import EditorPage from '../components/EditorPage.js'
import SidebarPage from '../components/SidebarPage.js'

export default function App({ $target }) {
    const initalState = []

    const editorDummyData = {
        title: '노션 만들자',
        content: '노션 만들기~',
    }

    const $listContainer = document.createElement('div')
    const $editorContainer = document.createElement('div')

    $target.appendChild($listContainer)
    $target.appendChild($editorContainer)

    const sidebarPage = new SidebarPage({
        $target: $listContainer,
        initalState: initalState,
    })
    const editorPage = new EditorPage({
        $target: $editorContainer,
        initalState: editorDummyData,
    })
}
