/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalLaundryService = (function (_React$Component) {
    _inherits(MdLocalLaundryService, _React$Component);

    function MdLocalLaundryService() {
        _classCallCheck(this, MdLocalLaundryService);

        _React$Component.apply(this, arguments);
    }

    MdLocalLaundryService.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15.3 28c2.6 2.6 6.8 2.6 9.4 0 2.6-2.6 2.6-6.8 0-9.4l-9.4 9.4z m14.7-24.7l-20 0c-1.8 0-3.3 1.5-3.3 3.4v26.6c0 1.9 1.4 3.4 3.3 3.4h20c1.9 0 3.3-1.5 3.3-3.4v-26.6c0-1.9-1.4-3.3-3.3-3.3z m-13.3 3.4c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.7-1.6 1.7-1.7-0.7-1.7-1.7 0.8-1.6 1.7-1.6z m-5 0c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.7-1.6 1.7-1.7-0.7-1.7-1.7 0.8-1.6 1.7-1.6z m8.3 26.6c-5.5 0-10-4.4-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z' })
            )
        );
    };

    return MdLocalLaundryService;
})(React.Component);

exports['default'] = MdLocalLaundryService;
module.exports = exports['default'];