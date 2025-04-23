function ColorGrid() {
  const [count, setCount] = useState([]);
  const [digits, setDigits] = useState([]);

  useEffect(() => {
    setDigits([...Array(Number(count)).keys()]);
  }, [count]);

  const getTextColor = (digit, max) => 100 - (digit / max) * 90;

  return (
    <>
      <form>
        <input
          type='number'
          min={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </form>
      <div className='flex flex-row gap-20 flex-wrap'>
        {digits.length > 0 ? (
          digits.map((index, digit) => (
            <p
              key={index}
              style={{ color: getTextColor(digit, digits.length) }}
            >
              {digit + 1}
            </p>
          ))
        ) : (
          <h1>No Count</h1>
        )}
      </div>
    </>
  );
}

export default ColorGrid;
