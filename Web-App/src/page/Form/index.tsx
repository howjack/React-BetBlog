import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/axios"
import { CompleteProps } from "../../types/articlesProps"

export default function Form() {
    const navigate = useNavigate()
    const [data, setData] = useState<CompleteProps>({
        title: '',
        subTitle: '',
        img: '',
        content: '',
        author: ''
    })

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        await api.post("articles", data)
        .then(() => {
            navigate("/")
        }).catch((error) => {
            throw error
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adicionar Artigo</h2>
            <div className="form-container">
                <input type="text" placeholder="Titulo" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
                <input type="text" placeholder="SubTitulo" value={data.subTitle} onChange={(e) => setData({ ...data, subTitle: e.target.value })}/>
            </div>
            <div className="form-container">
                <input type="text" placeholder="Autor" value={data.author} onChange={(e) => setData({ ...data, author: e.target.value })}/>
                <input type="text" placeholder="URL da Imagem" value={data.img} onChange={(e) => setData({ ...data, img: e.target.value })}/>
            </div>
            <div className="form-container">
                <textarea id="" rows={10} placeholder="Conteúdo" value={data.content} onChange={(e) => setData({ ...data, content: e.target.value })}/>
            </div>
            <div className="form-container">
                <button>Adicionar</button>
            </div>
        </form>
    )
}