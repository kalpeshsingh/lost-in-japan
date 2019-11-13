/** 3P dependency imports */
import React from "react"

/** Component dependencies */
import Layout from "./../../../components/layout"
import SEO from "./../../../components/seo"
import Header from "./../../../components/Header/Header"

/** constants **/
import PAGE_TYPE from "./../../../core/constants/pageType"

/** images **/
import cover from "./../../../images/kyoto_torii_gate.jpg"

/** styles **/
import "./../stories.css"

const Kyoto = () => (
  <Layout type={PAGE_TYPE.STORY}>
    <SEO title="Tokyo | Stories" />
    <Header />
    <div className="page-container">
      <aside className="page-container__left">
        <div className="page-container__left-list-title">Tokyo, 3 days</div>
        <ul className="page-container__left-list">
          <li>
            <a href="#day1">Day 1</a>
          </li>
          <li>
            <a href="#day2">Day 2</a>
          </li>
          <li>
            <a href="#day3">Day 3</a>
          </li>
        </ul>
        <div className="page-container__ts">7 min 15 sec read time </div>
      </aside>
      <div className="page-container__right">
        <figure className="page-container__photo">
          <img src={cover} />
          <figcaption>Kiyomizu-dera</figcaption>
        </figure>

        <p>
          I’m sitting in one area (a place where people have their lunch) of the
          Yasukuni shrine and writing my two days of experience. I wanted to
          write down my experiences daily but I had to walk a lot in the heat
          (33 °C - 35 °C) and then I love to sleep when I reach my host’s house.
          So far I've overcome challenges like transport and food (only 40%
          solved). Rest details under respective days.
        </p>
        <h2 id="day1" className="page-container__heading">
          Day 1{" "}
        </h2>
        <p className="drop-caps">
          I reached Narita airport and cleared my immigration and customs. I
          then boarded a bus (Tokyo Limousine bus) and headed to Derma’s (my
          host) office. I sat next to one Vietnamese guy. I was so tired that I
          wasn’t excited that I’m on foreign soil. The bus was supposed to take
          70-80 minutes but the driver announced that due to traffic he will
          de-tour. The information display was so helpful that I got down to
          Shibuya without any issue.
        </p>

        <p>
          Now, this was the moment where I had to face Tokyo transport (Subway
          and metro). I took help from Google Maps and reached the platform. I
          bought one Suica card from the station. It was easy that what I
          thought. Suica card is accepted in the bus, subway, and many stores. I
          bought one data card from the airport itself. It was hell expensive. I
          paid ¥5,500 for 3 GB data for 30 days.
        </p>

        <p>
          Again with the help of Google Maps and direction photos shared by
          Derma I reached her office and kept my luggage in the storeroom. The
          best part is the key lock and the key was there in a plant pot and I
          had instructions on PDF file to open that lock.{" "}
        </p>

        <p>
          Now I don’t have a place to just crash. I had to be out for 5-6 hours.
          I can go home with her at only around 05:30 PM. I didn’t have a
          well-defined itinerary but I had one article about Shinjuku. I got
          down at Shibuya but went to Shinjuku where her office is located.
        </p>
        <p>
          I was trying to understand the subway system and don’t want to go far
          as I will struggle to come back. So I walked a lot and boarded a few
          local trains. I went to see a grand called Shinjuku Gyoen National
          Garden but it was closed. What luck in Japan on day one!{" "}
        </p>

        <p>
          I couldn’t find Piss Alley and decided to stroll around the streets. I
          had my lunch. A veg lunch, surprised? That was breakfast from ANA
          airlines. I called home and had lunch in a nearby park.
        </p>

        <p>
          It was now around 05:00 and I just finished my coffee from Doutor a
          Japanese chain for coffee. I somehow managed to reach the location by
          05:20 PM. I waited till 05:45 PM and met Derma finally.
        </p>

        <p>
          We both left for Kajigaya station which is around 45 minutes from
          Shinjuku station. We went to the supermarket where she bought stuff
          and I bought a Sushi package. This was the first time I was trying
          Japanese food.
        </p>

        <p>
          I somehow managed to eat 40% of Sushi with some nausea. I took a bath
          and went to bed enjoy my sleep.
        </p>

        <p>
          There might be a few things that I missed because it day 3 and my
          detailed memories are fading away.
        </p>

        <p>
          It is 12:28 at noon here at Yasukuni Shrine and I will continue Day 2
          after lunch (coffee and something to eat).
        </p>

        <p>
          Okay, I didn't get lunch so I headed to Seven-Eleven and had bread and
          Noodles. The rest is documented on day two.
        </p>
        <h2 id="day2" className="page-container__heading">
          Day 2
        </h2>
        <p className="drop-caps">
          I woke up late in the morning and asked Derma if there is any park
          nearby. I wanted to stroll around. One park was 200 steps away and I
          went to the park. There were only a few people were there.
        </p>

        <p>
          I came back and had breakfast. I remember that I had tea but not sure
          what I had apart from that.{" "}
        </p>
        <p>
          {" "}
          I took a shower and headed for Shibuya area eyewitness the Shibuya
          crossing took videos and photographs.
        </p>
        <p>
          From there I decided to visit Asakusa house on my way to the station I
          found a Lipton fruity and bought. I paid ¥600 for that tea. 😑
        </p>
        <p>
          After spending time at Asakusa house I headed towards Omotesandō
          Station. Harajuku area is at a walkable distance from the station and
          the street is filled with kid's shops. Teenagers will wear fancy
          dresses and come to Street. The street name is Takeshita Street. I had
          ice cream there.{" "}
        </p>
        <p>
          Though I checked out a few shops on the street but didn't buy
          anything. After that went to the Meiji Shrine.{" "}
        </p>
        <p>I went to the house and bought bread for my dinner and breakfast.</p>

        <h2 id="day3" className="page-container__heading">
          Day 3{" "}
        </h2>

        <p className="drop-caps">
          Let's start with my morning. I had brought bread in the night, I eat
          them for dinner and now remaining qualified as my breakfast. Derma was
          kind to prepare tea for me. It was a black tea.
        </p>

        <p>
          My sleep was good. I usually sleep before 10 p.m. so that I can
          justify my tiredness.
        </p>

        <p>
          On Day 2, I already bought my Shinkansen ticket. It will be an amazing
          experience to board in the world's fastest train. The person was kind
          enough to give windows seat from where I can see magnificent Mount
          Fuji.
        </p>

        <p>
          For day 3, I had a few places in my mind. I boarded a train with
          Derma, she got down at the next station and I got down at station from
          where Yasukuni Shrine is at walkable distance. I went to a shrine and
          explored it. There was a restroom with air-conditioned it was blessing
          in Tokyo’s summer.
        </p>

        <p>
          I decided not to go to a museum as they bore me. I headed towards the
          East Garden of the Imperial Palace. It was a huge garden but again the
          heat was at a peak.
        </p>

        <p>
          I don't remember what are the things that happened between this place
          in my next station which was Asakusa Shrine. I know I took a long
          train journey and walked a lot. The Google Map report will tell me. So
          before I went to the Sumida river, I spent some time there and from
          there Sensoji temple and Asakusa shrine.
        </p>

        <p>
          The Kaminarimon gate was the highlight. It was filled with people,
          young girls in Kimono and the street has shops on both sides. It was a
          good place to take photos and videos.
        </p>

        <p>I was successful took one time lapse video. It is really good.</p>
        <hr />

        <p>
          I am sitting in my favorite cafe chain called Doutor and writing about
          Day 3. I will end my day with an aerial view of Tokyo from the
          government building. After returning home, I will prepare for my 4th
          day in Osaka.
        </p>

        <p>
          Bye bye tokyo! <br />
          You were great!
        </p>
      </div>
    </div>
  </Layout>
)

export default Kyoto
