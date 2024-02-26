import { useEffect, useRef, useState } from "react";
import { handleClick } from "../Functions/handleclick";
import Pills from "./Pills";
import { handlekeys } from "../Functions/handlekeys";


const Body = ()=>{
    const [searchuser,setsearchuser]= useState("");
    const [userlist,setuserlist]=useState([]);
    const [selecteduser,setselecteduser]=useState([]);
    const [selectedusermail,setselectedusermail]= useState(new Set());
    const referinput = useRef();
    useEffect(()=>{
        if(searchuser.trim() ===""){
            setuserlist([])
            return;
        } else {
            fetch('https://dummyjson.com/users')
       .then((response)=>response.json())
       .then((data)=>setuserlist(data.users))
       .catch(err=>console.error(err));
       }
       
        },[searchuser]);
        useEffect(()=>{
            if(referinput.current){
                referinput.current.focus();
               }
        },[]);
       
        
    return (<div className="user-search-container">
        <div className="user-search-input">
            {selecteduser.map((users)=><Pills name={`${users?.firstName} ${users?.lastName}`}
             image={users?.image} key={users?.id} selecteduser={selecteduser} setselecteduser={setselecteduser}
              users={users} selectedusermail={selectedusermail} setselectedusermail={setselectedusermail}/>)}
            <div>
                <input type="text" placeholder="Search here" ref={referinput} value={searchuser} 
                onChange={(e)=>{setsearchuser(e.target.value)}} 
                onKeyDown={(e)=>{console.log(e.key);
                    const keypress=e.key.toLowerCase();
                    handlekeys(keypress,selecteduser,selectedusermail,setselecteduser,setselectedusermail);
                   
                 }}
                />
            <ul className="suggestion-list">
                {userlist.map((list)=>{ return !selectedusermail.has(list?.email) ?(<li key={list?.email} 
                onClick={()=>{handleClick(list,setselecteduser,setselectedusermail,setsearchuser,setuserlist,selecteduser,selectedusermail,referinput)}} >
                    <img src={list?.image} alt={list?.image}/>{ " "+list?.firstName+" "+list?.lastName}</li>)
                    :  (<></>)})}
            </ul>
            </div>
        </div>
    </div>)
}

export default Body;