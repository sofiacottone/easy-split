import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const paidByFriend = bill ? bill - paidByUser : '';
    const [whoIsPaying, setWhoIsPaying] = useState('user');
    const [errorMessage, setErrorMessage] = useState('');

    // numbers validation
    function hasTwoDecimalPlaces(value) {
        const num = parseFloat(value);
        if (isNaN(num)) return false;

        const strValue = num.toString();
        if (!strValue.includes('.')) return true;

        const decimalPart = strValue.split('.')[1];
        return decimalPart.length <= 2; // return true in case of 2 decimal places max
    }

    function handleSumbit(e) {
        e.preventDefault();

        const billValue = parseFloat(bill);
        const paidByUserValue = parseFloat(paidByUser);
        console.log('bill value', billValue);
        console.log('user value', paidByUserValue);

        if (!billValue || !paidByUserValue) return;

        setErrorMessage('');
        if (!hasTwoDecimalPlaces(bill) || !hasTwoDecimalPlaces(paidByUser)) {
            setErrorMessage('Please enter numbers with a maximum of 2 decimal places.');
            return;
        }

        const paidByFriendValue = parseFloat(billValue) - parseFloat(paidByUserValue);
        console.log('friend value', paidByFriendValue);


        onSplitBill(whoIsPaying === 'user' ? paidByFriendValue : -paidByUserValue);
    }

    return <>
        <form onSubmit={handleSumbit} className="p-4 flex flex-col items-start justify-center gap-3 bg-cyan-100 rounded">
            <h2 className="font-semibold uppercase">Split a bill with {selectedFriend.name}</h2>

            <div className="flex items-center justify-between gap-2 size-full">
                <label>Bill value</label>
                <input
                    type="number"
                    step="0.10"
                    min="0"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    className="text-center" />
            </div>

            <div className="flex items-center justify-between gap-2 size-full">
                <label>Your expense</label>
                <input
                    type="number"
                    step="0.10"
                    min="0"
                    value={paidByUser}
                    onChange={(e) => setPaidByUser(
                        e.target.value > bill ? paidByUser : e.target.value
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
                    className="py-px w-1/2 max-w-44 text-center"
                >
                    <option value="user">You</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>
            </div>

            {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

            <div className="w-full flex justify-center">
                <Button>Split bill</Button>
            </div>

        </form>
    </>
}