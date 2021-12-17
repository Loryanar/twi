const API='https://restapi-twitterclone1.herokuapp.com'
export const back= async() =>{
    const res= await fetch(API,'/registro')
   return await res.json()
} 