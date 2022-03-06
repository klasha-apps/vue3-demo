<template>
  <top-bar />
  <router-view />
</template>
<script>
import './assets/css/styles.css'

import TopBar from "./components/TopBar";
export default {
  components:{
    TopBar
  }
}
</script>
