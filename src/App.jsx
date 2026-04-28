import React from 'react'
import { motion } from 'framer-motion'
import { Anchor, CalendarDays, Fish, MapPin, Phone, Star, Waves, ShieldCheck, Clock, Mail, Menu } from 'lucide-react'

const trips = [
  {
    title: 'Half-Day Reef & Wreck Trip',
    time: '4 hours',
    price: 'From $650',
    description: 'A relaxed nearshore trip targeting snapper, grouper, jacks, and seasonal reef species around Bermuda’s clear blue ledges.',
  },
  {
    title: 'Full-Day Offshore Adventure',
    time: '8 hours',
    price: 'From $1,250',
    description: 'Head beyond the reef for wahoo, tuna, mahi-mahi, billfish, and deep-blue-water action with an experienced local captain.',
  },
  {
    title: 'Sunset Family Charter',
    time: '3 hours',
    price: 'From $525',
    description: 'Easygoing evening fishing, sightseeing, and island stories. Perfect for families, first-timers, and mixed-experience groups.',
  },
]

const highlights = [
  'Local Bermuda captain',
  'All tackle included',
  'Beginner friendly',
  'Private charters',
  'Reef, wreck, and offshore fishing',
  'Catch cleaning available',
]

const testimonials = [
  {
    quote: 'The best day of our Bermuda trip. The captain knew exactly where to go and made it fun for everyone.',
    name: 'Megan R.',
  },
  {
    quote: 'Professional, friendly, and dialed-in. We landed wahoo and had fresh fish for dinner that night.',
    name: 'Chris T.',
  },
  {
    quote: 'Great with kids and first-timers. Beautiful boat, clear water, and a very memorable afternoon.',
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
            <div className="brandIcon"><Fish size={24} /></div>
            <div>
              <p className="brandName">Bermuda Bluewater Guides</p>
              <p className="brandSub">Private Fishing Charters</p>
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
              <h1>Fish Bermuda’s blue water with a true local guide.</h1>
              <p className="heroText">Private reef, wreck, and offshore fishing charters for families, first-timers, and serious anglers. Step aboard, chase trophy fish, and experience Bermuda from the water.</p>
              <div className="heroButtons">
                <Button href="#book">Check Availability</Button>
                <Button href="tel:+14415550192" variant="outline"><Phone size={18} /> Call Now</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="heroCardWrap">
              <div className="heroPhoto" />
              <div className="floatCard">
                <div className="floatIcon"><Waves size={28} /></div>
                <div>
                  <p>Reef to offshore</p>
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
              <p>Every charter is private and tailored to the weather, season, and your group’s experience level.</p>
            </div>
            <div className="tripGrid">
              {trips.map((trip) => (
                <article key={trip.title} className="tripCard">
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
            <p>From reef edges and wrecks to offshore drop-offs, we build each trip around the day’s conditions and what’s biting. Your guide handles the gear, safety, bait, and strategy so you can focus on the strike.</p>
            <div className="stats">
              <div><strong>15+</strong><span>Years on local waters</span></div>
              <div><strong>Private</strong><span>No crowded party boats</span></div>
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
            <p>Tell us your dates, group size, and preferred trip style. We’ll recommend the best option based on the season and conditions.</p>
            <div className="heroButtons centered">
              <Button href="mailto:bookings@bermudabluewaterguides.com?subject=Bermuda%20Fishing%20Charter%20Inquiry"><Mail size={18} /> Email to Book</Button>
              <Button href="tel:+14415550192" variant="outline"><Phone size={18} /> +1 441 555 0192</Button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footerInner">
          <p>© 2026 Bermuda Bluewater Guides. All rights reserved.</p>
          <div>
            <a href="mailto:bookings@bermudabluewaterguides.com">bookings@bermudabluewaterguides.com</a>
            <a href="tel:+14415550192">+1 441 555 0192</a>
            <span>Hamilton, Bermuda</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
