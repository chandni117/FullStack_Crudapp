import { useEffect, useState } from "react"
import '../App.css'
import { getData, postData } from '../Api/PostApi';
import { PostCards } from "./PostCards";

export const Form = () => {
    const [data , setData] = useState({
        title: "",
        post: ""
    });
    const [apiData, setApiData] = useState([]);

    const getPostData = async () => {
        const res = await getData();
        setApiData(res.data);
    }
    useEffect (() => {
        getPostData();
    },[])
    const handleInputChange = (e) => {
        const {name , value} = e.target;
        //console.log(e.target);
        setData((prev) => ({...prev,[name]: value }) );
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await postData(data);
            console.log("res", res);

    if (res.status === 201) {
        setApiData([...data, res.data]);
      setData({ title: "", body: "" });
    }
        }
        catch(error)
        {
            console.log(error)
        }
        
    }
    return <section>
        <section className="section-form">
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="title"></label>
                <input 
                id="title" 
                name="title"
                type="text"
                autoComplete="off"
                value={data.title}
                placeholder="Add title"
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="post"></label>
                <input id="post" 
                name="post"
                type="text"
                autoComplete="off"
                value={data.post}
                placeholder="Add post"
                onChange={handleInputChange}
                />
            </div>
                <button type="submit" >ADD</button>
        </form>
        </section>
        
        <PostCards apiData={apiData} setApiData={setApiData}/>
    </section>
}