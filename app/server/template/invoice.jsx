var React = require('react');


const invoice = (address) => {
    const { recipient, streetAddress, suburb, state, postcode } = address;

    return (
        <div>
            <h1>{recipient}</h1>
            <h1>{streetAddress}</h1>
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