/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dashboard, CreditRequest, CreditDetails } from './components/DashboardScreens';
import { 
  Bell, 
  BadgeCheck, 
  MapPin, 
  TrendingUp,
  TrendingDown, 
  ShieldCheck, 
  UserCheck, 
  Truck, 
  ChevronRight, 
  LayoutDashboard, 
  PlusCircle, 
  Gavel, 
  User, 
  QrCode, 
  Camera, 
  Wallet, 
  ArrowLeft, 
  Edit, 
  Info, 
  Phone, 
  Store, 
  Lock, 
  EyeOff, 
  Save, 
  Download, 
  Share2, 
  Flashlight, 
  Image as ImageIcon, 
  X, 
  Menu,
  ChevronDown,
  Globe,
  Settings,
  Shield,
  FileText,
  Badge,
  UserRoundCheck
} from 'lucide-react';

type Screen = 'landing' | 'login' | 'register' | 'profile' | 'edit-profile' | 'payment' | 'disputes' | 'verification' | 'sell' | 'dashboard' | 'credit-request' | 'credit-details';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing': return <Landing onStart={() => setCurrentScreen('login')} />;
      case 'login': return <Login onBack={() => setCurrentScreen('landing')} onLogin={() => setCurrentScreen('dashboard')} onRegister={() => setCurrentScreen('register')} />;
      case 'register': return <Register onBack={() => setCurrentScreen('login')} onRegister={() => setCurrentScreen('dashboard')} />;
      case 'dashboard': return <Dashboard onNewTransaction={() => setCurrentScreen('sell')} onReportDispute={() => setCurrentScreen('disputes')} onCreditRequest={() => setCurrentScreen('credit-request')} onQR={() => setCurrentScreen('payment')} />;
      case 'profile': return <Profile onEdit={() => setCurrentScreen('edit-profile')} />;
      case 'edit-profile': return <EditProfile onBack={() => setCurrentScreen('profile')} />;
      case 'payment': return <Payment onBack={() => setCurrentScreen('dashboard')} />;
      case 'disputes': return <Disputes />;
      case 'verification': return <Verification />;
      case 'sell': return <Sell />;
      case 'credit-request': return <CreditRequest onBack={() => setCurrentScreen('dashboard')} onNext={() => setCurrentScreen('credit-details')} />;
      case 'credit-details': return <CreditDetails onBack={() => setCurrentScreen('credit-request')} />;
      default: return <Landing onStart={() => setCurrentScreen('login')} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Nav Bar - Hidden on landing, login, register */}
      {!['landing', 'login', 'register'].includes(currentScreen) && (
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-3 bg-white/90 backdrop-blur-xl border-t border-indigo-900/10 shadow-[0_-8px_30px_rgb(26,35,126,0.12)] rounded-t-[32px]">
          <button 
            onClick={() => setCurrentScreen('dashboard')}
            className={`flex flex-col items-center justify-center transition-all ${currentScreen === 'dashboard' ? 'text-primary' : 'text-indigo-900/50'}`}
          >
            <LayoutDashboard size={24} className={currentScreen === 'dashboard' ? 'fill-current' : ''} />
            <span className="text-[11px] font-medium mt-1">Accueil</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('sell')}
            className={`flex flex-col items-center justify-center transition-all ${currentScreen === 'sell' ? 'text-primary' : 'text-indigo-900/50'}`}
          >
            <PlusCircle size={24} />
            <span className="text-[11px] font-medium mt-1">Vendre</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('disputes')}
            className={`flex flex-col items-center justify-center transition-all ${currentScreen === 'disputes' ? 'text-primary' : 'text-indigo-900/50'}`}
          >
            <Gavel size={24} />
            <span className="text-[11px] font-medium mt-1">Litiges</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('verification')}
            className={`flex flex-col items-center justify-center transition-all ${['verification', 'edit-profile'].includes(currentScreen) ? 'text-primary' : 'text-indigo-900/50'}`}
          >
            <User size={24} />
            <span className="text-[11px] font-medium mt-1">Profil</span>
          </button>
        </nav>
      )}
    </div>
  );
}

// --- Components ---

