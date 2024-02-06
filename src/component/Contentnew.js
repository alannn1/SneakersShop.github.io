import React from "react"
import img1 from '../component/image/contentnew/adidas_yeezy451.jpg'
import img2 from '../component/image/contentnew/nike_airmax.jpg'
import img3 from '../component/image/contentnew/nike_jordan.jpg'

const Contentnew = () => {
    return(
        <div className="container-contentNew" >
            <div>
                <h3 style={{margin:'5vh 0vh -8vh 7vh'}}>New Product</h3>
            </div>
            <div className="contentnew">
                <a href="/Yeezy451white"><img src={img1} alt="" className="img-contentnew"/></a>
                <a href="/Airmax270yellow"><img src={img2} alt="" className="img-contentnew"/></a>
                <a href="/Jordan5Retrowhite"><img src={img3} alt="" className="img-contentnew"/></a>
            </div>
        </div>
    )

}

export default Contentnew