import { AbsoluteFill, Img, Sequence, staticFile, Audio, interpolate } from 'remotion';
import { Title } from './Title';
import RollingNumber from './RollingNumber';
import { FONT_FAMILY } from "./constants";
import Confetti, { ConfettiConfig } from '../confetti';
import ImgScroll from './ImgScroll';


const PrAnalysis = {
  "Nour Alhosainy": {
      "numberOfPrs": 106,
      "numberOfprojects": 3,
      "favProject": "Automation-Testing",
      "favProjectCount": 81,
      "favDay": "Thursday",
      "favDayCount": 21,
      "rank": 16,
      "createdBugs": 187,
      "activatedStories": 3,
      "resolvedBugs": 27,
      "role": "qa"
  },
  "Mariam.William": {
      "numberOfPrs": 22,
      "numberOfprojects": 1,
      "favProject": "Automation-Testing",
      "favProjectCount": 22,
      "favDay": "Thursday",
      "favDayCount": 6,
      "rank": 21,
      "createdBugs": 378,
      "activatedStories": 7,
      "resolvedBugs": 38,
      "role": "qa"
  },
  "Amr": {
      "numberOfPrs": 7,
      "numberOfprojects": 2,
      "favProject": "Automation-Testing",
      "favProjectCount": 6,
      "favDay": "Monday",
      "favDayCount": 3,
      "rank": 24,
      "createdBugs": 335,
      "activatedStories": 4,
      "resolvedBugs": 50,
      "role": "qa"
  },
  "mariam zakria": {
      "numberOfPrs": 18,
      "numberOfprojects": 1,
      "favProject": "Automation-Testing",
      "favProjectCount": 18,
      "favDay": "Wednesday",
      "favDayCount": 5,
      "rank": 22,
      "createdBugs": 248,
      "activatedStories": 24,
      "resolvedBugs": 45,
      "role": "qa"
  },
  "Youssef ElSayad": {
      "numberOfPrs": 226,
      "numberOfprojects": 19,
      "favProject": "gb-frontend-v2",
      "favProjectCount": 97,
      "favDay": "Tuesday",
      "favDayCount": 65,
      "rank": 8
  },
  "reem.alashry": {
      "numberOfPrs": 37,
      "numberOfprojects": 1,
      "favProject": "Automation-Testing",
      "favProjectCount": 37,
      "favDay": "Tuesday",
      "favDayCount": 10,
      "rank": 19,
      "createdBugs": 3,
      "activatedStories": 9,
      "resolvedBugs": 2
  },
  "Mohamed Ashraf": {
      "numberOfPrs": 220,
      "numberOfprojects": 14,
      "favProject": "g-backend-v2",
      "favProjectCount": 87,
      "favDay": "Monday",
      "favDayCount": 51,
      "rank": 9,
      "createdBugs": 1
  },
  "abdelrahman ahmed": {
      "numberOfPrs": 618,
      "numberOfprojects": 16,
      "favProject": "g-backend-v2",
      "favProjectCount": 335,
      "favDay": "Thursday",
      "favDayCount": 142,
      "rank": 1,
      "createdBugs": 3,
      "activatedStories": 62,
      "resolvedBugs": 162
  },
  "Ahmed El Monady": {
      "numberOfPrs": 329,
      "numberOfprojects": 10,
      "favProject": "gb-frontend-v2",
      "favProjectCount": 161,
      "favDay": "Monday",
      "favDayCount": 74,
      "rank": 3,
      "activatedStories": 49,
      "resolvedBugs": 67
  },
  "Ahmed Elfiky": {
      "numberOfPrs": 191,
      "numberOfprojects": 10,
      "favProject": "g-backend-v2",
      "favProjectCount": 63,
      "favDay": "Monday",
      "favDayCount": 51,
      "rank": 11,
      "createdBugs": 6,
      "activatedStories": 19,
      "resolvedBugs": 34
  },
  "Raamyy": {
      "numberOfPrs": 176,
      "numberOfprojects": 10,
      "favProject": "gb-frontend-v2",
      "favProjectCount": 78,
      "favDay": "Sunday",
      "favDayCount": 35,
      "rank": 12,
      "createdBugs": 4,
      "activatedStories": 46,
      "resolvedBugs": 50
  },
  "Jomana Wael": {
      "numberOfPrs": 254,
      "numberOfprojects": 13,
      "favProject": "g-backend-v2",
      "favProjectCount": 113,
      "favDay": "Monday",
      "favDayCount": 62,
      "rank": 6,
      "activatedStories": 33,
      "resolvedBugs": 73
  },
  "Mina Mohsen": {
      "numberOfPrs": 154,
      "numberOfprojects": 10,
      "favProject": "gb-frontend-v2",
      "favProjectCount": 63,
      "favDay": "Tuesday",
      "favDayCount": 55,
      "rank": 13,
      "createdBugs": 1,
      "activatedStories": 32,
      "resolvedBugs": 47
  },
  "Galal Shaban": {
      "numberOfPrs": 244,
      "numberOfprojects": 10,
      "favProject": "g-backend-v2",
      "favProjectCount": 128,
      "favDay": "Wednesday",
      "favDayCount": 63,
      "rank": 7,
      "activatedStories": 37,
      "resolvedBugs": 15
  },
  "youmna.khaled": {
      "numberOfPrs": 207,
      "numberOfprojects": 7,
      "favProject": "gb-frontend-v2",
      "favProjectCount": 121,
      "favDay": "Tuesday",
      "favDayCount": 59,
      "rank": 10,
      "activatedStories": 34,
      "resolvedBugs": 82
  },
  "kareem mohamed": {
      "numberOfPrs": 8,
      "numberOfprojects": 4,
      "favProject": "gb-notifications-ms",
      "favProjectCount": 3,
      "favDay": "Tuesday",
      "favDayCount": 4,
      "rank": 23
  },
  "mohaned tarek mashaly": {
      "numberOfPrs": 286,
      "numberOfprojects": 11,
      "favProject": "g-backend-v2",
      "favProjectCount": 133,
      "favDay": "Sunday",
      "favDayCount": 66,
      "rank": 5,
      "activatedStories": 28,
      "resolvedBugs": 63
  },
  "Ziad Salah": {
      "numberOfPrs": 27,
      "numberOfprojects": 11,
      "favProject": "gb-automation",
      "favProjectCount": 7,
      "favDay": "Tuesday",
      "favDayCount": 11,
      "rank": 20
  },
  "Mohamed Ahmed": {
      "numberOfPrs": 4,
      "numberOfprojects": 2,
      "favProject": "g-backend-v2",
      "favProjectCount": 3,
      "favDay": "Wednesday",
      "favDayCount": 1,
      "rank": 27
  },
  "Mark Yasser": {
      "numberOfPrs": 7,
      "numberOfprojects": 1,
      "favProject": "g-backend-v2",
      "favProjectCount": 7,
      "favDay": "Tuesday",
      "favDayCount": 3,
      "rank": 26,
      "activatedStories": 2
  },
  "Mohamed Eyad Badran Elshenawy": {
      "numberOfPrs": 63,
      "numberOfprojects": 6,
      "favProject": "g-backend-v2",
      "favProjectCount": 27,
      "favDay": "Monday",
      "favDayCount": 17,
      "rank": 17
  },
  "Tasneem Hazem": {
      "numberOfPrs": 346,
      "numberOfprojects": 4,
      "favProject": "gb-frontend-v2",
      "favProjectCount": 332,
      "favDay": "Wednesday",
      "favDayCount": 69,
      "rank": 2,
      "activatedStories": 21,
      "resolvedBugs": 117
  },
  "Mostafa Moaty": {
      "numberOfPrs": 146,
      "numberOfprojects": 3,
      "favProject": "gb-frontend-v2",
      "favProjectCount": 134,
      "favDay": "Tuesday",
      "favDayCount": 42,
      "rank": 14,
      "createdBugs": 1,
      "activatedStories": 20,
      "resolvedBugs": 117
  },
  "mohamed.elaraby": {
      "numberOfPrs": 293,
      "numberOfprojects": 4,
      "favProject": "gb-frontend-v2",
      "favProjectCount": 281,
      "favDay": "Tuesday",
      "favDayCount": 71,
      "rank": 4,
      "activatedStories": 14,
      "resolvedBugs": 158
  },
  "Zeyad Waleed": {
      "numberOfPrs": 2,
      "numberOfprojects": 1,
      "favProject": "gb-frontend-v2",
      "favProjectCount": 2,
      "favDay": "Sunday",
      "favDayCount": 1,
      "rank": 29
  },
  "amir wessam": {
      "numberOfPrs": 49,
      "numberOfprojects": 1,
      "favProject": "gb-frontend-v2",
      "favProjectCount": 49,
      "favDay": "Monday",
      "favDayCount": 13,
      "rank": 18,
      "activatedStories": 3,
      "resolvedBugs": 21
  }
}

