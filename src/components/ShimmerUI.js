export default ShimmerUI = () => {
  const rows = [];
  for (let i = 0; i < 25; i++) {
    rows.push(i);
  }
  return (
    <div className='flex justify-center items-center flex-wrap mt-5'>
      {rows.map((val, key) => (
        <div
          key={key}
          className='h-[400px] m-5 p-3 bg-gray-200 w-[250px] rounded'></div>
      ))}
    </div>
  );
};
