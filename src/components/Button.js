export default function Button({ children, onClick }) {
    return <button onClick={onClick} className="px-2 py-1 text-white bg-cyan-600 rounded">{children}</button>
}