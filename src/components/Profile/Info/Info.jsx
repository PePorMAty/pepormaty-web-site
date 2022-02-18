import "./Info.css"
const Info = () => {
  return (
    <div>
      <div className="content__userProfile-info">
        <div className="name">Maria I.</div>
        <div className="status">Я делаю вдох, так пахнет Dior❤‍🔥</div>
        <div className="border__bottom"></div>
        <div className="userProfile__info">
          <div>Date of Birth: </div>
          <div className="userProfile__data">
            <div>10 may</div>
          </div>
        </div>
        <div className="userProfile__info">
          <div>City: </div>
          <div className="userProfile__data">
            <div className="">Novosibirsk</div>
          </div>
        </div>
        <div className="userProfile__info">
          <div>Place of study:</div>
          <div className="userProfile__data">
            <div className="">NSTU(NETI)</div>
          </div>
        </div>
        <div className="userProfile__info">
          <div>Registration date</div>
          <div className="userProfile__data">
            <div className="">26 avg 2011</div>
          </div>
        </div>
        <div className="userProfile__info">
          <div>Web site:</div>
          <div className="userProfile__data">
            <a className="userProfile__href" href="https://vk.com/amil03"> https://vk.com/amil03</a>
          </div>
        </div>
        {/* podrobno */}
        <div className="podrobno">
          Подробная информация
        </div>
        {/* podrobno */}
        
      </div>
    </div>

  );
}
export default Info;