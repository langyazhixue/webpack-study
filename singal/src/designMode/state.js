// 状态模式
import StateMachine from 'javascript-state-machine'

class State {
  constructor(color) {
    this.color = color
  }
  handle(context) {
    console.log(`trun to ${this.color} light`)
    context.setState(this)
  }
}

// 主体
class Context {
  constructor(){
    this.state = null 
  }
  getState() {
    return this.state
  }
  setState (state) {
    this.state = state
  }
}

var context = new Context()
var red = new State('red')
var green = new State('green')
var yellow = new State('yellow')
red.handle(context)
console.log(context.getState())

// 状态机制


window.onload =  function(){
  const fsm = new StateMachine({
    init:'收藏',
    transitions:[
      {
        name:'doStore',
        from:'收藏',
        to:'取消收藏'
      },{
        name:'deleteStore',
        from:'取消收藏',
        to:'收藏'
      }
    ],
    methods: {
      // 执行收藏
      onDoStore: function(){
        alert('收藏成功')
        updateText()
      },
      onDeleteStore: function(){
        alert('取消收藏成功')
        updateText()
      }
    },
  })
  var $btn = $('#btn')
  $('#btn').text(fsm.state)
  $btn.click(function(){
    if(fsm.is('收藏')) {
      fsm.doStore()
    } else {
      fsm.deleteStore()
    }
  })

  function updateText (){
    $btn.text(fsm.state)
  }
}




//  写一个简单的 Promise
// Promise 三种状态：pending fullfillesd rejected
// pending -> fullfiled 或者 pending -> rejected
// 不能逆向变化

class MyPromise {
  constructor(fn) {

  }
}




