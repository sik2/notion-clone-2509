import { request } from '../util/api.js'
import NewBtn from './NewBtn.js'

export default function SidebarPage({ $target, initalState }) {
    this.state = initalState
    const $page = document.createElement('div')
    $page.classList.add('listContainer')

    this.createTreeView = (data) => {
        let str = ''
        for (const key in data) {
            if (data[key].documents.length > 0) {
                str += `
                <li class="dataList">
                    ${data[key].title}
                    <button class="addBtn">➕</button>
                    <button class="delBtn">🗑️</button>
                    <ul>${this.createTreeView(data[key].documents)}</ul>
                </li>`
            } else {
                str += `
                <li class="dataList">
                    ${data[key].title}
                    <button class="addBtn">➕</button>
                    <button class="delBtn">🗑️</button>
                    <ul>${this.createTreeView(data[key].documents)}</ul>
                </li>`
            }
        }

        return str
    }

    this.render = () => {
        $page.innerHTML = `
        <ul>
            ${this.state
                .map(
                    (document) =>
                        `<li class="dataList">
                            ${document.title}
                            <button class="addBtn">➕</button>
                            <button 
                                class="delBtn" 
                                data-id=${document.id}
                            >🗑️</button>
                        </li>
                        ${
                            document.documents.length > 0
                                ? `<ul>
                                ${this.createTreeView(document.documents)}
                            </ul>`
                                : ''
                        } 
                    `
                )
                .join('')}
        </ul>
    `
    }

    this.render()

    $target.appendChild($page)

    const $newBtn = new NewBtn({ $target: $page })

    this.setState = async () => {
        const documentList = await request('')
        this.state = documentList
        this.render()
    }

    const onDelete = async () => {
        await request(`/${id}`, {
            method: 'DELETE',
        })
        this.setState()
    }

    $page.addEventListener('click', (e) => {
        const delBtn = e.target.closest('.delbtn')

        const id = delBtn.dataset.id
        onDelete(id)
    })
}
