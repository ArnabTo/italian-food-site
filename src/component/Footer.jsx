import FooterLogo from "../assets/footer_Logo.png"
export default function Footer() {
    return (
        <>
            <div className="footer" data-aos="fade-up">
                <div className="footer_Container">
                    <div className="footer_Cotent">
                        <div className="row footer_Row">
                            <div className="col-6">
                                <div className="footer_Logo" data-aos="fade-up">
                                    <img className="footerLogo" src={FooterLogo} />
                                </div>
                                <div className="footer_Text" data-aos="fade-up">
                                    <p data-aos="fade-up">
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
                                    </p>
                                </div>
                                <div className="trade_Mark" data-aos="fade-up">
                                    <p>Company Name 2020. All right reserved.</p>
                                </div>
                            </div>
                            <div className="col-6 con" data-aos="fade-up">
                                <div className="contaCt" data-aos="fade-up">
                                    <span data-aos="fade-up">
                                    <i class="fa-solid fa-location-pin"></i>
                                    Maxico, USA
                                    </span>
                                    <span data-aos="fade-up">
                                    <i class="fa-solid fa-envelope"></i>
                                    info@companyname.com
                                    </span>
                                </div>
                                <div className="social" data-aos="fade-up">
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-whatsapp"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}