/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoScreenFull = (function (_React$Component) {
    _inherits(GoScreenFull, _React$Component);

    function GoScreenFull() {
        _classCallCheck(this, GoScreenFull);

        _React$Component.apply(this, arguments);
    }

    GoScreenFull.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm7.5 30h24.994999999999997v-20h-24.994999999999997v20z m4.9975000000000005-15h15.000000000000002v10h-15v-10z m-7.4975000000000005-7.4975000000000005h7.4975000000000005v-2.5h-9.9975v9.9975h2.5v-7.4975000000000005z m0 17.497500000000002h-2.5v9.997500000000002h9.9975v-2.4975000000000023h-7.4975000000000005v-7.5z m22.497500000000002-19.997500000000002v2.5000000000000018h7.497500000000002v7.4975000000000005h2.5v-9.9975h-9.997500000000002z m7.497499999999995 27.497500000000002h-7.497500000000002v2.4975000000000023h9.997500000000002v-9.997500000000002h-2.5v7.5z' })
            )
        );
    };

    return GoScreenFull;
})(React.Component);

exports['default'] = GoScreenFull;
module.exports = exports['default'];