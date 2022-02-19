import s from "./Info.module.css"
const Info = () => {
  return (
    <div>
      <div className={s.bg__info}>
        <div className={s.content__userProfileInfo}>
          <div className={s.name}>Maria I.</div>
          <div className={s.status}>Я делаю вдох, так пахнет Dior❤‍🔥</div>
          <div className={s.border__bottom}></div>
          <div className={s.userProfile__info}>
            <div className={s.userProfile__data}>Date of Birth: </div>
            <div className={s.userProfile__pod}>10 may</div>
          </div>
          <div className={s.userProfile__info}>
            <div className={s.userProfile__data}>City: </div>
            <div >
              <div className={s.userProfile__pod}>Novosibirsk</div>
            </div>
          </div>
          <div className={s.userProfile__info}>
            <div className={s.userProfile__data}>Place of study:</div>
            <div >
              <div className={s.userProfile__pod}>NSTU(NETI)</div>
            </div>
          </div>
          <div className={s.userProfile__info}>
            <div className={s.userProfile__data}>Registration date</div>
            <div >
              <div className={s.userProfile__pod}>26 avg 2011</div>
            </div>
          </div>
          <div className={s.userProfile__info}>
            <div className={s.userProfile__data}>Web site:</div>
            <div >
              <a className={s.userProfile__href} href="https://vk.com/amil03"> https://vk.com/amil03</a>
            </div>
          </div>
          {/* podrobno */}
          <div className={s.podrobno}>
            Подробная информация
          </div>
          {/* podrobno */}
          <div className={s.border__top}></div>
          <div className={s.userInfo}>
            <div className={s.userInfo__description}>
              <div className={s.userInfo__number}>2</div>
              <div className={s.userInfo__text}>общих друга</div>
            </div>
            <div className={s.userInfo__description}>
              <div className={s.userInfo__number}>44</div>
              <div className={s.userInfo__text}>друга</div>
            </div>
            <div className={s.userInfo__description}>
              <div className={s.userInfo__number}>115</div>
              <div className={s.userInfo__text}>подписчиков</div>
            </div>
            <div className={s.userInfo__description}>
              <div className={s.userInfo__number}>6</div>
              <div className={s.userInfo__text}>фотографий</div>
            </div>
            <div className={s.userInfo__description}>
              <div className={s.userInfo__number}>9</div>
              <div className={s.userInfo__text}>видеозаписей</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;