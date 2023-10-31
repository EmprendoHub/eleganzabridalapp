import SectionContainer from "@/components/container/SectionContainer";

export default function ShippingPolicies() {
    return (
      <SectionContainer>
      
  
        <section className="hero bg-gray-100 text-center py-20">
          <div className="container mx-auto">
            <h1 className="text-4xl font-extrabold font-playfair-display text-black">Shipping Policies</h1>
            <p className="text-lg text-gray-600 mt-4">
              We strive to deliver your dresses in a secure and timely manner. Please read our shipping policies.
            </p>
          </div>
        </section>
  
        <section className="bg-white text-left py-12">
          <div className="container mx-auto">
           
            <p className="text-lg text-gray-600">
            + Most packages are shipped USPS First Class and many products are offered with free shipping at this service rate.  If it is too large or too heavy, packages will be shipped with the most economical package delivery service. Rates and delivery times are calculated using destination location and available USPS/FedEx/UPS tools. Local pickup may be available.
            </p>
  
            
            <p className="text-lg text-gray-600">
            + Items are made/printed to order, so please allow time for processing and shipping. Many items ship within 1-3 business days with the majority of them shipping by the next day.  Personalized or customized items may take 1-2 weeks depending upon receipt of the photos, text, or other information necessary to complete your order, but timelines will be communicated with you and every effort is made to create a mutually agreed upon date to meet your event timeline. 
            </p>
  
            
            <p className="text-lg text-gray-600">
            + Shipping to Canada is First Class Mail. Please ask if you would like a quote for Priority International. Rates and delivery times are calculated using destination location and available USPS tools.
            </p>
  
          
            <p className="text-lg text-gray-600">
            + We were honored to create centerpieces for a groom’s speech in Norway, and have sent cards to other locations in Europe before – just ask for international shipping rates if you don’t see the choice you need at checkout. Rates and delivery times are calculated using destination location and available USPS tools
            </p>
  
          </div>
        </section>
      </SectionContainer>
    );
  }