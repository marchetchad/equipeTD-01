// App State
const appState = {
    currentScreen: 'landing',
    user: null
};

// Screen content templates
const screens = {
    landing: `
        <header>
            <div class="container">
                <div class="logo">MarchéTchad</div>
                <div class="actions">
                    <button class="btn-primary" onclick="navigateTo('login')">Commencer</button>
                    <i class="fas fa-user" style="font-size: 1.5rem; color: #1a237e;"></i>
                </div>
            </div>
        </header>
        <main class="hero-section">
            <div class="hero-content">
                <div class="badge">
                    <span class="pulse"></span>
                    Pionnier Fintech du Sahel
                </div>
                <h1>
                    Digitalisez la Confiance. <br/>
                    <span class="highlight">Boostez le Commerce.</span>
                </h1>
                <p>
                    Le carrefour moderne où la fiabilité ancestrale rencontre la sécurité de la blockchain. 
                    MarchéTchad est l'infrastructure haut de gamme pour les entrepreneurs les plus résilients du Sahel.
                </p>
                <button class="btn-primary" onclick="navigateTo('login)" style="padding: 1rem 2rem; font-size: 1rem;">
                    <i class="fas fa-chevron-right"></i> Lancez votre boutique
                </button>
            </div>
            <div class="hero-image">
                <i class="fas fa-store"></i>
            </div>
        </main>
        <footer>
            <div class="logo">MarchéTchad</div>
            <p>© 2026 MarchéTchad. Le carrefour moderne du commerce sahélien.</p>
        </footer>
    `,
    
    login: `
        <button class="back-button" onclick="navigateTo('landing')">
            <i class="fas fa-arrow-left"></i>
        </button>
        <header>
            <div class="container">
                <div></div>
                <div class="logo" style="position: absolute; left: 50%; transform: translateX(-50%);">MarchéTchad</div>
                <div></div>
            </div>
        </header>
        <div class="login">
            <div class="form-container">
                <div class="form-title">
                    <h2>Ravi de vous revoir</h2>
                    <p>Accédez à votre espace marchand et gérez vos échanges en toute simplicité.</p>
                </div>
                <form onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label>Numéro de téléphone</label>
                        <div class="input-wrapper">
                            <i class="fas fa-phone"></i>
                            <input type="tel" placeholder="+235 ...." required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Mot de passe</label>
                        <div class="input-wrapper">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="••••••••" required>
                        </div>
                    </div>
                    <div style="text-align: right; margin-bottom: 1rem;">
                        <a href="#" style="color: var(--color-primary); font-size: 0.875rem; text-decoration: none; font-weight: 600;">
                            Mot de passe oublié ?
                        </a>
                    </div>
                    <button type="submit" class="btn-submit">Se Connecter</button>
                </form>
                <div class="divider">
                    <div class="divider-line"></div>
                    <span>OU</span>
                    <div class="divider-line"></div>
                </div>
                <div class="social-buttons">
                    <button class="social-btn">
                        <i class="fab fa-google"></i> Google
                    </button>
                    <button class="social-btn">
                        <i class="fas fa-qrcode"></i> Scanner
                    </button>
                </div>
                <div class="form-footer">
                    Pas encore de compte ? <a onclick="navigateTo('register')">S'inscrire</a>
                </div>
            </div>
        </div>
    `,
    
    register: `
        <button class="back-button" onclick="navigateTo('login')">
            <i class="fas fa-arrow-left"></i>
        </button>
        <header>
            <div class="container">
                <div></div>
                <div class="logo" style="position: absolute; left: 50%; transform: translateX(-50%);">MarchéTchad</div>
                <div></div>
            </div>
        </header>
        <div class="register">
            <div class="form-container">
                <div class="form-title">
                    <h2>Rejoignez l'aventure</h2>
                    <p>Créez votre compte et connectez-vous au plus grand réseau de commerçants du Tchad.</p>
                </div>
                <form onsubmit="handleRegister(event)">
                    <div class="form-group">
                        <label>Nom complet</label>
                        <div class="input-wrapper">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Mahamat Idriss" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Numéro de téléphone</label>
                        <div class="input-wrapper">
                            <i class="fas fa-phone"></i>
                            <input type="tel" placeholder="+235 60 00 00 00" required>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div class="form-group">
                            <label>Ville</label>
                            <div class="input-wrapper">
                                <i class="fas fa-map-pin"></i>
                                <input type="text" placeholder="N'Djamena" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Type d'activité</label>
                            <div class="input-wrapper">
                                <i class="fas fa-store"></i>
                                <select required>
                                    <option value="">Sélectionnez...</option>
                                    <option value="retail">Vente en détail</option>
                                    <option value="wholesale">Grossiste</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Mot de passe</label>
                        <div class="input-wrapper">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="••••••••" required>
                        </div>
                    </div>
                    <div style="display: flex; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <input type="checkbox" id="accept-terms" required>
                        <label for="accept-terms" style="font-size: 0.875rem; color: var(--color-on-surface-variant);">
                            J'accepte les <strong>Conditions Générales</strong> et la <strong>Politique de Confidentialité</strong>
                        </label>
                    </div>
                    <button type="submit" class="btn-submit">
                        <i class="fas fa-check"></i> Créer mon Compte
                    </button>
                </form>
            </div>
        </div>
    `,
    
    dashboard: `
        <header>
            <div class="container">
                <div class="logo">MarchéTchad</div>
                <i class="fas fa-bell" style="font-size: 1.5rem; color: #cc5533;"></i>
            </div>
        </header>
        <div class="dashboard">
            <div class="dashboard-header">
                <h1>Bienvenue sur MarchéTchad</h1>
                <p>Gérez vos transactions et développez votre activité</p>
            </div>
            <div class="cards-grid">
                <div class="card" onclick="navigateTo('sell')">
                    <div class="card-icon"><i class="fas fa-plus-circle"></i></div>
                    <h3>Vendre</h3>
                    <p>Enregistrez une nouvelle transaction en toute sécurité et augmentez vos revenus.</p>
                </div>
                <div class="card" onclick="navigateTo('disputes')">
                    <div class="card-icon"><i class="fas fa-gavel"></i></div>
                    <h3>Litiges</h3>
                    <p>Résolvez les conflits rapidement grâce à notre système de médiation transparent.</p>
                </div>
                <div class="card" onclick="navigateTo('payment')">
                    <div class="card-icon"><i class="fas fa-wallet"></i></div>
                    <h3>Paiements</h3>
                    <p>Gérez vos transactions et consultez votre solde en temps réel.</p>
                </div>
                <div class="card" onclick="navigateTo('verification')">
                    <div class="card-icon"><i class="fas fa-user-check"></i></div>
                    <h3>Vérification</h3>
                    <p>Complétez votre profil et obtenez le badge vérifié pour plus de confiance.</p>
                </div>
                <div class="card" onclick="navigateTo('profile')">
                    <div class="card-icon"><i class="fas fa-user"></i></div>
                    <h3>Mon Profil</h3>
                    <p>Consultez et modifiez les informations de votre profil marchand.</p>
                </div>
                <div class="card" onclick="navigateTo('credit-request')">
                    <div class="card-icon"><i class="fas fa-credit-card"></i></div>
                    <h3>Demander un Crédit</h3>
                    <p>Accédez à des solutions de financement adaptées à votre activité.</p>
                </div>
            </div>
        </div>
        <nav class="bottom-nav">
            <button class="nav-item active" onclick="navigateTo('dashboard')">
                <i class="fas fa-home"></i>
                <span>Accueil</span>
            </button>
            <button class="nav-item" onclick="navigateTo('sell')">
                <i class="fas fa-plus"></i>
                <span>Vendre</span>
            </button>
            <button class="nav-item" onclick="navigateTo('disputes')">
                <i class="fas fa-gavel"></i>
                <span>Litiges</span>
            </button>
            <button class="nav-item" onclick="navigateTo('profile')">
                <i class="fas fa-user"></i>
                <span>Profil</span>
            </button>
        </nav>
    `,
    
    sell: `
        <button class="back-button" onclick="navigateTo('dashboard')">
            <i class="fas fa-arrow-left"></i>
        </button>
        <header>
            <div class="container">
                <div class="logo">MarchéTchad</div>
                <i class="fas fa-bell" style="font-size: 1.5rem; color: #cc5533;"></i>
            </div>
        </header>
        <div style="padding: 6rem 1.5rem 2rem; max-width: 800px; margin: 0 auto;">
            <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem;">Vendre</h1>
            <p style="color: var(--color-on-surface-variant); margin-bottom: 2rem;">Enregistrez une nouvelle transaction en toute sécurité.</p>
            <form onsubmit="handleSell(event)">
                <div class="form-container">
                    <div class="form-group">
                        <label>Nom de l'acheteur</label>
                        <div class="input-wrapper">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Nom complet" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Description du produit / service</label>
                        <textarea placeholder="Description détaillée de la vente..." required></textarea>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div class="form-group">
                            <label>Montant (FCFA)</label>
                            <div class="input-wrapper">
                                <i class="fas fa-dollar-sign"></i>
                                <input type="number" placeholder="0" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Date</label>
                            <input type="date" style="padding-left: 1rem;" required>
                        </div>
                    </div>
                    <button type="submit" class="btn-submit" style="margin-top: 1rem;">
                        <i class="fas fa-check"></i> Enregistrer la Vente
                    </button>
                </div>
            </form>
        </div>
        <nav class="bottom-nav">
            <button class="nav-item" onclick="navigateTo('dashboard')">
                <i class="fas fa-home"></i>
                <span>Accueil</span>
            </button>
            <button class="nav-item active" onclick="navigateTo('sell')">
                <i class="fas fa-plus"></i>
                <span>Vendre</span>
            </button>
            <button class="nav-item" onclick="navigateTo('disputes')">
                <i class="fas fa-gavel"></i>
                <span>Litiges</span>
            </button>
            <button class="nav-item" onclick="navigateTo('profile')">
                <i class="fas fa-user"></i>
                <span>Profil</span>
            </button>
        </nav>
    `,
    
    disputes: `
        <button class="back-button" onclick="navigateTo('dashboard')">
            <i class="fas fa-arrow-left"></i>
        </button>
        <header>
            <div class="container">
                <div class="logo">MarchéTchad</div>
                <i class="fas fa-bell" style="font-size: 1.5rem; color: #cc5533;"></i>
            </div>
        </header>
        <div style="padding: 6rem 1.5rem 2rem; max-width: 800px; margin: 0 auto;">
            <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">Centre de Litiges</h2>
            <div class="cards-grid" style="grid-template-columns: 1fr 1fr; margin-bottom: 2rem;">
                <div class="card">
                    <div style="font-size: 2rem; margin-bottom: 1rem;"><i class="fas fa-info-circle" style="color: var(--color-primary);"></i></div>
                    <p style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-on-surface-variant); font-weight: 600; margin-bottom: 0.5rem;">En cours</p>
                    <p style="font-size: 2rem; font-weight: 800;">02</p>
                </div>
                <div class="card">
                    <div style="font-size: 2rem; margin-bottom: 1rem;"><i class="fas fa-check-circle" style="color: var(--color-secondary);"></i></div>
                    <p style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-on-surface-variant); font-weight: 600; margin-bottom: 0.5rem;">Résolus</p>
                    <p style="font-size: 2rem; font-weight: 800;">14</p>
                </div>
            </div>
            <div class="card">
                <h4 style="font-weight: 700; margin-bottom: 1rem;">Litiges Actifs</h4>
                <p style="color: var(--color-on-surface-variant); font-size: 0.75rem; text-transform: uppercase; margin-bottom: 0.75rem;">LIT-892304</p>
                <h5 style="font-weight: 700; margin-bottom: 1rem;">Paiement non reçu</h5>
                <p style="color: var(--color-on-surface-variant); margin-bottom: 0.5rem;"><i class="fas fa-store"></i> Sac de Mil (50kg) - Moussa K.</p>
                <p style="color: var(--color-on-surface-variant); margin-bottom: 1rem;"><i class="fas fa-wallet"></i> <strong>45,000 FCFA</strong></p>
                <div style="display: flex; gap: 1rem;">
                    <button class="social-btn">Détails</button>
                    <button class="social-btn" style="background: var(--color-secondary); color: white; border-color: var(--color-secondary);">Répondre</button>
                </div>
            </div>
        </div>
        <nav class="bottom-nav">
            <button class="nav-item" onclick="navigateTo('dashboard')">
                <i class="fas fa-home"></i>
                <span>Accueil</span>
            </button>
            <button class="nav-item" onclick="navigateTo('sell')">
                <i class="fas fa-plus"></i>
                <span>Vendre</span>
            </button>
            <button class="nav-item active" onclick="navigateTo('disputes')">
                <i class="fas fa-gavel"></i>
                <span>Litiges</span>
            </button>
            <button class="nav-item" onclick="navigateTo('profile')">
                <i class="fas fa-user"></i>
                <span>Profil</span>
            </button>
        </nav>
    `,
    
    payment: `
        <button class="back-button" onclick="navigateTo('dashboard')">
            <i class="fas fa-arrow-left"></i>
        </button>
        <header>
            <div class="container">
                <div class="logo">MarchéTchad</div>
                <i class="fas fa-bell" style="font-size: 1.5rem; color: #cc5533;"></i>
            </div>
        </header>
        <div style="padding: 6rem 1.5rem 2rem; max-width: 500px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem;">Moussa Mahamat</h2>
            <p style="color: var(--color-on-surface-variant); margin-bottom: 2rem;">Boutique Sahélienne • N'Djamena</p>
            <div style="background: white; padding: 2rem; border-radius: 2rem; margin-bottom: 2rem; border: 2px solid rgba(163, 56, 24, 0.1);">
                <i class="fas fa-qrcode" style="font-size: 10rem; color: #ccc;"></i>
            </div>
            <div class="card">
                <p style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-on-surface-variant); font-weight: 600; margin-bottom: 0.5rem;">Solde Disponible</p>
                <p style="font-size: 2rem; font-weight: 800;">450.000 <span style="font-size: 1rem; color: var(--color-primary);">FCFA</span></p>
            </div>
        </div>
    `,
    
    profile: `
        <button class="back-button" onclick="navigateTo('dashboard')">
            <i class="fas fa-arrow-left"></i>
        </button>
        <header>
            <div class="container">
                <div class="logo">MarchéTchad</div>
                <i class="fas fa-bell" style="font-size: 1.5rem; color: #cc5533;"></i>
            </div>
        </header>
        <div style="padding: 6rem 1.5rem 2rem; max-width: 800px; margin: 0 auto; text-align: center;">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: var(--color-surface-container-low); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--color-primary);">
                <i class="fas fa-user"></i>
            </div>
            <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem;">Abdoulaye Mahamat</h2>
            <p style="color: var(--color-on-surface-variant); margin-bottom: 2rem;"><i class="fas fa-map-pin"></i> N'Djamena, Grand Marché</p>
            <div style="display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 2rem;">
                <span style="background: rgba(163, 56, 24, 0.1); color: var(--color-primary); padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.875rem; font-weight: 600;">Membre Or</span>
                <span style="background: rgba(76, 86, 175, 0.1); color: var(--color-secondary); padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.875rem; font-weight: 600;">Import/Export</span>
            </div>
            <div class="cards-grid" style="grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
                <div class="card">
                    <p style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-on-surface-variant); font-weight: 600; margin-bottom: 0.5rem;">Transactions</p>
                    <p style="font-size: 1.5rem; font-weight: 800; color: var(--color-primary);">1,284</p>
                </div>
                <div class="card">
                    <p style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-on-surface-variant); font-weight: 600; margin-bottom: 0.5rem;">Activité</p>
                    <p style="font-size: 1.5rem; font-weight: 800; color: var(--color-primary);">8 ans</p>
                </div>
                <div class="card">
                    <p style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-on-surface-variant); font-weight: 600; margin-bottom: 0.5rem;">Score</p>
                    <p style="font-size: 1.5rem; font-weight: 800; color: var(--color-primary);">4.9</p>
                </div>
            </div>
            <button class="btn-primary" onclick="navigateTo('edit-profile')" style="width: 100%; padding: 1rem;">
                <i class="fas fa-edit"></i> Modifier mon Profil
            </button>
        </div>
        <nav class="bottom-nav">
            <button class="nav-item" onclick="navigateTo('dashboard')">
                <i class="fas fa-home"></i>
                <span>Accueil</span>
            </button>
            <button class="nav-item" onclick="navigateTo('sell')">
                <i class="fas fa-plus"></i>
                <span>Vendre</span>
            </button>
            <button class="nav-item" onclick="navigateTo('disputes')">
                <i class="fas fa-gavel"></i>
                <span>Litiges</span>
            </button>
            <button class="nav-item active" onclick="navigateTo('profile')">
                <i class="fas fa-user"></i>
                <span>Profil</span>
            </button>
        </nav>
    `,
    
    'edit-profile': `
        <button class="back-button" onclick="navigateTo('profile')">
            <i class="fas fa-arrow-left"></i>
        </button>
        <header>
            <div class="container">
                <div></div>
                <div class="logo" style="position: absolute; left: 50%; transform: translateX(-50%);">Modifier le profil</div>
                <div></div>
            </div>
        </header>
        <div style="padding: 6rem 1.5rem 2rem; max-width: 500px; margin: 0 auto;">
            <form onsubmit="handleEditProfile(event)">
                <div class="form-container">
                    <div class="form-group">
                        <label>Nom complet</label>
                        <div class="input-wrapper">
                            <i class="fas fa-user"></i>
                            <input type="text" value="Moussa Ibrahim" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Numéro de téléphone</label>
                        <div class="input-wrapper">
                            <i class="fas fa-phone"></i>
                            <input type="tel" value="+235 66 00 00 00" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Ville</label>
                        <div class="input-wrapper">
                            <i class="fas fa-map-pin"></i>
                            <select required>
                                <option>N'Djamena</option>
                                <option>Moundou</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn-submit">
                        <i class="fas fa-save"></i> Enregistrer les modifications
                    </button>
                </div>
            </form>
        </div>
    `,
    
    verification: `
        <button class="back-button" onclick="navigateTo('dashboard')">
            <i class="fas fa-arrow-left"></i>
        </button>
        <header>
            <div class="container">
                <div class="logo">MarchéTchad</div>
                <div style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid var(--color-primary); display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-user" style="font-size: 1rem; color: var(--color-primary);"></i>
                </div>
            </div>
        </header>
        <div style="padding: 6rem 1.5rem 2rem; max-width: 500px; margin: 0 auto;">
            <div class="card" style="text-align: center; margin-bottom: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-user-check" style="color: var(--color-on-surface-variant);"></i></div>
                <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem;">Vérification de Profil</h2>
                <p style="color: var(--color-on-surface-variant);">Obtenez votre badge vérifié pour augmenter vos plafonds.</p>
            </div>
            <div class="card">
                <h3 style="font-weight: 700; margin-bottom: 1rem;"><i class="fas fa-file-alt"></i> Étapes Requises</h3>
                <div style="background: rgba(163, 56, 24, 0.1); padding: 1rem; border-radius: 0.75rem; border-left: 4px solid var(--color-primary); margin-bottom: 1rem;">
                    <h4 style="font-weight: 700; margin-bottom: 0.5rem;">
                        Pièce d'Identité 
                        <span style="background: var(--color-surface-container); color: var(--color-on-surface-variant); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase;">Étape 1</span>
                    </h4>
                    <p style="font-size: 0.875rem; color: var(--color-on-surface-variant); margin-bottom: 1rem;">Photo recto/verso de votre CNI ou Passeport.</p>
                    <button class="btn-primary" style="width: 100%; padding: 0.75rem;">
                        <i class="fas fa-camera"></i> Capturer le document
                    </button>
                </div>
            </div>
        </div>
        <nav class="bottom-nav">
            <button class="nav-item" onclick="navigateTo('dashboard')">
                <i class="fas fa-home"></i>
                <span>Accueil</span>
            </button>
            <button class="nav-item" onclick="navigateTo('sell')">
                <i class="fas fa-plus"></i>
                <span>Vendre</span>
            </button>
            <button class="nav-item" onclick="navigateTo('disputes')">
                <i class="fas fa-gavel"></i>
                <span>Litiges</span>
            </button>
            <button class="nav-item" onclick="navigateTo('profile')">
                <i class="fas fa-user"></i>
                <span>Profil</span>
            </button>
        </nav>
    `,
    
    'credit-request': `
        <button class="back-button" onclick="navigateTo('dashboard')">
            <i class="fas fa-arrow-left"></i>
        </button>
        <header>
            <div class="container">
                <div class="logo">MarchéTchad</div>
                <i class="fas fa-bell" style="font-size: 1.5rem; color: #cc5533;"></i>
            </div>
        </header>
        <div style="padding: 6rem 1.5rem 2rem; max-width: 600px; margin: 0 auto;">
            <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">Demander un Crédit</h1>
            <p style="color: var(--color-on-surface-variant); margin-bottom: 2rem;">Accédez à des solutions de financement adaptées à votre activité.</p>
            <form onsubmit="handleCreditRequest(event)">
                <div class="form-container">
                    <div class="form-group">
                        <label>Montant demandé (FCFA)</label>
                        <div class="input-wrapper">
                            <i class="fas fa-dollar-sign"></i>
                            <input type="number" placeholder="Montant" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Durée du prêt (mois)</label>
                        <div class="input-wrapper">
                            <i class="fas fa-calendar"></i>
                            <input type="number" placeholder="Nombre de mois" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Objet du prêt</label>
                        <textarea placeholder="Décrivez l'utilisation du crédit..." required></textarea>
                    </div>
                    <button type="submit" class="btn-submit">
                        <i class="fas fa-send"></i> Soumettre la demande
                    </button>
                </div>
            </form>
        </div>
    `
};

