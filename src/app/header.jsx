import '../index.css';

import { Link } from "react-router-dom";

export const Header = props => <>
    <div id="header">
        <Link to={ `/` } >Store</Link>
    </div>
</>;