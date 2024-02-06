import React from 'react';
import bgSepatu from './image/cardtype/bgsepatu.jpg';
import bgSandal from './image/cardtype/bgsandal.jpg';
import bgTas from './image/cardtype/bgtas.jpg';
import {useNavigate} from 'react-router-dom';
import '../style/secondpage.css'

const Cardtype = () => {
    const navigate = useNavigate();
    function scrollToTop() {
        window.scrollTo({
            top: 0, behavior: "instant"
        });
    }

    return(
        <div className='container'>
            <h3 style={{right:'5vh',position:'relative'}}>Shop By Category</h3>
            <main className='grid'>
                <article>
                    <img src={bgSepatu} alt="" className='imageContent'/>
                    <h2>SEPATU</h2>
                    <button onClick={() => {scrollToTop(); navigate('/Sepatu');}}>Shop Now</button>
                </article>
                <article>
                    <img src={bgSandal} alt="" className='imageContent'/>
                    <h2>SANDAL</h2>
                    <button onClick={() => {scrollToTop(); navigate('/Sandal'); }}>Shop Now</button>
                </article>
                <article>
                    <img src={bgTas} alt="" className='imageContent'/>
                    <h2>TAS</h2>
                    <button onClick={() => {scrollToTop(); navigate('/Tas'); }}>Shop Now</button>
                </article>
            </main>
        </div>
        
    );
}

export default Cardtype;