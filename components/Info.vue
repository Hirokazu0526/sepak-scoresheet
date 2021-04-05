<template>
  <div class="info">
    <div class="match-info">
      <div class="block macth-number">
        <h3>Match Number</h3>
        <input type="text" placeholder="ex) Match1 " />
      </div>
      <div class="block macth-time fx">
        <div class="start">
          <h3>Start Time</h3>
          <div class="time">
            <input type="time" />
          </div>
        </div>
        <div class="end">
          <h3>End Time</h3>
          <div class="time">
            <input type="time" />
          </div>
        </div>
      </div>
      <div class="block match-team">
        <div class="team-a">
          <input type="text" placeholder="TEAM A" />
        </div>
        <span class="match-vs">VS</span>
        <div class="team-b">
          <input type="text" placeholder="TEAM B" />
        </div>
      </div>
      <div class="block"></div>
      <div class="block servece">
        <h3>First Servece Team</h3>
        <select v-model="selected">
          <option value="">FIRST SERVECE</option>
          <option>TEAM A</option>
          <option>TEAM B</option>
        </select>
        <div class="servece-count">
          <h3 class="servece-active">Servece</h3>
          <div class="servece-inner">
            <span :class="{ servece_btn: true, finish3: finish3 }">●</span>
            <span :class="{ servece_btn: true, finish2: finish2 }">●</span>
            <span :class="{ servece_btn: true, finish1: finish1 }">●</span>
          </div>
        </div>
      </div>
      <div class="block referee fx">
        <div class="main">
          <h3>Referee</h3>
          <input type="text" />
        </div>
        <div class="assistant">
          <h3>Assistant Referee</h3>
          <input type="text" />
        </div>
        <div class="lines">
          <h3>Line Referee</h3>
          <input type="text" />
        </div>
        <div class="lines">
          <h3>Line Referee</h3>
          <input type="text" />
        </div>
      </div>
    </div>
    <Timer />
  </div>
</template>

<script>
import Timer from '~/components/Timer'
export default {
  name: 'Info',
  components: {
    Timer,
  },
  computed: {
    finish3() {
      return this.$store.getters.finish3
    },
    finish2() {
      return this.$store.getters.finish2
    },
    finish1() {
      return this.$store.getters.finish1
    },
    selected: {
      get() {
        return this.$store.state.selected
      },
      set(value) {
        this.$store.commit('setSlected', value)
      },
    },
  },
}
</script>

<style scoped>
.match-info {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.block {
  display: inline-block;
  width: 50%;
  margin: 10px 0;
}
.fx {
  display: flex;
  justify-content: space-around;
}
input {
  width: 200px;
  height: 30px;
}
.match-team,
.macth-time,
.referee {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.start {
  margin-right: 10px;
}
.match-vs {
  margin: auto 10px;
  display: inline-block;
}

select {
  width: 200px;
  height: 30px;
  font-size: 16px;
}
.servece_btn {
  color: #fcd861;
  font-size: 30px;
}
.servece-count h4 {
  width: 180px;
  background: #fc9090;
  text-align: center;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 5px;
}
.servece-inner {
  display: flex;
  justify-content: space-around;
  width: 180px;
}
.servece-active {
  background: #fc9090;
  display: inline-block;
  width: 180px;
  height: 25px;
  text-align: center;
  border-radius: 5px;
  margin-top: 10px;
}
.finish3 {
  color: white;
}
.finish2 {
  color: white;
}
.finish1 {
  color: white;
}
.main {
  margin-right: 10px;
}
.lines > input + input {
  margin-left: 5px;
}
</style>
