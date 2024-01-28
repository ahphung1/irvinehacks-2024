import './middle.css';
import PastExpiration from '../components/pantry-storage/past-expiration/past-expiration.js';

function Middle() {
    return (
        <div className="middle">
            <div className="expirations">
                {/* <inc-expiration></inc-expiration>*/}
                <div>
                <p className="titletag">Expired</p>
                <PastExpiration/>
                </div>
            </div>
        </div>
    )
}

export default Middle