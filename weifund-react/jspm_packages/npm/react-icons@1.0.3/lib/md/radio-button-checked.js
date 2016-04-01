/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdRadioButtonChecked = (function (_React$Component) {
    _inherits(MdRadioButtonChecked, _React$Component);

    function MdRadioButtonChecked() {
        _classCallCheck(this, MdRadioButtonChecked);

        _React$Component.apply(this, arguments);
    }

    MdRadioButtonChecked.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 11.7c-4.6 0-8.3 3.7-8.3 8.3s3.7 8.3 8.3 8.3 8.3-3.7 8.3-8.3-3.7-8.3-8.3-8.3z m0-8.4c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7-7.5-16.7-16.7-16.7z m0 30c-7.4 0-13.3-5.9-13.3-13.3s5.9-13.3 13.3-13.3 13.3 5.9 13.3 13.3-5.9 13.3-13.3 13.3z' })
            )
        );
    };

    return MdRadioButtonChecked;
})(React.Component);

exports['default'] = MdRadioButtonChecked;
module.exports = exports['default'];