import React, { useEffect, useState } from "react";
import { data as originalData } from "./data";
import SearchBox from "./SearchBox";
import Jobs from "./Jobs";

export default function FilteredJobs() {
  const [data, setData] = useState(originalData);
  const [filters, setFilters] = useState();

  useEffect(() => {
    console.log(filters);

    // short version if (filters?.title?.length)
    if (filters && filters.title && filters.title.length) {
      setData((prevData) =>
        prevData.filter((item) => item.position.toLowerCase().includes(filters.title.toLowerCase()))
      );
    }

    if (filters && filters.location && filters.location.length) {
      setData((prevData) =>
        prevData.filter((item) => item.location.toLowerCase().includes(filters.location.toLowerCase()))
      );
    }

    if (filters && !filters.location && !filters.title) {
      setData(originalData);
    }
  }, [filters]);

  return (
    <>
      <SearchBox onFiltersChange={setFilters} />
      <Jobs data={data} />
    </>
  );
}
