import { useNavigate, useLocation } from "react-router-dom";
import { Bell, User, House, FilePlusCorner, FileSearchCorner, Settings, Building2 } from 'lucide-react';
import styles from "./Header.module.css";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.logo}>
                <a
                    href="/" 
                    onClick={() => { navigate('/') }} 
                    className={`${styles.logoWrapper} ${location.pathname === '/' ? 'active' : ''}`}
                >
                    <div className={styles.logoIcon}>
                        <Building2 size={24} />
                    </div>

                    <span className={styles.logoText}>
                        Company
                    </span>
                </a>
            </div>

            <nav className={styles.navbarMenu}>
                <a 
                    href="/" 
                    onClick={() => { navigate('/') }} 
                    className={`${styles.menuLabel} ${location.pathname === '/' ? 'active' : ''}`}
                >
                    <House size={16} />
                    All Posts
                </a>
                
                <a 
                    href="/create"
                    onClick={() => { navigate('/create') }} 
                    className={`${styles.menuLabel} ${location.pathname === '/create' ? 'active' : ''}`}
                >
                    <FilePlusCorner size={16} />
                    Create
                </a>

                <a 
                    href="/preview" 
                    onClick={() => { navigate('/preview') }} 
                    className={`${styles.menuLabel} ${location.pathname === '/preview' ? 'active' : ''}`}
                >
                    <FileSearchCorner size={16} />
                    Preview
                </a>
            </nav>

            <div className={styles.navbarAction}>
                <button
                  id=""
                  className={styles.notifButton}
                >
                  <Bell size={18} />
                </button>

                <button
                  id=""
                  className={styles.settingButton}
                >
                  <Settings size={18} />
                </button>

                <div className={styles.actionDivider} />

                <div className={styles.userProfile}>
                    <div className={styles.userIcon}>
                        <User size={24}  />
                    </div>
                    
                    <div className={styles.userInfo}>
                      <span className={styles.userName}>John Doe</span>
                      
                      <span className={styles.userRole}>Staff</span>
                    </div>
                </div>
            </div>
        </div>
    );
}