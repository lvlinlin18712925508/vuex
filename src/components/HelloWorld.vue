<template>
  <div class="hello">
    <h1>clicked: {{count}} times ,count is {{evenOrOdd}}</h1>
    <button @click="increment">increment</button>
    <button @click='decrement'>decrement</button>
    <button @click='incrementIfOdd'>incrementIfOdd</button>
    <button @click='incrementSet'>incrementSet</button>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted() {
    console.log('mounted',this.$store)
  },
  methods: {
    // increment() {
    //   console.log(11)
    //   this.$store.dispatch('increment')
    // },
    // decrement() {
    //   console.log(11)
    //   this.$store.dispatch('decrement')
    // },
    // incrementIfOdd() {
    //   this.$store.dispatch('incrementIfOdd')
    // },
    // incrementSet() {
    //   this.$store.dispatch('incrementSet')
    // }
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementSet'])
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd;
    // },

    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 10px;
  background: yellow;
}
</style>
