const Subdevice = require('./subdevice')

class WallSwitch extends Subdevice {
  constructor (opts) {
    super({ sid: opts.sid, type: 'wall_switch' })
  }

  _handleState (state) {
    super._handleState(state)

    if (typeof state["channel_0"] !== 'undefined') {
      this._handleChannel(state["channel_0"],"left")
      return
    }
 
    if (typeof state["channel_1"] !== 'undefined') {
      this._handleChannel(state["channel_1"],"right")
      return
    }
    
    if (typeof state["channel_2"] !== 'undefined') {
      this._handleChannel(state["channel_2"],"both")
      return
    }
    
  }

  _handleChannel(state, switchChannel) {

    switch (state) {
      case 'click':
        this.emit(switchChannel + '_click')
        break
      case 'double_click':
        this.emit(switchChannel + '_doubleClick')
        break
      case 'long_click':
        this.emit(switchChannel + '_longClick')
        break
    }

  }

}

module.exports = WallSwitch
