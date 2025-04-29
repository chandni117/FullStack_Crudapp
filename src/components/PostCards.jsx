import { deleteData } from "../Api/PostApi";
export const PostCards = ({apiData, setApiData}) => {
    console.log("apidata", apiData);

    const handleDeleteData = async (id) => {
        try {
             await deleteData(id);
            setApiData(apiData.filter((prev) => prev.id !== id))
        }
        catch(error)
        {
            console.log(error);
        }
    }
    return <>
    <section className="section-post">
        <ol>
            {
                apiData.map((curElem) => {
                    const {id, title , body} = curElem;
                    return (
                        <li key={id}>
                        <p>Title: {title}</p>
                        <p>Body: {body}</p>
                        <button>Edit</button>
                        <button className="btn-delete" onClick={() => handleDeleteData(id)}>Delete</button>

                    </li>
                    )
                   
                })
            }
        </ol>

    </section>
    </>
}