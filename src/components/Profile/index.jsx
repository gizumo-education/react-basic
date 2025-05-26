import styles from './index.module.css'

export const Profile = () => {
  const imgUrl = 'https://i.imgur.com/7vQD0fPs.jpg';
  const name = '高橋輝';
  const getBirthDay = () => {
    return '1997/04/07';
  };

  return (
    <div>
      <img src={imgUrl} className={styles.avatar} alt={`${name}のプロフィール画像`} />
      <p className={styles.sentence}>私は {name}です。</p>
      <p className={styles.sentence}>BirthDay: {getBirthDay()}</p>
    </div>
  );
};

export default Profile;