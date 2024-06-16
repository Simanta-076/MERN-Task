import styles from "./styles.module.css";
import UserTable from "./UserTable.jsx";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Users</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout

				</button>
				
			</nav>
			
			
		</div>
		< UserTable />
		
		
		</>
		
	);
};

export default Main;
