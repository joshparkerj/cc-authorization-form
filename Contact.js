var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactDOM from 'react-dom';

var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact(props) {
    _classCallCheck(this, Contact);

    var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

    _this.state = {
      password: 'swordfish',
      authorized: false
    };
    _this.authorize = _this.authorize.bind(_this);
    return _this;
  }

  _createClass(Contact, [{
    key: 'authorize',
    value: function authorize(e) {
      var password = e.target.querySelector('input[type="password"]').value;
      var auth = password == this.state.password;
      this.setState({
        authorized: auth
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'authorization' },
        React.createElement(
          'h1',
          null,
          'Contact'
        ),
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            'client@example.com'
          ),
          React.createElement(
            'li',
            null,
            '555.555.5555'
          )
        )
      );
    }
  }]);

  return Contact;
}(React.Component);

ReactDOM.render(React.createElement(Contact, null), document.getElementById('app'));