/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonFileDirectoryCreate = (function (_React$Component) {
    _inherits(GoOcticonFileDirectoryCreate, _React$Component);

    function GoOcticonFileDirectoryCreate() {
        _classCallCheck(this, GoOcticonFileDirectoryCreate);

        _React$Component.apply(this, arguments);
    }

    GoOcticonFileDirectoryCreate.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 22.5h-12.5v12.5h-5v-12.5h-12.5v-5h12.5v-12.5h5v12.5h12.5v5z' })
            )
        );
    };

    return GoOcticonFileDirectoryCreate;
})(React.Component);

exports['default'] = GoOcticonFileDirectoryCreate;
module.exports = exports['default'];