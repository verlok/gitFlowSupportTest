import support from './browsers';
import jack from './shit';

function MyScript(options) {
    jack();
    this.options = options;
    this.browserSupport = support;
}

var myScript = new MyScript;