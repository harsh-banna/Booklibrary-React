import { Link } from "react-router-dom";

function Header (){

    return(
        <>
        <h1>Online library system</h1>
         <nav>
            <ul>
                <Link to="/"><li>home</li></Link>
                <Link to="/booklist"><li>booklist</li></Link>
                <Link to="/AddBook"><li>add book</li></Link>
            </ul>
         </nav>
        </>
    )
}

export default Header;