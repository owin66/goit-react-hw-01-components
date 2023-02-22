import React from 'react';
import user from './Profile/user.json';
import Profile from './Profile/Profile';
import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from './Transaction/transactions.json';
import TransactionList from './Transaction/TransactionList';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionList items={transactions} />;
    </div>
  );
};
