import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MessageSquare, BarChart2, Bell } from "lucide-react";
import './App.css'
import { BarChart } from '@mui/x-charts/BarChart'
import { LineChart } from '@mui/x-charts/LineChart'
import ChatSystem from "./ChatSystem.jsx"
import Notifications from './Notifications.jsx'

export default function App() {
  return (
    <div className="w-full bg-white color-white">
      <Router>
        <Dashboard />
      </Router>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="flex h-screen bg-white w-full">
      {/* Sidebar */}
      <div className="bg-white shadow-lg p-8 flex flex-col space-y-8 border-r border-gray-300">
        <h1 className="text-l font-bold text-gray-900 m-6 text-center"> Project Planner </h1>
        <nav className="flex flex-col space-y-4">
          <NavItem to="/" icon={<BarChart2 />} label="Dashboard" />
          <NavItem to="/chat" icon={<MessageSquare />} label="Chat System" />
          <NavItem to="/notifications" icon={<Bell />} label="Notifications" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 w-full">
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/chat" element={<ChatSystem />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <Link to={to} className="flex items-center px-6 py-4 bg-white hover:bg-gray-400 text-gray-900 font-bold rounded-lg transition-all shadow-md text-lg">
      <span className="mr-4 text-gray-700 text-xl">{icon}</span>
      <span>{label}</span>
    </Link>
  );  
}

function DashboardContent() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-black text-xl font-bold">Pending Work Tracker</h2>
        <BarChart width={400} height={300} series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]} />
      </div>
      <div className="p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-black text-xl font-bold">Performance Analysis</h2>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={500}
          height={300}
        />

      </div>
    </div>
  );
}
