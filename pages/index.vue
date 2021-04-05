<template>
  <div class="container">
    <ScoreHeader />
    <Info />
    <Score />
    <McTo />
    <Member />
    <FooterInfo />
  </div>
</template>

<script>
import ScoreHeader from '~/components/ScoreHeader'
import Info from '~/components/Info'
import Score from '~/components/Score'
import McTo from '~/components/McTo'
import Member from '~/components/Member'
import FooterInfo from '~/components/FooterInfo'

export default {
  components: {
    ScoreHeader,
    Info,
    Score,
    McTo,
    Member,
    FooterInfo,
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  width: 90%;
  min-height: 100vh;
}
.btn {
  width: 80px;
  height: 25px;
  border-radius: 9px;
  background: #bae5a7;
  border: none;
}
</style>
