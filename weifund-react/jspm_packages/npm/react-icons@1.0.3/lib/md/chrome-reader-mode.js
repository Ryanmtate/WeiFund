/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdChromeReaderMode = (function (_React$Component) {
    _inherits(MdChromeReaderMode, _React$Component);

    function MdChromeReaderMode() {
        _classCallCheck(this, MdChromeReaderMode);

        _React$Component.apply(this, arguments);
    }

    MdChromeReaderMode.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.7 20h11.6v2.5h-11.6z m0-4.2h11.6v2.5h-11.6z m0 8.4h11.6v2.5h-11.6z m13.3-17.5h-30c-1.8 0-3.3 1.5-3.3 3.3v21.7c0 1.8 1.5 3.3 3.3 3.3h30c1.8 0 3.3-1.5 3.3-3.3v-21.7c0-1.8-1.5-3.3-3.3-3.3z m0 25h-15v-21.7h15v21.7z' })
            )
        );
    };

    return MdChromeReaderMode;
})(React.Component);

exports['default'] = MdChromeReaderMode;
module.exports = exports['default'];