import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ArticleContent from "../../components/ArticleContent";
import api from "../../services/axios";
import { CompleteProps } from "../../types/articlesProps";

export default function Content() {

    let { id } = useParams();
    const [data, setData] = useState<CompleteProps>()

    useEffect(() => {
        api.get(`/articles?id=${id}`)
            .then((response) => {
                setData(response.data[0])
            }).catch((error) => {
                throw error
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main className="content">
            <div className="content-container">
                <img src={data?.img? data?.img : "/blog.webp"} alt={data?.title} />
                <ArticleContent
                    title={data?.title}
                    author={data?.author}
                    content={data?.content}
                    img={data?.img}
                    subTitle={data?.subTitle}
                />
            </div>
        </main>
    )
}