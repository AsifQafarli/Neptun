import React from 'react'
import { contact_img } from '../../assets/assets'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-page-container'>
      <img className='contact-page-img' src={contact_img} alt="" />
      <div className='contact-main'>
        <div className='contact-section'>
          <h3>Contact Us</h3>
          <p>Please fill out the form provided, and we will respond to your inquiry shortly.</p>

          <h4>Contact Us</h4>
          <p>Tel: (987) 654-3210</p>
          <p>Email: info@yoursite.com</p>


          <h5>Open Hours*</h5>
          <ul className='days'>
            <li>Monday-Friday: 9:00AM-7:00PM</li>
            <li>Saturday: 10:30AM-8:00PM</li>
          </ul>
          <p>* Holiday hours may vary.</p>
        </div>
        <div className='contact-form-wrapper'>
          <form action="">
            <div class="form-row">
              <div class="half-width">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" />
              </div>
              <div class="half-width">
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" />
              </div>
            </div>
            <div class="full-width">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" class="full-width" />
            </div>
            <div class="full-width">
              <label for="message">Message</label>
              <textarea id="message" name="message" class="full-width"></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className='faq-container'>
        <div className='faq-title'>
          <h2>FAQs</h2>
        </div>

        <hr className='faq-divider' />
        <div className='questions-section'>
          <div className='faq-questions'>
            <p className='faq-question'>Do you have any physical shop locations?</p>
            <p className='faq-question'>What are your shop hours?</p>
            <p className='faq-question'>What payment methods do you accept?</p>
            <p className='faq-question'>How can I contact you?</p>
          </div>

          <div className='faq-answers'>
            <p className='faq-answer'>
              Yes, we do! If you are around the Mainland area, please feel free to visit us during regular business hours: Unit #208 - 888 Griffiths Way, Mainland ML 12345.
            </p>
            <p className='faq-answer'>
              Currently, we are open from Mondays to Fridays from 9:00AM to 7:00PM, and Saturdays from 10:30AM to 8:00PM. We are closed on Sundays for restock. Holiday hours may vary. Please give us a call at (987) 654-3210 for more information.
            </p>
            <p className='faq-answer'>
              At this time, we only accept PayPal or in-store payments, as well as all major credit cards (such as MasterCard, Visa, American Express, and Discover).
            </p>
            <p className='faq-answer'>
              Feel free to contact us at info@yoursite.com, and we will respond to your inquiry within 1-3 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
