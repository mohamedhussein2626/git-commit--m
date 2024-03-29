

import {BrowserRouter , Routes , Route} from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import CreatePost from "./pages/CreatePost"
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute"
import UpdatePost from "./pages/UpdatePost"
import PostPage from "./pages/PostPage"
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolice from "./pages/PrivacyPolice"
import Search from "./pages/Search"
import Footer from './components/Footer';
import ContactUs from "./pages/ContactUs"
import TermsAndConditions from "./pages/TermsAndConditions"

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/search" element={<Search />} />
      <Route path="/privacy" element={<PrivacyPolice />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/about" element={<About />} />
       <Route element={<PrivateRoute />}>
       <Route path="/dashboard" element={<Dashboard />} />
       </Route>
       <Route element={<OnlyAdminPrivateRoute />}>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path='/update-post/:postId' element={<UpdatePost />} />
       </Route>

       <Route path="/post/:postSlug" element={<PostPage />} />
    </Routes>

    <Footer />
    </BrowserRouter>
  )
}

export default App