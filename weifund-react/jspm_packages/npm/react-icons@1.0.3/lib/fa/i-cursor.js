/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaICursor = (function (_React$Component) {
    _inherits(FaICursor, _React$Component);

    function FaICursor() {
        _classCallCheck(this, FaICursor);

        _React$Component.apply(this, arguments);
    }

    FaICursor.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.571428571428573 2.857142857142857q-7.142857142857142 0-7.142857142857142 5v9.285714285714285h2.8571428571428577v2.8571428571428577h-2.8571428571428577v12.142857142857139q0 5.000000000000007 7.142857142857142 5.000000000000007h1.428571428571427v2.857142857142854h-1.428571428571427q-6.071428571428573 0-8.571428571428573-3.25714285714286-2.5 3.25714285714286-8.571428571428571 3.25714285714286h-1.4285714285714288v-2.857142857142854h1.4285714285714288q7.142857142857144 0 7.142857142857144-5v-12.142857142857146h-2.8571428571428577v-2.8571428571428577h2.8571428571428577v-9.285714285714285q0-5-7.142857142857144-5h-1.4285714285714288v-2.8571428571428577h1.4285714285714288q6.071428571428571 0 8.571428571428571 3.257142857142857 2.5-3.257142857142857 8.571428571428573-3.257142857142857h1.428571428571427v2.857142857142857h-1.428571428571427z' })
            )
        );
    };

    return FaICursor;
})(React.Component);

exports['default'] = FaICursor;
module.exports = exports['default'];