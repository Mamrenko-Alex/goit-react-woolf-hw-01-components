import user from 'some_db/user.json'
import statistic from 'some_db/statistic.json'
import friends from 'some_db/friends.json'
import transactions from 'some_db/transactions.json'

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statistic} />
      <Statistics stats={statistic} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
};
