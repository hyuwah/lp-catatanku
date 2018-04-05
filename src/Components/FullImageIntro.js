import React from 'react';
import styles from './FullImageIntro.css'

const FullImageIntro = (props) => (
    <div className="view intro tint"  >
        <div className="full-bg-img flex-center">
            <div className="container text-center white-text wow fadeInUp">
                {props.children}
            </div>
        </div>
    </div>

)

export default FullImageIntro;
