import {useState} from 'react' ;

const MessageForm = () => {

    const [senderName,setSenderName] = useState('') ;
    const [senderEmail,setSenderEmail] = useState('') ;
    const [senderMessage,setSenderMessage] = useState('') ;

    const handleMessageSending = () => {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if((!senderName) || (!senderEmail) || (!senderMessage)){
              alert('Entering all values is mandatory') ;
          }
          else if(typeof(senderName) !== 'string'){
              alert('Name should be mandatory a text') ;
              setSenderName('') ;
          }
          else if(typeof(senderMessage) !== 'string') {
              alert('Message body should mandatory contain a text value') ;
              setSenderMessage('')
          }
          else if((validEmail.test(senderEmail) !== true)){
              alert('Enter a valid email address') ;
              setSenderEmail('') ;
          }
          else {
              alert('Successfully sent your message') ;
              setSenderName('') ;
              setSenderEmail('') ;
              setSenderMessage('') ;
          } 
            
    }
return (
   <div className = "MessageForm">
       <h4 className = "messageHeading">Want to send a message ?</h4> 
       <input className = "formInput" type = 'text' value = {senderName} placeholder = "Enter your name" onChange = {(e) => setSenderName(e.target.value)} />
       <br/>
       <input className = "formInput" type = 'email' value = {senderEmail} placeholder = "Enter your email" onChange = {(e) => setSenderEmail(e.target.value)} />
       <br/>
       <input className = "formInputArea" type = 'text' value = {senderMessage} placeholder = "Enter your message" onChange = {(e) => setSenderMessage(e.target.value)} />
       <br/>
       <button className = "messageSendingButton" onClick={handleMessageSending}>Send</button>
   </div>
  ) 
}

export default MessageForm ;