export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h2>Inner Layout</h2>
            <p>{children}</p>
        </div>
    )
}