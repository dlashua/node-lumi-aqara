const Subdevice = require('./subdevice')

class WallSwitch extends Subdevice {
  constructor (opts) {
    super({ sid: opts.sid, type: 'wall_switch' })
  }

  _handleState (state) {
    super._handleState(state)
    Object.keys(state).forEach(function(key) {    
      this._handleChannel(state[key],key)
    }, this)
    
  }

  _handleChannel(state, switchChannel) {

    switch (state) {
      case 'click':
        this.emit('click', switchChannel)
        break
      case 'double_click':
        this.emit('doubleClick', switchChannel)
        break
      case 'long_click':
        this.emit('longClick', switchChannel)
        break
    }

  }

}

module.exports = WallSwitch
