/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonLink = (function (_React$Component) {
    _inherits(GoOcticonLink, _React$Component);

    function GoOcticonLink() {
        _classCallCheck(this, GoOcticonLink);

        _React$Component.apply(this, arguments);
    }

    GoOcticonLink.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 22.5h2.5v2.5h-2.5c-3.7 0-7.5-4.2-7.5-8.8s3.9-8.7 7.5-8.7h10c3.6 0 7.5 4.2 7.5 8.7 0 3.6-2.3 6.8-5 8.2v-2.9c1.4-1.1 2.5-3.2 2.5-5.3 0-3.2-2.5-6.2-5-6.2h-10c-2.5 0-5 3-5 6.2s2.5 6.3 5 6.3z m22.5-7.5h-2.5v2.5h2.5c2.5 0 5 3 5 6.2s-2.5 6.3-5 6.3h-10c-2.5 0-5-3-5-6.3 0-2 1.1-4.1 2.5-5.2v-2.9c-2.7 1.4-5 4.6-5 8.1 0 4.6 3.9 8.8 7.5 8.8h10c3.6 0 7.5-4.2 7.5-8.8s-3.8-8.7-7.5-8.7z' })
            )
        );
    };

    return GoOcticonLink;
})(React.Component);

exports['default'] = GoOcticonLink;
module.exports = exports['default'];