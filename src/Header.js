import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <div className="top-menu">
            <ul>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/picture">Picture</Link>
                </li>
                <li>
                    <Link to="/video">Video</Link>
                </li>
            </ul>
        </div>
    </div>
)

export default Header