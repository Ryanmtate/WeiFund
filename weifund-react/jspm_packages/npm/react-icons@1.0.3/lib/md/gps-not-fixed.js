/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdGpsNotFixed = (function (_React$Component) {
    _inherits(MdGpsNotFixed, _React$Component);

    function MdGpsNotFixed() {
        _classCallCheck(this, MdGpsNotFixed);

        _React$Component.apply(this, arguments);
    }

    MdGpsNotFixed.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm34.9 18.3c-0.8-6.9-6.3-12.4-13.2-13.2v-3.4h-3.4v3.4c-6.9 0.8-12.4 6.3-13.2 13.2h-3.4v3.4h3.4c0.8 6.9 6.3 12.4 13.2 13.2v3.4h3.4v-3.4c6.9-0.8 12.4-6.3 13.2-13.2h3.4v-3.4h-3.4z m-14.9 13.4c-6.4 0-11.7-5.2-11.7-11.7s5.2-11.7 11.7-11.7 11.7 5.2 11.7 11.7-5.2 11.7-11.7 11.7z' })
            )
        );
    };

    return MdGpsNotFixed;
})(React.Component);

exports['default'] = MdGpsNotFixed;
module.exports = exports['default'];