const NamesMap = {
  Raamyy: 'Raamyy',
  'abdelrahman ahmed': 'Bodda',
  'Youssef ElSayad': 'Sayad',
  'Galal Shaban': 'Galal',
  'Ahmed El Monady': 'Monady',
  'youmna.khaled': 'Youmna',
  'Jomana Wael': 'Jomana',
  'Mohamed Ashraf': 'Ashraf 🐳',
  'Ahmed Elfiky': 'Fiky',
  'Mina Mohsen': 'Mina',
  'mohaned tarek mashaly': 'Mohaned',
  'Amr': 'Amr',
  'Mostafa Moaty': 'Moaty',
  'mohamed.elaraby': 'Do7a',
  'Tasneem Hazem': 'Tasneem',
  "Mohamed Eyad Badran Elshenawy": "Eyad",
  "reem.alashry": "Reem",
  "Nour Alhosainy": "Nour",
  "Mariam.William": "Mariam",
  "mariam zakria": "Mariam",
  "kareem mohamed": "Kareem",
  "Ziad Salah": "Ziad",
  "Mohamed Ahmed": "Mohamed",
  "Mark Yasser": "Mark",
  "amir wessam": "Amir"
};

const projectsMap = {
  "gb-frontend-v2": "Frontend",
  "g-backend-v2": "Backend",
  "gb-notifications-ms": "Notifications",
  "gb-automation": "Automation"
}


