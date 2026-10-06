function AdminDashboard() {
  return `
    <div class="dashboard">

      <aside class="sidebar">

        <h2>CMS</h2>

        <a href="#">Dashboard</a>
        <a href="#">All Complaints</a>
        <a href="#">Users</a>
        <a href="#">Departments</a>
        <a href="#">Analytics</a>
        <a href="#">Settings</a>

      </aside>

      <main class="main-content">

        <h1>Admin Dashboard</h1>

        <p class="subtitle-text">
          Overview of the complaint management system.
        </p>

        <div class="stats">

          <div class="stat-card">
            <h2>1248</h2>
            <p>Total Complaints</p>
          </div>

          <div class="stat-card">
            <h2>186</h2>
            <p>Pending</p>
          </div>

          <div class="stat-card">
            <h2>231</h2>
            <p>In Progress</p>
          </div>

          <div class="stat-card">
            <h2>831</h2>
            <p>Resolved</p>
          </div>

        </div>

        <h2>Departments</h2>

        <br />

        <div class="complaint-card">
          <h3>Computer Science</h3>
          <p>320 complaints</p>
        </div>

        <div class="complaint-card">
          <h3>Electronics</h3>
          <p>280 complaints</p>
        </div>

        <div class="complaint-card">
          <h3>Mechanical</h3>
          <p>190 complaints</p>
        </div>

      </main>

    </div>
  `;
}

export default AdminDashboard;

