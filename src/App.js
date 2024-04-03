// import logo from './logo.svg';
import './App.css';
// import NavBar from './layout/NavBar';
// import Footer from './layout/Footer';
// import Sidebar  from './layout/Sidebar';
import Practice from './practice/Practice';
// import Practice1 from './practice/Practice1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './layout/Sidebar';
import NavBar from './layout/NavBar';
// import './content/Dashboard';
import './assets/css/admin.css';
import './assets/css/mdb.min.css';
import Dashboard from './content/Dashboard';
import Contain from './layout/Content'
// import Calculator from './practice/Calculator';
// import './assets/js/admin.js';
// import './assets/js/mdb.umd.min.js';


function App() {
  return (



    <>

      <header>

        <Sidebar/>

        <NavBar/>

      </header>

      {/* <Dashboard/> */}

      <Contain/>

      {/* <Calculator/> */}

      {/* <NavBar CompanyCode = {20} />
  
    <Sidebar menu = {[20, 30, 40]} />
    <Sidebar menu = {{name: "User"}} />

    <Footer companyName='Google'/> */}

      {/* <Practice /> */}

      {/* <Practice1/>  */}

      
    </>



  );
}

export default App;