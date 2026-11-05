import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/authpage/LoginPage";
import SignupPage from "./pages/authpage/SignupPage";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import ProjectPage from "./pages/ProjectPage";
import TaskPage from "./pages/TaskPage";
import ClientPage from "./pages/ClientPage";
import TeamPage from "./components/task_component/TeamPage";

const App = () => {
  return <>
    <Routes>
        <Route element={<AuthLayout/>}>
            <Route path="/" element={<LoginPage/>} />
            <Route path="sign-up" element={<SignupPage/>} />
        </Route>

        <Route element={<DashboardLayout/>}>
            <Route path="/dashboard" element={<DashboardPage/>}/>
            <Route path="clients" element={<ClientPage/>}/>
            <Route path="projects" element={<ProjectPage/>}/>
            <Route path="tasks" element={<TaskPage/>}/>
            <Route path="team" element={<TeamPage/>}/>
        </Route>

    </Routes>
  </>;
};

export default App;
