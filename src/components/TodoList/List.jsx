export const List = () => {
  return (
    <ul>
      {[].map(item => (
        <li key={item.id}>
          <p>{item.todo}</p>
          <button onClick={() => {}}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
