/* */ 
(function(process) {
  'use strict';
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _react = require('react');
  var _react2 = _interopRequireDefault(_react);
  var _reactDom = require('react-dom');
  var _reactDom2 = _interopRequireDefault(_reactDom);
  var Steps = _react2['default'].createClass({
    displayName: 'Steps',
    propTypes: {
      direction: _react2['default'].PropTypes.string,
      children: _react2['default'].PropTypes.any
    },
    getDefaultProps: function getDefaultProps() {
      return {
        prefixCls: 'rc-steps',
        iconPrefix: 'rc',
        maxDescriptionWidth: 120,
        direction: '',
        current: 0
      };
    },
    getInitialState: function getInitialState() {
      return {
        init: false,
        tailWidth: 0
      };
    },
    componentDidMount: function componentDidMount() {
      var _this = this;
      if (this.props.direction === 'vertical') {
        return;
      }
      var $dom = _reactDom2['default'].findDOMNode(this);
      if ($dom.children.length === 0) {
        return;
      }
      var len = $dom.children.length - 1;
      this._itemsWidth = new Array(len + 1);
      var i = undefined;
      for (i = 0; i <= len - 1; i++) {
        var $item = $dom.children[i].children;
        this._itemsWidth[i] = Math.ceil($item[0].offsetWidth + $item[1].children[0].offsetWidth);
      }
      this._itemsWidth[i] = Math.ceil($dom.children[len].offsetWidth);
      this._previousStepsWidth = Math.floor(_reactDom2['default'].findDOMNode(this).offsetWidth);
      this._update();
      $dom.children[len].style.position = 'absolute';
      setTimeout(function() {
        _this._resize();
      });
      if (window.attachEvent) {
        window.attachEvent('onresize', this._resize);
      } else {
        window.addEventListener('resize', this._resize);
      }
    },
    componentDidUpdate: function componentDidUpdate() {
      this._resize();
    },
    componentWillUnmount: function componentWillUnmount() {
      if (this.props.direction === 'vertical') {
        return;
      }
      if (window.attachEvent) {
        window.detachEvent('onresize', this._resize);
      } else {
        window.removeEventListener('resize', this._resize);
      }
    },
    _previousStepsWidth: 0,
    _itemsWidth: [],
    _resize: function _resize() {
      var w = Math.floor(_reactDom2['default'].findDOMNode(this).offsetWidth);
      if (this._previousStepsWidth === w) {
        return;
      }
      this._previousStepsWidth = w;
      this._update();
    },
    _update: function _update() {
      var len = this.props.children.length - 1;
      var tw = 0;
      this._itemsWidth.forEach(function(w) {
        tw += w;
      });
      var dw = Math.floor((this._previousStepsWidth - tw) / len) - 1;
      if (dw <= 0) {
        return;
      }
      this.setState({
        init: true,
        tailWidth: dw
      });
    },
    render: function render() {
      var _this2 = this;
      var props = this.props;
      var prefixCls = props.prefixCls;
      var children = props.children;
      var maxDescriptionWidth = props.maxDescriptionWidth;
      var iconPrefix = props.iconPrefix;
      var len = children.length - 1;
      var iws = this._itemsWidth;
      var clsName = prefixCls;
      clsName += props.size === 'small' ? ' ' + prefixCls + '-small' : '';
      clsName += props.direction === 'vertical' ? ' ' + prefixCls + '-vertical' : '';
      return _react2['default'].createElement('div', {className: clsName}, _react2['default'].Children.map(children, function(ele, idx) {
        var np = {
          stepNumber: (idx + 1).toString(),
          stepLast: idx === len,
          tailWidth: iws.length === 0 || idx === len ? 'auto' : iws[idx] + _this2.state.tailWidth,
          prefixCls: prefixCls,
          iconPrefix: iconPrefix,
          maxDescriptionWidth: maxDescriptionWidth
        };
        if (!ele.props.status) {
          if (idx === props.current) {
            np.status = 'process';
          } else if (idx < props.current) {
            np.status = 'finish';
          } else {
            np.status = 'wait';
          }
        }
        return _react2['default'].cloneElement(ele, np);
      }, this));
    }
  });
  module.exports = Steps;
})(require('process'));
