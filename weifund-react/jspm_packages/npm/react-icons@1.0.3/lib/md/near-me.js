/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdNearMe = (function (_React$Component) {
    _inherits(MdNearMe, _React$Component);

    function MdNearMe() {
        _classCallCheck(this, MdNearMe);

        _React$Component.apply(this, arguments);
    }

    MdNearMe.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 5l-12.578333333333333 30h-1.6400000000000006l-4.376666666666665-11.406666666666666-11.405000000000001-4.376666666666669v-1.6383333333333319z' })
            )
        );
    };

    return MdNearMe;
})(React.Component);

exports['default'] = MdNearMe;
module.exports = exports['default'];