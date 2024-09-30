import { useState } from "react"
import Button from "./Button"

export default function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState('');

    function handleSumbit(e) {
        e.preventDefault();

        if (!name || name.trim() === '') return;

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            balance: 0,
        };
        // console.log(newFriend);

        onAddFriend(newFriend);

        setName('');
    }

    return <>
        <form onSubmit={handleSumbit} className="p-4 flex flex-col items-center justify-center gap-3 bg-cyan-100 rounded">
            <div className="flex items-center justify-between gap-2 size-full">
                <label className="font-semibold">Friend name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    maxLength={15}
                    className="rounded h-8 text-center"
                />
            </div>
            <Button>Add</Button>
        </form>
    </>
}