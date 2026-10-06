function ComplaintForm() {
  return `
    <div class="dashboard">

      <aside class="sidebar">

        <h2>CMS</h2>

        <a href="#">Dashboard</a>
        <a href="#">New Complaint</a>
        <a href="#">My Complaints</a>

      </aside>

      <main class="main-content">

        <h1>Submit Complaint</h1>

        <p class="subtitle-text">
          Submit your complaint to the appropriate department.
        </p>

        <div class="form-container">

          <div class="form-group">

            <label>Complaint Title</label>

            <input
              type="text"
              placeholder="Enter complaint title"
            />

          </div>

          <div class="form-group">

            <label>Category</label>

            <select>

              <option>Select category</option>
              <option>Academic</option>
              <option>Infrastructure</option>
              <option>Hostel</option>
              <option>IT / Network</option>
              <option>Other</option>

            </select>

          </div>

          <div class="form-group">

            <label>Department</label>

            <select>

              <option>Select department</option>
              <option>Computer Science</option>
              <option>Electronics</option>
              <option>Mechanical</option>
              <option>Administration</option>

            </select>

          </div>

          <div class="form-group">

            <label>Description</label>

            <textarea
              rows="6"
              placeholder="Describe your complaint..."
            ></textarea>

          </div>

          <div class="form-group">

            <label>Evidence</label>

            <input type="file" />

          </div>

          <div class="form-group">

            <label>
              <input type="checkbox" />
              Submit anonymously
            </label>

          </div>

          <button class="primary-btn">
            Submit Complaint
          </button>

        </div>

      </main>

    </div>
  `;
}

export default ComplaintForm;

