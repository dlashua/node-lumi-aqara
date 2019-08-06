const Subdevice = require('./subdevice')

class WallSwitch extends Subdevice {
  constructor (opts) {
    super({ sid: opts.sid, type: 'wall_switch' })
  }

  _handleState (state) {
    super._handleState(state)
    Object.keys(state).forEach(function(key) {
      if (key !== "cached") {
        this.emit('button', {channel:key, action:state[key]})
      }
    }, this)
    
  }

}

module.exports = WallSwitch
