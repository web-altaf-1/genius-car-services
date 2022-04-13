import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className=' col-sm-12 gy-5 col-md-6 col-lg-4'>
            <div className="card" >
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default Expert;