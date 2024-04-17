import Footerbar from "../../components/Bars/Footerbar";
import "../../pages.css/guidelines.css";

function Guidelines() {
  return (
    <div>
      <section className="banner-area relative" id="home">
        <div className="">
          <div className="head">
            <div className="before-lineup">
              <h1 className="lineUp">Guidelines</h1>
            </div>
            <hr className="redline" />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3>Community Guidelines</h3>
          <p className="guidelines-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
            tortor dignissim convallis aenean et tortor. Aliquet enim tortor at
            auctor. At in tellus integer feugiat. Egestas maecenas pharetra
            convallis posuere. Viverra ipsum nunc aliquet bibendum enim. Risus
            in hendrerit gravida rutrum. Netus et malesuada fames ac turpis.
            Quam adipiscing vitae proin sagittis nisl. Urna et pharetra pharetra
            massa massa ultricies mi. Leo integer malesuada nunc vel risus
            commodo viverra. In nisl nisi scelerisque eu ultrices vitae.
            Porttitor leo a diam sollicitudin tempor id eu nisl nunc.
          </p>
          <p className="guidelines-text">
            Mattis rhoncus urna neque viverra justo nec ultrices dui. Odio
            facilisis mauris sit amet massa. Dolor sed viverra ipsum nunc.
            Auctor urna nunc id cursus. Adipiscing tristique risus nec feugiat
            in fermentum posuere urna nec. Mauris a diam maecenas sed enim ut
            sem viverra aliquet. Orci sagittis eu volutpat odio facilisis mauris
            sit amet. Pulvinar pellentesque habitant morbi tristique senectus.
            Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Senectus
            et netus et malesuada fames ac. Dictum sit amet justo donec enim
            diam vulputate ut pharetra.
          </p>
          <ol className="guidelines-list">
            <li className="guidelines-category">
              <span className="guidelines-main">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <ul className="guidelines-sublist">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
              </ul>
            </li>
            <li className="guidelines-category">
              <span className="guidelines-main">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <ul className="guidelines-sublist">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
              </ul>
            </li>
            <li className="guidelines-category">
              <span className="guidelines-main">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <ul className="guidelines-sublist">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Mattis rhoncus urna neque viverra justo nec ultrices dui. Odio
            facilisis mauris sit amet massa. Dolor sed viverra ipsum nunc.
            Auctor urna nunc id cursus. Adipiscing tristique risus nec feugiat
            in fermentum posuere urna nec.
          </p>
        </div>
      </section>
      <Footerbar />
    </div>
  );
}

export default Guidelines;
