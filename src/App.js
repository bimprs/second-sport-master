import {Routes,Route} from 'react-router-dom';
import InfoProfil from './pages/infoprofil/infoprofil';
import InfoProduk from './pages/infoproduk/infoproduk';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import DaftarJual from './pages/daftarjual/daftarjual';
import InfoTawar from './pages/infotawar/infotawar';
import ModalTawar from './components/buyer/modaltawar/modaltawar';
import ModalStatus from './components/seller/modalstatus/modalstatus';
import HalamanProdukBuyer from './pages/halproduk/buyer/halamanProdukBuyer';
import HalamanProdukSeller from './pages/halproduk/seller/halamanProdukSeller';

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/login" element={<Login />} />
      <Route path = "/register" element={<Register />} />
      <Route path = "/infoprofil" element={<InfoProfil />} />
      <Route path = "/infoproduk" element={<InfoProduk />} />
      <Route path = "/daftarjual" element={<DaftarJual />} />
      <Route path = "/infotawar" element={<InfoTawar />} />
      <Route path = "/modaltawar" element={<ModalTawar />} />
      <Route path = "/modalstatus" element={<ModalStatus />} />
      <Route path = "/halprodukbuyer" element={<HalamanProdukBuyer/>} />
      <Route path = "/halprodukseller" element={<HalamanProdukSeller />} />
      <Route path="*" element= "Error : Halaman Tidak Tersedia" />
    </Routes>
  );
}

export default App;
