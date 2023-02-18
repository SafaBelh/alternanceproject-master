import { Suspense, Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import MainLayout from "./layouts/MainLayout";
import CompanyPage from "./companyPage/CompanyPage";
import Register from "./authentication/Register"
import Login from "./authentication/Login";
import FormBacAlternance from "./form/FormBacAlternance";
import FormLicenceAlternance from "./form/FormLicenceAlternance";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      <Route path = "/companyPage" element = {<CompanyPage/>}/>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "/login" element = {<Login />}/>
      <Route path = "/formAlternanceBac" element = {<FormBacAlternance />}/>
      <Route path = "/formAlternanceLicence" element = {<FormLicenceAlternance />}/>

      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;
        const Pages = route.pages

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
          
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    path: "/",
    layout: MainLayout,
    component: lazy(() => import("./views/Home/Home")),
  },
  {
    path: "/createJob",
    layout: MainLayout,
    component: lazy(() => import("./views/CreateJob/CreateJob")),
  },
  {
    path: "/companyLandingPage",
    layout: MainLayout,
    component: lazy(() => import("./views/CompanyLandingPage/CompanyLandingPage")),
  },
  {
    path: "/:jobId",
    layout: MainLayout,
    component: lazy(() => import("./views/JobPosition/JobPosition")),
  },
  {
    path: "/application",
    layout: MainLayout,
    component: lazy(() => import("./views/Application/Application")),
  },
  {
    path: "/jobs",
    layout: MainLayout,
    component: lazy(() => import("./views/Jobs/Jobs")),
  },
  {
    path: "/alternanceBacStaticsPage",
    layout: MainLayout,
    component: lazy(() => import("./components/alternanceBacStaticsPage/AlternanceBacStaticsPage")),
  },
  {
    path: "/alternanceLicenceStaticsPage",
    layout: MainLayout,
    component: lazy(() => import("./components/alternanceLicenceStaticsPage/AlternanceLicenceStaticsPage")),
  },
  {
    path: "/applicantPage",
    layout: MainLayout,
    component: lazy(() => import("./components/applicantPage/ApplicantPage")),
  },
  // {
  //   path: "/formAlternanceBac",
  //   layout: MainLayout,
  //   component: lazy(() => import("./form/FormBacAlternance")),
  // },
  // {
  //   path: "/formAlternanceLicence",
  //   layout: MainLayout,
  //   component: lazy(() => import("./form/FormLicenceAlternance")),
  // },
  
];

export default routes;
