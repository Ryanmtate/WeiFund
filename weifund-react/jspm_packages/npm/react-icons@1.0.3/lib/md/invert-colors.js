/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdInvertColors = (function (_React$Component) {
    _inherits(MdInvertColors, _React$Component);

    function MdInvertColors() {
        _classCallCheck(this, MdInvertColors);

        _React$Component.apply(this, arguments);
    }

    MdInvertColors.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm29.4 13.2l-9.4-9.4-9.4 9.4c-5.2 5.2-5.2 13.7 0 18.9 2.6 2.6 6 3.9 9.4 3.9 3.4 0 6.8-1.3 9.4-3.9 5.2-5.2 5.2-13.7 0-18.9z m-9.4 19.4c-2.7 0-5.2-1-7.1-2.9-1.9-1.9-2.9-4.4-2.9-7s1-5.2 2.9-7.1l7.1-7.1v24.2z' })
            )
        );
    };

    return MdInvertColors;
})(React.Component);

exports['default'] = MdInvertColors;
module.exports = exports['default'];