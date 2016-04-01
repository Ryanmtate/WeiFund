/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPlayForWork = (function (_React$Component) {
    _inherits(MdPlayForWork, _React$Component);

    function MdPlayForWork() {
        _classCallCheck(this, MdPlayForWork);

        _React$Component.apply(this, arguments);
    }

    MdPlayForWork.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { fill: '#010101', d: 'm18.3 8.3v9.3h-5.8l7.5 7.5 7.5-7.5h-5.8v-9.3h-3.4z m-8.3 15c0 5.6 4.5 10 10 10s10-4.4 10-10h-3.3c0 3.7-3 6.7-6.7 6.7s-6.7-3-6.7-6.7h-3.3z' })
            )
        );
    };

    return MdPlayForWork;
})(React.Component);

exports['default'] = MdPlayForWork;
module.exports = exports['default'];