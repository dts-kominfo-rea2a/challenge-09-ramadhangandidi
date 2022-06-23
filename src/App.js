import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";
// console.log(contacts[0].name);

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <section>
        <Header
          headerText="Call a Friend"
          headerInnerText="your friendly contact app"
        />
      </section>
      <Contact dataContact={contacts[0]} />
      <Contact dataContact={contacts[1]} />
      <Contact dataContact={contacts[2]} />
      <Contact dataContact={contacts[3]} />
      <Contact dataContact={contacts[4]} />
      <Contact dataContact={contacts[5]} />
    </div>
  );
};

export default App;
