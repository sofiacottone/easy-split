import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

export default function App() {
  return (
    <div className="App p-8">
      <h1 className="text-3xl text-center font-bold">EasySplit</h1>
      <p className="mb-2 text-slate-600 text-center">Split bills with your friends</p>
      <div className="w-full md:w-1/2">
        <FriendsList />
        <FormAddFriend />

        <div className="my-2 w-full flex justify-end">
          <Button>Add Friend</Button>
        </div>

      </div>
      <FormSplitBill />
    </div>
  );
}



