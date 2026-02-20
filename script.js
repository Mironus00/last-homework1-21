document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();

  //1

  let button1 = document.querySelector("[data-js = 't1-btn']")
  // console.log(button1)
  let hex1 = document.querySelector("[data-js = 't1-hex']")

  function rand255() {
    return Math.floor(Math.random() * 256);
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
  button1.addEventListener('click', () => {
    let hex = rgbToHex(rand255(), rand255(), rand255())
    button1.style.backgroundColor = hex;
    hex1.textContent = hex;
  })

  //2

  let input = document.querySelector("[data-js = 't2-input']")
  let count = document.querySelector("[data-js = 't2-count']")
  
  input.addEventListener('input', () => {
  let length = input.value.length
  count.textContent = length
  });

  //3

  let input3 = document.querySelector("[data-js = 't3-input']")
  let elements = document.querySelector("[data-js = 't3-list']")
  let button3 = document.querySelector("[data-js = 't3-add']")
  console.log(button3)

  button3.addEventListener('click', () => {
    let txt = input3.value.trim()
    console.log(txt)
    if (txt === '') return

    let li = document.createElement('li')
    li.textContent = txt
    elements.append(li)
    input3.value = ''
  })

  //4

  let output = document.querySelector("[data-js = 't4-out']")
  console.log(output)
  let minus = document.querySelector("[data-js = 't4-minus']")
  let plus = document.querySelector("[data-js = 't4-plus']")
  let reset = document.querySelector("[data-js = 't4-reset']")
  let count2 = 0
  minus.addEventListener('click', () => {
    count2 = count2 - 1
    output.textContent = count2
    console.log(output)
  })
  plus.addEventListener('click', () => {
    count2 = count2 + 1
    output.textContent = count2
    console.log(output)
  })
  reset.addEventListener('click', () => {
    count2 = 0
    output.textContent = count2
    console.log(output)
  })
  
  //5

  let modalTrigger = document.querySelector("[data-js='t5-open']");
  let modalCloseTrigger = document.querySelector("[data-js='t5-close']");
  let modalCloseBG = document.querySelector("[data-js='t5-backdrop']");
  let modalPopup = document.querySelector("[data-js='t5-modal']");

  modalTrigger.addEventListener("click", () => {
    modalPopup.removeAttribute("hidden");
  });

  modalCloseTrigger.addEventListener("click", () => {
    modalPopup.toggleAttribute("hidden");
  });

  modalCloseBG.addEventListener("click", () => {
    modalPopup.toggleAttribute("hidden");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
      modalPopup.toggleAttribute("hidden");
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target == modalCloseBG) {
    }
    console.log(event.target)
  })

  let dataTabA = document.querySelector('[data-tab="a"]')
  let dataTabB = document.querySelector('[data-tab="b"]')
  let dataTabC = document.querySelector('[data-tab="c"]')
  let dataPaneA = document.querySelector('[data-pane="a"]')
  let dataPaneB = document.querySelector('[data-pane="b"]')
  let dataPaneC = document.querySelector('[data-pane="c"]')

  dataTabA.addEventListener('click', () => {
    dataPaneA.classList.add('is-active')
    dataPaneB.classList.remove('is-active')
    dataPaneC.classList.remove('is-active')
    dataTabA.classList.add('is-active')
    dataTabB.classList.remove('is-acive')
    dataTabC.classList.remove('is-active')
  })

  dataTabB.addEventListener('click', () => {
    dataPaneA.classList.remove('is-active')
    dataPaneB.classList.add('is-active')
    dataPaneC.classList.remove('is-active')
    dataTabA.classList.remove('is-active')
    dataTabB.classList.add('is-active')
    dataTabC.classList.remove('is-active')
  })

  dataTabC.addEventListener('click', () => {
    dataPaneA.classList.remove('is-active')
    dataPaneB.classList.remove('is-active')
    dataPaneC.classList.add('is-active')
    dataTabA.classList.remove('is-active')
    dataTabB.classList.remove('is-active')
    dataTabC.classList.add('is-active')
  })

  // 7

  let t7Input = document.querySelector('[data-js="t7-input"]')
  let t7Run = document.querySelector('[data-js="t7-run"]')
  let t7Out = document.querySelector('[data-js="t7-out"]')

  t7Run.addEventListener('click', () => {
    let reverseInput = ''
    for(let i = t7Input.value.length; 0 < i; i--) {
      reverseInput += t7Input.value[i - 1]
    }
    t7Out.textContent = reverseInput
  })

  // 8

  let t8A = document.querySelector('[data-js="t8-a"]')
  let t8B = document.querySelector('[data-js="t8-b"]')
  let t8Add = document.querySelector('[data-js="t8-add"]')
  let t8Mul = document.querySelector('[data-js="t8-mul"]')
  let t8Out = document.querySelector('[data-js="t8-out"]')


  t8Add.addEventListener('click', () => {
    let a = Number(t8A.value)
    let b = Number(t8B.value)
    if (!Number.isNaN(a)) {
      if (!Number.isNaN(b)) {
        t8Out.textContent = a + b
      }
    }
  })

  t8Mul.addEventListener('click', () => {
    let a = Number(t8A.value)
    let b = Number(t8B.value)
    if (!Number.isNaN(a)) {
      if (!Number.isNaN(b)) {
        t8Out.textContent = a * b
      }
    }
  })

  // 9

  let t9Toggle = document.querySelector('[data-js="t9-toggle"]')
  let t9Text = document.querySelector('[data-js="t9-text"]')

  t9Toggle.addEventListener('click', () => {
    t9Text.classList.toggle('hidden')
    if (t9Text.classList.contains('hidden')) {
      t9Toggle.textContent = "Показать"
    }
    else {
      t9Toggle.textContent = "Скрыть"
    }
  })

  // 10
  let t10Range = document.querySelector('[data-js="t10-range"]')
  let t10Out = document.querySelector('[data-js="t10-out"]')
  let t10Box = document.querySelector('[data-js="t10-box"]')

  t10Range.addEventListener('input', (event) => {
    t10Out.textContent = event.target.value + "px"
    t10Box.style.width = `${event.target.value}px`
    t10Box.style.height = `${event.target.value}px`
  })

  // 11
  let t11Seconds = document.querySelector('[data-js="t11-seconds"]')
  let t11Start = document.querySelector('[data-js="t11-start"]')
  let t11Stop = document.querySelector('[data-js="t11-stop"]')
  let t11Out = document.querySelector('[data-js="t11-out"]')
  let checkTimer = null;

  t11Start.addEventListener('click', () => {
    if (!checkTimer) {
      let a = Number(t11Seconds.value)
      if (!Number.isNaN(a)) {
        checkTimer = setInterval(() => {
          t11Out.textContent = a;
          if (a <= 0) {
            clearInterval(checkTimer)
            checkTimer = null;
            return
          }
          a--;
        }, 1000);
      }
      else {
        alert("Ты должен ввести только число")
      }
    }
    else {
      alert("Ты должен закончить таймер")
    }
  })

  t11Stop.addEventListener('click', () => {
    clearInterval(checkTimer)
    checkTimer = null;
    t11Out.textContent = 0;
  })

  // 12
  let t12Plus = document.querySelector('[data-js="t12-plus"]')
  let t12Label = document.querySelector('[data-js="t12-label"]')
  let t12Bar = document.querySelector('[data-js="t12-bar"]')
  let progess = 0
  t12Plus.addEventListener('click', () => {
    if (progess < 100)
    {
      progess += 10
      t12Label.textContent = progess + "%"
      t12Bar.style.width = `${progess}%`
    }
  })

  // 13
  let t13Input = document.querySelector('[data-js="t13-input"]')
  let t13Out = document.querySelector('[data-js="t13-out"]')

  t13Input.addEventListener('keydown', (e) => {
    logKey(e)
    if (e.ctrlKey && e.key == "k") {
      t13Out.textContent = ''
    }
  })

  function logKey(e) {
    t13Out.textContent += ` ${e.key}`
  }

  // 14

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let matrix = ["Пуки каки какашечки...",
    "Пупупу",
    "Назвался клизмой - полезай в жопу",
    "Зубов боятся - в рот не давать",
    "Дима крутой парень, молодёжный, современный. Молодец короче"
  ]

  let t14Next = document.querySelector('[data-js="t14-next"]')
  let t14Out = document.querySelector('[data-js="t14-out"]')

  t14Next.addEventListener('click', () => {
    let randomCitat = getRandomInt(matrix.length)
    t14Out.textContent = matrix[randomCitat]
  })

  // 15

  let t15Coords = document.querySelector('[data-js="t15-coords"]')
  let t15Item = document.querySelector('[data-js="t15-item"]')
  let t15Area = document.querySelector('[data-js="t15-area"]')

  let drugable = false

  t15Item.addEventListener('pointerdown', (e) => {
    drugable = true
    let areaRect = t15Area.getBoundingClientRect()
    t15Item.style.left = `${e.clientX - areaRect.left - t15Item.offsetWidth / 2}px`
    t15Item.style.top = `${e.clientY - areaRect.top - t15Item.offsetHeight / 2}px`
  })

  t15Item.addEventListener('pointermove', (e) => {
    if (!drugable) return;

    let rect = t15Item.getBoundingClientRect()
    let areaRect = t15Area.getBoundingClientRect()

    let desiredLeft = e.clientX - areaRect.left - rect.width / 2
    let desiredTop = e.clientY - areaRect.top - rect.height / 2

    let maxLeft = areaRect.width - rect.width
    let maxTop = areaRect.height - rect.height

    let clampedLeft = Math.min(Math.max(desiredLeft, 0), maxLeft)
    let clampedTop = Math.min(Math.max(desiredTop, 0), maxTop)

    t15Item.style.left = `${clampedLeft}px`
    t15Item.style.top = `${clampedTop}px`

    t15Coords.textContent = `X: ${Math.floor(clampedLeft)}, Y: ${Math.floor(clampedTop)}`
  })

  t15Item.addEventListener('pointerup', () => {
    drugable = false
  })

});



