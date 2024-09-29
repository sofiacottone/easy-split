import Button from "./Button";

export default function FormSplitBill() {
    return <>
        <form className="p-4 flex flex-col items-start justify-center gap-3 bg-cyan-100 rounded">
            <h2 className="font-semibold uppercase">Split a bill with X</h2>

            <div className="flex items-center justify-between gap-2 size-full max-w-96">
                <label>Bill value</label>
                <input type="text" />
            </div>

            <div className="flex items-center justify-between gap-2 size-full max-w-96">
                <label>Your expense</label>
                <input type="text" />
            </div>

            <div className="flex items-center justify-between gap-2 size-full max-w-96">
                <label>X's expense</label>
                <input type="text" disabled />
            </div>

            <div className="flex items-center justify-between size-full max-w-96">
                <label>Who's paying the bill</label>
                <select className="w-1/2">
                    <option value="user">You</option>
                    <option value="friend">X</option>
                </select>
            </div>
            <div className="w-full flex justify-center">
                <Button>Split bill</Button>
            </div>
        </form>
    </>
}