/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonTagAdd = (function (_React$Component) {
    _inherits(GoOcticonTagAdd, _React$Component);

    function GoOcticonTagAdd() {
        _classCallCheck(this, GoOcticonTagAdd);

        _React$Component.apply(this, arguments);
    }

    GoOcticonTagAdd.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm19.3 6.8c-1.1-1.1-2.7-1.8-4.4-1.8h-6.1c-3.5 0-6.3 2.8-6.3 6.2v6.2c0 1.7 0.7 3.3 1.8 4.4l15.2 15.2c1 1 2.5 1 3.5 0l11.5-11.5c1-1 1-2.5 0-3.5l-15.2-15.2z m-13.4 13.4c-0.7-0.7-1.1-1.7-1.1-2.8v-6.2c0-2.1 1.8-3.9 4-3.9h6.1c1.1 0 2.1 0.4 2.8 1.1l15.4 15.3-11.9 11.9-15.3-15.4z m1.6-10.2h5v5h-5v-5z' })
            )
        );
    };

    return GoOcticonTagAdd;
})(React.Component);

exports['default'] = GoOcticonTagAdd;
module.exports = exports['default'];