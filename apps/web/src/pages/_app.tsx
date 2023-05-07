import type { AppProps } from "next/app";
import "../styles.css";
import Layout from "@components/templates/Layout";

/**
 * Custom App component in Next.js.
 * Use this component to add global styles, shared layout components,
 * and handle global state or side effects that affect your entire application.
 *
 * Note: This component is rendered on both the client and server sides.
 * Include any application-level logic or state management here.
 *
 * @param {AppProps} props - Props for the App component, including the Component and its pageProps
 * @returns {JSX.Element} The rendered App component with the specific page component and its props
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
