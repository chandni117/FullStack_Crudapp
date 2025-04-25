import { useEffect, useState } from "react"
import '../App.css'
import { getData } from '../Api/PostApi';
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
        console.log(e.target);
        setData((prev) => ({...prev,[name]: value }) );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ title: "",post: ""})
    }
    return <>
        {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={handleSubmit}>
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
                <button type="submit">ADD</button>
        </form>
        <PostCards apiData={apiData}/>
    </>
}