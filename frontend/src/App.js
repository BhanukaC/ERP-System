import './App.css';
import Navbar from './components/NavBar/navBar';
import Footer from './components/Footer/footer';
import Sidebar from './components/sidebar/sidebar';
import CustomTable from './components/table/table';




function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <CustomTable />
      <Footer />
    </>
  );
}

export default App;
