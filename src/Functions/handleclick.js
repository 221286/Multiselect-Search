export const handleClick =(list,setselecteduser,setselectedusermail,setsearchuser,setuserlist,selecteduser,selectedusermail,referinput)=>{
    setselecteduser([...selecteduser,list]);
                setselectedusermail(new Set([...selectedusermail,list.email]));
                setsearchuser("");
                setuserlist([]);
                referinput.current.focus();
}