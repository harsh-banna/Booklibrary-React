import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


function Error() {
    const err = useRouteError();
    console.log(err)

    return(
        <>
        <Link to="/"><button>back to home</button></Link>
        <h1>error occured</h1>
        <h2>oops wrong path</h2>
        <p>{err.status}</p>
        <p>{err.data}</p>
        
        </>
    )
}

export default Error;