/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdHighlightRemove = (function (_React$Component) {
    _inherits(MdHighlightRemove, _React$Component);

    function MdHighlightRemove() {
        _classCallCheck(this, MdHighlightRemove);

        _React$Component.apply(this, arguments);
    }

    MdHighlightRemove.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 33.36q5.466666666666669 0 9.413333333333334-3.9450000000000003t3.9450000000000003-9.415-3.9450000000000003-9.411666666666667-9.413333333333334-3.9449999999999994-9.413333333333332 3.9449999999999994-3.945000000000001 9.411666666666667 3.9449999999999994 9.416666666666668 9.413333333333334 3.9416666666666664z m0-30q6.875 0 11.758333333333333 4.883333333333333t4.883333333333333 11.756666666666668-4.883333333333333 11.759999999999998-11.758333333333333 4.88333333333334-11.758333333333333-4.883333333333333-4.883333333333333-11.760000000000005 4.883333333333333-11.756666666666668 11.758333333333333-4.883333333333332z m4.296666666666667 10l2.3433333333333337 2.3433333333333337-4.296666666666667 4.296666666666667 4.296666666666667 4.296666666666667-2.3433333333333337 2.3433333333333337-4.296666666666667-4.296666666666667-4.296666666666667 4.296666666666667-2.3433333333333337-2.3433333333333337 4.296666666666667-4.296666666666667-4.296666666666665-4.296666666666665 2.3433333333333337-2.3433333333333337 4.296666666666665 4.296666666666665z' })
            )
        );
    };

    return MdHighlightRemove;
})(React.Component);

exports['default'] = MdHighlightRemove;
module.exports = exports['default'];