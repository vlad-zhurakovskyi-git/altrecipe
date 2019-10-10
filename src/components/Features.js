import React from 'react';
import phone from '../images/phone.png'

function Features() {
    return (
        <section className="content content_features">
            <div className="features-bg">
                <img className="features-bg__sub" src={phone} alt=""/>

                <div className="feature-bg__shadow">
                    <svg className="feature-bg__top-shadow" width="717" height="70" viewBox="0 0 717 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" d="M42.0558 0H679.047L717 70H0L42.0558 0Z" fill="#061028"/>
                    </svg>

                    <svg className="feature-bg__bottom-shadow" width="717" height="86" viewBox="0 0 717 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M42.0558 0H679.047L717 86H0L42.0558 0Z" fill="#061028"/>
                    </svg>
                </div>
            </div>

            <div className="features-item features-item_first">
                <div className="features-item-info">
                    <h5 className="features-item-info__title">
                        We can call it dashboard,
                        it's a crypto <br/> control panel of your rocket business.
                    </h5>

                    <p className="features-item-info__text">
                        Your can manage access to crypto, gather <br/>
                        statistics, accept payments and get latest <br/>
                        information about your accounts.
                    </p>
                </div>
                <svg className="line first-line" width="187" height="161" viewBox="0 0 187 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <path id="first" d="M22.2101 46.5457L143.5 46.5456L143.5 160.001" stroke="url(#paint0_linear)"  />

                        <mask id="first-mask">
                            <use className="mask mask_first" xlinkHref="#first" />
                        </mask>
                    </defs>

                    <g className="paths">
                        <use xlinkHref="#first" mask="url(#first-mask)" />
                    </g>

                    <defs>
                        <linearGradient id="paint0_linear" x1="68" y1="10" x2="56.8448" y2="-13.4924" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="#5E77AA"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="features-item features-item_second">
                <div className="features-item-info">
                    <h5 className="features-item-info__title">
                        Accept payments using smart invoicing
                    </h5>

                    <p className="features-item-info__text">
                        Email, messengers, links, texts you choose <br/>
                        what's comfortable for you to send an invoice to <br/>
                        the payer. Track progress and recieve smart <br/>
                        notifications to your dashboard.
                    </p>
                </div>
                <svg className="line second-line" width="266" height="176" viewBox="0 0 266 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <path id="second" d="M0.999066 67.8423L177 67.8425L177 146.5L248 146.5" stroke="url(#paint0_linear)"/>

                        <mask id="second-mask">
                            <use className="mask mask_second" xlinkHref="#second" />
                        </mask>
                    </defs>

                    <g className="paths">
                        <use xlinkHref="#second" mask="url(#second-mask)" />
                    </g>
                </svg>
            </div>

            <div className="features-item features-item_third">
                <div className="features-item-info">
                    <h5 className="features-item-info__title">
                        Online payments
                    </h5>

                    <p className="features-item-info__text">
                        Accept online payments on your website. <br/>
                        Integrate BitFreezer gateway to your <br/>
                        website and start crypto payments now <br/>
                        without limitations.
                    </p>
                </div>

                <svg className="line third-line" width="376" height="299" viewBox="0 0 376 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <path id="third" d="M17.4995 133.453L17.5001 177.102L334.609 177.103L334.099 70.484" stroke="url(#paint0_linear)"/>

                        <mask id="third-mask">
                            <use className="mask mask_third" xlinkHref="#third" />
                        </mask>
                    </defs>

                    <g className="paths">
                        <use xlinkHref="#third" mask="url(#third-mask)" />
                    </g>
                </svg>
            </div>

            <div className="features-item features-item_fourth">
                <div className="features-item-info">
                    <h5 className="features-item-info__title">
                        Award winning customer support
                    </h5>

                    <p className="features-item-info__text">
                        Our team is willing to get to know your <br/>
                        business case and help you setup your <br/>
                        account and carry out crypto <br/>
                        management like a true crypto <br/>
                        compatible company.
                    </p>
                </div>

                <svg className="line fourth-line" width="136" height="100" viewBox="0 0 136 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <path id="fourth" d="M134.99 46.0003L17.7627 46.0004L17.7627 90.5" stroke="url(#paint0_linear)"/>

                        <mask id="fourth-mask">
                            <use className="mask mask_fourth" xlinkHref="#fourth" />
                        </mask>
                    </defs>

                    <g className="paths">
                        <use xlinkHref="#fourth" mask="url(#fourth-mask)" />
                    </g>
                </svg>
            </div>

            <div className="features-item features-item_fifth">
                <div className="features-item-info">
                    <h5 className="features-item-info__title">
                        Want to get payed instantly in store?
                    </h5>

                    <p className="features-item-info__text">
                        Use your web app or BitFreezer mobile <br/>
                        app to request a payment which can be <br/>
                        done via any compatible crypto wallet.
                    </p>
                </div>

                <svg className="line fifth-line" width="254" height="19" viewBox="0 0 254 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <path id="fifth" d="M0 18.5H253.5V0.5" stroke="url(#paint0_linear)" />

                        <mask id="fifth-mask">
                            <use className="mask mask_fifth" xlinkHref="#fifth" />
                        </mask>
                    </defs>

                    <g className="paths">
                        <use xlinkHref="#fifth" mask="url(#fifth-mask)" />
                    </g>
                </svg>
            </div>

            <div className="features-item features-item_sixth">
                <div className="features-item-info">
                    <h5 className="features-item-info__title">
                        Never expose your private keys
                    </h5>

                    <p className="features-item-info__text">
                        You hold your crypto, you hold your keys, <br/>
                        your control your profits. BitFreezer <br/>
                        technology lets you always keep your crypto <br/>
                        cold and never expose it to insecure <br/>
                        environment. Want to cash out?  No problem, <br/>
                        connect your keys and generate a transaction <br/>
                        within 30 seconds.
                    </p>
                </div>

                <svg className="line sixth-line" width="254" height="19" viewBox="0 0 254 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <path id="sixth" d="M0 18.5H253.5V0.5" stroke="url(#paint0_linear)" />

                        <mask id="sixth-mask">
                            <use className="mask mask_sixth" xlinkHref="#sixth" />
                        </mask>
                    </defs>

                    <g className="paths">
                        <use xlinkHref="#sixth" mask="url(#sixth-mask)" />
                    </g>
                </svg>
            </div>

            <div className="features-item features-item_seventh">
                <div className="features-item-info">
                    <h5 className="features-item-info__title">
                        Never expose your private keys
                    </h5>

                    <p className="features-item-info__text">
                        Free yourself from stress with our patented, <br/>
                        unique multi-layer encryption process that <br/>
                        ensures ultra security and safety of your funds.

                    </p>
                </div>

                <svg className="line seventh-line" width="144" height="107" viewBox="0 0 144 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <path id="seventh" d="M140.5 61.565L24.3335 61.5655L24.3335 0.499998" stroke="url(#paint0_linear)"/>

                        <mask id="seventh-mask">
                            <use className="mask mask_seventh" xlinkHref="#seventh" />
                        </mask>
                    </defs>

                    <g className="paths">
                        <use xlinkHref="#seventh" mask="url(#seventh-mask)" />
                    </g>
                </svg>
            </div>
        </section>

    );
}

export default Features;
