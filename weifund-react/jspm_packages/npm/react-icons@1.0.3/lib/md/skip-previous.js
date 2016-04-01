/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSkipPrevious = (function (_React$Component) {
    _inherits(MdSkipPrevious, _React$Component);

    function MdSkipPrevious() {
        _classCallCheck(this, MdSkipPrevious);

        _React$Component.apply(this, arguments);
    }

    MdSkipPrevious.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15.860000000000001 20l14.139999999999999-10v20z m-5.860000000000001-10h3.3599999999999994v20h-3.3599999999999994v-20z' })
            )
        );
    };

    return MdSkipPrevious;
})(React.Component);

exports['default'] = MdSkipPrevious;
module.exports = exports['default'];