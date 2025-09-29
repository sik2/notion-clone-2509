import { request } from '../../util/api.js'
import NewBtn from './NewBtn.js'
import SidebarList from './SideBarList.js'

export default function SidebarPage({ $target, initalState }) {
    const $page = document.createElement('div')
    $target.appendChild($page)

    $page.classList.add('listContainer')
    const $sidebarList = new SidebarList({ $target: $page, initalState })

    this.setState = () => {
        $sidebarList.setState()
    }

    const onCreate = () => {
        request('', {
            method: 'POST',
            body: JSON.stringify({
                title: '문서 제목',
                // parent가 null이면 루트 Document가 됩니다.
                // 특정 Document에 속하게 하려면 parent에
                // 해당 Document id를 넣으세요.
                parent: null,
            }),
        })
        $sidebarList.setState()
    }

    const $newBtn = new NewBtn({ $target: $page, onCreate })
}
