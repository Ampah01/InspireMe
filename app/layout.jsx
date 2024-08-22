import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
  title: "InspireMe",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children} 
            <Footer />
          </main>
          
        </Provider>
      </body>
    </html>
  );
}
