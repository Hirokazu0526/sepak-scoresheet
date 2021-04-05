<template>
  <div>
    <div class="header-inner">
      <h1 class="title">SepakTakraw ScoreSheet</h1>
      <button class="btn hbtn">RESET</button>
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.title {
  font-size: 30px;
  margin-right: 170px;
  display: inline-block;
}
.hbtn {
  margin-right: 15px;
}
</style>
