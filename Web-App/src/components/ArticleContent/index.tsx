import { CompleteProps } from "../../types/articlesProps";
import './style.css'

export default function ArticleContent(data: CompleteProps) {
    return (
        <>
            <div className="content-header content-padding">
                <p id="author">{data.author}</p>
                <h2>{data?.title}</h2>
                <h3>{data.subTitle}</h3>
            </div>
            <div className="content-main content-padding">
                <p>{data.content}</p>
            </div>
        </>
    )
}