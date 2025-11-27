import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative h-48 flex items-center justify-center bg-royal-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-navy to-charcoal"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-playfair text-5xl md:text-6xl text-warm-white mb-4">Get in Touch</h1>
          <p className="text-gold tracking-[0.3em] text-sm">WE'RE HERE TO HELP</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-12">
                <h2 className="font-playfair text-4xl text-charcoal mb-4">Let's Connect</h2>
                <p className="text-charcoal/80 leading-relaxed">
                  Have questions about our collection? Need styling advice? Want to check product availability?
                  Our team is ready to assist you. Reach out through any of the channels below, and we'll respond
                  promptly.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold/10 flex items-center justify-center">
                    <Phone className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2">Phone</h3>
                    <a href="tel:+254710208435" className="text-charcoal/80 hover:text-gold transition-colors block">
                      +254 710 208435
                    </a>
                    <a href="tel:+254701419720" className="text-charcoal/80 hover:text-gold transition-colors block">
                      0701 419 720
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold/10 flex items-center justify-center">
                    <Mail className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2">Email</h3>
                    <a href="mailto:info@leeds.co.ke" className="text-charcoal/80 hover:text-gold transition-colors block">
                      info@leeds.co.ke
                    </a>
                    <a href="mailto:yvonne@leeds.co.ke" className="text-charcoal/80 hover:text-gold transition-colors block">
                      yvonne@leeds.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold/10 flex items-center justify-center">
                    <MessageCircle className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2">WhatsApp</h3>
                    <p className="text-charcoal/80 mb-3">Chat with us instantly for quick responses</p>
                    <a
                      href="https://wa.me/254710208435"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gold text-royal-navy px-6 py-2 shadow-md shadow-gold/40 hover:bg-gold/90 hover:text-royal-navy hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
                    >
                      Start Chat
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold/10 flex items-center justify-center">
                    <Clock className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2">Business Hours</h3>
                    <div className="text-charcoal/80 space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-soft-grey/60 p-8 shadow-lg shadow-charcoal/10">
              <h3 className="font-playfair text-3xl text-charcoal mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-soft-grey focus:outline-none focus:border-gold transition-colors bg-warm-white text-charcoal"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-soft-grey focus:outline-none focus:border-gold transition-colors bg-warm-white text-charcoal"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-soft-grey focus:outline-none focus:border-gold transition-colors bg-warm-white text-charcoal"
                    placeholder="+254 700 000000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-soft-grey focus:outline-none focus:border-gold transition-colors bg-warm-white text-charcoal"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-soft-grey focus:outline-none focus:border-gold transition-colors resize-none bg-warm-white text-charcoal"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-royal-navy py-4 text-lg font-medium shadow-md shadow-gold/40 hover:bg-gold/90 hover:text-royal-navy hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-4">Our Locations</h2>
            <p className="text-charcoal/80">Visit us in person for the complete luxury experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-soft-grey/60 p-8">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair text-2xl text-charcoal mb-2">Embu Branch</h3>
                  <p className="text-charcoal/80">FF72+9P3, B6 Embu</p>
                </div>
              </div>
              <div className="space-y-2 text-charcoal/80 mb-6">
                <p className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gold" />
                  Mon-Sat: 9:00 AM - 7:00 PM
                </p>
                <p className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gold" />
                  Sunday: 10:00 AM - 5:00 PM
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=FF72+9P3,+B6+Embu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-royal-navy text-warm-white px-6 py-2 hover:bg-royal-navy/90 hover:text-warm-white transition-all duration-300 shadow-md shadow-royal-navy/40"
              >
                Get Directions
              </a>
            </div>

            <div className="bg-soft-grey/60 p-8">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair text-2xl text-charcoal mb-2">Kerugoya Branch</h3>
                  <p className="text-charcoal/80">Coming Soon</p>
                </div>
              </div>
              <div className="space-y-2 text-charcoal/80 mb-6">
                <p>Opening Early 2025</p>
                <p>Stay tuned for our grand opening announcement</p>
              </div>
              <button
                disabled
                className="inline-block bg-gray-400 text-white px-6 py-2 cursor-not-allowed"
              >
                Opening Soon
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
