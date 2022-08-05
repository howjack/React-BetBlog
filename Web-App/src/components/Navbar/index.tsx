import { Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {
    return (
        <nav>
            <section>
                <h1><Link to={"/"}>PixBet{/*<strong>BLOG</strong>*/}</Link></h1>
                <ul>
                    <li><Link to={"/"}>Adicionar</Link></li>
                </ul>
            </section>
        </nav>
    )
}