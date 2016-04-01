/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdThumbsUpDown = (function (_React$Component) {
    _inherits(MdThumbsUpDown, _React$Component);

    function MdThumbsUpDown() {
        _classCallCheck(this, MdThumbsUpDown);

        _React$Component.apply(this, arguments);
    }

    MdThumbsUpDown.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 10c0-0.9-0.7-1.7-1.7-1.7h-8.6l1.1-5.3 0-0.4c0-0.5-0.2-0.9-0.5-1.3l-1.3-1.3-8.3 8.2c-0.4 0.5-0.7 1.1-0.7 1.8v10.8c0 1.4 1.1 2.5 2.5 2.5h11.3c1 0 1.9-0.6 2.3-1.5l3.7-8.8c0.1-0.3 0.2-0.6 0.2-0.9v-2.1z m17.5 6.7h-11.2c-1.1 0-2 0.6-2.4 1.5l-3.7 8.8c-0.1 0.3-0.2 0.6-0.2 0.9v2.1c0 0.9 0.8 1.7 1.7 1.7h8.6l-1.1 5.3 0 0.4c0 0.5 0.2 1 0.5 1.3l1.3 1.3 8.3-8.2c0.4-0.5 0.7-1.1 0.7-1.8v-10.8c0-1.4-1.1-2.5-2.5-2.5z' })
            )
        );
    };

    return MdThumbsUpDown;
})(React.Component);

exports['default'] = MdThumbsUpDown;
module.exports = exports['default'];