import { useState, useRef } from "react"

function Register() {
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    gender: "",
    hobbies: []
  })

  const hobbyRef = useRef([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    const selectedHobbies = hobbyRef.current
      .filter(el => el && el.checked)
      .map(el => el.value)

    setFormData(prev => ({
      ...prev,
      hobbies: selectedHobbies
    }))

    setSubmitted(true)
  }

  return (
    <div style={{ padding: "20px" }}>
      {
        submitted ? (
          /* ===== SUBMITTED DATA VIEW ===== */
          <div>
            <h2>Submitted Data</h2>
            <p>Username: {formData.username}</p>
            <p>Firstname: {formData.firstname}</p>
            <p>Lastname: {formData.lastname}</p>
            <p>Gender: {formData.gender}</p>
            <p>Hobbies: {formData.hobbies.join(", ")}</p>

            <button onClick={() => setSubmitted(false)}>
              Back
            </button>
          </div>
        ) : (
          /* ===== FORM VIEW ===== */
          <div>
            <h2>Registration Form</h2>

            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <br /><br />

            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              onChange={handleChange}
            />
            <br /><br />

            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              onChange={handleChange}
            />
            <br /><br />

            <div>
              <strong>Gender</strong><br />
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                /> Male
              </label><br />

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                /> Female
              </label><br />

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Others"
                  onChange={handleChange}
                /> Others
              </label>
            </div>

            <br />

            <div>
              <strong>Hobbies</strong><br />
              {["Music", "Sport", "Game"].map((item, index) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    value={item}
                    ref={el => hobbyRef.current[index] = el}
                  />
                  {item}
                  <br />
                </label>
              ))}
            </div>

            <br />

            <button onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Register
