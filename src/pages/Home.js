import Header from '../components/header';
import DoctorList from '../components/doctorList';

function Home() {
    return (
        <div>
            <Header />
            <DoctorList />
            <DoctorList />
            <DoctorList />
        </div>
    );
}

export default Home;
