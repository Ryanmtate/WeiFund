/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFullscreen = (function (_React$Component) {
    _inherits(MdFullscreen, _React$Component);

    function MdFullscreen() {
        _classCallCheck(this, MdFullscreen);

        _React$Component.apply(this, arguments);
    }

    MdFullscreen.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.36 8.360000000000001h8.283333333333331v8.283333333333333h-3.2833333333333314v-5h-5v-3.283333333333333z m5 20v-5h3.2833333333333314v8.283333333333331h-8.283333333333331v-3.2833333333333314h5z m-20-11.719999999999999v-8.283333333333333h8.283333333333331v3.283333333333333h-5v5h-3.283333333333333z m3.280000000000001 6.719999999999999v5h5v3.2833333333333314h-8.283333333333333v-8.283333333333331h3.283333333333333z' })
            )
        );
    };

    return MdFullscreen;
})(React.Component);

exports['default'] = MdFullscreen;
module.exports = exports['default'];