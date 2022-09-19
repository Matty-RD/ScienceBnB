import './homePage.css';

function HomePage() {

    return (
      <>
      <div className='full page'>
      <h1>Home Page</h1>
      </div>
      <span>
      <p>Are you a High Sci-Fi scientist attempting to push the boundaries of human understanding? Maybe you're a fellow lover of science that just isn't cut out for the Lab Coat, but fits right in as a Lab Rat!</p>
      <p>Well with scienceBnb you can post your new research allowing [redacted] to signup! While our [redacted] can search through post looking for jobs that fit them!</p>
      </span>
      <div className='twoRows'>
      <div className='columnOne'>
      <img className="photo" src='https://c.tenor.com/6Yul1dcO4kkAAAAC/ian-malcom-jurassic-park.gif' alt={"Science"} width="400" height="400"/>
      <img className="photo" src='https://i.imgur.com/rp5SKHx.gif' alt={"Science"} width="400" height="400"/>
      <img className="photo" src='https://i.kym-cdn.com/photos/images/original/000/127/709/aperture_1950__s_propaganda_by_demray-d3f6a0d.png' alt={"Science"} width="400" height="400"/>
      </div>
      <div className='columnTwo'>
      <img className="photo" src='https://c.tenor.com/BjPaQ-YCOvMAAAAC/valorant-valorant-killjoy.gif' alt={"Science"} width="400" height="400"/>
      <img className="photo" src='https://pa1.narvii.com/6665/a2d8f5c841d33838de1474b4c25461f4c5cbfb25_hq.gif' alt={"Science"} width="400" height="400"/>
      <img className="photo" src='https://www.denofgeek.com/wp-content/uploads/2016/04/dexters-laboratory.jpg?fit=1920%2C1080' alt={"Science"} width="400" height="400"/>
      </div>
      </div>
      </>
    );
}
  export default HomePage;
