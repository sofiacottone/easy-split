import Avatar from "./Avatar";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

export default function Friend({ friend, onSelection, selectedFriend, onRemoveFriend, onSplitBill }) {
    const isSelected = selectedFriend?.id === friend.id;

    return <>
        <li className={`${isSelected ? 'bg-cyan-100' : ''} mb-1 px-2 py-1 flex items-center justify-between gap-4 rounded hover:bg-cyan-100`}>
            <div className="flex items-center gap-4 w-4/5">
                <Avatar seed={friend.name} alt={friend.name} />
                <div>
                    <h3 className="mb-1 font-bold">{friend.name}</h3>

                    {friend.balance < 0 && (
                        <p className="text-red-500">
                            You owe {friend.name} {Math.abs(friend.balance)}€
                        </p>
                    )}
                    {friend.balance > 0 && (
                        <p className="text-green-600">
                            {friend.name} owes you {Math.abs(friend.balance)}€
                        </p>
                    )}
                    {friend.balance === 0 && (
                        <p>
                            You and {friend.name} are even
                        </p>
                    )}
                </div>
            </div>

            <div className="flex gap-1">
                <Button
                    onClick={() =>
                        onSelection(friend)
                    }
                >
                    {isSelected ? 'Close' : 'Select'}
                </Button>

                {!isSelected &&
                    <button
                        onClick={() => onRemoveFriend(friend.id)}
                        className="px-2 py-1 text-white bg-red-600 rounded"
                    >
                        &#88;
                    </button>
                }
            </div>

        </li>
        {isSelected && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={onSplitBill} />}

    </>
}