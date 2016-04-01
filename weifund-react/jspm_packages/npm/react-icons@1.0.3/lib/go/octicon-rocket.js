/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonRocket = (function (_React$Component) {
    _inherits(GoOcticonRocket, _React$Component);

    function GoOcticonRocket() {
        _classCallCheck(this, GoOcticonRocket);

        _React$Component.apply(this, arguments);
    }

    GoOcticonRocket.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm40 0s-0.2 0.9-0.7 2.7c-0.6 1.7-1.4 3.9-2.7 6.6-1.8-0.2-3.2-0.8-4.1-1.8s-1.6-2.3-1.8-4.1c2.7-1.3 4.9-2.2 6.6-2.7 1.8-0.5 2.7-0.7 2.7-0.7z m-9.6 9.6c-0.6-0.7-1.1-1.4-1.5-2.2-0.4-0.8-0.7-1.7-0.9-2.6-1.4 0.9-2.9 1.8-4.3 2.9-1.5 1-2.9 2.3-4.2 3.7-1.8 1.7-3.4 4.5-4.5 6.1h-7.5l-7.5 7.5h7.5l5-5c-0.9 1.9-2.5 7.5-2.5 7.5l2.5 2.5c0 0 5.6-1.6 7.5-2.5l-5 5v7.5l7.5-7.5v-7.5c1.6-1.1 4.4-2.7 6.1-4.5 1.4-1.3 2.6-2.8 3.7-4.2 1.1-1.5 2-2.9 2.9-4.3-0.9-0.2-1.8-0.5-2.6-0.9-0.8-0.4-1.5-0.9-2.2-1.5z' })
            )
        );
    };

    return GoOcticonRocket;
})(React.Component);

exports['default'] = GoOcticonRocket;
module.exports = exports['default'];