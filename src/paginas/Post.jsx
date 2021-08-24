import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { busca } from "../api/api"
import '../assets/css/post.css'

export default function Post(){

    let history = useHistory()
    const {id} = useParams()
    const [ post, setPost ] = useState({})
    
    useEffect(() => {
        busca(`/posts/${id}`, setPost)
        .catch(() => {
            history.push('/404')
        })
    }, [id])

    console.log(post);

    return (
        <main className="container flex flex--center">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="cartao__texto">{post.body}</p>
            </article>
        </main>
    )
}