import support from './browsers';
import jack from './shit';
import skull from './death';

function MyScript(options) {
    this.options = options;
    this.browserSupport = support; 
    return skull();
}

var myScript = new MyScript;