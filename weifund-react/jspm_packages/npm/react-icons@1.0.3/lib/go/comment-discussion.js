/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoCommentDiscussion = (function (_React$Component) {
    _inherits(GoCommentDiscussion, _React$Component);

    function GoCommentDiscussion() {
        _classCallCheck(this, GoCommentDiscussion);

        _React$Component.apply(this, arguments);
    }

    GoCommentDiscussion.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.5 20v-7.5h-7.5s-2.5 1.25-2.5 2.5v12.5s1.25 2.5 2.5 2.5h2.5v7.5l7.578749999999999-7.5h7.5s2.4212500000000006-1.25 2.4212500000000006-2.5v-2.5h-7.5s-5-2.5-5-5z m22.5-15h-17.5s-2.5 1.25-2.5 2.5v12.5s1.25 2.5 2.5 2.5h7.422499999999999l7.577500000000001 7.5v-7.5h2.5s2.5-1.25 2.5-2.5v-12.5s-1.25-2.5-2.5-2.5z' })
            )
        );
    };

    return GoCommentDiscussion;
})(React.Component);

exports['default'] = GoCommentDiscussion;
module.exports = exports['default'];