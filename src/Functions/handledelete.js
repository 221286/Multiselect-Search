export const handledelete = (selecteduser,setselecteduser,users,selectedusermail,setselectedusermail)=>{
const updateduser=selecteduser.filter((update)=>update.id!==users.id);
setselecteduser(updateduser);
const updatedemail = new Set (selectedusermail);
// we can  directly delete  in this we don't need the  
updatedemail.delete(users.email);
setselectedusermail(new Set(updatedemail));

}