export const PostCards = ({apiData}) => {
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
                        <button className="btn-delete">Delete</button>

                    </li>
                    )
                   
                })
            }
        </ol>

    </section>
    </>
}