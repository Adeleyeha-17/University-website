import { Link } from "react-router-dom"
export const Hero = () => {
  return (
    <div >
      <div id="text-box">
        <h1>{`World's Biggest University`}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, velit?
          Sunt vel quibusdam cupiditate sint blanditiis? Asperiores assumenda
          optio repellat, quos eaque saepe illum dolor, incidunt debitis
          accusantium ipsa inventore?
        </p>
        <div id="box-btn">
          <Link to="/about">Visit to know more</Link>
        </div>
      </div>
    </div>
  )
}
