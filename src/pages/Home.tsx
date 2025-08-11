import styles from './Home.module.scss';
import ContactCard from '../components/ContactCard/ContactCard';
import profile from '.././assets/photo_2025-05-04_21-36-37.jpg';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.profileSection}>
        <img src={profile} alt="Кароліна Коваль" className={styles.avatar} />
        <h1 className={styles.title}>Привіт! 👋</h1>
        <p className={styles.description}>
          Мене звати <strong>Кароліна Ковал</strong>, мені 12 років 🎨. Я просто
          обожнюю світ фантазії — малювати 🖌️, вигадувати щось нове ✨, творити
          свої ідеї у кольорі, формі та русі. Мої малюнки — це не просто
          картинки, це частинки моєї душі 💖. Коли я беру олівець або планшет —
          з'являється новий всесвіт 🌈. І знаєш що? Я мрію, щоб мої ідеї
          надихали інших 😍
        </p>
      </section>

      <ContactCard />
    </div>
  );
};

export default Home;
