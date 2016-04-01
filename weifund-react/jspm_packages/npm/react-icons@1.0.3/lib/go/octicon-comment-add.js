/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonCommentAdd = (function (_React$Component) {
    _inherits(GoOcticonCommentAdd, _React$Component);

    function GoOcticonCommentAdd() {
        _classCallCheck(this, GoOcticonCommentAdd);

        _React$Component.apply(this, arguments);
    }

    GoOcticonCommentAdd.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 5h-30c-1.4 0-2.5 1.1-2.5 2.5v20c0 1.4 1.1 2.5 2.5 2.5h5v8.7l8.8-8.7h16.2c1.4 0 2.5-1.1 2.5-2.5v-20c0-1.4-1.1-2.5-2.5-2.5z m0 22.5h-17.5l-5 5v-5h-7.5v-20h30v20z' })
            )
        );
    };

    return GoOcticonCommentAdd;
})(React.Component);

exports['default'] = GoOcticonCommentAdd;
module.exports = exports['default'];