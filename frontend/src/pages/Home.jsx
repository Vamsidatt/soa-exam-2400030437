import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home-page">
      <p className="eyebrow">Service Center</p>
      <h1>BloodBank Management System</h1>
      <p className="intro">Add new blood bank records or inspect available inventory.</p>
      <div className="home-actions">
        <Link className="button button-primary" to="/add">Add Blood Bank</Link>
        <Link className="button button-secondary" to="/display">View Records</Link>
      </div>
    </section>
  )
}

export default Home