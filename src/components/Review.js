import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import doctor from './user.svg';

function DoctorList() {
    const ratingChanged = (newRating) => {
        // eslint-disable-next-line no-console
        console.log(newRating);
    };
    return (
        <div>
            <div class="card mb-3 container">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <Image src={doctor} className="card-img user" rounded />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div>
                                <h5 class="card-title">User Name</h5>
                                <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                            </div>
                            <p class="card-text">User Review will be showed here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorList;
