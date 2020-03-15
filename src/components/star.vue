<template>
  <div id="app">
    <div class="container">
      <div class="stars">
        <div v-for="(item,index) in starsCount" :key="index" class="star" ref="star"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      starsCount: 800,
      distance: 1200
    };
  },
  mounted() {
    let _this = this;
    let starArr = _this.$refs.star;
    starArr.forEach(item => {
      let speed = 0.2 + Math.random() * 1;
      let thisDistance = _this.distance + Math.random() * 300;
      item.style.transformOrigin = `0 0 ${thisDistance}px`;
      item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`;
    });
  }
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: radial-gradient(
    200% 105% at top center,
    #283859 40%,
    /* #1b2947 10%, */
    #374c77 65%,
    #47607d
  );
  /* background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    #e96f92,
    #1b2947
  );
  background: radial-gradient(
    200% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #f7f7b6
  ); */
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
}
@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(360deg);
  }
}
.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 50%;
  bottom: 20%;
  animation: rotate 220s infinite linear;
}
.star {
  width: 2px;
  height: 2px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  /* filter: drop-shadow(2px 4px 6px black); */
}
</style>
