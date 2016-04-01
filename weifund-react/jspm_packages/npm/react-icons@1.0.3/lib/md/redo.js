/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdRedo = (function (_React$Component) {
    _inherits(MdRedo, _React$Component);

    function MdRedo() {
        _classCallCheck(this, MdRedo);

        _React$Component.apply(this, arguments);
    }

    MdRedo.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30.703333333333337 17.656666666666666l5.938333333333336-6.016666666666666v15h-15l6.093333333333334-6.013333333333335q-3.7516666666666723-3.126666666666665-8.591666666666672-3.126666666666665-4.375 0-7.850000000000001 2.539999999999999t-4.806666666666667 6.600000000000001l-3.9050000000000002-1.25q1.7166666666666668-5.311666666666667 6.288333333333335-8.670000000000002t10.273333333333333-3.3599999999999994q6.640000000000001 0 11.563333333333333 4.296666666666667z' })
            )
        );
    };

    return MdRedo;
})(React.Component);

exports['default'] = MdRedo;
module.exports = exports['default'];