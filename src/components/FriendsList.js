import Friend from "./Friend";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://api.dicebear.com/9.x/bottts-neutral/svg?size=48&eyes=bulging,dizzy,eva",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://api.dicebear.com/9.x/bottts-neutral/svg?size=48&eyes=dizzy,eva",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://api.dicebear.com/9.x/bottts-neutral/svg?size=48",
        balance: 0,
    },
];

export default function FriendsList() {
    const friends = initialFriends;

    return <>
        <ul className="py-3">
            {friends.map((friend) => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </ul>
    </>
}