import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import doctor from './doctor.svg';
import Modal from './modal';

function DoctorList() {
    const ratingChanged = (newRating) => {
        // eslint-disable-next-line no-console
        console.log(newRating);
    };
    return (
        <div class="card mb-3 container">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src={doctor} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">Doctor Name</h5>
                            <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                        </div>
                        <p class="card-text">Doctor Deatils will be showed here.</p>
                        <Modal />
                        <Button variant="info" className="btn">
                            View Reviews
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorList;
