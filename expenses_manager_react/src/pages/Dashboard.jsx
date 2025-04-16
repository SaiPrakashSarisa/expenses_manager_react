
const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className="breadCrumb">Dashboard</div>

            <div className="container-one">
                <div className="grid-container">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
                <div className="monthly-spent"></div>
            </div>
            <div className="container-two">
                <div className="assets"></div>
                <div className="recents"></div>
            </div>
        </div>
    )
}

export default Dashboard;