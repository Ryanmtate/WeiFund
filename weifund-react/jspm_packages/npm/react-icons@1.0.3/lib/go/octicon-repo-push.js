/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonRepoPush = (function (_React$Component) {
    _inherits(GoOcticonRepoPush, _React$Component);

    function GoOcticonRepoPush() {
        _classCallCheck(this, GoOcticonRepoPush);

        _React$Component.apply(this, arguments);
    }

    GoOcticonRepoPush.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 7.5h-2.5v-2.5h2.5v2.5z m-2.5 5h2.5v-2.5h-2.5v2.5z m10 0l-7.5 10h5v17.5h5v-17.5h5l-7.5-10z m10-12.5h-25c-1.4 0-2.5 1.1-2.5 2.5v30c0 1.4 1.1 2.5 2.5 2.5h10v-2.5h-10v-5h10v-2.5h-7.5v-22.5h22.5l0 22.5h-5v2.5h5v5h-5v2.5h5c1.4 0 2.5-1.1 2.5-2.5v-30c0-1.4-1.1-2.5-2.5-2.5z' })
            )
        );
    };

    return GoOcticonRepoPush;
})(React.Component);

exports['default'] = GoOcticonRepoPush;
module.exports = exports['default'];