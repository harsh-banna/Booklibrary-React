import { useParams } from "react-router-dom";
//import { Books } from "../utils/mockdata";
import { useSelector } from "react-redux";
function Book(){
    const params = useParams();
    console.log(params,"params here")

    const booksredux=useSelector(store => store.book.items);
    const book = booksredux.filter((book) => book.title == params.title);

    console.log("jj",booksredux)
    return(
        <>
         {book.map((book) => {
            return(
                <>
                <h2>{book.title}</h2>
                <h3>{book.description}</h3>
                <img src={book.coverimage} alt="" />
                <h3>{book.price}</h3>
                </>
            )
        })}
        </>
    )
}
export default Book;