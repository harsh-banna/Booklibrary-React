import { useState,useEffect } from "react"
import Bookitem from "./Bookitem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Booklist(){
    const booksredux=useSelector(store => store.book.items);
    const [filteredbooks, setfilteredbooks]=useState(booksredux);
    const [search,setsearch]=useState("");

    function getbooks(input)
    {
        if(input == 'All'){
            setfilteredbooks(booksredux),
            console.log(filteredbooks,'here id');
        }else{
            const filterbooks1 = booksredux.filter((book) => 
                book.category.toLowerCase().includes(input.toLowerCase()));
                 console.log(filteredbooks,"ye");
            setfilteredbooks(filterbooks1);
        }
    }
    function handlesearch(){
        console.log(search);
        const filterbooks = booksredux.filter((book) => 
       book.title.toLowerCase().includes(search.toLowerCase()));
        console.log(filteredbooks,"ye");
        setfilteredbooks(filterbooks);
     }
    return(
        <>
        <div><div><input type="text" onChange={(e) => {setsearch(e.target.value)}} /><button onClick={handlesearch} >search</button></div>
        <div><ul><button><li onClick={()=>{getbooks("All")}}>All</li></button>
        <button><li onClick={()=>{getbooks("fictional")}}>fictional</li></button>
        <button><li onClick={()=>{getbooks("drama")}}>drama</li></button>
        </ul>
        </div>
        <div>
        </div>
        </div>
        <div className="list"> 
            {filteredbooks.map((data) => (<Link key={data.id} to={`/book/${data.title}`} ><Bookitem key= {data.id}  prop={data}/></Link>))} 
            </div>
        </>
    )
}

export default Booklist;