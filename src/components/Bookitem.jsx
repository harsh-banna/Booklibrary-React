

function Bookitem (prop){
    console.log("book is on");
    return(
        <>
        <img src={prop.prop.coverimage} alt="" />
        <h1>{prop.prop.title}</h1>
        <h2>{prop.prop.author}</h2>
        <h2>{prop.prop.category}</h2>
        <h2>{prop.prop.publisher}</h2>
        <p>{prop.prop.pages}</p>
        </>
    )
}

export default Bookitem;