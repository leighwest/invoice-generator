var ReactDOMServer = require('react-dom/server');
const template = require('../template/invoice.jsx');

require('babel-register')({
    presets: ['react']
});
var React = require('react');
var ReactDOMServer = require('react-dom/server');


const templateService = (address) => {
    // const htmlElement = ReactDOMServer.renderToStaticMarkup(element);
    console.log(address.recipient)

    var html = ReactDOMServer.renderToString(
        React.createElement(template, address)
    );

    return html;
}

module.exports = templateService;
