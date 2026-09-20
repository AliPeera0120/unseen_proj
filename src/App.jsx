import { Toaster } from "@/components/ui/toaster"
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Layout from './components/layout/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const DonationMap = React.lazy(() => import('./pages/DonationMap'));
const About = React.lazy(() => import('./pages/About'));
const Impact = React.lazy(() => import('./pages/Impact'));
const GetInvolved = React.lazy(() => import('./pages/GetInvolved'));
const Events = React.lazy(() => import('./pages/Events'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Team = React.lazy(() => import('./pages/Team'));

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense fallback={<div className="grid min-h-screen place-items-center text-sm text-muted-foreground">Loading…</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<DonationMap />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </Router>
  )
}

export default App
