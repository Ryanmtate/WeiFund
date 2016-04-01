/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdExposurePlus2 = (function (_React$Component) {
    _inherits(MdExposurePlus2, _React$Component);

    function MdExposurePlus2() {
        _classCallCheck(this, MdExposurePlus2);

        _React$Component.apply(this, arguments);
    }

    MdExposurePlus2.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.8 27.1l4.7-5.1c0.7-0.6 1.2-1.3 1.8-1.9 0.5-0.7 0.9-1.3 1.3-2 0.4-0.6 0.7-1.3 0.9-1.9 0.2-0.7 0.3-1.3 0.3-2 0-0.9-0.1-1.7-0.4-2.4-0.3-0.8-0.8-1.4-1.3-1.9-0.6-0.5-1.3-0.9-2.1-1.2-0.9-0.2-1.8-0.4-2.9-0.4-1.1 0-2.2 0.2-3.1 0.6-0.9 0.3-1.6 0.8-2.2 1.4-0.6 0.7-1.1 1.4-1.4 2.2-0.3 0.8-0.5 1.6-0.5 2.5h3.6c0-0.5 0.1-1 0.2-1.4 0.1-0.5 0.4-0.9 0.7-1.3 0.3-0.3 0.6-0.6 1.1-0.8 0.4-0.2 1-0.3 1.6-0.3 0.5 0 1 0.1 1.3 0.2 0.4 0.2 0.8 0.4 1 0.8 0.3 0.3 0.5 0.6 0.6 1 0.2 0.5 0.3 0.9 0.3 1.4 0 0.4-0.1 0.7-0.2 1.1-0.1 0.3-0.2 0.7-0.5 1.1-0.2 0.5-0.5 0.9-0.9 1.4-0.4 0.5-0.9 1.1-1.5 1.7l-6.9 7.6v2.5h14.4v-2.9h-9.9z m-13.5-15.4h-3.3v6.6h-6.7v3.4h6.7v6.6h3.3v-6.6h6.7v-3.4h-6.7v-6.6z' })
            )
        );
    };

    return MdExposurePlus2;
})(React.Component);

exports['default'] = MdExposurePlus2;
module.exports = exports['default'];