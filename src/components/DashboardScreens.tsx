/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Bell, 
  BadgeCheck, 
  Globe, 
  ChevronDown, 
  QrCode, 
  PlusCircle, 
  ShieldCheck, 
  Wallet, 
  TrendingUp, 
  Store, 
  User,
  ArrowLeft,
  Edit,
  Info
} from 'lucide-react';

export function Dashboard({ onNewTransaction, onReportDispute, onCreditRequest, onQR }: { onNewTransaction: () => void, onReportDispute: () => void, onCreditRequest: () => void, onQR: () => void }) {
  return (
    <div className="pb-32 bg-surface min-h-[1024px]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F1EA] shadow-sm border-b border-indigo-900/5 flex justify-between items-center w-full px-5 py-3 h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#CC5533]/20">
            <img 
              alt="Merchant" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRO9iaPxRvQE1gIN35GMMKU3baf7qvSoPJvBDdIRVtzqxMXYVdxKLWjg0N3muPFQRrZX05Mv-3up-bBf_njpaF0WQWPebqCfjdgkbDnvCmDi6XXb1aEdAiNzg3Yw8MiOrOE_2xR7XXJOGOND1ANRZfjN9rjW_sN1ENTai1OsSeMOEI2uNhIUNV6rSYrwVvTe8905_FE8ZzeIcpz8dDoRsl-XxZohOja_rPT2cHSf-kftZDNysUsSi-a89IZmBp-8Xp0pjqeHhYAJM" 
            />
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-[#CC5533]">MarchéTchad</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-1 px-2 py-1 rounded-lg border border-[#CC5533]/20 text-[#CC5533] font-bold text-[11px] bg-white/50">
              <Globe size={14} />
              <span>FR</span>
              <ChevronDown size={12} />
            </button>
          </div>
          <button onClick={onQR} className="text-[#CC5533]">
            <QrCode size={24} />
          </button>
        </div>
      </header>

      <main className="mt-20 px-5 space-y-8 max-w-2xl mx-auto">
        <section>
          <p className="text-[12px] font-bold text-on-surface-variant mb-1 uppercase">Bienvenue</p>
          <h1 className="text-3xl font-extrabold text-on-surface">Bonjour, Moussa !</h1>
        </section>

        <section className="relative overflow-hidden rounded-[32px] bg-white shadow-tinted p-6 flex items-center justify-between border border-indigo-900/5">
          <div className="z-10">
            <h3 className="text-xl font-bold text-on-surface mb-2">Score de Réputation</h3>
            <p className="text-sm text-on-surface-variant max-w-[160px]">Votre fiabilité est exemplaire ce mois-ci.</p>
            <div className="mt-4 inline-flex items-center px-3 py-1 bg-secondary/10 rounded-full">
              <BadgeCheck size={14} className="text-secondary mr-1 fill-current" />
              <span className="text-[10px] font-bold text-secondary uppercase">MARCHAND De confiance</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-32 h-32 z-10">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-lowest" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-primary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364" strokeDashoffset="54" strokeLinecap="round" strokeWidth="8"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-primary">850</span>
              <span className="text-[12px] font-bold text-on-surface-variant">/ 1000</span>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-on-surface">Actions Rapides</h2>
          <div className="grid grid-cols-3 gap-3">
            <QuickAction icon={<PlusCircle className="text-primary" />} label="Nouvelle Transaction" onClick={onNewTransaction} />
            <QuickAction icon={<ShieldCheck className="text-secondary" />} label="Signaler un Litige" onClick={onReportDispute} />
            <QuickAction icon={<Wallet className="text-tertiary" />} label="Demande de Crédit" onClick={onCreditRequest} />
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low p-5 rounded-[24px] border border-white text-on-surface">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={20} className="text-tertiary" />
              <span className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Ventes du jour</span>
            </div>
            <p className="text-2xl font-bold">145.500 <span className="text-sm font-medium">FCFA</span></p>
            <p className="text-[10px] font-bold text-tertiary mt-2">+12% vs hier</p>
          </div>
          <div className="bg-surface-container-low p-5 rounded-[24px] border border-white text-on-surface">
            <div className="flex items-center gap-2 mb-4">
              <Store size={20} className="text-secondary" />
              <span className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Commandes</span>
            </div>
            <p className="text-2xl font-bold">24</p>
            <p className="text-[10px] font-bold text-on-surface-variant mt-2">6 en attente</p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h2 className="text-xl font-bold text-on-surface">Activités Récentes</h2>
            <button className="text-[12px] font-bold text-primary hover:underline">Voir tout</button>
          </div>
          <div className="space-y-3">
            <ActivityItem icon={<Store className="text-primary" />} title="Vente : Sac de Mil (100kg)" time="Aujourd'hui, 14:30" amount="+32.000 F" status="Complété" />
            <ActivityItem icon={<User size={20} className="text-secondary" />} title="Nouvelle demande client" time="Aujourd'hui, 11:15" action="Répondre" />
          </div>
        </section>
      </main>
    </div>
  );
}

function QuickAction({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex flex-col items-center justify-center p-4 bg-white rounded-3xl border border-indigo-900/5 shadow-sm active:scale-95 transition-transform">
      <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center mb-2">
        {icon}
      </div>
      <span className="text-[11px] font-bold text-center leading-tight text-on-surface">{label}</span>
    </button>
  );
}

function ActivityItem({ icon, title, time, amount, status, action }: { icon: React.ReactNode, title: string, time: string, amount?: string, status?: string, action?: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-tinted border border-indigo-900/5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="font-bold text-on-surface">{title}</p>
          <p className="text-[12px] text-on-surface-variant">{time}</p>
        </div>
      </div>
      <div className="text-right">
        {amount && <p className="font-bold text-on-surface">{amount}</p>}
        {status && <p className="text-[12px] font-bold text-tertiary">{status}</p>}
        {action && <button className="px-4 py-1.5 bg-primary rounded-full text-white text-[12px] font-bold shadow-sm active:scale-95 transition-transform">{action}</button>}
      </div>
    </div>
  );
}

export function CreditRequest({ onBack, onNext }: { onBack: () => void, onNext: () => void }) {
  return (
    <div className="pb-32 bg-background min-h-screen">
      <header className="h-16 flex items-center justify-between px-5 bg-white border-b sticky top-0 z-50">
        <button onClick={onBack} className="p-2 text-stone-900"><ArrowLeft size={24} /></button>
        <h1 className="text-xl font-bold flex-1 text-center pr-10">Demande de Crédit</h1>
      </header>

      <main className="max-w-md mx-auto px-6 py-8 space-y-8">
        <section className="flex justify-between items-center px-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-stone-100 -z-10"></div>
          <Step active icon={<ShieldCheck size={16} />} label="Score" />
          <Step icon={<Edit size={16} />} label="Détails" />
          <Step icon={<BadgeCheck size={16} />} label="Validation" />
        </section>

        <section className="bg-white p-6 rounded-[32px] shadow-tinted border border-indigo-900/5 flex flex-col items-center">
           <h3 className="text-xl font-bold mb-6 text-on-surface">Score de Réputation</h3>
           <div className="relative w-32 h-32 mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-stone-100" cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent"></circle>
                <circle className="text-primary" cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364" strokeDashoffset="54" strokeLinecap="round"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-on-surface">850</span>
              </div>
           </div>
           <div className="bg-primary/10 px-4 py-1 rounded-full text-primary font-bold text-sm mb-2">Excellent</div>
           <p className="text-sm text-on-surface-variant text-center">Vous êtes éligible à un crédit allant jusqu'à 2 500 000 FCFA.</p>
        </section>

        <section className="bg-white p-6 rounded-[32px] shadow-tinted border border-indigo-900/5 space-y-6">
          <h3 className="text-lg font-bold text-on-surface">Détails de la Demande</h3>
          <div className="space-y-4">
            <div>
              <label className="text-[12px] font-bold text-on-surface-variant mb-2 block uppercase">Montant du crédit (FCFA)</label>
              <div className="relative">
                <input type="text" className="w-full bg-surface-container-low border-none rounded-2xl py-4 px-6 text-xl font-bold outline-none text-on-surface" defaultValue="500 000" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-stone-200 px-3 py-1 rounded-lg text-[10px] font-bold">MAX</button>
              </div>
            </div>
            <div>
              <label className="text-[12px] font-bold text-on-surface-variant mb-2 block uppercase">Durée de remboursement</label>
              <div className="grid grid-cols-3 gap-2">
                <button className="py-4 border-2 border-primary rounded-2xl text-primary font-bold">3 Mois</button>
                <button className="py-4 border-2 border-stone-100 rounded-2xl font-bold text-on-surface-variant">6 Mois</button>
                <button className="py-4 border-2 border-stone-100 rounded-2xl font-bold text-on-surface-variant">12 Mois</button>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-6 rounded-2xl space-y-2">
             <div className="flex justify-between text-sm">
               <span className="text-on-surface-variant">Taux d'intérêt (1.5%)</span>
               <span className="font-bold text-on-surface">7 500 FCFA</span>
             </div>
             <div className="flex justify-between text-lg pt-2 border-t font-bold text-on-surface">
               <span>Total à rembourser</span>
               <span className="text-primary">507 500 FCFA</span>
             </div>
          </div>

          <button onClick={onNext} className="w-full py-4 terracotta-gradient text-white rounded-2xl font-bold shadow-lg">
             Soumettre la Demande
          </button>
        </section>

        <div className="bg-indigo-50 p-4 rounded-xl flex items-start gap-3">
          <Info size={20} className="text-indigo-600 mt-1" />
          <p className="text-xs text-indigo-900 font-medium">Un remboursement anticipé augmente votre Score de Réputation de +50 points.</p>
        </div>
      </main>
    </div>
  );
}

function Step({ active, icon, label }: { active?: boolean, icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${active ? 'terracotta-gradient text-white shadow-lg' : 'bg-stone-200 text-stone-500'}`}>
        {icon}
      </div>
      <span className={`text-[10px] font-bold uppercase ${active ? 'text-primary' : 'text-stone-400'}`}>{label}</span>
    </div>
  );
}

export function CreditDetails({ onBack }: { onBack: () => void }) {
  return (
    <div className="pb-32 bg-background min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-[#F4F1EA] shadow-sm h-16 flex items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 h-10 w-10"><ArrowLeft size={24} className="text-[#1A237E]" /></button>
          <span className="text-xl font-bold tracking-tighter text-[#1A237E]">SahelFinance</span>
        </div>
        <Bell size={24} className="text-[#1A237E]" />
      </header>

      <main className="pt-20 px-5 max-w-md mx-auto space-y-6">
        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border">
           <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMWq90Bu-6CO02eMZPoeizaFT0VL7ImD4Ds2mgZ8EqHeKBjZPXEeymSttTyUfeBdiOSkbE7Lz6jauD0OUz45f6ZWgobfLGQKo4r6vn5dbEcwWgk6fcL9xh_WW4CM6M5N1zbOA8xEonqgDsev6kwBdEAeZPBcsiyWJUJgXT4kfzpY42QJpCrhhj7T34-7PdYO1gtKFqwlf5kglBLPFBo2Eq9UbKpr7HkaLgPLoSJQ1ZnssWZHlOLM9oXafUv9HxiMzpncPPznhqyqg" alt="Me" className="w-full h-full object-cover" />
           </div>
           <div>
             <h2 className="text-2xl font-bold leading-none mb-1 text-on-surface">Moussa Ibrahim</h2>
             <p className="text-sm text-slate-500 mb-2 flex items-center gap-1"><Store size={14}/> Marchand Vétéran • N'Djamena</p>
             <div className="flex gap-2">
               <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">ÉLigible</span>
               <span className="bg-indigo-100 text-indigo-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Blockchain</span>
             </div>
           </div>
        </div>

        <section className="bg-white p-6 rounded-3xl shadow-sm border space-y-6">
           <div className="flex justify-between items-start">
             <div>
               <h3 className="text-lg font-bold text-on-surface">Score de Réputation</h3>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Analyse Multidimensionnelle</p>
             </div>
             <div className="text-right">
               <p className="text-3xl font-extrabold text-primary">842 <span className="text-slate-300 text-sm">/ 1000</span></p>
             </div>
           </div>

           <div className="space-y-4 pt-2">
             <ScoreMetric label="Historique des Remboursements" value={95} color="bg-primary" />
             <ScoreMetric label="Fiabilité du Marché" value={82} color="bg-indigo-600" />
             <ScoreMetric label="Volume Transactionnel" value={75} color="bg-orange-500" />
           </div>

           <div className="bg-stone-50 p-4 rounded-xl flex items-start gap-3 italic text-xs text-stone-600">
             <TrendingUp size={16} className="text-primary mt-0.5" />
             <p>"Le profil présente une stabilité exceptionnelle sur les 24 derniers mois avec une croissance de flux de 15%."</p>
           </div>
        </section>

        <section className="bg-indigo-600 rounded-3xl p-6 text-white space-y-4">
           <h3 className="text-lg font-bold">Solvabilité</h3>
           <div className="grid gap-3">
             <SolvabilityCard label="CAPACITÉ D'EMPRUNT" value="4,500,000 FCFA" />
             <SolvabilityCard label="RATIO D'ENDETTEMENT" value="12.4%" />
             <SolvabilityCard label="DÉPÔTS MOYENS / MOIS" value="850,000 FCFA" />
           </div>
        </section>

        <div className="flex gap-2">
           <button className="flex-1 py-4 bg-indigo-700 text-white rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2"><BadgeCheck size={20} /> Approuver le Crédit</button>
        </div>
      </main>
    </div>
  );
}

function ScoreMetric({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
        <span className="text-slate-600">{label}</span>
        <span className="text-primary">{value}%</span>
      </div>
      <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function SolvabilityCard({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
      <p className="text-[10px] font-bold opacity-60 uppercase mb-1">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
