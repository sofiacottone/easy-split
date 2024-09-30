import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selectedFriend, onRemoveFriend, onSplitBill }) {

    return <>
        <ul className="py-3">
            {friends.map((friend) => (
                <Friend
                    friend={friend}
                    key={friend.id}
                    onSelection={onSelection}
                    selectedFriend={selectedFriend}
                    onRemoveFriend={onRemoveFriend}
                    onSplitBill={onSplitBill}
                />
            ))}
        </ul>
    </>
}