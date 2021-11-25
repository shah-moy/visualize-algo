import React from 'react';
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import { ContactUsContainer, ContactUsH1, ContactUsWrapper, ContactUsCard, ContactUsIcon, ContactUsH2, ContactUsP } from './ContactUsElements';

const ContactUs = () => {
    return (
        <ContactUsContainer id="contactus">
            <ContactUsH1>Contact Us</ContactUsH1>
            <ContactUsWrapper>
                <ContactUsCard>
                    <ContactUsIcon src={Icon1}/>
                    <ContactUsH2>Shahriar Alam Tonmoy</ContactUsH2>
                    <ContactUsP>shahriar.tonmoy@northsouth.edu</ContactUsP>
                </ContactUsCard>
                <ContactUsCard>
                    <ContactUsIcon src={Icon2}/>
                    <ContactUsH2>MD. Tasnimul Hassan</ContactUsH2>
                    <ContactUsP>tasnimul1.hassan@northsouth.edu</ContactUsP>
                </ContactUsCard>
                <ContactUsCard>
                    <ContactUsIcon src={Icon3}/>
                    <ContactUsH2>Tabassum Rahman Aniqa</ContactUsH2>
                    <ContactUsP>tabassum.aniqa@northsouth.edu</ContactUsP>
                </ContactUsCard>
            </ContactUsWrapper>
        </ContactUsContainer>
    )
}

export default ContactUs
