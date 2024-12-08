import React from 'react';
import './Frim.css';
import { firm_logo } from '../../assets/assets';

const Frim = () => {
    return (
        <div className='frims'>
            <p>— FEATURED ON —</p>
            <div className="frim-logos">
                {firm_logo.map((item, index) => {
                    return (
                        <div key={index} className='frim-logo-item'>
                            <img src={item.company_logo_img} alt='' />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Frim;