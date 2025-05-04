import s from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <p>task 1</p>
      <div className={s.userProfile}>
        <div className={s.userData}>
          <img className={s.userAvatar} src={avatar} alt="User avatar" />
          <p className={s.userName}>{username}</p>
          <p className={s.userInfo}>@{tag}</p>
          <p className={s.userInfo}>{location}</p>
        </div>

        <ul className={s.userStats}>
          <li className={s.item}>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className={s.item}>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className={s.item}>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
