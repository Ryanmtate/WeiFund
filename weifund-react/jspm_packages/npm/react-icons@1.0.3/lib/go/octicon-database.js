/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonDatabase = (function (_React$Component) {
    _inherits(GoOcticonDatabase, _React$Component);

    function GoOcticonDatabase() {
        _classCallCheck(this, GoOcticonDatabase);

        _React$Component.apply(this, arguments);
    }

    GoOcticonDatabase.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 37.5c-8.3 0-15-2.2-15-5v-5c0-0.4 0.2-0.8 0.5-1.3 1.7 2.2 7.5 3.8 14.5 3.8s12.8-1.6 14.5-3.8c0.3 0.5 0.5 0.9 0.5 1.3v5c0 2.8-6.7 5-15 5z m0-10c-8.3 0-15-2.2-15-5v-5c0-0.3 0.1-0.5 0.2-0.8 0.1-0.1 0.2-0.3 0.3-0.5 1.7 2.2 7.5 3.8 14.5 3.8s12.8-1.6 14.5-3.8c0.1 0.2 0.2 0.4 0.3 0.5 0.1 0.3 0.2 0.5 0.2 0.8v5c0 2.8-6.7 5-15 5z m0-10c-8.3 0-15-2.2-15-5v-5c0-2.8 6.7-5 15-5 8.3 0 15 2.2 15 5v5c0 2.8-6.7 5-15 5z m0-12.5c-5.5 0-10 1.1-10 2.5s4.5 2.5 10 2.5 10-1.1 10-2.5-4.5-2.5-10-2.5z' })
            )
        );
    };

    return GoOcticonDatabase;
})(React.Component);

exports['default'] = GoOcticonDatabase;
module.exports = exports['default'];