// 17
  const seventeenArea = document.querySelector('[data-js="t17-area"]')

  setInterval(() => {
    const seventeenBox = document.createElement('div')
    seventeenBox.style.width = '100px'
    seventeenBox.style.height = '100px'
    seventeenBox.style.backgroundColor = '#793200'
    seventeenBox.style.position = 'absolute'

    const seventeenAreaWidth = seventeenArea.offsetWidth
    const seventeenAreaHeight = seventeenArea.offsetHeight

    const x = Math.random() * (seventeenAreaWidth - 100)
    const y = Math.random() * (seventeenAreaHeight - 100)

    seventeenBox.style.left = `${x}px`
    seventeenBox.style.top = `${y}px`

    seventeenArea.appendChild(seventeenBox)

  }, 1000)
  

  // 18
  const eighteenArea = document.querySelector('[data-js="t18-area"]')

  function spawnBlock18() {
    const eightneenBox = document.createElement('div')
    eightneenBox.style.width = '100px'
    eightneenBox.style.height = '100px'
    eightneenBox.style.backgroundColor = '#793200'
    eightneenBox.style.position = 'absolute'
    
    eightneenBox.style.left = `${eighteenArea.clientWidth}px`
    
    const staticY = (eighteenArea.clientHeight - 100) / 2
    eightneenBox.style.top = `${staticY}px`
    
    const duration = (eighteenArea.clientWidth + 100) / 300
    
    eightneenBox.style.animation = `moveLeft ${duration}s linear forwards`
    
    eightneenBox.addEventListener('animationend', () => {
      eighteenArea.removeChild(eightneenBox)
    })
    
    eighteenArea.appendChild(eightneenBox)
  }

  setInterval(spawnBlock18, 1000)



  

  // 19

  const nineteenArea = document.querySelector('[data-js="t19-area"]')

  function spawnBlock19() {
    const nineteenBox = document.createElement('div')
    nineteenBox.style.width = '100px'
    nineteenBox.style.height = '100px'
    nineteenBox.style.backgroundColor = '#793200'
    nineteenBox.style.position = 'absolute'
    nineteenBox.style.left = `${nineteenArea.clientWidth}px`

    const y = Math.random() * (nineteenArea.clientHeight - 100)

    nineteenBox.style.top = `${y}px`
    
    const nineteenAnimation = (nineteenArea.clientWidth + 100) / 300

    nineteenBox.style.animation = `moveLeft ${nineteenAnimation}s linear forwards`

    nineteenBox.addEventListener('animationend', () => {
      nineteenArea.removeChild(nineteenBox)
    })

    nineteenArea.appendChild(nineteenBox)
  }

  setInterval(spawnBlock19, 1000)




  // 20

  const twentyArea = document.querySelector('[data-js="t20-area"]')
  const twentyScore = document.querySelector('[data-js="t20-score"]')


  let score20 = 0

  setInterval(() => {
    const twentyBox = document.createElement('div')
    twentyBox.style.width = '100px'
    twentyBox.style.height = '100px'
    twentyBox.style.backgroundColor = '#793200'
    twentyBox.style.position = 'absolute'
    twentyBox.style.cursor = 'pointer'


    const twentyAreaWidth = twentyArea.offsetWidth
    const twentyAreaHeight = twentyArea.offsetHeight

    const twentyY = Math.random() * (twentyAreaHeight - 100)
    twentyBox.style.top = `${twentyY}px`
    twentyBox.style.left = `${twentyAreaWidth}px`

    const twentyAnimation = (twentyAreaWidth + 100) / 300
    twentyBox.style.animation = `moveLeft ${twentyAnimation}s linear forwards`

    twentyBox.addEventListener('click', () => {
      score20 += 1
      twentyScore.textContent = score20
      twentyBox.remove()
    })

    twentyBox.addEventListener('animationend', () => {
      twentyBox.remove()
    })

    twentyArea.appendChild(twentyBox)
  }, 1000)





  // 21

  const twentyoneArea = document.querySelector('[data-js="t21-area"]')
  const twentyoneScore = document.querySelector('[data-js="t21-score"]')
  const twentyoneLives = document.querySelector('[data-js="t21-lives"]')
  const twentyoneGameOver = document.querySelector('[data-js="t21-game-over"]')
  const twentyoneRestart = document.querySelector('[data-js="t21-restart"]')

  let score21 = 0
  let lives21 = 3
  let gameInternal21 = null

  function spawnBlock21() {
    const twentyoneBox = document.createElement('div')
    twentyoneBox.classList.add('game-block')
    twentyoneBox.style.width = '100px'
    twentyoneBox.style.height = '100px'
    twentyoneBox.style.backgroundColor = '#793200'
    twentyoneBox.style.position = 'absolute'
    twentyoneBox.style.cursor = 'pointer'

    let isCaught = false

    const twentyoneAreaWidth = twentyoneArea.offsetWidth
    const twentyoneAreaHeight = twentyoneArea.offsetHeight

    const twentyoneY = Math.random() * (twentyoneAreaHeight - 100)
    twentyoneBox.style.top = `${twentyoneY}px`
    twentyoneBox.style.left =`${twentyoneAreaWidth}px`

    const twentyoneAnimation = (twentyoneAreaWidth + 100) / 300
    twentyoneBox.style.animation = `moveLeft ${twentyoneAnimation}s linear forwards`

    twentyoneBox.addEventListener('click', () => {
      isCaught = true
      score21 += 1
      twentyoneScore.textContent = score21
      twentyoneBox.remove()

    })

    twentyoneBox.addEventListener('animationend', () => {
      if (!isCaught) {
        lives21 -= 1
        twentyoneLives.textContent = lives21

        if (lives21 == 0) {
          gameOver()
        }
      }

      twentyoneBox.remove()
    })

    twentyoneArea.appendChild(twentyoneBox)

  }

  function gameOver() {
    clearInterval(gameInternal21)

    twentyoneGameOver.hidden=false
  }

  function restartGame() {
    score21 = 0
    lives21 = 3
    twentyoneScore.textContent = score21
    twentyoneLives.textContent = lives21

    twentyoneGameOver.hidden = true

    const oldBox = twentyoneArea.querySelectorAll('.game-block')
    oldBox.forEach(box => box.remove())

    gameInternal21 = setInterval(spawnBlock21, 1000)
  }

  twentyoneRestart.addEventListener('click', restartGame)

  gameInternal21 = setInterval(spawnBlock21, 1000)


