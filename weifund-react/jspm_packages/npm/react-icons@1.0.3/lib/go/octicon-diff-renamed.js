/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonDiffRenamed = (function (_React$Component) {
    _inherits(GoOcticonDiffRenamed, _React$Component);

    function GoOcticonDiffRenamed() {
        _classCallCheck(this, GoOcticonDiffRenamed);

        _React$Component.apply(this, arguments);
    }

    GoOcticonDiffRenamed.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17.5 22.5h-7.5v-5h7.5v-7.5l12.5 10-12.5 10v-7.5z m20-17.5v30c0 1.4-1.1 2.5-2.5 2.5h-30c-1.4 0-2.5-1.1-2.5-2.5v-30c0-1.4 1.1-2.5 2.5-2.5h30c1.4 0 2.5 1.1 2.5 2.5z m-2.5 0h-30v30h30v-30z' })
            )
        );
    };

    return GoOcticonDiffRenamed;
})(React.Component);

exports['default'] = GoOcticonDiffRenamed;
module.exports = exports['default'];