import { Switch, BrowserRouter, Route } from "react-router-dom";
import CreateTripPage from "../CreateTripPage";
import HomePage from "../HomePage";
import TripDetailsPage from "../TripDetailsPage";
import ApplicationFormPage from "../ApplicationFormPage";
import LoginPage from "../LoginPage";
import ListTripsPage from "../ListTripsPage";
import AdminHomePage from "./../AdminHomePage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/trips/application"}>
          <ApplicationFormPage />
        </Route>
        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/admin/trips/list"}>
          <AdminHomePage />
        </Route>
        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>
        <Route exact path={"/admin/trips/:id"}>
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />}/>
//         <Route
//           path="/trips/application"
//           element={<ApplicationFormPage />}
//         />
//         <Route path="/trips/list" element={<ListTripsPage />}/>
//         <Route path="/login" element={<LoginPage />}/>
//         <Route path="/admin/trips/list" element={<AdminHomePage />}/>
//         <Route path="/admin/trips/create" element={<CreateTripPage />}/>
//         <Route path="/admin/trips/:id" element={<TripDetailsPage />}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }
