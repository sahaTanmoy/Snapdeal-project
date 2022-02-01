import React from 'react';
import { Button, Container, Tab, Row, Col, Nav, InputGroup, FormControl } from 'react-bootstrap'
import { RiSecurePaymentFill, RiVisaFill } from 'react-icons/ri'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { FcCustomerSupport } from 'react-icons/fc'
import { SiGooglepay, SiPaytm } from 'react-icons/si'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaAmazonPay, FaCcMastercard } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'

function Footer() {
    return <div>
        <hr />
        <Row>
            <Col className='profoot' sm>
                <br /><br /><RiSecurePaymentFill size={40} color='darkblue' /><br /><br />
                <h3>100% Secure Payments</h3>
                <ul className='footulpersonal'>
                    <li>Moving your card details to a much more</li>
                    <li>secured place</li>
                </ul>
            </Col>
            <Col className='profoot' sm>
                <br /><br /><VscWorkspaceTrusted size={40} color='darkturquoise' /><br /><br />
                <h3>TRUSTPAY</h3>
                <ul className='footulpersonal'>
                    <li>100%Payment Protection. Easy</li>
                    <li>Return Policy</li>
                </ul>
            </Col>
            <Col className='profoot' sm>
                <br /><br /><FcCustomerSupport size={40} /><br /><br />
                <h3>HELP CENTER</h3>
                <ul className='footulpersonal'>
                    <li>Got a question? Look no Further.</li>
                    <li>Browse our FAQs or submit your query</li>
                    <li>here.</li>
                </ul>
            </Col>
            <Col className='profoot' sm>
                <br /><br /><FaMobileAlt size={40} color='darkmagenta'/><br /><br />
                <h3>SHOP ON THE GO</h3>
                <ul className='footulpersonal'>
                    <li>Download the app and get exciting</li>
                    <li>app only offers at your fingertips</li>
                </ul>
            </Col>
        </Row>
        <hr />
        <br />
        <Row>
            <Col className='profoot1' sm>
                <h5>POLICY INFO</h5>
                <ul className='footulpersonal'>
                    <li>Privacy Policy</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li>Report Abuse & Takedown Policy</li>
                    <li>FAQ</li>
                </ul>
            </Col>
            <Col className='profoot1' sm>

                <h5>COMPANY</h5>
                <ul className='footulpersonal'>
                    <li>Impact@Snapdeal</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Sitemap</li>
                    <li>Contact Us</li>
                </ul>

            </Col>
            <Col className='profoot1' sm>
                <h5>SNAPDEAL BUSINESS</h5>
                <ul className='footulpersonal'>
                    <li>Shopping App</li>
                    <li>Sell on Snapdeal</li>
                    <li>Media Enquiries</li>
                </ul>
            </Col>
            <Col className='profoot1' sm={4} >
                <h5>SUBSCRIBE</h5>
                <ul className='footulpersonal'>
                    <li>
                        <span>

                            <InputGroup>
                                <FormControl placeholder='Your Email Address '></FormControl>
                                <Button variant="dark">SUBSCRIBE</Button>
                            </InputGroup>
                        </span>
                    </li>
                    <li>Register now to get updates on promotions and</li>
                    <li>coupons. Or Download App</li>
                </ul>
            </Col>

        </Row>
        <hr />

        <Row>
            <Col sm>PAYMENT<br />
                <RiVisaFill size={30} />    <FaCcMastercard size={30} />    <SiGooglepay size={30} />    <SiPaytm size={30} />    <FaAmazonPay size={30} />
            </Col>
            <Col sm>CONNECT<br />
                <FaFacebook size={25} />    <FaTwitter size={25} />    <FaInstagram size={25} />    <FaLinkedin size={25} />    <FaYoutube size={25} />
            </Col>
        </Row>
        <hr />

        <Row>
            <Col sm>Copyright Statement</Col>
            <Col sm>Made In India</Col>
        </Row>
        <br />
    </div>;
}

export default Footer;
