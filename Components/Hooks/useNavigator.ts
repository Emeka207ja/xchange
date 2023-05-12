import React, { useState, useEffect } from "react";

const useNavigator = () => {
 const [query, setQuery] = useState("");
 useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const queryValue = queryParams.get("query")!;
		setQuery(queryValue);
 }, []);

 return [query]
}

export default useNavigator
