const Notifications = () => {
    return (
        <div className="text-left text-black">
            Notifications (coming soon).
            <Notification source="Project 1"> John completed task A.</Notification>
            <Notification source="Project 1"> John completed task A.</Notification>
            <Notification source="Project 1"> John completed task A.</Notification>
            <Notification source="Project 1"> John completed task A.</Notification>
            <Notification source="Project 1"> John completed task A.</Notification>
            <Notification source="Project 1"> John completed task A.</Notification>
        </div>
    )
}

const Notification = ({source, children}) => {
    return (
        <div className="text-left border-2 rounded-lg border-solid-black p-4 m-6 px-8 pr-120">
            <div className="text-left text-blue-600 font-bold p-2">
                {source}
            </div>
            {children}
        </div>
    )
}

export default Notifications