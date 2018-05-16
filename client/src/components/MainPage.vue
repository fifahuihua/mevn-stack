<template>
  <div>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Body from './layouts/Body';

export default {
  name: 'MainPage',
  data () {
    return {
      test: 'test'
    }
  },
  components: {
    Header,
    Footer,
    Body
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
