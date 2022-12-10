import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
      <p className='font-bold text-[20px] text-white'>{number}</p>
    </div>
  </div>
);

export default StartSteps;
