import React from "react";
import { STATS_GET } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../Helper/Error";
import Head from "../../Helper/Head";
import Loading from "../../Helper/Loading";
/* 
=> Em vez de importarmos assim:
import UseStatsGraphs from "../UseStatsGraphs";
=> Vamos importar assim: */
const { UseStatsGraphs } = React.lazy(() => import("../UseStatsGraphs"));
/*Isso porque, só iremos querer que os dados sejam puxados, quando o usuário acessar essa página */

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
      <React.Suspense fallback={<div>Calmante</div>}>
        {/*O fallback seria o que ele iria carregar caso isso ainda ñ esteja carregado*/}
        <Head title="Estatísticas" />
        <UseStatsGraphs data={data} />
        {/*Para eu carregar dados do Lazy, preciso envolver em um React.Suspense*/}
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
