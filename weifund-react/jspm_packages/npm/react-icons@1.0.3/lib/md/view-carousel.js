/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdViewCarousel = (function (_React$Component) {
    _inherits(MdViewCarousel, _React$Component);

    function MdViewCarousel() {
        _classCallCheck(this, MdViewCarousel);

        _React$Component.apply(this, arguments);
    }

    MdViewCarousel.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 10h6.640000000000001v18.36h-6.640000000000001v-18.36z m-26.64 18.36v-18.36h6.640000000000001v18.36h-6.64z m8.280000000000001 3.280000000000001v-25h16.716666666666665v25h-16.714999999999996z' })
            )
        );
    };

    return MdViewCarousel;
})(React.Component);

exports['default'] = MdViewCarousel;
module.exports = exports['default'];