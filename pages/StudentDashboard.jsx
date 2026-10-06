function StudentDashboard() {
  return `
    <div class="dashboard">

      <aside class="sidebar">

        <h2>CMS</h2>

        <a href="#">Dashboard</a>
        <a href="#">New Complaint</a>
        <a href="#">My Complaints</a>
        <a href="#">Notifications</a>
        <a href="#">Profile</a>

      </aside>

      <main class="main-content">

        <h1>Student Dashboard</h1>

        <p class="subtitle-text">
          Welcome back, Student!
        </p>

        <div class="stats">

          <div class="stat-card">
            <h2>8</h2>
            <p>Total Complaints</p>
          </div>

          <div class="stat-card">
            <h2>2</h2>
            <p>Pending</p>
          </div>

          <div class="stat-card">
            <h2>3</h2>
            <p>In Progress</p>
          </div>

          <div class="stat-card">
            <h2>3</h2>
            <p>Resolved</p>
          </div>

        </div>

        <h2>Recent Complaints</h2>

        <br />

        <div class="complaint-card">
          <h3>Wi-Fi not working</h3>
          <p>Complaint #101</p>
          <span class="status pending">Pending</span>
        </div>

        <div class="complaint-card">
          <h3>Classroom fan issue</h3>
          <p>Complaint #100</p>
          <span class="status progress">In Progress</span>
        </div>

        <div class="complaint-card">
          <h3>Hostel water problem</h3>
          <p>Complaint #099</p>
          <span class="status resolved">Resolved</span>
        </div>

      </main>

    </div>
  `;
}

export default StudentDashboard;
