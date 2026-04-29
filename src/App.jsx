import React from 'react'
import { motion } from 'framer-motion'
import { Anchor, CalendarDays, Fish, MapPin, Phone, Star, Waves, ShieldCheck, Clock, Mail, Menu } from 'lucide-react'

const trips = [
  {
    title: 'Half-Day inshore trip',
    time: '4 hours',
    price: 'From $350',
    image: '/coney.jpg',
    description: 'Learn the basics of inshore fishing',
  },
  {
    title: 'Full-Day inshore trip',
    time: '7 hours',
    price: 'From $600',
    image: '/snapper.jpg',
    description: 'Fish multiple inshore spots targeting snapper, bonita, and jacks while learning the inshore fishery',
  },
  {
    title: 'Half-Day offshore trip',
    time: '5 hours',
    price: 'From $500',
    image: '/tunass.jpg',
    description: 'Learning to troll while targeting tuna and wahoo',
  },
  {
    title: 'Full-Day offshore trip',
    time: '10 hours',
    price: 'From $800',
    image: '/wahoo.jpg',
    description: 'Fishing the edge and or the bank targeting tuna and wahoo while learning multiple methods of fishing',
  },
]
const highlights = [
  'Local Bermuda captain',
  'All bait & tackle included',
  'Beginner friendly',
  'Offshore & Inshore fishing',
  'Catch cleaning available',
]

const testimonials = [
  {
    quote: 'Amazing day with the family. The captain knew exactly where to go and made it fun for everyone.',
    name: 'Megan R.',
  },
  {
    quote: 'Professional, friendly, and dialed-in. We landed wahoo and had fresh fish for dinner that night.',
    name: 'Chris T.',
  },
  {
    quote: 'Great with kids and first-timers. Clear water, and a very memorable afternoon.',
    name: 'Alicia B.',
  },
]

function Button({ children, href, variant = 'primary' }) {
  return (
    <a className={`button ${variant === 'outline' ? 'buttonOutline' : ''}`} href={href}>
      {children}
    </a>
  )
}

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="headerInner">
          <a href="#home" className="brand">
            <img src="/wahoo.jpg" className="brandIcon" />
            <div>
              <p className="brandName">Petes Pro Guide service</p>
              <p className="brandSub">Porfesional fishing guide</p>
            </div>
          </a>
          <nav className="nav">
            <a href="#trips">Trips</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="bookSmall" href="#book">Book a Trip</a>
          <Menu className="mobileMenu" />
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="gridOverlay" />
          <div className="heroInner">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="pill"><MapPin size={16} /> Based out of beautiful Bermuda</div>
              <h1>Fish Bermuda’s blue water with a true local guide from the comfort of your own boat.</h1>
              <p className="heroText"> Professional guide service designed to teach you how to fish your own boat, covering everything from the basics of leaving the dock to cleaning your catch for the dinner table.</p>
              <div className="heroButtons">
                <Button href="#book">Check Availability</Button>
                <Button href="tel:+14417030960" variant="outline"><Phone size={18} /> Call Now</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="heroCardWrap">
              <img 
  src="/tuna.jpg" 
  style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "20px" }} 
/>
              <div className="floatCard">
                <div className="floatIcon"><Waves size={28} /></div>
                <div>
                  <p>Inside the reef to offshore pelagics</p>
                  <span>Custom trips for every skill level</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="highlights">
          {highlights.map((item) => (
            <div key={item} className="highlight"><ShieldCheck size={20} /> {item}</div>
          ))}
        </section>

        <section id="trips" className="trips">
          <div className="container">
            <div className="sectionIntro">
              <p className="eyebrow dark">Guided Fishing Trips</p>
              <h2>Choose your perfect day on the water.</h2>
              <p>Every trip is aimed at teaching you how to fish your boat, tailored to your preference of fishing, the weather, season, & your group’s experience level.</p>
            </div>
            <div className="tripGrid">
              {trips.map((trip) => (
  <article
    key={trip.title}
    className="tripCard"
    style={{
      backgroundImage: `url(${trip.image})`
    }}
  >
                  <div className="cardIcon"><Anchor size={26} /></div>
                  <h3>{trip.title}</h3>
                  <p>{trip.description}</p>
                  <div className="tripMeta">
                    <span><Clock size={16} /> {trip.time}</span>
                    <strong>{trip.price}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about container">
          <div className="aboutPhoto" />
          <div className="aboutText">
            <p className="eyebrow">Local Knowledge</p>
            <h2>Bermuda waters are our backyard.</h2>
            <p>Teaching you how to fish your own boat in the best and safest way to do so. From inside the reef to the offshore banks, each trip is built around the day’s conditions and what’s biting. Your own gear is recommended so you can be taught how to rig and use it, however gear can also be provided.</p>
            <div className="stats">
              <div><strong>10+</strong><span>Years on local waters</span></div>
              <div><strong>Knowledgeable</strong><span>In-depth instructions</span></div>
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews">
          <div className="container">
            <div className="centerIntro">
              <p className="eyebrow dark">Guest Reviews</p>
              <h2>Fish stories worth retelling.</h2>
            </div>
            <div className="reviewGrid">
              {testimonials.map((review) => (
                <article key={review.name} className="reviewCard">
                  <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}</div>
                  <p>“{review.quote}”</p>
                  <strong>{review.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="book" className="bookSection">
          <div className="bookBox">
            <CalendarDays size={48} />
            <h2>Ready to book your Bermuda fishing trip?</h2>
            <p>Tell us your dates, make and size of boat, engine size & configuration, group size, and preferred trip style. We’ll recommend the best option based on the season and conditions.</p>
            <div className="heroButtons centered">
              <Button href="mailto:petesproguide.com?subject=Bermuda%20Fishing%20Charter%20Inquiry"><Mail size={18} /> Email to Book</Button>
              <Button href="tel:+14417030960" variant="outline"><Phone size={18} /> +1 441 703 0960</Button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footerInner">
          <p>© 2026 Pete's Pro guide service. All rights reserved.</p>
          <div>
            <a href="mailto:petesproguide@gmail.com">petesproguide@gmail.com</a>
            <a href="tel:+14417030960">+1 441 703 0960</a>
            <span>Hamilton, Bermuda</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
