import css from '../modules/FriendsList.module.css'

export const FriendsList = ({friends}) => {
    return (
        <div className={css.friend_container}>
            <ul className={css.friend_list}>

                {friends.map(({ id, avatar, name, isOnline }) => (
                    <li key={id}>
                        <span className={isOnline ? css.online : css.offline}></span>
                        <img className={css.user_photo} src={avatar} alt={name} />
                        <p className={css.user_name}>{name}</p>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}