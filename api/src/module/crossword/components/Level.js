import {loadLevelConfig} from '../utils.js'

class Level {
  load(levelNum) {
    this.setConfig(loadLevelConfig(levelNum))
  }

  setConfig(config){
    // add each config key(k) with the value(v) to this object
    for (const [k, v] of Object.entries(config)) {
      this[k] = v
    }
  }
}

export default new Level()