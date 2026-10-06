function FacultyDashboard() {
  return `
    <div class="dashboard">

      <aside class="sidebar">

        <h2>CMS</h2>

        <a href="#">Dashboard</a>
        <a href="#">Assigned Complaints</a>
        <a href="#">Notifications</a>
        <a href="#">Profile</a>

      </aside>

      <main class="main-content">

        <h1>Faculty Dashboard</h1>

        <p class="subtitle-text">
          Manage complaints assigned to you.
        </p>

        <div class="stats">

          <div class="stat-card">
            <h2>18</h2>
            <p>Assigned</p>
          </div>

          <div class="stat-card">
            <h2>6</h2>
            <p>Pending</p>
          </div>

          <div class="stat-card">
            <h2>12</h2>
            <p>Resolved</p>
          </div>

        </div>

        <h2>Assigned Complaints</h2>

        <br />

        <div class="complaint-card">
          <h3>Wi-Fi not working</h3>
          <p>Complaint #101</p>
          <span class="status pending">Pending</span>
        </div>

        <div class="complaint-card">
          <h3>Projector issue</h3>
          <p>Complaint #098</p>
          <span class="status progress">In Progress</span>
        </div>

      </main>

    </div>
  `;
}

export default FacultyDashboard;

