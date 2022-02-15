export default function TitlePage(props) {
    const language = props.language || "";
    return (
        <h2 className="text-2xl text-gray-800 font-popin font-semibold mt-1">
            {`#Top${props.count}${props.page}${language.toUpperCase()}`}
        </h2>
    );
}
