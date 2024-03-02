import styles from "./DiscordDark.module.css";

const DiscordDark = () => {
  return (
    <div className={styles.discordDark}>
      <div className={styles.divchat}>
        <div className={styles.divcontainer}>
          <div className={styles.divcontainer1}>
            <img
              className={styles.slightlySmilingFace}
              alt=""
              src="/slightly-smiling-face.svg"
            />
            <img className={styles.svgicon} alt="" src="/svgicon.svg" />
            <img className={styles.svgicon1} alt="" src="/svgicon.svg" />
            <div className={styles.messageGeneral}>Message #general</div>
          </div>
          <img className={styles.divicon} alt="" src="/divicon.svg" />
        </div>
        <img
          className={styles.emptyMessageIcon}
          alt=""
          src="/empty-message@2x.png"
        />
        <div className={styles.divbar} />
        <div className={styles.divtitlecontainer}>
          <div className={styles.divtoolbar}>
            <img className={styles.svgicon2} alt="" src="/svgicon.svg" />
            <img className={styles.svgicon3} alt="" src="/svgicon.svg" />
            <div className={styles.divsearchbar}>
              <img className={styles.svgicon4} alt="" src="/svgicon.svg" />
              <div className={styles.search}>Search</div>
            </div>
            <img className={styles.svgicon5} alt="" src="/svgicon.svg" />
            <img className={styles.svgicon6} alt="" src="/svgicon.svg" />
            <img className={styles.svgicon7} alt="" src="/svgicon.svg" />
          </div>
          <div className={styles.divchildren}>
            <img className={styles.svgicon7} alt="" src="/svgicon.svg" />
            <div className={styles.h3title}>
              <b className={styles.general}>general</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divsidebar}>
        <div className={styles.divscroller}>
          <div className={styles.divpanels}>
            <img className={styles.svgicon9} alt="" src="/svgicon.svg" />
            <img className={styles.svgicon10} alt="" src="/svgicon.svg" />
            <img className={styles.svgicon11} alt="" src="/svgicon.svg" />
            <img
              className={styles.divavatarIcon}
              alt=""
              src="/divavatar@2x.png"
            />
            <div className={styles.spencercamp}>spencercamp</div>
            <div className={styles.div}>#6709</div>
          </div>
          <div className={styles.divcontent}>
            <img
              className={styles.svgactionicon}
              alt=""
              src="/svgactionicon.svg"
            />
            <img className={styles.svgicon12} alt="" src="/svgicon.svg" />
            <div className={styles.general1}>General</div>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
          </div>
          <div className={styles.divcontainer2}>
            <img className={styles.svgicon13} alt="" src="/svgicon.svg" />
            <b className={styles.voiceChannels}>Voice CHANNELS</b>
            <img className={styles.svgicon14} alt="" src="/svgicon.svg" />
          </div>
          <div className={styles.divcontent1}>
            <img
              className={styles.svgactionicon}
              alt=""
              src="/svgactionicon.svg"
            />
            <img className={styles.svgicon12} alt="" src="/svgicon.svg" />
            <div className={styles.general1}>general</div>
            <img className={styles.svgicon16} alt="" src="/svgicon.svg" />
          </div>
          <div className={styles.divcontainer3}>
            <img className={styles.svgicon13} alt="" src="/svgicon.svg" />
            <b className={styles.voiceChannels}>TEXT CHANNELS</b>
            <img className={styles.svgicon14} alt="" src="/svgicon.svg" />
          </div>
        </div>
        <div className={styles.divbar1} />
        <div className={styles.headerheader}>
          <img
            className={styles.svgbuttonIcon}
            alt=""
            src="/svgbutton@2x.png"
          />
          <div className={styles.h1name}>
            <b className={styles.general}>Guild</b>
          </div>
        </div>
      </div>
      <div className={styles.navwrapper}>
        <img className={styles.divlistitemIcon} alt="" src="/divlistitem.svg" />
        <img
          className={styles.divlistitemIcon1}
          alt=""
          src="/divlistitem.svg"
        />
        <img
          className={styles.divlistitemIcon2}
          alt=""
          src="/divlistitem.svg"
        />
        <img
          className={styles.divlistitemIcon3}
          alt=""
          src="/divlistitem.svg"
        />
      </div>
      <div className={styles.divmacbuttons}>
        <img
          className={styles.divmacbuttoncloseIcon}
          alt=""
          src="/divmacbuttonclose.svg"
        />
        <img
          className={styles.divmacbuttonminimizeIcon}
          alt=""
          src="/divmacbuttonminimize.svg"
        />
        <img
          className={styles.divmacbuttonmaximizeIcon}
          alt=""
          src="/divmacbuttonmaximize.svg"
        />
      </div>
    </div>
  );
};

export default DiscordDark;
