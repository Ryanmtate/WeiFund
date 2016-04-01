/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPermScanWifi = (function (_React$Component) {
    _inherits(MdPermScanWifi, _React$Component);

    function MdPermScanWifi() {
        _classCallCheck(this, MdPermScanWifi);

        _React$Component.apply(this, arguments);
    }

    MdPermScanWifi.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 5c-8.4 0-14.7 3.1-20 7.1l20 24.6 20-24.6c-5.2-4-11.6-7.1-20-7.1z m1.7 21.7h-3.4v-10h3.4v10z m-3.4-13.4v-3.3h3.4v3.3h-3.4z' })
            )
        );
    };

    return MdPermScanWifi;
})(React.Component);

exports['default'] = MdPermScanWifi;
module.exports = exports['default'];