import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import user from 'some_db/user.json'
import statistic from 'some_db/statistic.json'
import friends from 'some_db/friends.json'
import transactions from 'some_db/transactions.json'
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendsList } from 'components/FriendsList';
import { TransactionHistory } from 'components/TransactionHistory';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Profile {...user} />
    <Statistics title="Upload stats" stats={statistic} />
    <Statistics stats={statistic} />
    <FriendsList friends={friends} />
    <TransactionHistory transactions={transactions} />;
  </React.StrictMode>
);
