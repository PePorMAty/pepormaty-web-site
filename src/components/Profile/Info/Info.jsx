import "./Info.css"
const Info = (Click) => {
  return (
    <div>
      <div className="content__userProfile-info">
        <div className="name">Maria I.</div>
        <div className="status">Я делаю вдох, так пахнет Dior❤‍🔥</div>
        <div className="border__bottom"></div>
        <div className="userProfile__info">
          <div className="userProfile__data">Date of Birth: </div>
          <div >10 may</div>
        </div>
        <div className="userProfile__info">
          <div className="userProfile__data">City: </div>
          <div >
            <div className="">Novosibirsk</div>
          </div>
        </div>
        <div className="userProfile__info">
          <div className="userProfile__data">Place of study:</div>
          <div >
            <div >NSTU(NETI)</div>
          </div>
        </div>
        <div className="userProfile__info">
          <div className="userProfile__data">Registration date</div>
          <div >
            <div className="">26 avg 2011</div>
          </div>
        </div>
        <div className="userProfile__info">
          <div className="userProfile__data">Web site:</div>
          <div >
            <a className="userProfile__href" href="https://vk.com/amil03"> https://vk.com/amil03</a>
          </div>
        </div>
        {/* podrobno */}
        <div className="podrobno">
          Подробная информация
          
        </div>
        
        {/* podrobno */}
        <div className="border__top"></div>
        <div className="userInfo">
          <div className="userInfo__description">
            <div className="userInfo__number">2</div>
            <div className="userInfo__text">общих друга</div>
          </div>
          <div className="userInfo__description">
            <div className="userInfo__number">44</div>
            <div className="userInfo__text">друга</div>
          </div>
          <div className="userInfo__description">
            <div className="userInfo__number">115</div>
            <div className="userInfo__text">подписчиков</div>
          </div>
          <div className="userInfo__description">
            <div className="userInfo__number">6</div>
            <div className="userInfo__text">фотографий</div>
          </div>
          <div className="userInfo__description">
            <div className="userInfo__number">9</div>
            <div className="userInfo__text">видеозаписей</div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Info;