import React from 'react'

const FeaturesBanner = () => {
  return (
    <section className="featuresBannerSection">
      <div className="featuresBannerCont">
        <div className="featuresBanner">
            <div className="featuresBannerImage">
                <img src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/vegan.png?v=1649191726&width=200" alt="vegan image" />
            </div>
            <p className='featuresText'>Vegan</p>
            <p className='featuresTitle'>Our entire collection is vegan and cruelty free.</p>
        </div>
        <div className="featuresBanner">
            <div className="featuresBannerImage">
                <img src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/Group_1567.png?v=1645803479&width=200" alt="shipping image" />
            </div>
            <p className='featuresText'>Fast & Free Shipping</p>
            <p className='featuresTitle'>Doorstep delivery to most of the US.</p>
        </div>
        <div className="featuresBanner">
            <div className="featuresBannerImage">
                <img src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/natur.png?v=1649191726&width=200" alt="natural image" />
            </div>
            <p className='featuresText'>Natural</p>
            <p className='featuresTitle'>We only use the finest natural ingredients.</p>
        </div>
        <div className="featuresBanner">
            <div className="featuresBannerImage">
                <img src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/recycle_dbfbfad9-c5b8-4e8d-a8ee-c8409584fe64.png?v=1649191757&width=200" alt="recycle image" />
            </div>
            <p className='featuresText'>Recyclable</p>
            <p className='featuresTitle'>All packaging is recyclable and eco conscious.</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesBanner
