/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSystemUpdateAlt = (function (_React$Component) {
    _inherits(MdSystemUpdateAlt, _React$Component);

    function MdSystemUpdateAlt() {
        _classCallCheck(this, MdSystemUpdateAlt);

        _React$Component.apply(this, arguments);
    }

    MdSystemUpdateAlt.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 27.5l6.7-6.7h-5v-15h-3.4v15h-5l6.7 6.7z m15-21.7h-10v3.3h10v23.4h-30v-23.3h10v-3.4h-10c-1.8 0-3.3 1.5-3.3 3.4v23.3c0 1.8 1.5 3.3 3.3 3.3h30c1.8 0 3.3-1.5 3.3-3.3v-23.3c0-1.9-1.5-3.4-3.3-3.4z' })
            )
        );
    };

    return MdSystemUpdateAlt;
})(React.Component);

exports['default'] = MdSystemUpdateAlt;
module.exports = exports['default'];