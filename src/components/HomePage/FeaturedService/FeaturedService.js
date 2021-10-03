import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="d-flex justify-content-center mt-5 pt-5">
            <div className="row w-75">
                <div className="col-md-5">
                    <img src={featured} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1 className="mt-4" style={{fontSize: '50px'}}>Exceptional Dental <br />Care, on Your Terms</h1>
                    <p className="text-secondary lh-lg" style={{fontSize: '19px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente asperiores reprehenderit sequi labore explicabo, pariatur reiciendis officia aut, ut vero expedita quis necessitatibus eum dolorum aliquid quod ipsa dolore doloremque amet blanditiis! Quibusdam, quidem mollitia repudiandae, neque cum ut necessitatibus accusamus labore suscipit dolor officiis id, itaque sunt harum ab vitae inventore aliquam corrupti rerum. Doloremque rem blanditiis deleniti soluta debitis! Aut, vero voluptas animi ipsam sed inventore aliquam?</p>
                    <button className="btn btn-primary mt-4 buttonStyle">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;