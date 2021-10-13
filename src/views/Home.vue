<template>
  <div>
    <h1>DYSNOMIA</h1>
    <h3>Where usual expertise becomes unusually enjoyable<sup>TM</sup></h3>
    <b-form id="roomform">
    <div>
    <b-field label="Room Name">
      <b-input type="text" v-model="room_name" required></b-input>
    </b-field>
    <b-button type="is-success" @click="submitRoomForm">Start/Join Game</b-button>
    </div>
    </b-form>
    <router-link to="/addcardpack"><b-button type="is-danger">Add a Card Pack</b-button></router-link>
    <b-button type="is-info" @click="openInstructions">Instructions</b-button>
  </div>
</template>

<script>
import { mapGetters, mapMutation } from "vuex";

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      room_name:'',
    };
  },
  computed:{
    get_room_name() {
      return this.$store.getters.get_room_name
    }
  },
/* need to fix this *** */
  methods: {
    submitRoomForm() {
      this.$store.commit('changeRoomName', this.room_name);
      console.log(this.$store.getters.get_room_name)
      console.log(this.room_name)
    },
    addCardPack() {
      console.log('neat');
    },
    openInstructions() {
      let route = this.$router.resolve({path: '/instructions'});
      window.open(route.href, '_blank');
    },
  },
};
</script>
