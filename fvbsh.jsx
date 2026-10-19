const [data, setData] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  };
  fetchData();
}, [])
