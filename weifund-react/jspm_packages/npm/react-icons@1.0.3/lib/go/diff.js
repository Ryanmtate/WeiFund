/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoDiff = (function (_React$Component) {
    _inherits(GoDiff, _React$Component);

    function GoDiff() {
        _classCallCheck(this, GoDiff);

        _React$Component.apply(this, arguments);
    }

    GoDiff.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 10h-5v5h-5v5h5v5h5v-5h5v-5h-5v-5z m-10 25h15v-5h-15v5z m17.5-35h-20v2.5h18.75l8.75 8.75v23.75h2.5v-25l-10-10z m-25 5v35h30v-27.5l-7.5-7.5h-22.5z m27.5 32.5h-25v-30h18.75l6.25 6.25v23.75z' })
            )
        );
    };

    return GoDiff;
})(React.Component);

exports['default'] = GoDiff;
module.exports = exports['default'];