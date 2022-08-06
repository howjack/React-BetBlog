import { Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {
    return (
        <nav>
            <section>
                <h1><Link to={"/"}>Bet<strong>BLOG</strong></Link></h1>
                <ul>
                    <li><Link to={"/form"}>Adicionar</Link></li>
                </ul>
            </section>
        </nav>
    )
}