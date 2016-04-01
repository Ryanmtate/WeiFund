/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdStarBorder = (function (_React$Component) {
    _inherits(MdStarBorder, _React$Component);

    function MdStarBorder() {
        _classCallCheck(this, MdStarBorder);

        _React$Component.apply(this, arguments);
    }

    MdStarBorder.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm36.7 15.4l-12-1-4.7-11.1-4.7 11.1-12 1 9.1 7.9-2.7 11.7 10.3-6.2 10.3 6.2-2.7-11.7 9.1-7.9z m-16.7 10.3l-6.3 3.8 1.7-7.2-5.5-4.8 7.3-0.6 2.8-6.7 2.9 6.7 7.3 0.6-5.6 4.8 1.7 7.2-6.3-3.8z' })
            )
        );
    };

    return MdStarBorder;
})(React.Component);

exports['default'] = MdStarBorder;
module.exports = exports['default'];