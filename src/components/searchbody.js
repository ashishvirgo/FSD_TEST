import { useEffect, useState } from "react";

const Searchbody=()=>{
    const [arr,setArr]=useState([]);
    const getData=()=>{
        const pr=fetch("https://dummyjson.com/posts/search?q=searchValue");
        pr.then((res)=>{
            res.json().then((data)=>{
                setArr(data.posts);
                console.log(data.posts);
            });
         }).catch(console.log);
    };
    useEffect(getData,[]);
    // getData();
    
    return (
        <div className="Search-body">
           {/* {JSON.stringify(arr)} */}
           <h2>{arr[0]?.posts}</h2>
           <h2>{arr[1]?.posts}</h2>
           {
            arr.map((ele)=>{
              return <h1>{ele.posts}</h1>;
            })
           }
        </div>
    );
};

export default Searchbody;