// const CurrentUser = "Raamyy";

const confettiConfig1: ConfettiConfig = {
  particleCount: 200,
  startVelocity: 30,
  spread: 600,
  x: 360,
  y: 640,
  scalar: 1,
}

export interface UserContributionsProps {
  CurrentUser: string;
}

const UserContributions: React.FC<UserContributionsProps> = ({ CurrentUser }) => {
  // const frame = useCurrentFrame(); // Get the current frame number

  // Your user object data
  const userData = PrAnalysis[CurrentUser];

  return (
    <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Audio src={staticFile("music.mp3")} startFrom={1446} placeholder={"music"} volume={(f) =>
        interpolate(f, [840, 900], [1, 0], { extrapolateLeft: "clamp" })} />

      <AbsoluteFill style={{ backgroundColor: '#ffc348' }}>
        <div style={{ position: 'fixed', bottom: 0, right: '20px', fontFamily: FONT_FAMILY, fontWeight: 'bolder' }}>
          <h1>#Gameball2024Unwrapped</h1>
        </div>

        <div style={{ position: 'fixed', top: '40px', left: '30px', fontFamily: FONT_FAMILY, fontWeight: 'bolder' }}>
          <Img src={staticFile("logo.svg")} placeholder={"logo"} width={"250px"} style={{ fill: 'white' }} />
        </div>

        <Sequence from={0} durationInFrames={40}>
          <Title titleText={`Hi, ${NamesMap[CurrentUser] ?? CurrentUser}`} titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={40} durationInFrames={70}>
          <Title titleText="Welcome to your 2024 Gameball Unwrapped 🎉!" titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={110} durationInFrames={60}>
          <Title titleText="You have completed 🥁" titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={160} durationInFrames={80}>
          <RollingNumber number={userData.numberOfPrs} duration={80} freeze={35} subTitle="PRs this year!" />
        </Sequence>


        <Sequence from={238} durationInFrames={70}>
          <Title titleText={
            (userData.role == 'qa') ? 
            `You have created over ${userData.createdBugs} Bugs!🐞`:
            `You have squashed over ${userData.resolvedBugs} Bugs! 🐞`
          } titleColor="Black" />
        </Sequence>

        <Sequence from={310} durationInFrames={70}>
          <Title titleText={
            (userData.role == 'qa') ? 
            `Be a friend for developers next time 😂`:
            `And worked on more than ${userData.activatedStories} user stories!`
          } titleColor="Black" />
        </Sequence>
          
        <Sequence from={210} durationInFrames={50}>
          <Confetti {...confettiConfig1} />
        </Sequence>

        <Sequence from={380} durationInFrames={55}>
          <Title titleText="What an outstanding effort 💝!" titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={432} durationInFrames={60}>
          <Title titleText={`You've contributed in ${userData.numberOfprojects} projects`} titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={490} durationInFrames={60}>
          <Title titleText="However, Your favourite project is..." titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={560} durationInFrames={70}>
          <Title titleText={`${projectsMap[userData.favProject] ?? userData.favProject} with total of ${userData.favProjectCount} PRs!`} titleColor="Black" />
        </Sequence>        

        <Sequence from={640} durationInFrames={60}>
          <Title titleText={`You have your own routine 💅`} titleColor="#0d0d1e" fontSize='80px' />
        </Sequence>

        <Sequence from={710} durationInFrames={80}>
          <Title titleText={`You opened ${userData.favDayCount} PRs on ${userData.favDay}s!`} titleColor="#0d0d1e" />
        </Sequence>

      </AbsoluteFill>
      <Sequence from={790} durationInFrames={130}>
        <AbsoluteFill style={{ backgroundColor: ' white' }}>
          <div style={{ position: 'fixed', bottom: 0, right: '20px', fontFamily: FONT_FAMILY, fontWeight: 'bolder' }}>
            <h1>#Gameball2024Unwrapped</h1>
          </div>

          <div style={{ position: 'fixed', top: '40px', left: '30px', fontFamily: FONT_FAMILY, fontWeight: 'bolder' }}>
            <Img src={staticFile("logo.svg")} placeholder={"logo"} width={"250px"} style={{ fill: 'white' }} />
          </div>

          <ImgScroll imgSrc={`${CurrentUser}.png`} />

          <Sequence from={0} durationInFrames={60}>
            <Title titleText={`WHAT A JOURNEY!`} titleColor="#0d0d1e" />
          </Sequence>

          <Sequence from={50} durationInFrames={50}>
            <Title titleText={`See you at 2025 👋💖`} titleColor="#0d0d1e" />
          </Sequence>

          <Sequence from={100} >
              <Title titleText={`#gameball_tech`} titleColor="#0d0d1e" fontSize='80px'/>
          </Sequence>

        </AbsoluteFill>
      </Sequence>
    </div>
  );
};

// Render the Remotion composition
export default UserContributions;
