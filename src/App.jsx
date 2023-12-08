import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./routes/Router";
import GlobalStyle from "./utils/GlobalStyle";
import ProgressBar from "./components/@common/ProgressBar";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyle />
      <ProgressBar />
      <Router />
    </QueryClientProvider>
  );
}
