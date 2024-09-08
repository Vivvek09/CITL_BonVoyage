import styles from '../EventActions/EventActions.module.css';
import CreateEventForm from '../../CreateEventForm';
import { useNavigate } from 'react-router-dom';

function EventActions() {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate('/nearbyEvents'); 
  };
 
  const CreateEvent=()=>
  {
    navigate('/createeventform');
  }

  return (
    <section className={styles.eventActions}>
      <div className={styles.actionCard}>
        <h3>Discover nearby Events</h3>
        {/* <input type="text" placeholder="Events near me" /> */}
        <button className={styles.actionBtn} onClick={handleNextPage}>Events near me</button>
      </div>
      <div className={styles.actionCard}>
        <h3>Start your own group to host events</h3>
        <button onClick={CreateEvent} className={styles.actionBtn} >
          Start Group
        </button>
      </div>
      <div className={styles.actionCard}>
        <h3>Discover Events and Groups</h3>
        <button className={styles.actionBtn}>Search Events and Groups</button>
      </div>
    </section>
  );
}

export default EventActions;