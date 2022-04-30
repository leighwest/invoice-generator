import TextInput from '../Input/TextInput';
import OptionInput from '../Input/OptionInput';

import classes from './Address.module.css';

const Address = props => {
  return (
    <div className={classes.wrapper}>
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
      <div className={classes.suburbRow}>
        <TextInput
          name="suburb"
          onChange={props.handleChange}
          messages={props.messages['suburb']}
          placeholder='Ivanhoe'
          // className={`${props.cn('suburb')} bottomRow`}
          className={{
            cn: props.cn('suburb'),
            bottomRow:"bottomRow"
          }}

        />
        <OptionInput
          name="state"
          className={'bottomRow'}
        />
        <TextInput
          name="postcode"
          onChange={props.handleChange}
          messages={props.messages['postcode']}
          placeholder='3079'
          className={props.cn('postcode')}
        />
      </div>
    </div>
  );
}

export default Address;