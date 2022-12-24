import { motion } from "framer-motion"
import Item1 from "../assets/f1.png"
import Item2 from "../assets/f2.png"
import Item3 from "../assets/f3.png"
export default function Menu() {
    return (
        <>
            <div className="menu">
                <div className="menu_Container">
                    <div className="menu_Content">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 100 }}
                            className="menu_Title" data-aos="fade-up">
                            <h1>Chose & Enjoy</h1>
                            <p> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </p>
                        </motion.div>
                        <div className="item_Container" data-aos="fade-up">
                            <div className="item_Bg"></div>
                            <div className="items">
                                <div className="item_Img">
                                    <img className="img-fluid" src={Item1} alt="Item_Img" />
                                </div>
                                <div className="item_Details">
                                    <h1 className="item_Title" data-aos="fade-up">Noodles</h1>
                                    <p data-aos="fade-up">Lorem Ipsum dolor sit amet consecteur adiprising eli, sed do</p>
                                    <div className="order_Btn" data-aos="fade-up">Order Now</div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="item_Img" data-aos="fade-up">
                                    <img className="img-fluid" src={Item2} alt="Item_Img" />
                                </div>
                                <div className="item_Details">
                                    <h1 className="item_Title" data-aos="fade-up">Breaking bread</h1>
                                    <p data-aos="fade-up">Lorem Ipsum dolor sit amet consecteur adiprising eli, sed do</p>
                                    <div className="order_Btn" data-aos="fade-up">Order Now</div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="item_Img" data-aos="fade-up">
                                    <img className="img-fluid" src={Item3} alt="Item_Img" />
                                </div>
                                <div className="item_Details">
                                    <h1 className="item_Title" data-aos="fade-up"> Noodles</h1>
                                    <p data-aos="fade-up">Lorem Ipsum dolor sit amet consecteur adiprising eli, sed do</p>
                                    <div className="order_Btn" data-aos="fade-up">Order Now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}