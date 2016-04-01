/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFavoriteBorder = (function (_React$Component) {
    _inherits(MdFavoriteBorder, _React$Component);

    function MdFavoriteBorder() {
        _classCallCheck(this, MdFavoriteBorder);

        _React$Component.apply(this, arguments);
    }

    MdFavoriteBorder.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.5 5c-2.9 0-5.7 1.3-7.5 3.5-1.8-2.1-4.6-3.5-7.5-3.5-5.1 0-9.2 4-9.2 9.2 0 6.3 5.7 11.4 14.3 19.2l2.4 2.2 2.4-2.2c8.6-7.8 14.3-12.9 14.3-19.2 0-5.2-4.1-9.2-9.2-9.2z m-7.3 25.9l-0.2 0.2-0.2-0.2c-7.9-7.2-13.1-11.9-13.1-16.7 0-3.4 2.5-5.9 5.8-5.9 2.6 0 5.1 1.7 5.9 4h3.2c0.8-2.3 3.3-4 5.9-4 3.3 0 5.8 2.5 5.8 5.9 0 4.8-5.2 9.5-13.1 16.7z' })
            )
        );
    };

    return MdFavoriteBorder;
})(React.Component);

exports['default'] = MdFavoriteBorder;
module.exports = exports['default'];