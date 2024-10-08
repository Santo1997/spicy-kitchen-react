const Items = ({items}) => {
  return (
    <>
      {items.map((item) => (
        <div className="flex justify-between items-center gap-20" key={item.id}>
          <p>
            <span className="text-lg text-white font-bold">{item.name}</span>
            <br />
            <span className="text-sm text-gray-400">{item.ingredients}</span>
          </p>
          <p className="text-base text-gray-400 font-bold">{item.price}</p>
        </div>
      ))}
    </>
  );
};

export default Items;
