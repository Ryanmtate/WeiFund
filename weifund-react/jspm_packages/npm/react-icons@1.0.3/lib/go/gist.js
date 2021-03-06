/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoGist = (function (_React$Component) {
    _inherits(GoGist, _React$Component);

    function GoGist() {
        _classCallCheck(this, GoGist);

        _React$Component.apply(this, arguments);
    }

    GoGist.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.25 15l3.75 3.75-3.75 3.75 2.5 2.5 6.25-6.25-6.25-6.25-2.5 2.5z m-16.25-12.5v32.5h30v-32.5h-30z m27.5 30h-25v-27.5h25v27.5z m-13.75-10l-3.75-3.75 3.75-3.75-2.5-2.5-6.25 6.25 6.25 6.25 2.5-2.5z' })
            )
        );
    };

    return GoGist;
})(React.Component);

exports['default'] = GoGist;
module.exports = exports['default'];