/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonGist = (function (_React$Component) {
    _inherits(GoOcticonGist, _React$Component);

    function GoOcticonGist() {
        _classCallCheck(this, GoOcticonGist);

        _React$Component.apply(this, arguments);
    }

    GoOcticonGist.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.7 12.5l6.3 6.2-6.3 6.3-1.8-1.9 4.3-4.4-4.3-4.3 1.8-1.9z m-7.4 0l-6.3 6.2 6.3 6.3 1.8-1.9-4.3-4.4 4.3-4.3-1.8-1.9z m-11.3 20v-27.5c0-1.4 1.1-2.5 2.5-2.5h25c1.4 0 2.5 1.1 2.5 2.5v27.5c0 1.4-1.1 2.5-2.5 2.5h-25c-1.4 0-2.5-1.1-2.5-2.5z m2.5 0h25v-27.5h-25v27.5z' })
            )
        );
    };

    return GoOcticonGist;
})(React.Component);

exports['default'] = GoOcticonGist;
module.exports = exports['default'];