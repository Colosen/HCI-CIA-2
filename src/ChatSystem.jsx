const ChatSystem = () => {
    return (
        <div className="text-black">
            Coming soon.
            <TextMessage author="Jitheesh">Hi</TextMessage>
            <TextMessage author="John">Hello</TextMessage>
            <TextMessage author="Josephine">Hi!</TextMessage>
            <TextMessage author="Jacob">Good morning</TextMessage>
            <TextMessage author="Jack">Hello!</TextMessage>
            <TextMessage author="Jasmine">Good morning!</TextMessage>
            <TextMessage author="Julia">Hi!</TextMessage>
        </div>
    )
}

const TextMessage = ({author, children}) => {
    return (
        <div className="text-left border-2 rounded-lg border-solid-black p-4 m-6 px-8 pr-100">
            <div className="text-blue-600 font-bold p-2">
                {author}
            </div>
            {children}
        </div>
    )
}

export default ChatSystem