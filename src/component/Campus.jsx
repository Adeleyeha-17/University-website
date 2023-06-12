
export const Campus = () => {
  return (
    <div>
      <div className="campus">
         <h1>Our Global Campus</h1>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, odit! Hic suscipit aliquam impedit temporibus est aliquid sit architecto porro non quia! Minus iusto suscipit magnam consectetur autem aut earum?</p>

         <div className="row">
            <div className="campus-col">
               <img src="london.png" alt="" />
               <div className="layer">
                  <h3>LONDON</h3>
               </div>
            </div>
            <div className="campus-col">
               <img src="newyork.png" alt="" />
               <div className="layer">
                  <h3>FULHAM</h3>
               </div>
            </div>
            <div className="campus-col">
               <img src="washington.png" alt="" />
               <div className="layer">
                  <h3>MANCHESTER</h3>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
