import React from 'react';

const FeatureItem = ({className, text}) => {
    return (
        <div className="features-slider_item">
            <div className={`features-img ${className}`}></div>
            <div className="features-feature">{text}</div>
        </div>
    )
}

export default FeatureItem;