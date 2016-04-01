/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalActivity = (function (_React$Component) {
    _inherits(MdLocalActivity, _React$Component);

    function MdLocalActivity() {
        _classCallCheck(this, MdLocalActivity);

        _React$Component.apply(this, arguments);
    }

    MdLocalActivity.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.3 20c0-1.8 1.5-3.3 3.4-3.3v-6.7c0-1.8-1.5-3.3-3.4-3.3h-26.6c-1.9 0-3.3 1.5-3.3 3.3v6.7c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.4 3.3v6.7c0 1.8 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.5 3.4-3.3v-6.7c-1.9 0-3.4-1.5-3.4-3.3z m-7.3 8l-6-3.8-6 3.8 1.8-6.9-5.4-4.5 7-0.4 2.6-6.5 2.6 6.6 7 0.4-5.5 4.5 1.9 6.8z' })
            )
        );
    };

    return MdLocalActivity;
})(React.Component);

exports['default'] = MdLocalActivity;
module.exports = exports['default'];