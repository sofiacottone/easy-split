export default function Avatar({ seed, alt }) {
    const avatarUrl = `https://api.dicebear.com/6.x/bottts-neutral/svg?size=48&seed=${seed}`;
    return <img src={avatarUrl} alt={alt} className="rounded-full" />
}