/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAddCircle = (function (_React$Component) {
    _inherits(MdAddCircle, _React$Component);

    function MdAddCircle() {
        _classCallCheck(this, MdAddCircle);

        _React$Component.apply(this, arguments);
    }

    MdAddCircle.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.36 21.64v-3.2833333333333314h-6.716666666666669v-6.716666666666669h-3.2833333333333314v6.716666666666669h-6.716666666666669v3.2833333333333314h6.716666666666669v6.716666666666669h3.2833333333333314v-6.716666666666669h6.716666666666669z m-8.36-18.28q6.875 8.881784197001252e-16 11.758333333333333 4.883333333333335t4.883333333333333 11.756666666666666-4.883333333333333 11.759999999999998-11.758333333333333 4.88333333333334-11.758333333333333-4.883333333333333-4.883333333333333-11.760000000000005 4.883333333333333-11.756666666666668 11.758333333333333-4.883333333333332z' })
            )
        );
    };

    return MdAddCircle;
})(React.Component);

exports['default'] = MdAddCircle;
module.exports = exports['default'];