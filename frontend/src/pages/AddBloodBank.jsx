import { useState } from 'react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8081'

function AddBloodBank() {
  const [formData, setFormData] = useState({
    bankName: '',
    city: '',
    contactNumber: '',
    unitsAvailable: '',
  })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    setError('')

    const payload = {
      bankName: formData.bankName.trim(),
      city: formData.city.trim(),
      contactNumber: formData.contactNumber.trim(),
      unitsAvailable: parseInt(formData.unitsAvailable, 10),
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/Add`, payload)
      if (response.status === 201 || response.status === 200) {
        setError('')
        setMessage('Blood Bank Record Added Successfully!')
        setFormData({ bankName: '', city: '', contactNumber: '', unitsAvailable: '' })
      } else {
        setMessage('')
        setError('Failed to Add Record')
      }
    } catch (err) {
      setMessage('')
      if (err.response?.status === 400) {
        setError(err.response.data?.message || 'Bad Request - Validate all input fields')
      } else if (err.response?.status === 500) {
        setError('Internal Server Error - Failed to save record')
      } else if (err.request) {
        setError('Network Error - Server not responding')
      } else {
        setError('Failed to submit record')
      }
    }
  }

  return (
    <section className="form-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div>
          {message ? <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p> : null}
          {error ? <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p> : null}
          <p className="eyebrow">Inventory Entry</p>
          <h1>Add Blood Bank</h1>
          <p className="form-description">Enter blood bank details. ID is generated automatically.</p>
        </div>

        <label>
          Blood Bank Name
          <input
            name="bankName"
            type="text"
            value={formData.bankName}
            onChange={handleChange}
            placeholder="e.g. Red Cross Central"
            required
          />
        </label>

        <label>
          City
          <input
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Vijayawada"
            required
          />
        </label>

        <label>
          Contact Number
          <input
            name="contactNumber"
            type="tel"
            value={formData.contactNumber}
            onChange={handleChange}
            inputMode="numeric"
            pattern="[0-9]{10}"
            title="Enter a valid 10-digit phone number"
            placeholder="10-digit number"
            required
          />
        </label>

        <label>
          Units Available
          <input
            name="unitsAvailable"
            type="number"
            min="0"
            value={formData.unitsAvailable}
            onChange={handleChange}
            placeholder="e.g. 50"
            required
          />
        </label>

        <button className="button button-primary" type="submit">
          Save Record
        </button>
      </form>
    </section>
  )
}

export default AddBloodBank