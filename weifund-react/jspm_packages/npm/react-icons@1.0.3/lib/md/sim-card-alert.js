/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSimCardAlert = (function (_React$Component) {
    _inherits(MdSimCardAlert, _React$Component);

    function MdSimCardAlert() {
        _classCallCheck(this, MdSimCardAlert);

        _React$Component.apply(this, arguments);
    }

    MdSimCardAlert.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 3.3h-13.3l-10 10 0 20c0 1.9 1.5 3.4 3.3 3.4h20c1.8 0 3.3-1.5 3.3-3.4v-26.6c0-1.9-1.5-3.4-3.3-3.4z m-8.3 25h-3.4v-3.3h3.4v3.3z m0-6.6h-3.4v-8.4h3.4v8.4z' })
            )
        );
    };

    return MdSimCardAlert;
})(React.Component);

exports['default'] = MdSimCardAlert;
module.exports = exports['default'];