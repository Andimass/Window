import './Second_Block.css'

function Second_Block() {
  return (
      <div className = "container_2" >
        <p className='line_2'></p>
          <p className='text_2'>Мы работаем только с проверенными поставщиками материалов, чтобы гарантировать долговечность и безопасность наших продуктов</p>
        <div className="al">
          <div className='al_1'>
              <img src="/public/al_1.png"  alt=''/>
              <h2 className="al_title">alumil</h2>
              <div className="charac-container">
                    <p className='charac'>Низкая цена</p>
                    <p className='charac'>Легкая установка</p>
                    <p className='charac'>Долговечность</p>
                    <p className='charac'>Материалы <span className="charac-more">подробнее</span></p>
                </div>
           </div>
           <div className='al_2'>
               <img src="/public/al_2.png"  alt=''/>
               <h2 className="al_title">татпроф</h2>
               <div className="charac-container">
                    <p className='charac'>Низкая цена</p>
                    <p className='charac'>Легкая установка</p>
                    <p className='charac'>Долговечность</p>
                    <p className='charac'>Материалы <span className="charac-more">подробнее</span></p>
                </div>

           </div>
         </div>
      </div>
  )
}

export default Second_Block