<template>
  <div class="timer">
    <div class="two min">
      2:00
      <button class="btn start">START</button>
      <button class="btn">RESET</button>
    </div>
    <div class="one min">
      1:00
      <button class="btn start">START</button>
      <button class="btn">RESET</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
}
</script>

<style scoped>
.timer {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 15px;
}
.two {
  margin-right: 30px;
}
.start {
  color: white;
  background: #b5b4b4;
}
</style>
