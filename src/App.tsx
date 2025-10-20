import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormAuth from "./pages/formAuth/FormAuth";
import Success from "./pages/formAuth/Success";
import SortableTable from "./pages/SortableTable";
import Dropdown from "./pages/Dropdown";
import SecretArea from "./pages/SecretArea";
import Frames from "./pages/Iframe";
import DynamicLoading from "./pages/DynamicLoading";
import FileDownload from "./pages/FileDownload";
import Layout from "./components/Layout";
// import Checkboxes from "./pages/Checkboxes";
// import DynamicContent from "./pages/DynamicContent";
// import DynamicControls from "./pages/DynamicControls";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-auth" element={<FormAuth />} />
          <Route path="/success" element={<Success />} />
          <Route path="/sortable-table" element={<SortableTable />} />
          <Route path="/secret-area" element={<SecretArea />} />
          <Route path="/iframe" element={<Frames />} />
          {/* <Route path="/checkboxes" element={<Checkboxes />} /> */}
          <Route path="/dropdown" element={<Dropdown />} />
          {/* <Route path="/dynamic-content" element={<DynamicContent />} /> */}
          {/* <Route path="/dynamic-controls" element={<DynamicControls />} /> */}
          <Route path="/dynamic-loading" element={<DynamicLoading />} />
          <Route path="/file-download" element={<FileDownload />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
