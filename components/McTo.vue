<template>
  <div class="mcto">
    <div class="mcto-title fx">
      <div class="mcto-mc">
        <h3 class="block bra">Member Change</h3>
        <div class="in-out">
          <p>In</p>
          <p>Out</p>
        </div>
      </div>
      <button class="block bra" @click="getTimeOutA">Time Out</button>
      <div class="block"></div>
      <button class="block bra" @click="getTimeOutB">Time Out</button>
      <div class="mcto-mc">
        <h3 class="block bra">Member Change</h3>
        <div class="in-out">
          <p>In</p>
          <p>Out</p>
        </div>
      </div>
    </div>
    <br />
    <hr />
    <McToInfo />
  </div>
</template>

<script>
import McToInfo from '~/components/McToInfo'

export default {
  name: 'McTo',
  components: {
    McToInfo,
  },
  data() {
    return {}
  },
  methods: {
    getTimeOutA() {
      this.$store.commit('getTimeOutA')
    },
    getTimeOutB() {
      this.$store.commit('getTimeOutB')
    },
  },
}
</script>

<style scoped>
.mcto {
  margin-top: 30px;
}
.mcto-mc {
  display: flex;
  flex-direction: column;
}
h3 {
  width: 150px;
  height: 25px;
  font-size: 16px;
  text-align: center;
  line-height: 22px;
}
.block {
  display: inline-block;
}
.fx {
  display: flex;
  justify-content: space-around;
}

.bra {
  border-radius: 5px;
  border: 1px solid #707070;
}
.in,
.out {
  width: 60px;
  height: 25px;
  text-align: center;
}
.in-out {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 12px;
}
.in-out p {
  font-weight: bold;
  width: 60px;
  text-align: center;
}
</style>