// Navigation function
function navigateTo(screenName) {
    appState.currentScreen = screenName;
    renderScreen(screenName);
    window.scrollTo(0, 0);
}

// Render screen
function renderScreen(screenName) {
    const app = document.getElementById('app');
    const screenContent = screens[screenName];
    
    if (!screenContent) {
        console.error('Screen not found:', screenName);
        return;
    }
    
    app.innerHTML = screenContent;
    
    // Update nav active states
    updateNavActiveStates(screenName);
}

// Update navigation active states
function updateNavActiveStates(screenName) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to corresponding nav item based on screen
    const navMap = {
        'dashboard': 0,
        'sell': 1,
        'disputes': 2,
        'profile': 3,
        'payment': 0,
        'verification': 0,
        'credit-request': 0,
        'edit-profile': 3
    };
    
    if (navMap[screenName] !== undefined) {
        const activeIndex = navMap[screenName];
        const navItems = document.querySelectorAll('.nav-item');
        if (navItems[activeIndex]) {
            navItems[activeIndex].classList.add('active');
        }
    }
}

// Form handlers
function handleLogin(event) {
    event.preventDefault();
    alert('Connexion simulée avec succès!');
    appState.user = { name: 'Utilisateur' };
    navigateTo('dashboard');
}

function handleRegister(event) {
    event.preventDefault();
    alert('Compte créé avec succès!');
    navigateTo('login');
}

function handleSell(event) {
    event.preventDefault();
    alert('Vente enregistrée avec succès!');
    navigateTo('dashboard');
}

function handleEditProfile(event) {
    event.preventDefault();
    alert('Profil mis à jour avec succès!');
    navigateTo('profile');
}

function handleCreditRequest(event) {
    event.preventDefault();
    alert('Demande de crédit soumise avec succès!');
    navigateTo('dashboard');
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    renderScreen('landing');
});
