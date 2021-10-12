<template>
  <div>
    <div class="header-inner">
      <h1 class="title">SepakTakraw ScoreSheet</h1>
      <button class="btn">RESET</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreHeader',
}
</script>

<style scoped>
.header-inner {
  width: 90vw;
  height: 50px;
  position: relative;
}
.title {
  font-size: 30px;
  margin: 10px auto;
  display: block;
  text-align: center;
}
.btn {
  position: absolute;
  top: 10px;
  right: 20px;
}
</style>
