/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonGear = (function (_React$Component) {
    _inherits(GoOcticonGear, _React$Component);

    function GoOcticonGear() {
        _classCallCheck(this, GoOcticonGear);

        _React$Component.apply(this, arguments);
    }

    GoOcticonGear.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.5 21.9v-4l-4.8-1.6-1.2-2.7 2.2-4.6-2.8-2.8-4.5 2.2-2.8-1.1-1.7-4.8h-4l-1.5 4.8-2.8 1.2-4.6-2.2-2.8 2.8 2.2 4.5-1.1 2.8-4.8 1.7v4l4.8 1.6 1.2 2.7-2.2 4.6 2.8 2.8 4.5-2.2 2.8 1.1 1.7 4.8h4l1.5-4.8 2.8-1.2 4.6 2.2 2.8-2.8-2.3-4.5 1.2-2.8 4.8-1.7z m-17.5 5.6c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z' })
            )
        );
    };

    return GoOcticonGear;
})(React.Component);

exports['default'] = GoOcticonGear;
module.exports = exports['default'];