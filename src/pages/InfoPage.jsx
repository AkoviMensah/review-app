import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function InfoPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>Info</h1>

        <h2>
          <Link to='/'>Home</Link>
        </h2>
      </div>
    </Card>
  );
}

export default InfoPage;