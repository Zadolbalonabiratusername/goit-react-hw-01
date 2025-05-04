import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <>
      <p>task 2</p>
      <ul className={s.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <li className={s.item} key={id}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
