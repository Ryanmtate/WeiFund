/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoComment = (function (_React$Component) {
    _inherits(GoComment, _React$Component);

    function GoComment() {
        _classCallCheck(this, GoComment);

        _React$Component.apply(this, arguments);
    }

    GoComment.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm32.5 5h-25c-2.422500000000001 0-5 2.5-5 5v15c0 5 5 5 5 5h2.5v10l10-10h12.5s5-2.65625 5-5v-15c0-2.4224999999999994-2.5-5-5-5z' })
            )
        );
    };

    return GoComment;
})(React.Component);

exports['default'] = GoComment;
module.exports = exports['default'];