import css from './FriendsList.module.css'

export const FriendsListItem = ({ friends }) => {
    return (
    friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
            <span className={isOnline ? css.online : css.offline}></span>
            <img className={css.user_photo} src={avatar} alt={name} />
            <p className={css.user_name}>{name}</p>
        </li>
    )))
}