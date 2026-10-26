import { useState, useEffect } from 'react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8081'

function DisplayBloodBanks() {
  const [bloodBanks, setBloodBanks] = useState([])
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchRecords = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await axios.get(`${API_BASE_URL}/DisplayAll`)
      if (response.status === 200) {
        setBloodBanks(response.data)
      }
    } catch (err) {
      setError('Failed to fetch blood bank records')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecords()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm(`Are you sure you want to delete blood bank #${id}?`)) {
      return
    }

    setMessage('')
    setError('')
    try {
      const response = await axios.delete(`${API_BASE_URL}/Delete/${id}`)
      if (response.status === 200) {
        setMessage(`Record #${id} deleted successfully`)
        fetchRecords()
      }
    } catch (err) {
      setError(`Failed to delete record #${id}`)
    }
  }

  return (
    <section className="form-page">
      <div className="table-card">
        <p className="eyebrow">Records</p>
        <h1>Blood Bank List</h1>
        <p className="form-description">All registered blood bank units in the system.</p>

        {message ? <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p> : null}
        {error ? <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p> : null}

        {loading ? (
          <p>Loading records...</p>
        ) : bloodBanks.length === 0 ? (
          <p>No records found in database.</p>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Bank Name</th>
                <th>City</th>
                <th>Contact</th>
                <th>Units</th>
                <th style={{ textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {bloodBanks.map((item) => (
                <tr key={item.id}>
                  <td><strong>#{item.id}</strong></td>
                  <td>{item.bankName}</td>
                  <td>{item.city}</td>
                  <td>{item.contactNumber}</td>
                  <td>{item.unitsAvailable} Units</td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      type="button"
                      className="button button-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}

export default DisplayBloodBanks