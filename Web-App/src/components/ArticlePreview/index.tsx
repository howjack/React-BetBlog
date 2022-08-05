import { useNavigate } from "react-router-dom"
import {PreviewProps} from "../../types/articlesProps"
import "./style.css"

export default function ArticlePreview(data: PreviewProps) {
    const navigate = useNavigate();
    return (
        <article>
            <img src={data.img} alt={data.title} />
            <div>
                <h1>{data.title}</h1>
                <p>{data.subTitle}</p>
                <button onClick={() => { navigate(`/article/${data._id}`) }}>Leia mais</button>
            </div>
        </article>
    )
}