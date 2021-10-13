const state = {
    room_name: 'aaa',
}

const getters = {
    get_room_name: state => {
        return state.room_name;
    },
}

const mutations ={
    changeRoomName(state, roomname){
        state.room_name=roomname;
    }
}