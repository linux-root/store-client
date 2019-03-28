export const state = () => {
    return {
        list : [],
        currentSimcard: {}
    }
}


export const getters = {
    getAllSimcards: state => state.list
    ,
    getById: state =>{
        return id => {
          console.log(state)
         return  state.list.find(sim => sim.id === id)}
    },
    getCurrentSimcard: state => state.currentSimcard
}


export const mutations  = {
    add(state, simcard){
      state.list.push(simcard)
    },
    setCurrentSimcard: (state, simcard) => {

      console.log('current')
      console.log(simcard)
      state.currentSimcard = simcard
    },

    emptyList(state){
        console.log('empty list')
        state.list = []
    }
}
