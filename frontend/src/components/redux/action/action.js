
export const getQuestion =()=>async(dispatch)=>{
    try {
        const data = await fetch("/getquestion",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const res = await data.json();
        console.log(res);
        dispatch({type:"SUCCESS_GET_QUESTION",payload:res})
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODU",payload:error.response})
    }
}

export default getQuestion;