function Landing({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 border-b border-indigo-900/5 bg-[#F4F1EA]/90 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-extrabold text-[#1A237E] tracking-tight">MarchéTchad</div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2.5 terracotta-gradient text-white font-bold rounded-full shadow-lg shadow-primary/20" onClick={onStart}>
              Commencer
            </button>
            <User size={24} className="text-[#1A237E]" />
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative min-h-[80vh] flex items-center overflow-hidden px-6">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <img 
              className="w-full h-full object-cover object-center" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjczMx_ia0YpsfJeMNEDfsW2J-Z8sK8OtIlqwBAAE6PJuyruRwOmh4BIhO0AhunbYErwZosIuVZh-mERo5dFj8HdnRJYI3EcC6LYMFhifzMLOd4QtcdImW0qJdsFYXcW-LGAGD0vYkibWHrTmt7qBBAterVJHW_7wYktDODooianmRvQ4bT4ppWPWh63T8kq7B0ztorpv_p4iWRJi9g-Awt78tCEn9lXFV2Y9OwDrgZFQMirP2j9c4nDgjvQHpfnNRBPXdq18psc8" 
              alt="Marketplace"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-[12px] font-bold uppercase tracking-widest">Pionnier Fintech du Sahel</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-on-background leading-tight">
                Digitalisez la Confiance. <br/>
                <span className="text-primary">Boostez le Commerce.</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg">
                Le carrefour moderne où la fiabilité ancestrale rencontre la sécurité de la blockchain. MarchéTchad est l'infrastructure haut de gamme pour les entrepreneurs les plus résilients d'Afrique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 terracotta-gradient text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-95" onClick={onStart}>
                  Lancez votre boutique
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="w-full bg-[#1A237E] text-[#F4F1EA] py-12 px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
          <div className="text-lg font-bold text-[#CC5533]">MarchéTchad</div>
          <p className="max-w-xs opacity-60 text-center md:text-left text-sm">© 2026 MarchéTchad. Le carrefour moderne du commerce sahélien.</p>
        </div>
      </footer>
    </div>
  );
}

function Login({ onBack, onLogin, onRegister }: { onBack: () => void, onLogin: () => void, onRegister: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 h-16 bg-[#F4F1EA] shadow-sm">
        <button onClick={onBack} className="p-2 text-[#CC5533]">
          <ArrowLeft size={24} />
        </button>
        <span className="text-xl font-bold tracking-tighter text-[#CC5533]">MarchéTchad</span>
        <div className="flex items-center gap-1.5 bg-surface-container-highest/40 p-1 rounded-full border border-outline-variant/30">
          <button className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary text-white">FR</button>
          <button className="px-2.5 py-1 rounded-full text-[11px] font-bold text-on-surface-variant">AR</button>
        </div>
      </nav>

      <div className="w-full max-w-md mt-16">
        <div className="mb-8 text-center">
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-tinted border-4 border-white">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlLacuzhpV-U2D1-oFxRL-qYLXeNlpbjhEX2B4stCGHxY4M2_EUpChjd59azznj11BX29q4gLC59hxwu3GyJOBwUYL_1TXeW_Y3UWnieLC4TmE6emh2DJd5UWQqmi9TB4wUjRffNTOOON7qnNmrEgOLISu7KkBcPL0m4zswZVoJTQ1ZYC7uD8pTzXZ5aWgY2yEYx4t1BOyhYo8lmVdtqtPRuVSNPA10td-xUNIDN-qZ5T7Ph0D0c1Lqvipc87V7JBVk8DnJ7jY5pY" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-extrabold text-on-surface mb-2">Ravi de vous revoir</h1>
          <p className="text-on-surface-variant">Accédez à votre espace marchand et gérez vos échanges en toute simplicité.</p>
        </div>

        <div className="bg-white rounded-xl shadow-tinted p-8 border border-outline-variant/30">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-1">
              <label className="text-[12px] font-semibold text-on-surface-variant uppercase">Numéro de téléphone</label>
              <div className="relative">
                <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
                <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl outline-none" type="tel" placeholder="+235 ...." />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[12px] font-semibold text-on-surface-variant uppercase">Mot de passe</label>
              <div className="relative">
                <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
                <input className="w-full pl-12 pr-12 py-4 bg-surface-container-low border-none rounded-xl outline-none" type="password" placeholder="••••••••" />
                <EyeOff size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-outline cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-end">
              <button type="button" className="text-[12px] font-semibold text-primary">Mot de passe oublié ?</button>
            </div>
            <button type="submit" className="w-full terracotta-gradient text-white py-4 rounded-xl font-bold shadow-lg mt-2">
              Se Connecter
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-outline-variant/30"></div>
            <span className="px-4 text-[12px] text-on-surface-variant">OU</span>
            <div className="flex-grow h-px bg-outline-variant/30"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-xl text-[12px] font-semibold">
              <Globe size={16} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-xl text-[12px] font-semibold">
              <QrCode size={16} /> Scanner
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-on-surface-variant">
            Pas encore de compte ? <button onClick={onRegister} className="text-primary font-bold">S'inscrire</button>
          </p>
        </div>
      </div>
    </div>
  );
}

function Register({ onBack, onRegister }: { onBack: () => void, onRegister: () => void }) {
  return (
    <div className="min-h-screen flex flex-col p-6 bg-background">
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 h-16 bg-[#F4F1EA] shadow-sm">
        <button onClick={onBack} className="p-2 text-[#CC5533]">
          <ArrowLeft size={24} />
        </button>
        <span className="text-xl font-bold tracking-tighter text-[#CC5533]">MarchéTchad</span>
      </nav>

      <main className="pt-24 pb-12 w-full max-w-md mx-auto">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-fixed mb-4">
            <UserRoundCheck size={32} className="text-primary" />
          </div>
          <h1 className="text-3xl font-extrabold text-on-surface mb-2">Rejoignez l'aventure</h1>
          <p className="text-on-surface-variant">Créez votre compte et connectez-vous au plus grand réseau de commerçants du Tchad.</p>
        </div>

        <div className="bg-white rounded-xl shadow-tinted p-6 border border-outline-variant/30">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onRegister(); }}>
            <div className="space-y-4">
              <label className="block">
                <span className="text-[12px] font-semibold text-on-surface-variant block mb-1">NOM COMPLET</span>
                <div className="relative">
                  <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                  <input className="w-full bg-[#F4F1EA] border-none rounded-lg py-3 pl-11 outline-none" type="text" placeholder="Mahamat Idriss" />
                </div>
              </label>
              <label className="block">
                <span className="text-[12px] font-semibold text-on-surface-variant block mb-1">NUMÉRO DE TÉLÉPHONE</span>
                <div className="relative">
                  <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                  <input className="w-full bg-[#F4F1EA] border-none rounded-lg py-3 pl-11 outline-none" type="tel" placeholder="+235 60 00 00 00" />
                </div>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-[12px] font-semibold text-on-surface-variant block mb-1">VILLE</span>
                <div className="relative">
                  <MapPin size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                  <input className="w-full bg-[#F4F1EA] border-none rounded-lg py-3 pl-10 outline-none" type="text" placeholder="N'Djamena" />
                </div>
              </label>
              <label className="block">
                <span className="text-[12px] font-semibold text-on-surface-variant block mb-1">TYPE D'ACTIVITÉ</span>
                <div className="relative">
                  <Store size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                  <select className="w-full bg-[#F4F1EA] border-none rounded-lg py-3 pl-10 outline-none appearance-none">
                    <option>Vente en détail</option>
                    <option>Grossiste</option>
                  </select>
                </div>
              </label>
            </div>
            <div className="space-y-1">
              <label className="text-[12px] font-semibold text-on-surface-variant block mb-1">MOT DE PASSE</label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                <input className="w-full bg-[#F4F1EA] border-none rounded-lg py-3 pl-11 outline-none" type="password" placeholder="••••••••" />
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-5 w-5 rounded border-outline-variant text-primary" />
              <p className="text-sm text-on-surface-variant">
                J'accepte les <span className="text-secondary font-semibold">Conditions Générales</span> et la <span className="text-secondary font-semibold">Politique de Confidentialité</span>.
              </p>
            </div>
            <button type="submit" className="w-full terracotta-gradient text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
              Créer mon Compte
              <ChevronRight size={20} />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

function Profile({ onEdit }: { onEdit: () => void }) {
  return (
    <div className="pb-32 bg-surface">
      <header className="fixed top-0 z-50 bg-[#F4F1EA] flex justify-between items-center w-full px-5 py-3 h-16 border-b border-indigo-900/5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo7EFSqiK9MHfyIPGKWL6Q2tpOn03e6W64kJqlggwEouKs7FYP7nowH2oKm6JHqPku4aI612IDsTThfqsuN9UOxgmp4-gyiD9TX9Dd8l5zrz0zlOpIbstY57yimLRezGEYIb2QS3AZKo2dR40U7jrUNSdMI4_2iQzOIU6CDCh8DuhUixek9KPS3QX223VL91HA2LpZ8Yu7y6N49axPTxz3cNQ9t9izCKlA37TEcfUttSsH5a2_wXlirwdpCLpyDHiw1aAyUmHm7B8" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-[#CC5533]">MarchéTchad</span>
        </div>
        <button className="text-[#CC5533]">
          <Bell size={24} />
        </button>
      </header>

      <main className="pt-20 px-5 max-w-2xl mx-auto space-y-8">
        <section className="text-center space-y-4">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-tinted mx-auto border-4 border-white">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmcmqRFe1oAS8IRIFe8Al6mrZq0fc7MFcztF7-R0xUGvlG7AwXzw98We18NK2vUt5MvlYIw4HFU3MXtt6yMxE5kBHLy1UwMEYaqQbZQonJeBrsGZmt85TliqlHd6uubCwF5f3aFdc1R5ni3zsFuBX9D0zhESrBZMsSeJMW2KuDQ3KaHkvDh7J7tB0HxTWZh_ef4g40tFoy3a5C78eLRZQMq1eAPDoh2Y6DnUvf2CgsHg8KOgxAA-60UUVuxTgPEW3pLVmPGiYWj3Q" alt="Merchant" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-tertiary-container text-white p-1.5 rounded-xl shadow-lg">
              <BadgeCheck size={16} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-on-surface">Abdoulaye Mahamat</h1>
            <p className="text-on-surface-variant flex items-center justify-center gap-1">
              <MapPin size={16} /> N'Djamena, Grand Marché
            </p>
          </div>
          <div className="flex justify-center gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[12px] font-semibold">Membre Or</span>
            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[12px] font-semibold">Import/Export</span>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-white p-6 rounded-[2rem] shadow-tinted border border-indigo-900/5 flex justify-between items-center">
            <div className="text-center">
              <p className="text-[12px] font-semibold text-on-surface-variant uppercase mb-1">Transactions</p>
              <p className="text-2xl font-bold text-primary">1,284</p>
            </div>
            <div className="h-12 w-px bg-outline-variant"></div>
            <div className="text-center">
              <p className="text-[12px] font-semibold text-on-surface-variant uppercase mb-1">Activité</p>
              <p className="text-2xl font-bold text-primary">8 ans</p>
            </div>
            <div className="h-12 w-px bg-outline-variant"></div>
            <div className="text-center">
              <p className="text-[12px] font-semibold text-on-surface-variant uppercase mb-1">Score</p>
              <p className="text-2xl font-bold text-primary">4.9</p>
            </div>
          </div>

          <div className="col-span-2 bg-white p-6 rounded-[2rem] shadow-tinted border border-indigo-900/5 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Croissance Réputation</h3>
              <span className="text-tertiary text-[12px] font-semibold flex items-center gap-1">
                <TrendingUp size={16} /> +12% ce mois
              </span>
            </div>
            <div className="h-32 w-full flex items-end justify-between gap-2 pt-4">
              <div className="w-full bg-secondary-container/20 rounded-t-lg h-[40%]"></div>
              <div className="w-full bg-secondary-container/20 rounded-t-lg h-[55%]"></div>
              <div className="w-full bg-secondary-container/20 rounded-t-lg h-[45%]"></div>
              <div className="w-full bg-secondary-container/20 rounded-t-lg h-[70%]"></div>
              <div className="w-full bg-secondary-container/20 rounded-t-lg h-[65%]"></div>
              <div className="w-full bg-primary-container rounded-t-lg h-[95%]"></div>
            </div>
            <div className="flex justify-between text-[10px] font-semibold text-on-surface-variant px-1">
              <span>JAN</span><span>FEV</span><span>MAR</span><span>AVR</span><span>MAI</span><span>JUN</span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold px-2">Historique Vérifiable</h3>
          <div className="space-y-3">
            <BadgeItem icon={<ShieldCheck className="text-tertiary" />} title="Commerçant Fiable" desc="Vérifié par 850+ clients locaux" />
            <BadgeItem icon={<UserCheck className="text-tertiary" />} title="Transactions Sécurisées" desc="Zéro litige non résolu en 24 mois" />
            <BadgeItem icon={<Truck className="text-tertiary" />} title="Expert Logistique" desc="Livraisons rapides garanties" />
          </div>
        </section>

        <button 
          onClick={onEdit}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white font-bold shadow-lg active:scale-[0.98] transition-all"
        >
          Modifier mon Profil Public
        </button>
      </main>
    </div>
  );
}

function BadgeItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-4 bg-surface-container p-4 rounded-2xl border border-white/50">
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-bold text-on-surface">{title}</p>
        <p className="text-[12px] text-on-surface-variant">{desc}</p>
      </div>
      <ChevronRight size={20} className="text-primary" />
    </div>
  );
}

function EditProfile({ onBack }: { onBack: () => void }) {
  return (
    <div className="pb-32 bg-background min-h-screen">
      <header className="bg-[#F4F1EA] border-b border-stone-200 shadow-sm sticky top-0 z-50 h-16 flex items-center px-4">
        <button onClick={onBack} className="text-[#CC5533] p-2 rounded-full hover:bg-stone-100">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center pr-10">Modifier le profil</h1>
      </header>

      <main className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <section className="flex flex-col items-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-tinted">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZFemG16IM0i-OHhlvv4tHVDUVwDvGNcNNPjSoOosTAmF_fEwmdSoePka9mPJ9NQ1KHp-ONDvt1We6t5ZfWK05bSwPgVJhvjEsSjP7JL83DOnnepGVODG9nLmta1XQqvAvbWacxN1U2sl-l2xBK9r4nR2Csp3aue9QiC1iPNjs_aImTLnwTKaosKk3JUkwAAJ348xe92sRDHK_v-1XM2qGwwGrj_8vaqnx2tflWoY3fIE3y039iSw8aTlmqR-YJZNAq0wAy1VJ6Ys" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 terracotta-gradient text-white p-2 rounded-full border-4 border-white shadow-lg active:scale-90 transition-transform">
              <Edit size={20} />
            </button>
          </div>
          <p className="mt-4 text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Photo de profil</p>
        </section>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-center gap-3">
          <Info size={20} className="text-primary" />
          <p className="text-sm text-on-primary-fixed-variant">Vos informations sont visibles par les acheteurs certifiés.</p>
        </div>

        <form className="space-y-4">
          <InputGroup label="Nom complet" icon={<User size={20} />} value="Moussa Ibrahim" />
          <InputGroup label="Numéro de téléphone" icon={<Phone size={20} />} value="+235 66 00 00 00" verified />
          <div className="space-y-1">
            <label className="text-[12px] font-bold text-on-surface-variant px-1">Ville</label>
            <div className="relative">
              <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
              <select className="w-full pl-12 pr-10 py-4 bg-[#F4F1EA] border-none rounded-2xl outline-none appearance-none">
                <option>N'Djamena</option>
                <option>Moundou</option>
              </select>
              <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-outline" />
            </div>
          </div>
          <div className="p-4 bg-white border border-stone-100 rounded-2xl flex items-start gap-3 shadow-sm">
            <input type="checkbox" defaultChecked className="mt-1 w-5 h-5 rounded text-primary" />
            <div>
              <h4 className="text-sm font-bold">Visibilité publique</h4>
              <p className="text-xs text-on-surface-variant">Autoriser les clients à voir votre profil marchand.</p>
            </div>
          </div>
        </form>

        <button onClick={onBack} className="w-full terracotta-gradient text-white py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
          <Save size={20} /> Enregistrer les modifications
        </button>
      </main>
    </div>
  );
}

function InputGroup({ label, icon, value, verified }: { label: string, icon: React.ReactNode, value: string, verified?: boolean }) {
  return (
    <div className="space-y-1">
      <label className="text-[12px] font-bold text-on-surface-variant px-1 uppercase">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-outline">{icon}</div>
        <input className="w-full pl-12 pr-4 py-4 bg-[#F4F1EA] border-none rounded-2xl outline-none" type="text" defaultValue={value} />
        {verified && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary font-bold text-xs bg-primary/10 px-2 py-1 rounded-lg">Vérifié</span>
        )}
      </div>
    </div>
  );
}

function Sell() {
  return (
    <div className="pb-32 bg-surface min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F4F1EA] border-b border-indigo-900/5 shadow-sm flex justify-between items-center px-5 py-3 h-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAck-mC2NUROUVmmP_HNHWxGvTM4kGIfMdbXush09FXrn56lrFxXusEtaDiHk7YrcG-qdbCXqVWkkBgrhOSbU1bn_WwO_Wad0H6R8WjSLHPE9LR4xwYa0XPN0wsG76Za0sjsUQjI6bLLVwvfHIbzNwRZQS5ykzasmU1NXzeOjKAIm2zYpliLUD3UKCB0Tjs6ylAxHYGGVc3ech446pGJqbSjjshCAUVTZPhSPDMF_2G2bIteRzHEYepqcftvecbDw5d4xNW6KxC-b4" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-bold tracking-wide text-[#CC5533]">MarchéTchad</span>
        </div>
        <Bell size={24} className="text-[#CC5533]" />
      </header>

      <main className="pt-24 px-5 max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-on-surface mb-2">Vendre</h1>
        <p className="text-on-surface-variant mb-6">Enregistrez une nouvelle transaction en toute sécurité.</p>

        <form className="space-y-6">
          <div className="bg-white shadow-tinted rounded-[24px] p-6 border border-indigo-900/5 space-y-4">
            <InputGroup label="Nom de l'acheteur" icon={<User size={20} />} value="" />
            <div>
              <label className="text-[12px] font-bold text-on-surface-variant block mb-2 px-1">Description du produit / service</label>
              <textarea className="w-full bg-[#F4F1EA] border-none rounded-xl py-4 px-4 outline-none resize-none" placeholder="Description détaillée de la vente..." rows={3}></textarea>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <InputGroup label="Montant (FCFA)" icon={null} value="" />
              <div className="space-y-1">
                <label className="text-[12px] font-bold text-on-surface-variant px-1 uppercase">Date</label>
                <input className="w-full py-4 px-4 bg-[#F4F1EA] border-none rounded-2xl outline-none" type="date" />
              </div>
            </div>
          </div>

          <button type="button" className="w-full flex flex-col items-center justify-center gap-2 py-8 bg-surface-container border-2 border-dashed border-outline-variant rounded-[24px] hover:border-primary transition-colors">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-tinted">
              <Camera size={24} className="text-primary" />
            </div>
            <span className="text-[12px] font-bold text-on-surface-variant">Ajouter une Preuve Photo</span>
            <p className="text-[10px] text-outline px-8 text-center uppercase tracking-wider">Photo du produit ou du reçu de paiement</p>
          </button>

          <div className="pt-4">
            <button type="submit" className="w-full h-16 rounded-2xl terracotta-gradient text-white font-bold shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-[0.98]">
              Enregistrer la Vente
              <PlusCircle size={24} />
            </button>
            <p className="text-center mt-4 text-[12px] text-outline font-medium">
              En cliquant, vous confirmez que cette transaction respecte nos <span className="text-primary underline cursor-pointer">conditions de vente</span>.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

function Disputes() {
  return (
    <div className="pb-32 bg-background min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-[#F4F1EA] border-b border-indigo-900/5 shadow-sm h-16 flex items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDKmHDkCpGXeJIRZ0ZCYlvIGZ9rKO15kOkUbmUApKjuUAo3gx_dqfvNKOYmXa-ll5ATzPHevriO2bJwAAl7537vFTUbWtuVV5NjejknVlAHveSjGvbHtXOzVFFXw8jbKy7Sdt35UBHfv0w63sFy9Q8etLjixD2UD0M8CSL6VPNfBay6QAlCpfh6Fb6kb7Er-Ppw7cQQ7ROchHjGnqb7VobCYGbjMXpsfJqwQNRm0DYYq8iWeFl_pCe18puQ0_1pJw0WTw3RrDK0l0" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-xl font-extrabold tracking-tighter text-[#CC5533]">MarchéTchad</h1>
        </div>
        <Bell size={24} className="text-[#CC5533]" />
      </header>

      <main className="pt-20 px-5 max-w-2xl mx-auto space-y-8">
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-on-surface">Centre de Litiges</h2>
            <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
              <UserCheck size={12} className="fill-current" /> Sécurisé par Blockchain
            </span>
          </div>
          <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all">
            <ShieldCheck size={24} /> Signaler un Litige
          </button>
        </section>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-surface-container-low p-4 rounded-2xl border border-indigo-900/5 flex flex-col justify-between h-32 shadow-tinted">
             <Info size={24} className="text-primary" />
             <div>
               <p className="text-[10px] font-bold text-on-surface-variant uppercase">En cours</p>
               <p className="text-3xl font-bold text-on-surface">02</p>
             </div>
          </div>
          <div className="bg-surface-container-low p-4 rounded-2xl border border-indigo-900/5 flex flex-col justify-between h-32 shadow-tinted">
             <BadgeCheck size={24} className="text-secondary" />
             <div>
               <p className="text-[10px] font-bold text-on-surface-variant uppercase">Résolus</p>
               <p className="text-3xl font-bold text-on-surface">14</p>
             </div>
          </div>
        </div>

        <section className="space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            Litiges Actifs <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          </h3>
          <div className="bg-white rounded-2xl border border-indigo-900/10 p-5 shadow-tinted relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] font-bold text-primary uppercase">LIT-892304</p>
                <h4 className="font-bold text-lg">Paiement non reçu</h4>
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold">En cours</span>
            </div>
            <div className="space-y-2 mb-4 text-on-surface-variant text-sm">
              <div className="flex items-center gap-2">
                <Store size={18} /> <p>Sac de Mil (50kg) - Moussa K.</p>
              </div>
              <div className="flex items-center gap-2">
                <Wallet size={18} /> <p className="font-bold">45,000 FCFA</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 border-2 border-secondary/20 text-secondary py-2 rounded-lg text-sm font-bold">Détails</button>
              <button className="flex-1 bg-secondary text-white py-2 rounded-lg text-sm font-bold">Répondre</button>
            </div>
          </div>
        </section>

        <section className="bg-indigo-950 text-white rounded-3xl p-6 space-y-4 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-bold flex items-center gap-2"><Shield size={20} /> Preuves Documentées</h3>
            <p className="text-sm opacity-80 leading-relaxed">Toutes les transactions sont ancrées dans la blockchain pour une résolution impartiale.</p>
            <div className="space-y-3 pt-4">
              <div className="bg-white/10 p-3 rounded-xl flex items-center justify-between border border-white/10">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-secondary-container" />
                  <div>
                    <p className="text-[12px] font-bold">Reçu de livraison.pdf</p>
                    <p className="text-[10px] opacity-60">Hash: 0x8f2...e4a1</p>
                  </div>
                </div>
                <Download size={18} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Verification() {
  return (
    <div className="pb-32 bg-background min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#F4F1EA] shadow-sm flex justify-between items-center px-5 h-16">
        <div className="flex items-center gap-4">
          <Menu size={24} className="text-[#CC5533]" />
          <h1 className="text-[#CC5533] font-extrabold tracking-tighter text-xl">MarchéTchad</h1>
        </div>
        <div className="h-10 w-10 rounded-full border-2 border-primary/20 overflow-hidden">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMWq90Bu-6CO02eMZPoeizaFT0VL7ImD4Ds2mgZ8EqHeKBjZPXEeymSttTyUfeBdiOSkbE7Lz6jauD0OUz45f6ZWgobfLGQKo4r6vn5dbEcwWgk6fcL9xh_WW4CM6M5N1zbOA8xEonqgDsev6kwBdEAeZPBcsiyWJUJgXT4kfzpY42QJpCrhhj7T34-7PdYO1gtKFqwlf5kglBLPFBo2Eq9UbKpr7HkaLgPLoSJQ1ZnssWZHlOLM9oXafUv9HxiMzpncPPznhqyqg" alt="Pfp" className="w-full h-full object-cover" />
        </div>
      </header>

      <main className="pt-24 px-5 max-w-md mx-auto space-y-6">
        <section className="bg-white p-8 rounded-xl shadow-indigo border border-outline-variant/30 text-center flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center">
               <UserCheck size={40} className="text-outline" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-red-100 text-red-600 px-2 py-1 rounded-full text-[10px] font-bold uppercase border border-red-200">Non Vérifié</div>
          </div>
          <h2 className="text-2xl font-bold text-on-surface mb-2">Vérification de Profil</h2>
          <p className="text-on-surface-variant">Obtenez votre <span className="text-tertiary font-bold">Badge Vérifié</span> pour augmenter vos plafonds.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2"><FileText size={20} /> Étapes Requises</h3>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#CC5533] shadow-sm space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg"><Badge size={24} className="text-primary" /></div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold">Pièce d'Identité</h4>
                  <span className="text-[10px] font-bold bg-[#F4F1EA] px-2 py-1 rounded uppercase">Étape 1</span>
                </div>
                <p className="text-sm text-on-surface-variant">Photo recto/verso de votre CNI ou Passeport.</p>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-lg font-bold shadow-md flex items-center justify-center gap-2 active:scale-95 transition-transform">
              <Camera size={20} /> Capturer le document
            </button>
          </div>
        </section>

        <div className="mt-8 relative overflow-hidden bg-indigo-950 rounded-3xl p-6 text-white text-center">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-primary rounded-full blur-[60px] opacity-20"></div>
          <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(251,191,36,0.5)]">
            <BadgeCheck size={32} />
          </div>
          <p className="text-lg font-bold mb-1">Commerçant Élite</p>
          <p className="text-white/60 text-[12px] font-bold uppercase tracking-widest">Objectif Final</p>
          <div className="mt-4 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="bg-amber-400 w-1/4 h-full"></div>
          </div>
          <p className="mt-2 text-[11px] text-white/50">25% complété</p>
        </div>
      </main>
    </div>
  );
}

function Payment({ onBack }: { onBack: () => void }) {
  return (
    <div className="pb-32 bg-background min-h-screen">
       <header className="fixed top-0 w-full z-40 bg-[#F4F1EA] shadow-sm border-b h-16 flex items-center justify-between px-5">
         <div className="flex items-center gap-3">
           <button onClick={onBack}><ArrowLeft size={24} className="text-[#1A237E]" /></button>
           <h1 className="text-[#CC5533] font-bold text-xl">MarchéTchad</h1>
         </div>
         <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDntoja81lYrWh_sbE2RYRCaVm3LTpyO3qwuruPobKnWp94eYqBvOMFWOyv3sjH7AxXZieCDn-1vuVNfIBquuCdh449qjGh3uHyugV868OFz-REKb7BJcruO2eOjhfrWpZSKoARZW2_9OcFaZZjA6gwquv87C2q7wTb8FdHQOAHp9_9DBTd1_JJuB_S9ybOfgUxZHbSYyaIgcYnzM0jOXYXZo3I5lue0D2fn5M-9gqBolDX_bp3M82R0tU-vrK3OimG8jmebZIW65w" alt="Me" className="w-full h-full object-cover" />
         </div>
       </header>

       <main className="mt-20 px-6 max-w-md mx-auto space-y-6">
         <div className="flex p-1 bg-surface-container-high rounded-xl shadow-inner">
           <button className="flex-1 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 bg-white text-primary shadow-sm"><QrCode size={18} /> Mon Code</button>
           <button className="flex-1 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 text-on-surface-variant"><Camera size={18}/> Scanner</button>
         </div>

         <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-1">Moussa Mahamat</h2>
            <p className="text-on-surface-variant">Boutique Sahélienne • N'Djamena</p>
         </div>

         <div className="relative mx-auto w-fit p-6 bg-white rounded-[32px] shadow-2xl border-4 border-primary/20">
            <div className="w-64 h-64 bg-slate-50 border border-slate-100 flex items-center justify-center">
               <QrCode size={200} className="text-slate-800" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-2 rounded-full shadow-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white"><Store size={20} /></div>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/30 flex justify-between items-center">
           <div>
             <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Solde Disponible</p>
             <p className="text-3xl font-extrabold text-on-surface">450.000 <span className="text-primary text-xl">FCFA</span></p>
           </div>
           <BadgeCheck size={24} className="text-tertiary" />
         </div>

         <div className="grid grid-cols-2 gap-4">
           <button className="flex flex-col items-center justify-center p-4 bg-white border border-outline-variant rounded-xl group">
             <Share2 size={24} className="text-primary group-hover:scale-110 transition-transform mb-2" />
             <span className="text-xs font-bold">Partager</span>
           </button>
           <button className="flex flex-col items-center justify-center p-4 bg-white border border-outline-variant rounded-xl group">
             <Download size={24} className="text-primary group-hover:scale-110 transition-transform mb-2" />
             <span className="text-xs font-bold">Enregistrer</span>
           </button>
         </div>
       </main>
    </div>
  );
}
