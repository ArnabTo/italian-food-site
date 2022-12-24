export default function BookTable() {
    return (
        <>
            <div className="book mb-4">
                <div className="book_Container">
                    <div className="booking_Title" data-aos="fade-up">
                        <h3 data-aos="fade-up">Reservation</h3>
                        <h1 data-aos="fade-up">Book Your Table</h1>
                    </div>
                    <div className="from" data-aos="fade-up">
                        <div className="row from_Row">
                            <div className="col-6 form_Input" data-aos="fade-up">
                                <input type="text" placeholder="Name"/>
                                <input type="text" placeholder="Date"/>
                                <input type="text" placeholder="People"/>
                            </div>
                            <div className="col-6 form_Input" data-aos="fade-up">
                                <input type="email" placeholder="Email"/>
                                <input type="datetime-local" placeholder="Time"/>
                                {/* <div className="fa_Table">Find A Table</div> */}
                                <div className="fa_Table">Find A Table</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}