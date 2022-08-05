import { useEffect, useState } from "react";
import ArticlePreview from "../../components/ArticlePreview";
import api from "../../services/axios";
import {CompleteProps} from "../../types/articlesProps";


export default function Home() {

    const [data, setData] = useState<CompleteProps[]>([])

    useEffect(() => {
        api.get("/articles")
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                throw error
            })
    }, [])

    return (
        <main className="home">
            {data.map((article, index) => {
                return (
                    <ArticlePreview
                        key={index}
                        title={article.title}
                        img={article.img}
                        subTitle={article.subTitle}
                        _id={article._id}
                    />
                )
            })}
        </main>
    )
}