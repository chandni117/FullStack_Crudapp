import { deleteData } from "../Api/PostApi";
export const PostCards = ({apiData, setApiData}) => {
    console.log("apidata", apiData);

    const handleDeleteData = async (id) => {
        try {
            let res = await deleteData(id);
            if(res.status === 200)
            {
                setApiData(apiData.filter((prev) => prev.id !== id))
            }
            else{
                console.log("Failed to delete the post", res.status)
            }

        }
        catch(error)
        {
            console.log(error);
        }
    }
    const handleUpdateData = () => {
        try{

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
                        <button onClick={() => handleUpdateData(id)}>Edit</button>
                        <button className="btn-delete" onClick={() => handleDeleteData(id)}>Delete</button>

                    </li>
                    )
                   
                })
            }
        </ol>

    </section>
    </>
}