/** 3P dependency imports */
import React from "react"
import { Link } from "gatsby"

/** Component dependencies */
import Layout from "./../../../components/layout"
import SEO from "./../../../components/seo"
import Header from "./../../../components/Header"
import List from "../../../components/List"
import Heading from "../../../components/Heading"
import FooterBreadcrumb from "../../../components/FooterBreadcrumb"

/** constants **/
import PAGE_TYPE from "./../../../core/constants/pageType"

/** styles **/
import "./../../stories.css"

const BeforeYouGo = () => (
  <Layout type={PAGE_TYPE.STORY}>
    <SEO title="Before you go | Preparation" />
    <Header />
    <div className="page-container">
      <aside className="page-container__left">
        <div className="page-container__left-list-title">Before you go</div>
        <ul className="page-container__left-list">
          <li>
            <a href="#visa">Visa</a>
          </li>
          <li>
            <a href="#couchsurfing">Couchsurfing</a>
          </li>
          <li>
            <a href="#documenting-experience">Documenting experience</a>
          </li>
          <li>
            <a href="#hostels">Hostels</a>
          </li>
          <li>
            <a href="#forex">Forex</a>
          </li>
          <li>
            <a href="#basic-information">Basic information</a>
          </li>
          <li>
            <a href="#things-you-might-need">Things you might need</a>
          </li>
          <li>
            <a href="#entry-travel-shopping">Entry travel shopping</a>
          </li>
          <li>
            <a href="#apps-to-download">Apps to download</a>
          </li>
        </ul>
        <div className="page-container__ts">7 min 14 sec read time </div>
      </aside>
      <div className="page-container__right">
        <p>
          I started planning in June, a month back from the trip. The original
          plan was to go in the Sakura season (Cherry blossom) in Japan which is
          usually observe in April in Tokyo. There were a few reasons that I had
          to shift the plan to August - a season known for heat and typhoons.
        </p>

        <p>
          I started gathering basic information such as weather, what are the
          things I’m interested in, visa documents, things I will need in Japan,
          etc. I created a folder in Google Drive and started adding information
          there. Google Drive can be handy as all the documents can be saved
          offline and useful.
        </p>

        <p>
          I couldn’t download the offline map of Japan due to some language
          support in Google Maps. Though I had downloaded the different app for
          offline navigation.
        </p>

        <h2 id="visa" className="page-container__heading">
          Visa
        </h2>

        <p>
          I thought I would self apply for the visa but realized that as this is
          the first time and I shouldn't take any chance. I chose Thomas Cook
          for my visa service provider as my colleague recommended and had a
          good experience. I gathered all the document and submitted to Thomas
          Cook. Thomas Cook asks more documents than what a consulate or
          Japanese embassy requires.
        </p>

        <p>
          After a week when I visited Thomas Cook's office with all energy and
          happiness, they said your visa got rejected and they didn’t provide a
          reason. When I talked earlier to Thomas Cook they said there is a rare
          chance that a tourist visa get rejected. My case became rare.
        </p>

        <p>
          They said they can’t do anything and you have to contact the consulate
          directly. I contacted the consulate and they didn’t provide me the
          reason but said I can walk in and talk there.
        </p>

        <p>
          The next day I went there and I put my case to the consulate staff
          (Indian staff working in Consulate General of Japan, Bengaluru) they
          said you can re-apply next day.
        </p>

        <p>
          I went with all the documents next day (asked them prior if they need
          an original copy of my leaving letter from company and stamps on bank
          statements as these both things are time-consuming, they said a print
          is sufficient). I went the next day and submitted my documents. They
          gave me a date (7 days from the day of submission).
        </p>

        <p>
          The day arrived when I need to go and collect my visa. I was hopeless
          and frustrated. I enquired about my visa and she said "Yes" (I meant
          approved). I was extremely happy and excited to resume my planning
          which I decided to halt until I get news on my visa status.
        </p>

        <List
          list={[
            "You should have a 6 months bank statement till the day before you submit your visa application. Your bank statement should fit into the A4 page. I took the wrong print and the closing balance column was cut.",
            "They won’t consider your rent agreement as address proof. Luckily, I had a Bengaluru driving license that time.",
          ]}
        />

        <p>
          The Japanese consulate in Bangalore is extremely helpful. Directly
          walk-in with the{" "}
          <Link to={"/preparation/documentation#visa-documents"}>
            documents
          </Link>{" "}
          and get a visa in the next 7 days from the same office.
        </p>
        <h2 id="couchsurfing" className="page-container__heading">
          Couchsurfing
        </h2>

        <p>
          I wanted do few experiments with this trip. As a frugal traveler
          visiting an expensive country, I thought I should give a shot for{" "}
          <a
            href="https://www.couchsurfing.com/people/kalpesh-singh"
            target="_blank"
          >
            Couchsurfing
          </a>
          . I started reviewing and updating my CS profile.
        </p>

        <p>
          I kept my cap to 3 people in a city as I have to write 1-2
          personalized paragraphs. You should have a basic but modifiable
          template where you can insert personalized content. In all the 3
          cities, I got the host.
        </p>

        <p>
          I started canceling my hostel bookings. I finally lived in Tokyo with
          a Taiwanese family. One host canceled on me because he thought I’m
          asking too many questions. As a first time travel, I didn’t have any
          idea how this works and it was better to ask questions than facing an
          unwanted situation.
        </p>

        <p>
          The other host and my timing didn’t match and I missed the opportunity
          to live with him. I was in touch with them regularly so that there is
          no information gap between us. The messages were not always about my
          travel plans but a regular small talk that doesn’t harm anyone.
        </p>

        <List
          list={[
            "Do read the profile and send a personalized request to each travel",
            "Keep your request to 3 in a city",
            "Talk to them in advance about your schedule and timings",
            "Try to live with a family, it will give you a sense of how locals spend their day",
            "Bring a gift to your host",
          ]}
        />

        <h2 id="documenting-experience" className="page-container__heading">
          Documenting experience
        </h2>

        <p>
          I planned to buy a diary from Japan and write about my experience in
          it. I didn’t know that Japanese love to organize stuff and they have
          big stationery shops. I went to one and couldn’t find any fancy diary
          where there is a colorful cover page. I settled with one plain and
          simple travel diary.
        </p>

        <p>
          There was no strict rule to write every day. I used to write in chunks
          especially when I’m sipping coffee in Doutor cafe. I knew I can’t
          write before I go and hug my bed. It is always better to write when
          the memories are fresh.
        </p>

        <p>
          I have written about my daily plans, my observations and thoughts of
          culture. I got bored with writing on the 9th day and those two days
          are missing from my diary. There are two benefits of writing about
          your trip in a diary or documenting on a digital device. Though I will
          suggest writing in a physical diary.
        </p>

        <ul>
          <li>
            You have written your experience and now you can come back and read
            them. You can again go to that destination in your mind.
          </li>
          <li>
            When you write you go in solidarity zone and observe and compare the
            things and culture. You discover more about your identity.
          </li>
        </ul>

        <h2 id="hostels" className="page-container__heading">
          Hostels
        </h2>

        <p>
          I booked all my hostels through Booking.com and all of them have a
          cancellation policy without paying a single rupee. Though you have to
          put a credit card on file. I set a safe reminder dates in the phone
          calendar for all the hostel cancellation.
        </p>

        <p>
          I canceled one booking in India and decided to cancel the rest in
          Japan. When Derma and I left from Shinjuku to her home, I realized
          that it is too much distance and need to deal with transfer too
          (changing trains called transfer in Japan). Now, It was dilemma
          between living in an outer area in a Japanese flat or hostel in the
          center of Tokyo. I thought and decided that I will live there,
          initially I thought I will leave her flat the next day. I knew that in
          cities like Tokyo, you can easily get a hostel that’s why I was
          confident to move to the city without thinking about accommodation.
        </p>

        <p>
          Living in Derma’s house was one of the highlights of my journey in
          Japan. If you choose a hostel then go for breakfast option too. I find
          it convenient as a solo vegetarian traveler. Most of the hotel has
          shampoo and body gel too. It is better to pack shampoo and body gel in
          limited quantities.{" "}
        </p>

        <h2 id="forex" className="page-container__heading">
          Forex
        </h2>

        <p>
          I took around 66,000 INR with me. It was 20,000 INR cash and rest in a
          Forex card. It was a breeze to withdraw money from 7-Eleven ATMs in
          Japan. One thing that is weird for me in Japan is about ATMs. They are
          not open late at night or on weekends or public holidays. On the other
          hand, in India, you will see most of the AMTs are 24/7 at your
          service. Luckily, I checked the calendar and there was no such
          holiday.
        </p>

        <p>
          Whenever you withdraw money from Forex card they charge you a fee so
          it is advisable to withdraw money in big chunks so that you don’t end
          up paying more in fees.
        </p>

        <p>
          It is a big no to use your credit card as you will end up paying
          conversion fee every time and it might not be worth.
        </p>

        <List
          list={[
            "Check how is the ATMs' availability in visiting the country. You might end up in a situation where you don’t have any source to withdraw money for that day.",
            "Always withdraw money from your forex card in big chunks. Get another copy for the card in case one gets lost.",
            "Always check your balance in the email sent by the bank rather than going to the ATM and checking. Even balance inquiry costs.",
            "In case you need to reload more money in the forex, always carry printed copies of Reload form (available online from issuing bank). It is mandated from RBI when you want to reload it again.",
          ]}
        />

        <h2 id="entry-travel-shopping" className="page-container__heading">
          Entry travel shopping
        </h2>

        <p>
          Entry travel shopping includes what are the necessary things you have
          to buy before you leave your home country. I don't know whether this
          is an actual term or I coined it.
        </p>
        <p>
          As Japan is an expensive country and I’m frugal travel, I needed to
          balance my expenses smartly. In the beginning I thought I will buy a
          water bottle but then realize that I already have one and it’s in good
          condition to carry. I thought I will buy a rucksack but then dropped
          the plan as I want to buy a solid rucksack and it will cost me a hell
          lot of money. It is not worth adding this to my first expensive
          travel.{" "}
        </p>

        <p>
          Though I bought a dry towel from Decathlon which is one of the best
          investments you will do for travel. You can buy vacuum bags to keep
          your toiletries and rubber band to keep things tidy.
        </p>

        <p>
          I didn’t have a power bank and it would become a necessity there so I
          bought Mi Powerbank. Amazon has a detailed guide on which power bank
          to buy and I ended up purchasing 10000 mAH.
        </p>

        <p>
          I knew that people will have a few things that they bought for their
          internation trip and there is no harm to borrow from them. I asked my
          colleague to lend me a converter which can be used in Japan to charge
          my Indian devices. I purchased one passport holder which is a travel
          document organizer and it was the best thing to buy for the long run.
        </p>

        <p>
          It seems like I saved good amount by either dropping purchase, lending
          and seeking alternative or using existing stuff.
        </p>

        <List
          list={[
            "Always try to borrow things that you will use one in a blue moon.",
            "See if you already have an alternative.",
            "See if you can work with the existing things or can you buy when you travel next to a low-cost destination.",
          ]}
        />

        <h2 id="apps-to-download" className="page-container__heading">
          Apps to download
        </h2>

        <p>
          I had downloaded 4 apps in total for my travel to Japan travel. Two
          were Japanese and provide you an update on transport and usual
          touristy information. One was Navitime and another one was JNTO.
        </p>

        <p>
          From rest of the two, one was for offline Japanese map and the last
          one was iTranslator. Google Maps for Japan was unavailable that’s why
          I needed to download a separate app. I subscribed iTranslator app but
          then realized I can live without it too. The subscription was for
          instant communication in dual language but Google Lens and Google
          Translator was enough to survive in Japan.
        </p>

        <h2 id="basic-information" className="page-container__heading">
          Basic information
        </h2>

        <p>
          It is necessary to do some basic research on what’s the economical
          transport mode, how is the transport facilities, what’s the phone call
          and data rates etc. to make your trip more comfortable and economical.
        </p>

        <ul>
          Few things I did for Japan -
          <li>
            <Heading level={5}>IC Card</Heading>
            <div>
              The rechargeable card that can be used in all public transport
              (bus, metro, trains ), some shopping outlets, vending machines,
              etc. This made my journey super smooth in Japan. You can recharge
              them from metro stations and get them from the metro station.
            </div>
          </li>
          <li>
            <Heading level={5}>Calling and data card</Heading>
            <div>
              I found that Jio in India has good plans for calling and I decided
              to buy only data card in Japan. Seems like India is the only
              country where Internet is extremely cheap. So cheap that many
              times cellular network provide free data. At the time of writing,
              Vodafone is giving me 1 GB free everyday at zero cost.
              <p>
                I bought a Japanese data card (SoftBank). It was 3 GB data for
                30 days and costed me around ¥5,500. Though you will find wifi
                most of the places and you won’t require your data much.
              </p>
            </div>
          </li>
          <li>
            <Heading level={5}>Tax</Heading>
            <div>
              In my research, I came to know that you can rebate 8% consumer tax
              when you purchase consumers and good worth of ¥5,400 from the same
              shop in a single day.
            </div>
          </li>
          <li>
            <Heading level={5}>Metro transport</Heading>
            <div>
              The black taxis in Japan are super costly. The metro connectivity
              in Japan is extremely good and cheap. I heavily used metro
              services. So much that I did take only one bus for my local
              transport. You can buy a single or multiple day metro passes. It
              is way cheaper than using an IC card. I usually opted for a single
              day and sometimes multiple days pass.
            </div>
            Fun fact - never boarded a wrong metro in my 11 days journey.
          </li>
        </ul>

        <h2 id="things-you-might-need" className="page-container__heading">
          Things you might need
        </h2>

        <p>
          Though needs are an individual choice but there are few that I want to
          advise you. These things apply to all your domestic and international
          travel. Again please do your research and make an informed decision.
        </p>

        <ul>
          <li>
            <Heading level={5}>Power Adapter and Converter</Heading>
            <div>
              Many countries have their electricity standards and chances are
              that you need to buy a power converter that can charge your all
              electronic devices in a foreign country. You can buy a universal
              charger or borrow it from a friend.
            </div>
          </li>
          <li>
            <Heading level={5}>SIM card insertion tool</Heading>
            <div>
              Nowadays you see SIM card has an external slot and requires a
              sharp and thin tool to take the SIM card out from the slot. It
              seems like a small thing but why do you want to waste your time on
              figuring out how to take the SIM out.
            </div>
          </li>
          <li>
            <Heading level={5}>Shorts</Heading>
            <div>
              Do carry two pairs of shorts to wear at night or when you want to
              take morning walks.
            </div>
          </li>
          <li>
            <Heading level={5}>Flip flop</Heading>
            <div>
              The flip flop is a must to pack. You can wear it when you want to
              take morning walks or stroll around the nearby area.
            </div>
          </li>
          <li>
            <Heading level={5}>Pen</Heading>
            <div>
              It comes handy when you want to fill custom declaration form or
              want to leave a note to your host. Of Course, this website would
              have less content if I didn’t bring my pen with me.
            </div>
          </li>
          <li>
            <Heading level={5}>Rubber band</Heading>
            <div>
              Sometimes you need to tie things and you don’t have anything. It
              is always handy to carry a packet of a rubber band. Though I
              didn’t require in Japan I bet it comes in handy many situations.
            </div>
          </li>
        </ul>
        <FooterBreadcrumb
          left={{
            link: "/",
            label: "Home",
          }}
          right={{
            link: "/preparation/documentation",
            label: "Documentation",
          }}
        />
      </div>
    </div>
  </Layout>
)

export default BeforeYouGo
