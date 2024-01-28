import './middle.css';
import PastExpiration from '../components/pantry-storage/past-expiration/past-expiration.js';
import Expiring from '../components/pantry-storage/inc-expiration/inc-expiration.js'

function Middle({expired, setExpired, expiring, setExpiring}) {
    return (
        <div className="middle">
            <div className="expirations">
                <div>
                <h2 className="titletag">Expired</h2>
                <PastExpiration items={expired} setItems={setExpired}/>
                </div>
            </div>
            <div className="expirations2">
                <div>
                    <h2 className="othertitle">Expiring Soon</h2>
                    <Expiring items={expiring} setItems={setExpiring}/>
                </div>
            </div>
        </div>
    )
}

export default Middle