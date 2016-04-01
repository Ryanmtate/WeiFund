/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdNowWidgets = (function (_React$Component) {
    _inherits(MdNowWidgets, _React$Component);

    function MdNowWidgets() {
        _classCallCheck(this, MdNowWidgets);

        _React$Component.apply(this, arguments);
    }

    MdNowWidgets.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.733333333333334 2.8133333333333335l9.454999999999998 9.453333333333333-9.453333333333333 9.375h7.265000000000001v13.358333333333334h-13.36v-13.358333333333334h6.093333333333334l-9.375-9.374999999999998v6.093333333333332h-13.358333333333334v-13.36h13.358333333333334v7.2666666666666675z m-22.733333333333334 32.18666666666667v-13.36h13.36v13.36h-13.36z' })
            )
        );
    };

    return MdNowWidgets;
})(React.Component);

exports['default'] = MdNowWidgets;
module.exports = exports['default'];