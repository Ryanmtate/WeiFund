/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonWatch = (function (_React$Component) {
    _inherits(GoOcticonWatch, _React$Component);

    function GoOcticonWatch() {
        _classCallCheck(this, GoOcticonWatch);

        _React$Component.apply(this, arguments);
    }

    GoOcticonWatch.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 20h5v2.5h-7.5v-10h2.5v7.5z m15 0c0 5.5-3 10.4-7.5 13v4.5c0 1.4-1.1 2.5-2.5 2.5h-10c-1.4 0-2.5-1.1-2.5-2.5v-4.5c-4.5-2.6-7.5-7.5-7.5-13s3-10.4 7.5-13v-4.5c0-1.4 1.1-2.5 2.5-2.5h10c1.4 0 2.5 1.1 2.5 2.5v4.5c4.5 2.6 7.5 7.5 7.5 13z m-2.5 0c0-6.9-5.6-12.5-12.5-12.5s-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5 12.5-5.6 12.5-12.5z' })
            )
        );
    };

    return GoOcticonWatch;
})(React.Component);

exports['default'] = GoOcticonWatch;
module.exports = exports['default'];