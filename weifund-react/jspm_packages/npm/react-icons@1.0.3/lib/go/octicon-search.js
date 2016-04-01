/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonSearch = (function (_React$Component) {
    _inherits(GoOcticonSearch, _React$Component);

    function GoOcticonSearch() {
        _classCallCheck(this, GoOcticonSearch);

        _React$Component.apply(this, arguments);
    }

    GoOcticonSearch.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm39.3 35.7l-9.6-9.5c1.8-2.5 2.8-5.5 2.8-8.7 0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15c3.2 0 6.2-1 8.7-2.8l9.5 9.6c0.5 0.5 1.2 0.7 1.8 0.7s1.3-0.2 1.8-0.7c0.9-1 0.9-2.6 0-3.6z m-21.8-6.4c-6.5 0-11.8-5.3-11.8-11.8s5.3-11.8 11.8-11.8 11.8 5.3 11.8 11.8-5.3 11.8-11.8 11.8z' })
            )
        );
    };

    return GoOcticonSearch;
})(React.Component);

exports['default'] = GoOcticonSearch;
module.exports = exports['default'];