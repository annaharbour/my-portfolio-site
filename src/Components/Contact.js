import React, {useState} from 'react'
import {send} from 'emailjs-com'


function Contact() {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    send(
      'service_7r0fd8k',
      'template_7lqw69s',
      toSend,
      'YfImsMaSNcOCUzxh1'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
    <div className='email page-heading'>
          <h1>Contact</h1>
        </div>
    <div className='contact'>
        
        <img src='images/Optimized-redshirt.jpg' alt="Anna at park" className='contact-pic'/>
        <div className="contact-form">
          <form onSubmit={onSubmit}>
          

            <input
              type='text'
              name='from_name'
              placeholder='Your name'
              value={toSend.from_name}
              onChange={handleChange}
            />
           
           <input
              type='text'
              name='reply_to'
              placeholder='Your email'
              value={toSend.reply_to}
              onChange={handleChange}
            />

            <input
              type='text'
              name='message'
              placeholder='Your message'
              value={toSend.message}
              onChange={handleChange}
            />
            
            <button type='submit'>Submit</button>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Contact