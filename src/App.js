import { useEffect, useState } from "react"
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(JSON.parse(localStorage.getItem("friends")) || []);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // update localStorage
  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  // open form to add friends
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  // add new friend to the friends list
  function handleAddFriend(friend) {
    const updatedFriends = [...friends, friend];
    setFriends(updatedFriends);
    localStorage.setItem('friends', JSON.stringify(updatedFriends));

    // close form to add friend
    setShowAddFriend(false);
  }

  // remove friend from friends list
  function handleRemoveFriend(id) {
    const updatedFriends = friends.filter((friend) => friend.id !== id);
    setFriends(updatedFriends);
    localStorage.setItem('friends', JSON.stringify(updatedFriends));
  }

  // set selected friend
  function handleSelection(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  // update friends balance
  function handleSplitBill(value) {
    const updatedFriends = friends.map((friend) =>
      friend.id === selectedFriend.id
        ? { ...friend, balance: friend.balance + value }
        : friend
    );

    setFriends(updatedFriends);
    localStorage.setItem('friends', JSON.stringify(updatedFriends));

    // reset selected friend
    setSelectedFriend(null);
  }

  return (
    <div className="App max-w-md shadow rounded m-auto">
      <header className="pt-8">
        <h1 className="text-3xl text-center font-bold">EasySplit</h1>
        <p className="mb-2 text-slate-600 text-center">Split bills with your friends</p>
      </header>

      <main className="px-4 overflow-y-auto h-[calc(100vh-118px)]">
        <div className="w-full">

          {friends.length === 0 ? (
            <p className="my-8 text-center font-semibold">Add friends to start splitting bills!👇</p>
          ) :
            < FriendsList
              friends={friends}
              onSelection={handleSelection}
              selectedFriend={selectedFriend}
              onRemoveFriend={handleRemoveFriend}
            />}

          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

          <div className="my-2 w-full flex justify-end">
            <Button onClick={handleShowAddFriend}>
              {showAddFriend ? 'Close' : 'Add Friend'}
            </Button>
          </div>

        </div>
        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
      </main>

      <footer>
        <p className="px-2 py-px text-xs text-end text-white bg-cyan-600">
          Made with &#9829; by <a href="https://github.com/sofiacottone" target="__blank">Sofia C.</a>
        </p>
      </footer>
    </div>
  );
}



