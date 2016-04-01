/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSettingsBackupRestore = (function (_React$Component) {
    _inherits(MdSettingsBackupRestore, _React$Component);

    function MdSettingsBackupRestore() {
        _classCallCheck(this, MdSettingsBackupRestore);

        _React$Component.apply(this, arguments);
    }

    MdSettingsBackupRestore.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.3 20c0-1.8-1.5-3.3-3.3-3.3s-3.3 1.5-3.3 3.3 1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3z m-3.3-15c-8.3 0-15 6.7-15 15h-5l6.7 6.7 6.6-6.7h-5c0-6.4 5.3-11.7 11.7-11.7s11.7 5.2 11.7 11.7-5.2 11.7-11.7 11.7c-2.5 0-4.9-0.8-6.8-2.2l-2.3 2.4c2.5 1.9 5.7 3.1 9.1 3.1 8.3 0 15-6.7 15-15s-6.7-15-15-15z' })
            )
        );
    };

    return MdSettingsBackupRestore;
})(React.Component);

exports['default'] = MdSettingsBackupRestore;
module.exports = exports['default'];