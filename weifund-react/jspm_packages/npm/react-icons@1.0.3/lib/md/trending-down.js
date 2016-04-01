/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdTrendingDown = (function (_React$Component) {
    _inherits(MdTrendingDown, _React$Component);

    function MdTrendingDown() {
        _classCallCheck(this, MdTrendingDown);

        _React$Component.apply(this, arguments);
    }

    MdTrendingDown.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.64 30l3.828333333333333-3.828333333333333-8.123333333333335-8.125-6.640000000000001 6.640000000000001-12.343333333333334-12.343333333333334 2.3416666666666694-2.3433333333333337 10 10 6.640000000000001-6.640000000000001 10.466666666666669 10.466666666666669 3.8316666666666634-3.826666666666668v10h-10z' })
            )
        );
    };

    return MdTrendingDown;
})(React.Component);

exports['default'] = MdTrendingDown;
module.exports = exports['default'];