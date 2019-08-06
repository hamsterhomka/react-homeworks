import React from 'react';
import PropTypes from 'prop-types';
import Response from './Response';
import Message from './Message';
import Typing from './Typing';

const MessageHistory = ({list}) => {

  if(list.length === 0) {
    return null;
  }

  return (
    <ul style={{listStyleType: 'none'}}>
      {list.map(message => (
        message.type === 'response' ? <Response key={message.id} message={message} from={message.from}/>
          : message.type === 'message' ? <Message key={message.id} message={message} from={message.from}/>
          : message.type === 'typing' ? <Typing key={message.id} message={message} from={message.from}/>
            : ''
        ))}
    </ul>
  );
};

MessageHistory.propTypes = {
  list: PropTypes.array.isRequired,
};

export default MessageHistory;