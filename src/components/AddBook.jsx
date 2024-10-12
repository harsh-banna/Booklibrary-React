import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link,Navigate, useNavigate } from "react-router-dom";
import { addItem } from "../utils/bookSlice";
import { useState } from "react";




function AddBook(){
    //const booksredux=useSelector(store => store.book.items);
    //console.log(booksredux,"redux part");
    const navigate=useNavigate();

    const [bookinfo, setbookinfo] = useState({
        title:"",
        category:"",
        author:"",
        publisher:"",
        pages:"",
    })


    const dispatch = useDispatch();


    //dispatch(addItem(book));

    function handleadd(e){
        const {name,value}=e.target;
        setbookinfo((prev) => {
            return {
                ...prev,[name]:value};
        });
    }
    console.log(bookinfo,"ye likha hai");

    function handlesubmit(e){
        e.preventDefault();
        dispatch(addItem(bookinfo));
        navigate("/booklist");
    }


    return(
        <>
        <h1>add book</h1>
        <form onSubmit={handlesubmit} >
           <div><input type="text" name="title" placeholder="Name Of Book" onChange={handleadd} required/></div>
           <div><input type="text" name="category" placeholder="category" onChange={handleadd} required/></div>
           <div><input type="text" name="author" placeholder="author" onChange={handleadd} required/></div>
           <div><input type="text" name="publisher" placeholder="publisher" onChange={handleadd} required/></div>
           <div><input type="number" name="pages" placeholder="pages" onChange={handleadd} required/></div>
           <button type="submit">submit</button>
        </form>
        </>
    )
}

export default AddBook;