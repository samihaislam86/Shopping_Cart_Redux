

const initialState = {
    items: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existing = state.items.find(item => item.id === action.payload.id)
            if (existing) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item}
                            : item
                    )
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }]
                }
            }
        case 'INCREASE_ITEM':
            return {
                ...state,
                    items: state.items.map(item =>
                        item.id === action.payload
                            ? { ...item,quantity:item.quantity+1}
                            : item
                    )
            }

        case 'DECREASE_ITEM':
            return{
                ...state,
                    items: state.items.map(item =>
                        item.id === action.payload
                            ? { ...item,quantity:item.quantity-1}
                            : item
                    ).filter(item=>item.quantity>0)
            }

        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        default:
            return state


    }
}
export default cartReducer