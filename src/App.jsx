import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout";

const App = () => {




  return (
    <PageLayout>
      <Routes>
        <Route path={'/instagram-clone' || '/'} element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* <Route path="/:username" element={<ProfilePage />} /> */}
      </Routes>
    </PageLayout>
  );
};

export default App;
