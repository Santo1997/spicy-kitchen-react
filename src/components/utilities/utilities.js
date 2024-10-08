const fetchData = async (fileNames, setDataFunctions, setLoader) => {
  const fetchPromises = fileNames.map((file) => fetch(`../unit/${file}.json`).then((res) => res.json()));

  try {
    const results = await Promise.all(fetchPromises);
    results.forEach((data, index) => {
      setDataFunctions[index](data);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoader(false);
  }
};

export default fetchData;
