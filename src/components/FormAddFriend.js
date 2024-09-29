import Button from "./Button"

export default function FormAddFriend() {
    return <>
        <form className="p-4 flex flex-col items-center md:items-start justify-center gap-3 bg-cyan-100 rounded">
            <div className="flex items-center justify-between gap-2 size-full max-w-96">
                <label className="font-semibold">Friend name</label>
                <input type="text" className="rounded h-8" />
            </div>
            <Button>Add</Button>
        </form>
    </>
}