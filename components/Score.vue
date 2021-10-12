<template>
  <div class="score">
    <div class="score-inner">
      <div class="score-info">
        <div class="countA block fx">
          <h3 class="servece" :class="{ servece_activeA: serveceActiveA }">
            Team A
          </h3>
          <p class="point">{{ countA }}</p>
          <div class="counter">
            <button class="button" @click="countUpA">+</button>
            <button class="button" @click="countDownA">-</button>
          </div>
        </div>
        <div class="set-count block fx">
          <h3>{{ activeSet }}</h3>
          <button class="send" @click="send">send</button>
        </div>
        <div class="countB block fx">
          <h3 class="servece" :class="{ servece_activeB: serveceActiveB }">
            Team B
          </h3>
          <p class="point">{{ countB }}</p>
          <div class="counter">
            <button class="button" @click="countUpB">+</button>
            <button class="button" @click="countDownB">-</button>
          </div>
        </div>
      </div>
      <div class="score-set-count">
        <div class="first block fx2">
          <p>1set</p>
          <h4>{{ firstSet }}</h4>
        </div>
        <div class="second block fx2">
          <p>2nd</p>
          <h4>{{ secondSet }}</h4>
        </div>
        <div class="third block fx2">
          <p>3rd</p>
          <h4>{{ thirdSet }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Score',
  computed: {
    ...mapState([
      'countA',
      'countB',
      'firstSet',
      'secondSet',
      'thirdSet',
      'activeSet',
    ]),
    ...mapGetters(['serveceActiveA', 'serveceActiveB']),
  },
  methods: {
    ...mapMutations([
      'countUpA',
      'countDownA',
      'countUpB',
      'countDownB',
      'send',
    ]),
  },
}
</script>

<style scoped>
.score {
  margin-top: 20px;
}
h3 {
  width: 200px;
  height: 40px;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
  margin-bottom: 15px;
  border: 1px solid #707070;
}
.servece {
  background: white;
}
.servece_activeA {
  background: #fc9090;
}
.servece_activeB {
  background: #fc9090;
}
.score-info {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.block {
  display: inline-block;
  width: 25%;
}
.fx {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
.set-count h5 {
  width: 110px;
  height: 45px;
  font-size: 30px;
  text-align: center;
  line-height: 40px;
  margin-bottom: 10px;
  border: 1px solid #707070;
}
.send {
  width: 110px;
  height: 45px;
  border-radius: 5px;
  color: white;
  font-size: 30px;
  background: #6f6f6f;
  line-height: 25px;
  padding: 0;
}
.point {
  width: 150px;
  height: 70px;
  font-size: 50px;
  text-align: center;
  border: 1px solid #6f6f6f;
}
.counter {
  width: 185px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.score-set-count {
  display: flex;
  justify-content: space-around;
  width: 700px;
  margin: 0 auto;
}
.score-set-count p {
  margin-right: 10px;
  font-size: 20px;
}
.score-set-count h4 {
  width: 110px;
  height: 25px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #6f6f6f;
}
.fx2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 25px;
}
.button {
  -webkit-appearance: none;
  border-radius: 0;
  width: 70px;
  height: 35px;
  line-height: 1rem;
  font-size: 36px;
  padding: 0;
  background: #6f6f6f;
  color: #fff;
}
</style>
