import TextInput from '../Input/TextInput';

import classes from './Address.module.css';

const Address = props => {
  return (
    <div>
      <h2>Address</h2>
      <TextInput
        name="recipient"
        onChange={props.handleChange}
        messages={props.messages['recipient']}
        placeholder='Mr Tim Jones'
        className={props.cn('recipient')}
      />
      <TextInput
        name="street-address"
        onChange={props.handleChange}
        messages={props.messages['street-address']}
        placeholder='57 Ford Street'
        className={props.cn('street-address')}
      />
      <TextInput
        name="suburb"
        onChange={props.handleChange}
        messages={props.messages['suburb']}
        placeholder='Ivanhoe'
        className={props.cn('suburb')}
      />
    </div>
  );
}

export default Address;