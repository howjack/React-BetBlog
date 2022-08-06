import { useNavigate } from "react-router-dom"
import {PreviewProps} from "../../types/articlesProps"
import "./style.css"

export default function ArticlePreview(data: PreviewProps) {
    const navigate = useNavigate();
    return (
        <article>
            <img src={data.img? data.img : "Pixbet-logo.png"} alt={data.title} />
            <div>
                <h1>{data.title}</h1>
                <p>{data.subTitle}</p>
                <button onClick={() => { navigate(`/content/${data.id}`) }}>Leia mais</button>
            </div>
        </article>
    )
}