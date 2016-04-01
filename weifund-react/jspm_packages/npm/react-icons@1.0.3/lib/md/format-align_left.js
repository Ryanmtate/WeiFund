/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatAlignLeft = (function (_React$Component) {
    _inherits(MdFormatAlignLeft, _React$Component);

    function MdFormatAlignLeft() {
        _classCallCheck(this, MdFormatAlignLeft);

        _React$Component.apply(this, arguments);
    }

    MdFormatAlignLeft.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 5h30v3.3599999999999994h-30v-3.3599999999999994z m0 30v-3.3599999999999994h30v3.3599999999999994h-30z m0-13.36v-3.2833333333333314h30v3.2833333333333314h-30z m20-10v3.3599999999999994h-20v-3.3599999999999994h20z m0 13.36v3.3599999999999994h-20v-3.3599999999999994h20z' })
            )
        );
    };

    return MdFormatAlignLeft;
})(React.Component);

exports['default'] = MdFormatAlignLeft;
module.exports = exports['default'];