const question = []

export const getQuestionreducer = (state={question},action)=>{
    switch(action.type){
        case "SUCCESS_GET_QUESTION":
            return {products : action.payload}
        case "FAIL_GET_QUESTION":
            return {products:action.payload}
        default : return state
    }
}


export default getQuestionreducer;