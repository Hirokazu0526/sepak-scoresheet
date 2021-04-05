<template>
  <div class="footer-info">
    <div class="set-count">
      <h3>SET COUNT</h3>
      <h3>{{ $store.state.teamA }} - {{ $store.state.teamB }}</h3>
    </div>
    <div class="win-team">
      <h3>Winner</h3>
      <h3 v-if="$store.state.teamA === 2">TeamA</h3>
      <h3 v-if="$store.state.teamB === 2">TeamB</h3>
    </div>
    <div class="save">
      <button class="btn">SAVE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterInfo',
}
</script>

<style scoped>
.footer-info {
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
}
.set-count {
  display: flex;
}
h3 {
  display: inline-block;
  padding: 0 10px;
}
.btn {
  background: #ff7ce1;
  color: white;
}
</style>
