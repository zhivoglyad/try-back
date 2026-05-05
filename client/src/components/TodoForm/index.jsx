
export default function TodoForm(props) {
    const {
        onHandleSubmit,
        title,
        setTitle,
    } = props;

    return (
        <form onSubmit={onHandleSubmit}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <button type="submit">Добавить</button>
        </form>
    );
};