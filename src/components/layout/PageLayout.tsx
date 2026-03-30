import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { JsonLdLocalBusiness } from '../seo/JsonLdLocalBusiness';

export function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLdLocalBusiness />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
