const handlebackspace =(selecteduser,selectedusermail,setselecteduser,setselectedusermail)=>{
    //taking up constant variable because usestate is an asyn function it won't change it's value instatntly
    const updateduser=[...selecteduser];
    // taking up the set variable as the array in this does not conatina any duplicate value
    const updatedemail=new Set(selectedusermail);
    //Set array does not have the pop function like the normal array
    updatedemail.delete([...updatedemail].pop());
    updateduser.pop();
    setselecteduser(updateduser);
    setselectedusermail(new Set(updatedemail))

}

export const handlekeys=(keypress,selecteduser,selectedusermail,setselecteduser,setselectedusermail)=>{
    switch(keypress){
        case "backspace":
        handlebackspace(selecteduser,selectedusermail,setselecteduser,setselectedusermail);
        break;
    }
}