/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoDiffIgnored = (function (_React$Component) {
    _inherits(GoDiffIgnored, _React$Component);

    function GoDiffIgnored() {
        _classCallCheck(this, GoDiffIgnored);

        _React$Component.apply(this, arguments);
    }

    GoDiffIgnored.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 2.5h-30c-1.25 0-2.5 1.25-2.5 2.5v30c0 1.25 1.25 2.5 2.5 2.5h30c1.25 0 2.5-1.25 2.5-2.5v-30c0-1.25-1.25-2.5-2.5-2.5z m-2.5 28.75c0 0.625-0.6625000000000014 1.25-1.25 1.25h-22.5c-0.7037499999999994 0-1.25-0.46875-1.25-1.25v-22.5c0-0.625 0.625-1.25 1.25-1.25h22.5c0.5874999999999986 0 1.25 0.625 1.25 1.25v22.5z m-20-7.577500000000001v3.8275000000000006h3.8287499999999994l11.17125-11.170000000000002v-3.8299999999999983h-3.8249999999999993l-11.175 11.1725z' })
            )
        );
    };

    return GoDiffIgnored;
})(React.Component);

exports['default'] = GoDiffIgnored;
module.exports = exports['default'];