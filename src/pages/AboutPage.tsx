import { Award, Globe, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative h-56 flex items-center justify-center bg-royal-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-navy to-charcoal"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-playfair text-5xl md:text-7xl text-warm-white mb-4">Our Story</h1>
          <p className="text-gold tracking-[0.3em] text-sm">WHERE FASHION IS OUR PASSION</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4 font-light">ABOUT LEEDS COLLECTION</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
              Redefining Luxury Fashion in Kenya
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed">
              Leeds Collection Embu is your premier destination for imported luxury fashion. We bring the world's
              finest designs to Kenya, curating exceptional pieces for women, men, and children who appreciate
              quality, elegance, and timeless style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-soft-grey/60 p-8 shadow-sm shadow-charcoal/10">
              <h3 className="font-playfair text-2xl text-charcoal mb-4">Our Mission</h3>
              <p className="text-charcoal/80 leading-relaxed">
                To provide discerning customers with access to authentic, imported luxury fashion that combines
                exceptional quality with sophisticated design. We believe everyone deserves to experience the
                confidence that comes from wearing truly exceptional clothing.
              </p>
            </div>

            <div className="bg-soft-grey/60 p-8 shadow-sm shadow-charcoal/10">
              <h3 className="font-playfair text-2xl text-charcoal mb-4">Our Vision</h3>
              <p className="text-charcoal/80 leading-relaxed">
                To become East Africa's most trusted luxury fashion destination, known for our impeccable taste,
                genuine products, and exceptional customer service. We envision a future where luxury fashion is
                accessible to all who seek it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-4">What Sets Us Apart</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: 'Imported Quality',
                description: 'Every piece in our collection is carefully selected from international fashion capitals and imported directly to ensure authenticity and quality.'
              },
              {
                icon: Award,
                title: 'Authentic Luxury',
                description: 'We guarantee 100% genuine designer products. Our reputation is built on trust, and we never compromise on authenticity.'
              },
              {
                icon: Users,
                title: 'Expert Guidance',
                description: 'Our experienced fashion consultants provide personalized styling advice to help you find pieces that complement your unique style.'
              },
              {
                icon: Heart,
                title: 'Customer First',
                description: 'Your satisfaction is our priority. We go above and beyond to ensure every shopping experience exceeds your expectations.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 mb-6">
                  <feature.icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-playfair text-charcoal mb-3">{feature.title}</h3>
                <p className="text-charcoal/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-royal-navy to-charcoal p-12 md:p-16 text-center">
            <p className="text-gold tracking-[0.3em] text-sm mb-4 font-light">OUR COLLECTION</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-warm-white mb-6">
              Curated for Excellence
            </h2>
            <p className="text-soft-grey leading-relaxed mb-8">
              From elegant evening wear to sophisticated casual pieces, our collection spans the full spectrum of
              luxury fashion. We offer imported clothing for women, men, and children, along with premium footwear
              and exclusive designer bags. Each item is selected for its exceptional craftsmanship, timeless design,
              and ability to elevate your wardrobe.
            </p>
            <a
              href="/shop"
              className="inline-block bg-gold text-royal-navy px-12 py-4 text-lg font-medium shadow-md shadow-gold/40 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
            >
              Explore Our Collection
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gold">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl text-royal-navy mb-4">Visit Our Boutique</h2>
            <p className="text-charcoal text-lg">Experience luxury fashion in person</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-soft-grey/60 p-8 text-center">
              <h3 className="font-playfair text-2xl text-charcoal mb-4">Embu Branch</h3>
              <p className="text-charcoal mb-6">FF72+9P3, B6 Embu</p>
              <div className="space-y-2 text-charcoal">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className="bg-soft-grey/60 p-8 text-center">
              <h3 className="font-playfair text-2xl text-charcoal mb-4">Kerugoya Branch</h3>
              <p className="text-charcoal mb-6">Coming Soon</p>
              <div className="space-y-2 text-charcoal">
                <p>Opening Early 2025</p>
                <p>Stay tuned for updates</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-block bg-royal-navy text-warm-white px-12 py-4 text-lg font-medium shadow-md shadow-royal-navy/40 hover:bg-royal-navy/90 hover:shadow-lg hover:shadow-royal-navy/60 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
