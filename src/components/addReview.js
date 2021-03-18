import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function addReview() {
    return (
        <div class="card mb-3 container">
            <div class="row no-gutters">
                <div class="col-md-8">
                    <div class="card-body">
                        <form>
                            <p className="nav-links">Add Review</p>
                            <textarea placeholder="Enter Your Review" ClassName="input-area"></textarea>
                            <Button variant="info">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default addReview;
