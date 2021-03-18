import './App.css';
import Header from './components/header';
import DoctorList from './components/doctorList';

function App() {
    return (
        <div>
            <Header />
            <DoctorList />
            <DoctorList />
            <DoctorList />
        </div>
    );
}

export default App;
