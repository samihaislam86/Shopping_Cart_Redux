export const additem = (product) => {
    return {
        type: 'ADD_ITEM',
        payload: product
    }
}

export const removeitem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: id
    }
}

export const increaseitem=(id)=>{
    return{
        type:'INCREASE_ITEM',
        payload:id
    }
}

export const decreaseitem=(id)=>{
    return{
        type:'DECREASE_ITEM',
        payload:id
    }
}