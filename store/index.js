export const state = () => ({
  countA: 0,
  countB: 0,
  serveceTime: 3,
  selected: '',
  serveceActiveA: false,
  serveceActiveB: false,
  finish3: false,
  finish2: false,
  finish1: false,
  firstSet: '',
  secondSet: '',
  thirdSet: '',
  activeSet: '1st',
  teamA: 0,
  teamB: 0,
  timeOuts: {
    timeOutA1: '',
    timeOutA2: '',
    timeOutA3: '',
    timeOutB1: '',
    timeOutB2: '',
    timeOutB3: '',
  },
})

export const getters = {
  finish3: (state) => {
    return state.finish3
  },
  finish2: (state) => {
    return state.finish2
  },
  finish1: (state) => {
    return state.finish1
  },
  serveceActiveA: (state) => {
    return state.serveceActiveA
  },
  serveceActiveB: (state) => {
    return state.serveceActiveB
  },
}

export const mutations = {
  // ファーストサービスを選択してアクティブにする
  setSlected(state, value) {
    state.selected = value
    if (state.selected === 'TEAM A') {
      state.serveceActiveA = true
      state.serveceActiveB = false
    } else if (state.selected === 'TEAM B') {
      state.serveceActiveB = true
      state.serveceActiveA = false
    } else {
      state.serveceActiveB = false
      state.serveceActiveA = false
    }
  },
  // 点数を入力
  countUpA(state) {
    state.countA++
    state.serveceTime -= 1
    if (state.serveceTime <= 3) {
      // セーブのカウント表示
      if (state.serveceTime === 3) {
        state.finish3 = false
        state.finish2 = false
        state.finish1 = false
      } else if (state.serveceTime === 2) {
        state.finish3 = true
        state.finish2 = false
        state.finish1 = false
      } else if (state.serveceTime === 1) {
        state.finish3 = true
        state.finish2 = true
        state.finish1 = false
      } else if (state.serveceTime === 0) {
        state.serveceTime = 3
        state.finish3 = false
        state.finish2 = false
      }
    } else if (state.serveceTime === 4) {
      state.serveceTime = 1
      state.finish3 = true
      state.finish2 = true
    }
    if ((state.countA + state.countB) % 3 === 0) {
      if (state.serveceActiveA === true) {
        state.serveceActiveA = false
        state.serveceActiveB = true
      } else {
        state.serveceActiveA = true
        state.serveceActiveB = false
      }
    }
  },
  countDownA(state) {
    if (state.countA >= 1) {
      state.countA--
    }
    state.serveceTime += 1
    if (state.serveceTime <= 3) {
      if (state.serveceTime === 3) {
        state.finish3 = false
        state.finish2 = false
        state.finish1 = false
      } else if (state.serveceTime === 2) {
        state.finish3 = true
        state.finish2 = false
        state.finish1 = false
      } else if (state.serveceTime === 1) {
        state.finish3 = true
        state.finish2 = true
        state.finish1 = false
      } else if (state.serveceTime === 0) {
        state.serveceTime = 3
        state.finish3 = false
        state.finish2 = false
      }
    } else if (state.serveceTime === 4) {
      state.serveceTime = 1
      state.finish3 = true
      state.finish2 = true
    }
    if (!(state.countA + state.countB) % 3 === 0) {
      if (state.serveceActiveA === true) {
        state.serveceActiveA = false
        state.serveceActiveB = true
      } else {
        state.serveceActiveA = false
        state.serveceActiveB = true
      }
    }
  },
  countUpB(state) {
    state.countB++
    state.serveceTime -= 1
    if (state.serveceTime <= 3) {
      if (state.serveceTime === 3) {
        state.finish3 = false
        state.finish2 = false
        state.finish1 = false
      } else if (state.serveceTime === 2) {
        state.finish3 = true
        state.finish2 = false
        state.finish1 = false
      } else if (state.serveceTime === 1) {
        state.finish3 = true
        state.finish2 = true
        state.finish1 = false
      } else if (state.serveceTime === 0) {
        state.serveceTime = 3
        state.finish3 = false
        state.finish2 = false
      }
    } else if (state.serveceTime === 4) {
      state.serveceTime = 1
      state.finish3 = true
      state.finish2 = true
    }
    if ((state.countA + state.countB) % 3 === 0) {
      if (state.serveceActiveA === true) {
        state.serveceActiveA = false
        state.serveceActiveB = true
      } else {
        state.serveceActiveA = true
        state.serveceActiveB = false
      }
    }
  },
  countDownB(state) {
    if (state.countB >= 1) {
      state.countB--
    }
    state.serveceTime += 1
    if (state.serveceTime <= 3) {
      if (state.serveceTime === 3) {
        state.finish3 = false
        state.finish2 = false
        state.finish1 = false
      } else if (state.serveceTime === 2) {
        state.finish3 = true
        state.finish2 = false
        state.finish1 = false
      } else if (state.serveceTime === 1) {
        state.finish3 = true
        state.finish2 = true
        state.finish1 = false
      } else if (state.serveceTime === 0) {
        state.serveceTime = 3
        state.finish3 = false
        state.finish2 = false
      }
    } else if (state.serveceTime === 4) {
      state.serveceTime = 1
      state.finish3 = true
      state.finish2 = true
    }
    if (!(state.countA + state.countB) % 3 === 0) {
      if (state.serveceActiveB === false) {
        state.serveceActiveA = false
        state.serveceActiveB = true
      } else {
        state.serveceActiveA = true
        state.serveceActiveB = false
      }
    }
  },
  // setの点数を入力
  send(state) {
    // activeSetを判断して点数の差でデータを取得するかを決める
    if (state.activeSet === '1st') {
      if (state.countA >= 21 || state.countB >= 21) {
        if (state.countA - state.countB >= 2 || state.countA === 25) {
          state.firstSet = state.countA + '-' + state.countB
          state.teamA += 1
        } else if (state.countB - state.countA >= 2 || state.countB === 25) {
          state.firstSet = state.countA + '-' + state.countB
          state.teamB += 1
        } else {
          return
        }
        if (state.selected === 'TEAM A') {
          state.selected = 'TEAM B'
        } else {
          state.selected = 'TEAM A'
        }
        state.activeSet = '2nd'
        state.countA = 0
        state.countB = 0
        state.serveceTime = 3
        state.finish3 = false
        state.finish2 = false
        state.finish1 = false
      }
    } else if (state.activeSet === '2nd') {
      if (state.countA >= 21 || state.countB >= 21) {
        if (state.countA - state.countB >= 2 || state.countA === 25) {
          state.secondSet = state.countA + '-' + state.countB
          state.teamA += 1
        } else if (state.countB - state.countA >= 2 || state.countB === 25) {
          state.secondSet = state.countA + '-' + state.countB
          state.teamB += 1
        } else {
          return
        }
        if (state.selected === 'TEAM A') {
          state.selected = 'TEAM B'
        } else {
          state.selected = 'TEAM A'
        }
        state.activeSet = '3rd'
        state.countA = 0
        state.countB = 0
        state.serveceTime = 3
        state.finish3 = false
        state.finish2 = false
        state.finish1 = false
      }
    } else if (state.activeSet === '3rd') {
      if (state.countA >= 21 || state.countB >= 21) {
        if (state.countA - state.countB >= 2 || state.countA === 25) {
          state.thirdSet = state.countA + '-' + state.countB
          state.teamA += 1
        } else if (state.countB - state.countA >= 2 || state.countB === 25) {
          state.thirdSet = state.countA + '-' + state.countB
          state.teamB += 1
        }
      }
    }
  },
  // timeoutの値を入力
  getTimeOutA(state) {
    if (state.activeSet === '1st') {
      state.timeOuts.timeOutA1 = state.countA + '-' + state.countB
    } else if (state.activeSet === '2nd') {
      state.timeOuts.timeOutA2 = state.countA + '-' + state.countB
    } else if (state.activeSet === '3rd') {
      state.timeOuts.timeOutA3 = state.countA + '-' + state.countB
    }
  },
  getTimeOutB(state) {
    if (state.activeSet === '1st') {
      state.timeOuts.timeOutB1 = state.countA + '-' + state.countB
    } else if (state.activeSet === '2nd') {
      state.timeOuts.timeOutB2 = state.countA + '-' + state.countB
    } else if (state.activeSet === '3rd') {
      state.timeOuts.timeOutB3 = state.countA + '-' + state.countB
    }
  },
}
