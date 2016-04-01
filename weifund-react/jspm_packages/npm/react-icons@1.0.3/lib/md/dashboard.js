/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdDashboard = (function (_React$Component) {
    _inherits(MdDashboard, _React$Component);

    function MdDashboard() {
        _classCallCheck(this, MdDashboard);

        _React$Component.apply(this, arguments);
    }

    MdDashboard.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.64 5h13.36v10h-13.36v-10z m0 30v-16.64h13.36v16.64h-13.36z m-16.64 0v-10h13.36v10h-13.36z m0-13.36v-16.64h13.36v16.64h-13.36z' })
            )
        );
    };

    return MdDashboard;
})(React.Component);

exports['default'] = MdDashboard;
module.exports = exports['default'];