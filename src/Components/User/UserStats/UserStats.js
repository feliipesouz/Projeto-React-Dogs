import React from "react";
import { STATS_GET } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../Helper/Error";
import Head from "../../Helper/Head";
import Loading from "../../Helper/Loading";
import UseStatsGraphs from "../UseStatsGraphs";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function geStats() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    geStats();
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UseStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
