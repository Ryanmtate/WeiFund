/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAssignmentTurnedIn = (function (_React$Component) {
    _inherits(MdAssignmentTurnedIn, _React$Component);

    function MdAssignmentTurnedIn() {
        _classCallCheck(this, MdAssignmentTurnedIn);

        _React$Component.apply(this, arguments);
    }

    MdAssignmentTurnedIn.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.7 5h-7c-0.7-1.9-2.5-3.3-4.7-3.3-2.2 0-4 1.4-4.7 3.3h-7c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m-11.7 0c0.9 0 1.7 0.8 1.7 1.7s-0.8 1.6-1.7 1.6-1.7-0.7-1.7-1.6 0.8-1.7 1.7-1.7z m-3.3 23.3l-6.7-6.6 2.3-2.4 4.4 4.3 11-11 2.3 2.4-13.3 13.3z' })
            )
        );
    };

    return MdAssignmentTurnedIn;
})(React.Component);

exports['default'] = MdAssignmentTurnedIn;
module.exports = exports['default'];