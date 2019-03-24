export const state = () => {
    return {
        list : [],
        currentSimcard: {}
    }
}


export const getters = {
    getAllSimcards(state){
        return state.list
    },
    getById(state){
        return id => {state.list.find(sim => sim.id === id)}
    }
}


export const mutations  = {
    add(state, simcard){
      state.list.push(simcard)
    },
    emptyList(state){
        console.log('empty list')
        state.list = []
    }
}