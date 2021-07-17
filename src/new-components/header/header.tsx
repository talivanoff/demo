import styles from './header.module.css';

const Header = () => (
    <div className={styles.header}>
        <h2>Загрузка картинок</h2>
    </div>
);

// class Header extends React.Component {
//     render() {
//         return (
//             <div className="header">
//                 <h2>Загрузка картинок</h2>
//             </div>
//         )
//     }
// }

export default Header;