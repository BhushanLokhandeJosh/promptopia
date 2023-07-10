//LAYOUT IS GOING TO BE WRAP AROUND EVERY PAGES.

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Promtopia",
  description: "Discover & Share AI Prompts",
};
const RootLayout = ({ children }) => {
  /*All providers,redux tooolkit query,queryClientProvider of react query all
  goes here.So thats where everybody use in all app. */

  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            {/* We have to used Navbar to be visible to all pages. Sharable component*/}
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
