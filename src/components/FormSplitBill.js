import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const paidByFriend = bill ? bill - paidByUser : '';
    const [whoIsPaying, setWhoIsPaying] = useState('user');

    function handleSumbit(e) {
        e.preventDefault();

        if (!bill || !paidByUser) return;

        onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
    }

    return <>
        <form onSubmit={handleSumbit} className="p-4 flex flex-col items-start justify-center gap-3 bg-cyan-100 rounded">
            <h2 className="font-semibold uppercase">Split a bill with {selectedFriend.name}</h2>

            <div className="flex items-center justify-between gap-2 size-full">
                <label>Bill value</label>
                <input
                    type="text"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="text-center" />
            </div>

            <div className="flex items-center justify-between gap-2 size-full">
                <label>Your expense</label>
                <input
                    type="text"
                    value={paidByUser}
                    onChange={(e) => setPaidByUser(
                        Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
                    )}
                    className="text-center" />
            </div>

            <div className="flex items-center justify-between gap-2 size-full">
                <label>{selectedFriend.name}'s expense</label>
                <input
                    type="text"
                    value={paidByFriend}
                    className="text-center"
                    disabled
                />
            </div>

            <div className="flex items-center justify-between size-full">
                <label>Who's paying the bill</label>
                <select
                    value={whoIsPaying}
                    onChange={(e) => setWhoIsPaying(e.target.value)}
                    className="w-1/2 text-center"
                >
                    <option value="user">You</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>
            </div>
            <div className="w-full flex justify-center">
                <Button>Split bill</Button>
            </div>
        </form>
    </>
}