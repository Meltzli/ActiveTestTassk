import axios from "axios";
function getItems() {
  useEffect(() => {
    axios
      .get("http://maxifoxy-testfront-12dc.twc1.net/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
}

export { getItems };
