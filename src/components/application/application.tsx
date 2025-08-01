export function Application() {
  return (
    <form action="">
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name'/>
        </div>
        <div>
            <label htmlFor="job-location">job location</label>
            <select id="job-location">
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="IN">India</option>
                <option value="AU">Australia</option>
            </select>
        </div>
        <div>
            <label>
                <input type="checkbox" id='terms' />
                I agree to the terms and consitions
            </label>
        </div>
        <button>Submit</button>
    </form>
  )
}
