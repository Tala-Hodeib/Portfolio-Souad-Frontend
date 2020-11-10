import React from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_38hgble', e.target, 'user_ikvBrBAiXHVbthue7yINb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

function Contact() {
    return (
        <div className="input-areas">
            <form onSubmit={sendEmail}>
		        <div className="fields">
			        <div className="field">
				        <input type="text" name="name" id="name" placeholder="Your Name" className="footer-input" />
			        </div>
			        <div className="field">
			        	<input type="text" name="email" id="email" placeholder="Your email" className="footer-input" />
			        </div>
			        <div className="field">
			        	<textarea name="message" id="message" placeholder="Your message" rows="7" cols="40"></textarea>
			        </div>
		        </div>
                    <input type="submit" className="btm btn-info" value="send message" />
                {/* <Button buttonStyle='btn--outline'>Send Me an Email</Button> */}
	        </form>
        </div>
    )
}

export default Contact
