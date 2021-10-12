<template>
  <div class="mctoinfo">
    <div class="mcto-info">
      <div class="mtco-1set fx-set">
        <div class="member-change-a block mgr">
          <div class="fx">
            <div class="in block">10</div>
            <div class="out block">20</div>
          </div>
          <div class="fx">
            <div class="in block">20</div>
            <div class="out block">10</div>
          </div>
        </div>
        <div class="time-out-a block">
          {{ $store.state.timeOuts.timeOutA1 }}
        </div>
        <div class="set-count block mg">1set</div>
        <div class="time-out-b block">
          {{ $store.state.timeOuts.timeOutB1 }}
        </div>
        <div class="member-change-b block mgl">
          <div class="fx">
            <div class="in block">10</div>
            <div class="out block">20</div>
          </div>
          <div class="fx">
            <div class="in block">20</div>
            <div class="out block">10</div>
          </div>
        </div>
      </div>
      <div class="mtco-2set fx-set">
        <div class="member-change-a block mgr">
          <div class="fx">
            <div class="in block">10</div>
            <div class="out block">20</div>
          </div>
          <div class="fx">
            <div class="in block">20</div>
            <div class="out block">10</div>
          </div>
        </div>
        <div class="time-out-a block">
          {{ $store.state.timeOuts.timeOutA2 }}
        </div>
        <div class="set-count block mg">2nd</div>
        <div class="time-out-b block">
          {{ $store.state.timeOuts.timeOutB2 }}
        </div>
        <div class="member-change-b block mgl">
          <div class="fx">
            <div class="in block">10</div>
            <div class="out block">20</div>
          </div>
          <div class="fx">
            <div class="in block">20</div>
            <div class="out block">10</div>
          </div>
        </div>
      </div>
      <div class="mtco-3set fx-set">
        <div class="member-change-a block mgr">
          <div class="fx">
            <div class="in block">10</div>
            <div class="out block">20</div>
          </div>
          <div class="fx">
            <div class="in block">20</div>
            <div class="out block">10</div>
          </div>
        </div>
        <div class="time-out-a block">
          {{ $store.state.timeOuts.timeOutA3 }}
        </div>
        <div class="set-count block mg">3rd</div>
        <div class="time-out-b block">
          {{ $store.state.timeOuts.timeOutB3 }}
        </div>
        <div class="member-change-b block mgl">
          <div class="fx">
            <div class="in block">10</div>
            <div class="out block">20</div>
          </div>
          <div class="fx">
            <div class="in block">20</div>
            <div class="out block">10</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McToInfo',
}
</script>

<style scoped>
.mcto-info {
  margin-top: 10px;
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
.fx-set {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fx {
  display: flex;
  flex-wrap: wrap;
  width: 150px;
  height: 60px;
  justify-content: space-around;
  align-items: center;
}
.mg {
  margin: 0 35px;
}
.mgr {
  margin-right: 65px;
}
.mgl {
  margin-left: 65px;
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
.time-out-a,
.time-out-b {
  width: 150px;
  height: 25px;
  text-align: center;
}
.set-count {
  width: 60px;
  height: 25px;
  text-align: center;
}
.mcto-mc {
  display: flex;
  flex-direction: column;
}
</style>
