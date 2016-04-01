/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdApps = (function (_React$Component) {
    _inherits(MdApps, _React$Component);

    function MdApps() {
        _classCallCheck(this, MdApps);

        _React$Component.apply(this, arguments);
    }

    MdApps.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.64 33.36v-6.716666666666669h6.716666666666669v6.716666666666669h-6.716666666666669z m0-10v-6.716666666666669h6.716666666666669v6.716666666666669h-6.716666666666669z m-10-10v-6.716666666666668h6.716666666666669v6.716666666666668h-6.716666666666669z m10-6.720000000000001h6.716666666666669v6.716666666666667h-6.716666666666669v-6.716666666666668z m-10 16.72v-6.716666666666669h6.716666666666669v6.716666666666669h-6.716666666666669z m-10 0v-6.716666666666669h6.716666666666669v6.716666666666669h-6.716666666666668z m0 10v-6.716666666666669h6.716666666666669v6.716666666666669h-6.716666666666668z m10 0v-6.716666666666669h6.716666666666669v6.716666666666669h-6.716666666666669z m-10-20v-6.716666666666668h6.716666666666669v6.716666666666668h-6.716666666666668z' })
            )
        );
    };

    return MdApps;
})(React.Component);

exports['default'] = MdApps;
module.exports = exports['default'];