import css from './FriendsList.module.css'
import { FriendsListItem } from './FriendsListItem'

export const FriendsList = ({friends}) => {
    return (
        <div className={css.friend_container}>
            <ul className={css.friend_list}>
                <FriendsListItem friends={friends}/>
            </ul>
        </div>
    )
}