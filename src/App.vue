<template>
  <div id="app">
    <admission></admission><!-- z4 -->
    <voinoBtn></voinoBtn><!-- z3 -->
    <div class="main_head_banner">
      <train></train>
      <router-view />
    </div>
  </div>
</template>

<script>
import voinoBtn from "@/components/voinoBtn";
import train from "@/components/train";
import admission from "@/components/admission";
export default {
  components: {
    voinoBtn,
    train,
    admission
  },
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}
.main_head_banner{
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow:hidden;
}
::-webkit-scrollbar{
  width:0px;
  height:0px;
}
.oheight{
  width: 100%;
  height: 200px;
}
</style>
