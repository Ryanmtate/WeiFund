/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLoupe = (function (_React$Component) {
    _inherits(MdLoupe, _React$Component);

    function MdLoupe() {
        _classCallCheck(this, MdLoupe);

        _React$Component.apply(this, arguments);
    }

    MdLoupe.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 33.36q5.466666666666669 0 9.413333333333334-3.9450000000000003t3.9450000000000003-9.415-3.9450000000000003-9.411666666666667-9.413333333333334-3.9449999999999994-9.413333333333332 3.9449999999999994-3.945000000000001 9.411666666666667 3.9449999999999994 9.416666666666668 9.413333333333334 3.9416666666666664z m0-30q6.875 0 11.758333333333333 4.883333333333333t4.883333333333333 11.756666666666668v13.361666666666665q0 1.3283333333333331-0.9766666666666666 2.3049999999999997t-2.306666666666665 0.9766666666666666h-13.358333333333334q-6.875 0-11.758333333333333-4.883333333333333t-4.883333333333333-11.759999999999998 4.883333333333333-11.756666666666668 11.758333333333333-4.883333333333332z m1.6400000000000006 8.280000000000001v6.716666666666669h6.716666666666669v3.2833333333333314h-6.716666666666669v6.716666666666669h-3.2833333333333314v-6.716666666666669h-6.716666666666669v-3.2833333333333314h6.716666666666669v-6.716666666666669h3.2833333333333314z' })
            )
        );
    };

    return MdLoupe;
})(React.Component);

exports['default'] = MdLoupe;
module.exports = exports['default'];