import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
//import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LoginForm from './pages/LoginForm';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './component/UserRoute';
import AdminRoute from './component/AdminRoute';
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import SingleJob from './pages/SingleJob';
import DashUsers from './pages/admin/DashUsers';
import Applyuser from './pages/admin/applieduser';
import DashJobs from './pages/admin/DashJobs';
import userJobs from './pages/admin/userjobs';
import DashCategory from './pages/admin/DashCategory';
import DashCreateJob from './pages/admin/DashCreateJob';
import DashCreateCategory from './pages/admin/DashCreateCategory';
import ChangePassword from './pages/user/changepassword';


import { createTheme } from '@mui/material/styles';
import { themeColors } from './theme'
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

//HOC

const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
const DashJobsHOC = Layout(DashJobs);
const ApplyuserHOC = Layout(Applyuser);
const UserJobsHOC = Layout(userJobs);
const DashCategoryHOC = Layout(DashCategory);
const DashCreateJobHOC = Layout(DashCreateJob);
const DashCreateCategoryHOC = Layout(DashCreateCategory);
const ChangePasswordHOC= Layout(ChangePassword);





const App = () => {
    const { mode } = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeColors(mode)), [mode]);

    return (
        <>
            <ToastContainer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/search/location/:location' element={<Home />} />
                            <Route path='/search/:keyword' element={<Home />} />
                            <Route path='/login' element={<LoginForm/>} />
                            <Route path='/job/:id' element={<SingleJob />} />
                            <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
                            <Route path='/admin/users' element={<AdminRoute><DashUsersHOC /></AdminRoute>} />
                            <Route path='/admin/userjobs/:id' element={<AdminRoute><UserJobsHOC /></AdminRoute>} />
                            <Route path='/admin/jobs' element={<AdminRoute><DashJobsHOC /></AdminRoute>} />
                            <Route path='/admin/category' element={<AdminRoute><DashCategoryHOC /></AdminRoute>} />
                            <Route path='/admin/job/create' element={<AdminRoute><DashCreateJobHOC /></AdminRoute>} />
                            <Route path='/admin/category/create' element={<AdminRoute><DashCreateCategoryHOC /></AdminRoute>} />
                            <Route path='/admin/job/applications/:id' element={<AdminRoute><ApplyuserHOC /></AdminRoute>} />
                            <Route path='/user/dashboard' element={<UserRoute>< UserDashboardHOC /></UserRoute>} />
                            <Route path='/user/changepassword' element={<UserRoute>< ChangePasswordHOC /></UserRoute>} />
                            <Route path='/user/jobs' element={<UserRoute>< UserJobsHistoryHOC /></UserRoute>} />
                            <Route path='/user/info' element={<UserRoute>< UserInfoDashboardHOC /></UserRoute>} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </ProSidebarProvider>
            </ThemeProvider>
        </>
    )
}

export default App