import Avatar from "./Avatar";
import Button from "./Button";

export default function Friend({ friend }) {
    return <>
        <li className="mb-1 px-2 py-1 flex items-center justify-between gap-4 rounded hover:bg-cyan-100">
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

            <Button>Select</Button>
        </li>
    </>
}