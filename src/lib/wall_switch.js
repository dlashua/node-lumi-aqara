const Subdevice = require('./subdevice')

class WallSwitch extends Subdevice {
  constructor (opts) {
    super({ sid: opts.sid, type: 'wall_switch' })
  }

  _handleState (state) {
    super._handleState(state)
    Object.keys(state).forEach(function(key) {
      if (key !== "cached") {
        this._handleChannel(state[key],key)
      }
    }, this)
    
  }

  _handleChannel(state, switchChannel) {

    switch (state) {
      case 'click':
      case 'both_click':
        this.emit('click', switchChannel)
        break
      case 'double_click':
      case 'double_both_click':
        this.emit('doubleClick', switchChannel)
        break
      case 'long_click':
      case 'long_both_click':
        this.emit('longClick', switchChannel)
        break
      default:
        this.emit('unknown', {'channel':switchChannel, 'state':state})
        break
    }

  }

}

module.exports = WallSwitch
