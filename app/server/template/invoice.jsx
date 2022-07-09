var React = require('react');
const template = require('../template/invoice.jsx');

const invoice = (address) => {


    const titleStyle = {
        fontSize: '10rem',
        lineHeight: '1.6',
        color: 'red',

    }


    const { recipient, streetAddress, suburb, state, postcode } = address;

    return (
        <div>

            <link rel="stylesheet" href="./invoice.css" />

            <link rel="stylesheet" type="text/css" href="css/publicInvoice.css" />


            <h1 className="red">{recipient}</h1>
            <h1 style={titleStyle}>{streetAddress}</h1>
            <h1>{suburb}</h1>
            <h1>{state}</h1>
            <h1>{postcode}</h1>
        </div>
    )
};

// module.exports = React.createClass({
//     render: function () {
//         return React.createElement('h1', null, 'Hello World!');
//     }
// });

module.exports = invoice;