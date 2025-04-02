const Notifications = () => {
    return (
        <div className="text-black">
            Notifications (coming soon).
        </div>
    )
}

const Notification = ({source, children}) => {
    return (
        <div className="text-left border-2 rounded-lg border-solid-black p-4 m-6 px-8 mx-100">
            <div className="text-blue-600 font-bold p-2">
                {author}
            </div>
            {children}
        </div>
    )
}

export default Notifications